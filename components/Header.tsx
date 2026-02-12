"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logoSybat.png"
            alt="Logo SYBAT"
            width={120}
            height={40}
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 hover:text-[#314A89]"
          >
            À propos
          </Link>
          <Link
            href="/activites"
            className="text-sm font-medium text-slate-700 hover:text-[#314A89]"
          >
            Réalisations
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-[#314A89] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Contact
          </Link>
        </nav>

        {/* BURGER BUTTON (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-slate-800"></span>
          <span className="w-6 h-0.5 bg-slate-800"></span>
          <span className="w-6 h-0.5 bg-slate-800"></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              À propos
            </Link>

            <Link
              href="/activites"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              Réalisations
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-[#314A89] px-4 py-2 text-sm font-semibold text-white text-center"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
