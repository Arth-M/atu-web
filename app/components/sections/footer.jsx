"use client";
import { LINKS, PERSON } from "../../../lib/site";
import Logo from "../images/logo";
import { useTheme } from "../theme/ThemeProvider";

export function Footer() {
  const { theme } = useTheme();
  const navigation = {
    solutions: [
      { name: "Expertise", href: "#expertise" },
      { name: "Nos services", href: "#services" },
    ],
    plus: [
      { name: "Portfolio", href: "#portfolio" },
      { name: "À propos", href: "#about" },
      { name: "Témoignages", href: "#temoignages" },
    ],
    questions: [
      { name: "Contactez-nous", href: "#contact" },
      { name: "FAQ", href: "#faq" },
    ],
    social: [
      {
        name: "GitHub",
        href: `${LINKS.github}`,
        icon: (props) => (
          <svg
            fill="currentColor"
            className="fill-bg stroke-bg"
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: `${LINKS.linkedinCompany}`,
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 256 256" {...props}>
            <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer
      className={`not-arrow-up text-bg pb-7 ${theme === "dark" ? "bg-bg border" : "pt-20 bg-primary"}`}
      role="contentinfo"
    >
      <div className="container-header-footer-x">
        {theme === "dark" && (
          <div className="border-t border-primary/30 mb-20"></div>
        )}
        <div className="grid grid-cols-2 small-footer">
          <div className="relative max-w-55">
            <Logo
              color={theme === "dark" ? "logo-fill" : "logo-fill-animate"}
            />
            <span
              className={`${theme === "dark" ? "text-primary" : "text-bg"} tracking-tighter
              logo-size absolute left-24.5 top-16.5 block leading-5.5 stack-sans-notch font-semibold`}
            >
              <span className="text-logo">atu</span>
              <br />
              web
            </span>
            <a
              href={`mailto:${PERSON.email}`}
              className={` tracking-wider ${theme === "dark" ? "text-primary/60 hover:text-primary" : "text-bg/80 hover:text-bg"} block mt-4`}
            >
              {PERSON.email}
            </a>
            <a
              href={`tel:${PERSON.tel}`}
              className={`block  tracking-wider ${theme === "dark" ? "text-primary/60 hover:text-primary" : "text-bg/80 hover:text-bg"} mt-2 `}
            >
              {PERSON.tel}
            </a>
          </div>
          <div
            className={`justify-self-center md:grid md:grid-cols-3 md:gap-8 mt-5 ${theme === "dark" ? "text-primary" : "text-bg"}`}
          >
            <div>
              <h4 className="base font-secondary font-semibold">Solutions</h4>
              <ul role="list" className="mt-3 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`small-footer font-secondary ${theme === "dark" ? "text-primary/70 hover:text-primary" : "text-bg/70 hover:text-bg"}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h4 className="base font-secondary font-semibold">Focus</h4>
              <ul role="list" className="mt-3 space-y-4">
                {navigation.plus.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`small-footer font-secondary ${theme === "dark" ? "text-primary/70 hover:text-primary" : "text-bg/70 hover:text-bg"}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h4 className="base font-secondary font-semibold ">
                Une question ?
              </h4>
              <ul role="list" className="mt-3 space-y-4">
                {navigation.questions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`small-footer font-secondary ${theme === "dark" ? "text-primary/70 hover:text-primary" : "text-bg/70 hover:text-bg"}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`mt-20 border-t ${theme === "dark" ? "border-primary/10" : "border-bg/30"} pt-8 md:flex md:items-center md:justify-between dark:border-white/10`}
        >
          <div className="flex gap-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className={`${theme === "dark" ? "text-primary hover:text-secondary" : "text-bg hover:text-secondary"}`}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p
            className={`${theme === "dark" ? "text-primary/70" : "text-bg/60"} small mt-8 /6 md:order-1 md:mt-0`}
          >
            &copy; 2026 atuWeb, Tous droits reservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
