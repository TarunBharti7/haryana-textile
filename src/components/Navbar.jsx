"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0a1a2f] text-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* ===== BRAND ===== */}
          <Link
            href="/"
            className="flex flex-col text-center md:text-left"
          >
            <span className="text-base sm:text-lg font-bold">
              Haryana Textile Agency
            </span>
            <span className="text-[10px] sm:text-xs text-[#f5c542]">
              Wholesale Textile Dealer Since 1995
            </span>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-[#f5c542] transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#f5c542] transition">
              About Us
            </Link>
            <Link href="/product" className="hover:text-[#f5c542] transition">
              Products
            </Link>
            <Link href="/contact" className="hover:text-[#f5c542] transition">
              Contact
            </Link>
          </nav>

          {/* ===== DESKTOP CTA ===== */}
          <div className="hidden md:block">
            <a
              href="tel:9216750600"
              className="rounded-full bg-[#f5c542] px-5 py-2 text-sm font-semibold text-[#0a1a2f] hover:bg-[#e6b837] transition"
            >
              Call Now
            </a>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU (ALL CENTERED) ===== */}
      {open && (
        <div className="md:hidden bg-[#0a1a2f] border-t border-white/10">
          <nav className="flex flex-col items-center text-center px-4 py-6 space-y-5 text-sm font-medium">

            <Link onClick={() => setOpen(false)} href="/" className="hover:text-[#f5c542]">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/about" className="hover:text-[#f5c542]">
              About Us
            </Link>
            <Link onClick={() => setOpen(false)} href="/products" className="hover:text-[#f5c542]">
              Products
            </Link>
            <Link onClick={() => setOpen(false)} href="/contact" className="hover:text-[#f5c542]">
              Contact
            </Link>

            <a
              href="tel:9216750600"
              className="mt-3 inline-flex justify-center rounded-full bg-[#f5c542] px-6 py-2 text-sm font-semibold text-[#0a1a2f]"
            >
              Call Now
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
