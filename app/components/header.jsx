'use client'
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname()

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
    <nav
      className="bg-transparent relative"
      ref={menuRef}
    >
      <Image
        src="/logo_monkey_nickel.svg"
        width={1024}
        height={1024}
        alt="Logo de Atu-Web"
        preload={true}
        className="bg-bg md:w-45 md:h-45 md:-mt-3 w-30 h-30 -mt-1 -ml-2"
      />
      <p className="absolute md:left-30 md:top-10 left-19 top-5 text-text stack-sans-notch font-semibold text-4xl"><span className="text-logo">atu</span>-web</p>

      <div className="hidden text-text lg:absolute md:top-10 md:right-5 left-19 top-5 lg:flex items-center justify-end">
        <div className="space-x-2 justify-end items-center">
          <a
            href="/notre-expertise"
            className={`rounded font-light text-md hover:text-copperfield-500 hover:bg-copperfield-100 hover:-translate-y-0.5 ease-in-out duration-200 hover:scale-102 px-2 py-1 ${pathname === '/notre-expertise' ? 'bg-copperfield-300 text-copperfield-50' : ''}`}
          >
            Notre expertise
          </a>
          <a
            href="/nos-realisations"
            className={`rounded font-light text-md hover:text-copperfield-500 hover:bg-copperfield-100 hover:-translate-y-0.5 ease-in-out duration-200 hover:scale-102 px-2 py-1 ${pathname === '/nos-realisations' ? 'bg-copperfield-300 text-copperfield-50' : ''}`}
          >
            Nos réalisations
          </a>
          <a
            href="/entreprise"
            className={`rounded font-light text-md hover:text-copperfield-500 hover:bg-copperfield-100 hover:-translate-y-0.5 ease-in-out duration-200 hover:scale-102 px-2 py-1 ${pathname === '/entreprise' ? 'bg-copperfield-300 text-copperfield-50' : ''}`}
          >
            L'entreprise
          </a>

          <div className="ml-7 inline">
            <Link
              href="/"
              className="inline-block px-4 py-2 border border-seagull-500 text-seagull-500 hover:-translate-y-0.5 hover:scale-105 hover:shadow hover:bg-seagull-400 hover:border-seagull-400 hover:text-white ease-in-out duration-100"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute md:top-10 md:right-5 right-5 top-7 text-text flex items-center justify-center lg:hidden">
        <div className="mr-7">
            <Link
              href="/"
              className="px-4 py-2 border rounded border-seagull-500 text-seagull-500 "
            >
              Contact
            </Link>
          </div>
        {/* Mobile menu button with hamburger icon */}
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
          <Link
            href="/"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-xl text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </Link>
          <a
            href="/notre-expertise"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-xl text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Notre expertise
          </a>
          <a
            href="/nos-realisations"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-xl text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nos réalisations
          </a>
          <a
            href="/entreprise"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-xl text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            L'entreprise
          </a>
        </div>
      </div>
    </nav>
  );
}
