"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "../micro/SectionLabel";
import SectionTitle from "../micro/sectionTitle";
import { PERSON } from "../../../lib/site";
import { useTheme } from "../theme/ThemeProvider";
import { motion } from "motion/react";

export default function Contact({ init, anim, duree }) {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("Site Vitrine");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || message === "") {
      setError(true);
      return;
    }

    setError(false);
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, project, message }),
      });

      if (!response.ok) {
        setError(true);
        return;
      }

      setEmail("");
      setProject("Site vitrine");
      setMessage("");
      setSubmitted(response);
    } catch (error) {
      setError(true);
      console.warn(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={` ${theme === "dark" ? "bg-tertiary padding-bottom-container-perso" : "bg-bg"}`}
    >
      <div className="container-perso-x container-perso-y">
        {/* POUR BOuTON D'ENVOI MAIL : https://motion.dev/examples/react-multi-state-badge */}
        {/* quand email envoyé : https://motion.dev/examples/react-notifications-list */}
        <SectionLabel>Premier contact</SectionLabel>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          {/* UTILISER https://motion.dev/examples/react-color-interpolation */}
          <div>
            <SectionTitle id="contact">Discutons de votre projet</SectionTitle>

            <p className="mt-4  text-primary/50"></p>
            <div className="grid grid-cols-2 items-center justify-start">
              {theme === "dark" ? (
                <Image
                  src="/coding2.svg"
                  alt="Image de l'entreprise"
                  width={500}
                  height={500}
                  className="w-80 h-auto"
                />
              ) : (
                <Image
                  src="/coding_ok.svg"
                  alt="Image de l'entreprise"
                  width={500}
                  height={500}
                  className="w-80 h-auto"
                />
              )}
              <div className="flex flex-col space-y-5 font-secondary">
                <a
                  href={`mailto:${PERSON.email}`}
                  className="text-secondary tracking-wide underline-offset-4 hover:underline"
                >
                  {PERSON.email}
                </a>
                <a
                  href={`tel:${PERSON.tel}`}
                  className="text-secondary tracking-wide underline-offset-4 hover:underline"
                >
                  {PERSON.tel}
                </a>
                <a
                  href={PERSON.maps}
                  target="_blank"
                  className="block text-secondary tracking-wide underline-offset-4 hover:underline"
                >
                  {PERSON.location}
                </a>
              </div>
            </div>
          </div>

          <div
            className={`sm:w-4/5 md:w-3/4 lg:w-full mx-auto border-secondary/80 shadow-secondary/80
              hover:scale-105 transition-all duration-300 rounded-xl border p-4
              shadow-[-7px_7px_0px_shadow-primary] hover:-translate-y-2
              sm:hover:shadow-[-15px_17px_0px_-5px_shadow-primary]
              hover:shadow-[-10px_12px_0px_-5px_shadow-primary]
              ${
                theme === "dark"
                  ? "shadow-secondary border-secondary"
                  : " border-primary shadow-primary"
              }`}
          >
            <p className="mt-5  leading-relaxed text-primary/70 mb-5">
              Décrivez votre besoin en quelques lignes. Je reviens vers vous
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
                    className="mb-1.5 block  font-medium"
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
                    className="w-full text-primary rounded-lg border border-primary/15 bg-bg px-4 py-2.5  outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                  />
                </div> */}
                <div>
                  {/* <label
                    htmlFor="project"
                    className="mb-1.5 block  font-medium"
                  >
                    Votre projet
                  </label> */}

                  <select
                    id="project"
                    name="project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    aria-label="Type de projet"
                    className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5  text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
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
                    className="mb-1.5 block  font-medium"
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
                    aria-label="Entrez votre email"
                    className="w-full text-primary rounded-lg border border-primary/15 bg-bg px-4 py-2.5  outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                  />
                </div>

                <div>
                  {/* <label
                    htmlFor="message"
                    className="mb-1.5 block  font-medium"
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
                    aria-label="Entrez votre message"
                    className="w-full text-primary resize-y rounded-lg border border-primary/15 bg-bg px-4 py-2.5  outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting || submitted}
                className={`${theme === "dark" ? "rounded border-white/20 bg-white/20" : "rounded-lg border-tertiary bg-tertiary"}
                  border mt-6 w-full rounded-lg border-tertiary
                  bg-tertiary px-6 py-3 font-medium text-white shadow-sm
                  shadow-tertiary/30 transition hover:-translate-y-0.5
                  hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0`}
              >
                {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
              </button>
              {submitted && (
                <motion.p className="code mt-4 text-secondary text-center"
                initial={init}
                animate={anim}
                transition={{ duration: duree }}
                >
                 Message envoyé ! 👍
                </motion.p>
              )}
              {error && (
                <motion.p className="mt-2 text-secondary">
                  ⚠ Impossible d&apos;envoyer le message. Vérifiez les champs ou
                  réessayez plus tard.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
