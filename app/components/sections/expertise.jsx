"use client";
import AnimatedSectionLabel from "./../micro/AnimatedSectionLabel";
import Image from "next/image";
import SectionTitle from "./../micro/sectionTitle";

const STACK1 = [
  { image: "/dev/nodejs.svg", alt: "Node.js", mono: true },
  { image: "/dev/nextjs.svg", alt: "Next.js", mono: true },
  { image: "/dev/rails.svg", alt: "Ruby on Rails" },
  { image: "/dev/cloudflare.svg", alt: "Cloudflare" },
];

const STACK2 = [
  { image: "/dev/react.svg", alt: "React" },
  { image: "/dev/redis.svg", alt: "Redis" },
  { image: "/dev/figma.svg", alt: "Figma" },
  { image: "/dev/postgresql.svg", alt: "PostgreSQL" },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="container-perso-x container-perso-y padding-bottom-container-perso"
    >
      {/* UTILISER https://motion.dev/examples/js-spring-follow-cursor */}
      {/* UTILISER https://motion.dev/examples/react-follow-pointer-with-spring */}

      <AnimatedSectionLabel>Expertises techniques</AnimatedSectionLabel>
      <div className="flex flex-nowrap flex-col lg:flex-row items-center lg:mt-7 mt-12">
        <Image
          src="/dev/typescript.svg"
          alt="typescript"
          width={400}
          height={400}
          className="lg:h-12 lg:w-12 h-13 w-13 mt-5 md:mt-0"
          loading="lazy"
        />
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-2 md:flex md:flex-wrap md:space-x-7 mb-7 lg:mb-0  grid grid-cols-2 gap-x-14 gap-y-2">
          {STACK1.map((tech) => (
            <Image
              key={tech.alt}
              src={tech.image}
              alt={tech.alt}
              width={400}
              height={400}
              className={`h-25 w-25 ${tech.mono ? "stack-icon-mono" : ""}`}
              loading="lazy"
            />
          ))}
        </div>
        <div className="max-w-lg mx-5 text-center">
          <SectionTitle>Des technologies modernes et efficaces</SectionTitle>

          <p className="mt-4 text-primary/80">
            Je sélectionne les outils adaptés à votre projet en alliant
            <span className="font-semibold"> performance</span>,
            <span className="font-semibold"> maintenabilité</span> et
            <span className="font-semibold"> sécurité</span>.
          </p>
          <p className="mt-4  leading-relaxed text-primary/70"></p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-9 md:flex md:flex-wrap md:space-x-7 mt-14 lg:mt-0 grid grid-cols-2 gap-x-18 gap-y-7">
          {STACK2.map((tech) => (
            <Image
              key={tech.alt}
              src={tech.image}
              alt={tech.alt}
              width={400}
              height={400}
              className="h-15 w-15"
              loading="lazy"
            />
          ))}
        </div>
        <Image
          src="/dev/vite.svg"
          alt="typescript"
          width={400}
          height={400}
          className="lg:h-15 lg:w-15 h-13 w-13 mt-5 md:mt-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}
