import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeSwitch } from "./components/ThemeSwitch";
import Header from "./components/header";
import Script from "next/script";
import "./globals.css";

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
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&family=Stack+Sans+Text:wght@200..700&display=swap');
        </style>
      </head>
      <body className="bg-bg text-text antialiased w-full">
        <ThemeProvider>
        <Header />
          {children}
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
