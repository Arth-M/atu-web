"use client";

import { useState } from "react";
import SectionLabel from "../micro/SectionLabel";
import SectionTitle from "../micro/sectionTitle";
import { PERSON } from "../../../lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("Site vitrine");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setError(true);
      return;
    }

    setError(false);
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, project, message }),
      });

      if (!response.ok) {
        setError(true);
        return;
      }

      setName("");
      setEmail("");
      setProject("Site vitrine");
      setMessage("");
    } catch {
      setError(true);
      console.warning(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12"
    >
      {/* POUR BOuTON D'ENVOI MAIL : https://motion.dev/examples/react-multi-state-badge */}
      {/* quand email envoyé : https://motion.dev/examples/react-notifications-list */}
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* UTILISER https://motion.dev/examples/react-color-interpolation */}
        <div>
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle>Travaillons ensemble</SectionTitle>
          <p className="mt-5 text-base leading-relaxed text-primary/70">
            Décrivez-moi votre besoin en quelques lignes. Je reviens vers vous
            sous 48 h — ou on fixe directement un créneau pour en parler.
          </p>
          <p className="mt-4 text-sm text-primary/50">
            Pas de spam. Pas de relance agressive. Une réponse honnête sur ce
            que je peux faire pour vous.
          </p>

          <p className="mt-8">
            <a
              href={`mailto:${PERSON.email}`}
              className="font-secondary text-xl text-secondary underline-offset-4 hover:underline"
            >
              {PERSON.email}
            </a>
          </p>
        </div>

        <form
          className="rounded-2xl text-bg border border-secondary/10 bg-secondary/85 p-7 backdrop-blur shadow-md shadow-secondary/40"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium"
              >
                Nom *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-primary rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-primary rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
              />
            </div>
            <div>
              <label
                htmlFor="project"
                className="mb-1.5 block text-sm font-medium"
              >
                Votre projet
              </label>
              <select
                id="project"
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
              >
                <option>Site vitrine</option>
                <option>Application web</option>
                <option>Refonte</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-primary resize-y rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-lg border border-tertiary bg-tertiary px-6 py-3 text-sm font-medium text-white shadow-sm shadow-tertiary/30 transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
          {error && (
            <p className="mt-2 text-sm text-bg">
              ⚠ Impossible d&apos;envoyer le message. Vérifiez les champs ou
              réessayez plus tard.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
