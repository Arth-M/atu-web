"use client";

import Logo from "../images/logo";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    // UTILISER https://motion.dev/examples/react-variants
    // sur bouton de contact: https://motion.dev/examples/react-confetti
    <nav className="bg-transparent relative flex justify-between md:mt-8 mt-10
    font-semibold container-header-footer-x w-full">
      <Link href="/" className="w-fit relative">
        <Logo color="logo-fill" />
        <span className="tracking-tighter logo-size absolute left-24.5 top-16.5 block leading-5.5 text-primary stack-sans-notch font-semibold">
          <span className="text-logo">atu</span>
          <br />
          web
        </span>
      </Link>
      <div className="hidden text-primary lg:flex items-center justify-end">
        <div className="justify-end items-center font-primary  font-normal">
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
        </div>
      </div>

      {/* Mobile menu button with hamburger icon */}
      <div className="absolute md:right-13 sm:right-9 right-5 top-11 text-primary flex items-center justify-center lg:hidden">
        {/* <div className="mr-7">
          <a
            href="#contact"
            className="inline-block px-4 py-2 rounded border border-tertiary bg-tertiary shadow-sm shadow-tertiary/40 text-white transition ease-in-out duration-700 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact
          </a>
        </div> */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="relative inline-flex items-center justify-center content-center rounded-md my-auto px-0 text-gray-600  focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 z-50"
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
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
        className={`z-90 lg:hidden absolute shadow rounded border border-gray-200 right-0 max-w-2/3 ${isMobileMenuOpen ? "block" : "hidden"} flex justify-end`}
      >
        <div className="z-90 space-y-1 px-2 pt-2 pb-3 bg-gray-50 w-fit">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded hover:scale-102 px-2 py-1"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
