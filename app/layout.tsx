import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { ThemeSwitch } from "./components/theme/ThemeSwitch";
import { JsonLd } from "./components/JsonLd";
import Header from "./components/micro/header";
import Script from "next/script";
import { PERSON, SITE_NAME, SITE_URL } from "../lib/site";
import "./globals.css";

const THEMES = ["classic", "dark", "colorful"] as const;
import {
  Stack_Sans_Notch,
  Arimo,
  Playfair_Display,
  Ranchers,
  Spicy_Rice,
  Luxurious_Roman,
} from "next/font/google";

const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  variable: "--font-stack-notch",
  display: "swap",
});
const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});
const ranchers = Ranchers({
  subsets: ["latin"],
  variable: "--font-ranchers",
  display: "swap",
  weight: "400",
});
const spicyRice = Spicy_Rice({
  subsets: ["latin"],
  variable: "--font-spicy-rice",
  display: "swap",
  weight: "400",
});
const luxuriousRoman = Luxurious_Roman({
  subsets: ["latin"],
  variable: "--font-syne-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${PERSON.name} | Développeur web · Rails · Node React · Next.js`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Développeur web freelance & docteur en psychologie cognitive. Sites vitrines et applications web pensés pour l'utilisateur. Des interfaces et un code clairs (Ruby on Rails, Node, React, Next.js). Montpellier · France.",
  keywords: [
    "développeur web freelance",
    "Ruby on Rails",
    "React",
    "Next.js",
    "psychologie cognitive",
    "UX",
    "Montpellier",
    "application web sur mesure",
  ],
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Sites web & applications sur mesure`,
    description:
      "Du code et des interfaces pensés pour l'utilisateur. Un seul interlocuteur pour vos projets web.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Arthur-Henri Michalland`,
    description:
      "Développeur web · Doctorat psychologie cognitive · Rails · Node · React · Next.js",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const stored = cookieStore.get("theme")?.value;
  const theme = THEMES.includes(stored as (typeof THEMES)[number])
    ? stored
    : "classic";


  return (
    <html lang="fr" data-theme={theme} suppressHydrationWarning>
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${arimo.variable} ${playfair.variable} ${stackSansNotch.variable} ${ranchers.variable} ${spicyRice.variable} ${luxuriousRoman.variable} bg-bg w-full font-primary antialiased`}
      >
        <JsonLd />
        <ThemeProvider initialTheme={theme as (typeof THEMES)[number]}>
          <Header />
          {children}
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
