import { NextResponse } from "next/server";
import { PERSON, SITE_NAME } from "../../../lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactErrorCode =
  | "INVALID_JSON"
  | "VALIDATION"
  | "CONFIG"
  | "BREVO_AUTH"
  | "BREVO_REJECTED"
  | "BREVO_UNAVAILABLE"
  | "NETWORK";

type ContactErrorBody = {
  error: string;
  code: ContactErrorCode;
  fields?: Record<string, string>;
};

type ContactPayload = {
  name: string;
  email: string;
  project: string;
  message: string;
};

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function logContactError(
  code: ContactErrorCode,
  details: Record<string, unknown> = {},
) {
  console.error("[contact]", { code, ...details });
}

function errorResponse(
  body: ContactErrorBody,
  status: number,
  logDetails?: Record<string, unknown>,
) {
  logContactError(body.code, {
    status,
    message: body.error,
    fields: body.fields,
    ...logDetails,
  });
  return NextResponse.json(body, { status });
}

function validatePayload(raw: unknown): ContactPayload | ContactErrorBody {
  if (!raw || typeof raw !== "object") {
    return {
      error: "Corps de requête invalide",
      code: "VALIDATION",
    };
  }

  const body = raw as Record<string, unknown>;
  const fields: Record<string, string> = {};

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const project =
    typeof body.project === "string" && body.project.trim()
      ? body.project.trim()
      : "Non précisé";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) fields.name = "Le nom est requis";
  if (!email) fields.email = "L'email est requis";
  else if (!EMAIL_RE.test(email)) fields.email = "L'email n'est pas valide";
  if (!message) fields.message = "Le message est requis";

  if (Object.keys(fields).length > 0) {
    return {
      error: "Certains champs sont incorrects ou manquants",
      code: "VALIDATION",
      fields,
    };
  }

  return { name, email, project, message };
}

async function mapBrevoError(response: Response): Promise<{
  body: ContactErrorBody;
  brevo: { status: number; code: string; message: string };
}> {
  let brevoBody: { code?: string; message?: string } = {};

  try {
    brevoBody = await response.json();
  } catch {
    // réponse non JSON
  }

  const brevoMessage = brevoBody.message?.trim() ?? "";
  const brevoCode = brevoBody.code?.trim() ?? "";
  const brevo = {
    status: response.status,
    code: brevoCode,
    message: brevoMessage,
  };

  if (response.status === 401 || response.status === 403) {
    return {
      body: {
        error:
          "Le service d'envoi refuse la requête (clé API invalide ou expirée)",
        code: "BREVO_AUTH",
      },
      brevo,
    };
  }

  if (response.status === 400) {
    if (/sender/i.test(brevoMessage) || brevoCode === "invalid_parameter") {
      return {
        body: {
          error:
            brevoMessage ||
            "L'adresse d'expéditeur n'est pas valide ou n'est pas vérifiée dans Brevo",
          code: "BREVO_REJECTED",
        },
        brevo,
      };
    }

    if (/email/i.test(brevoMessage)) {
      return {
        body: {
          error:
            "L'adresse email fournie n'est pas acceptée par le service d'envoi",
          code: "BREVO_REJECTED",
          fields: { email: "Vérifiez le format de votre email" },
        },
        brevo,
      };
    }

    return {
      body: {
        error: brevoMessage || "Le service d'envoi a refusé la requête",
        code: "BREVO_REJECTED",
      },
      brevo,
    };
  }

  if (response.status === 404) {
    return {
      body: {
        error: "Service d'envoi introuvable — vérifiez la configuration Brevo",
        code: "BREVO_REJECTED",
      },
      brevo,
    };
  }

  if (response.status >= 500) {
    return {
      body: {
        error:
          "Le service d'envoi est temporairement indisponible. Réessayez plus tard.",
        code: "BREVO_UNAVAILABLE",
      },
      brevo,
    };
  }

  return {
    body: {
      error: brevoMessage || "Impossible d'envoyer le message",
      code: "BREVO_REJECTED",
    },
    brevo,
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return errorResponse(
      {
        error: "Le formulaire de contact n'est pas configuré sur le serveur",
        code: "CONFIG",
      },
      503,
      { missingEnv: "BREVO_API_KEY" },
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch (err) {
    return errorResponse(
      { error: "Format de requête invalide (JSON attendu)", code: "INVALID_JSON" },
      400,
      {
        parseError: err instanceof Error ? err.message : String(err),
      },
    );
  }

  const validated = validatePayload(rawBody);
  if ("error" in validated) {
    return errorResponse(validated, 400, {
      receivedKeys:
        rawBody && typeof rawBody === "object"
          ? Object.keys(rawBody as Record<string, unknown>)
          : [],
    });
  }

  const { name, email, project, message } = validated;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? PERSON.email;
  const senderName = process.env.BREVO_SENDER_NAME ?? SITE_NAME;

  const htmlContent = `<html><body>
<p><strong>Nom :</strong> ${escapeHtml(name)}</p>
<p><strong>Email :</strong> ${escapeHtml(email)}</p>
<p><strong>Projet :</strong> ${escapeHtml(project)}</p>
<p><strong>Message :</strong></p>
<p>${escapeHtml(message)}</p>
</body></html>`;

  let brevoResponse: Response;
  try {
    brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: PERSON.email, name: PERSON.name }],
        replyTo: { email, name },
        subject: `[${SITE_NAME}] Demande de contact — ${name}`,
        htmlContent,
      }),
    });
  } catch (err) {
    return errorResponse(
      {
        error:
          "Impossible de joindre le service d'envoi. Vérifiez votre connexion.",
        code: "NETWORK",
      },
      503,
      {
        cause: err instanceof Error ? err.message : String(err),
        senderEmail,
      },
    );
  }

  if (!brevoResponse.ok) {
    const { body, brevo } = await mapBrevoError(brevoResponse);
    const status =
      body.code === "BREVO_AUTH"
        ? 502
        : body.code === "BREVO_UNAVAILABLE"
          ? 503
          : 400;

    return errorResponse(body, status, { brevo, senderEmail });
  }

  return NextResponse.json({ success: true });
}
