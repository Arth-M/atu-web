"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "../micro/SectionLabel";
import SectionTitle from "../micro/sectionTitle";
import { PERSON } from "../../../lib/site";
import { useTheme } from "../theme/ThemeProvider";

export default function Contact() {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("Site Vitrine");
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
      className={` ${theme === "dark" ? "bg-tertiary" : "bg-bg"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:px-10 md:py-28 lg:px-12">
        {/* POUR BOuTON D'ENVOI MAIL : https://motion.dev/examples/react-multi-state-badge */}
        {/* quand email envoyé : https://motion.dev/examples/react-notifications-list */}
            <SectionLabel>Premier contact</SectionLabel>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          {/* UTILISER https://motion.dev/examples/react-color-interpolation */}
          <div>
            <SectionTitle id="contact">Discutons de votre projet</SectionTitle>

            <p className="mt-4 text-sm text-primary/50">

            </p>
            <div className="grid sm:grid-cols-2 items-center justify-start">
              {theme === "dark" ? (
                <Image
                  src="/coding2.svg"
                  alt="Image de l'entreprise"
                  width={500}
                  height={500}
                  className="w-80 h-auto object-contain mr-0 ml-auto"
                />
              ) : (
              <Image
                src="/coding_ok.svg"
                alt="Image de l'entreprise"
                width={500}
                height={500}
                className="w-80 h-auto object-contain mr-0 ml-auto"
              />
              )}
              <div className="flex flex-col space-y-5 font-secondary">
                <a
                  href={`mailto:${PERSON.email}`}
                  className=" text-xl text-secondary underline-offset-4 hover:underline"
                  >
                  {PERSON.email}
                </a>
                <a
                  href={`tel:${PERSON.tel}`}
                  className=" text-xl text-secondary underline-offset-4 hover:underline"
                >{PERSON.tel}
                </a>
                  <a href={PERSON.maps}
                  target="_blank"
                  className="block  text-xl text-secondary underline-offset-4 hover:underline"
                  >{PERSON.location}
                  </a>
              </div>
            </div>
          </div>

          <div className={`w-4/5 mx-auto border-secondary/80 shadow-secondary/80 hover:scale-105 transition-all duration-300 rounded-xl border p-4 shadow-[-7px_7px_0px_shadow-primary] hover:-translate-y-2 hover:shadow-[-15px_17px_0px_-5px_shadow-primary] ${theme === "dark" ? "shadow-secondary border-secondary" : " border-primary shadow-primary"}`}>
            <p className="mt-5 text-base leading-relaxed text-primary/70 mb-5">
              Décrivez-moi votre besoin en quelques lignes. Je reviens vers vous
              sous 48 h.
            </p>
            <form
              // className="rounded-2xl text-bg border border-secondary/10 bg-secondary/85 p-7 backdrop-blur shadow-md shadow-secondary/40 lg:w-full md:w-2/3 md:m-0 w-[95%] mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="space-y-4">
                {/* <div>
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
                </div> */}
                <div>
                  {/* <label
                    htmlFor="project"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Votre projet
                  </label> */}
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
                  {/* <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email *
                  </label> */}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="w-full text-primary rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                  />
                </div>

                <div>
                  {/* <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Message *
                  </label> */}
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Votre message"
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
        </div>
      </div>
    </section>
  );
}
