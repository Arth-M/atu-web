"use client";

import Logo from "../images/logo";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const closeMenuRef=useRef(null);
  const navigation = [
    { name: "Services", href: "/#services" },
    { name: "Expertise", href: "#expertise" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "À propos", href: "#about" },
    { name: "Témoignages", href: "#temoignages" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) || closeMenuRef.current?.contains(target)) {
      }
      setIsMobileMenuOpen(false);
    }

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    // UTILISER https://motion.dev/examples/react-variants
    // sur bouton de contact: https://motion.dev/examples/react-confetti
    <header className="bg-transparent relative flex justify-between md:mt-8 mt-10
    font-semibold container-header-footer-x w-full"
    role="banner">
      <Link href="/" className="w-fit relative">
        <Logo color="logo-fill" />
        <span className="tracking-tighter logo-size absolute left-24.5 top-16.5 block leading-5.5 text-primary stack-sans-notch font-semibold">
          <span className="text-logo">atu</span>
          <br />
          web
        </span>
      </Link>
      <div className="hidden text-primary lg:flex items-center justify-end">
        <nav className="justify-end items-center font-primary  font-normal"
        role="navigation">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:scale-102 hover:underline hover:underline-offset-8 px-2 py-1 tracking-tighter"
            >
              {item.name}
            </a>
          ))}

          {/* <div className="ml-4 inline">
            <a
              href="#contact"
              className="inline-block tracking-tight px-4 py-2 rounded border border-tertiary bg-tertiary shadow-sm shadow-tertiary/40 text-white transition ease-in-out duration-700 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact
            </a>
          </div> */}
        </nav>
      </div>

      {/* Mobile menu button with hamburger icon */}
      <div className="absolute md:right-10 right-6 top-11 lg:hidden z-30">
        <button
          className="z-50"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          ref={closeMenuRef}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`h-6 w-6 z-50 ${isMobileMenuOpen ? "stroke-secondary" : "text-primary"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>
      </div>
      <div
        className={`z-10 lg:hidden absolute shadow shadow-secondary/50 rounded-xl border
           border-secondary/50 bg-bg/40 backdrop-blur-lg sm:right-7 right-3 top-7 max-w-2/3
           ${isMobileMenuOpen ? "block" : "hidden"}
            flex justify-end`}
            ref={menuRef}
      >
        <nav className="z-10 pt-10 space-y-1 px-4 pb-4 w-fit text-secondary font-secondary"
        role="navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block rounded hover:scale-102 px-2 py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
