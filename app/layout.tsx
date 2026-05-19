import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeSwitch } from "./components/ThemeSwitch";
import Header from "./components/header";
import Script from "next/script";
import "./globals.css";
import { Stack_Sans_Notch, Arimo, Playfair_Display } from "next/font/google";

const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  variable: "--font-stack-notch",
  display: "swap",
});

const roboto = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mon App",
  description: "Plateforme multi-thème",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-bg w-full">
        <ThemeProvider>
        <Header />
          {children}
        <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
