"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/impact", label: "Our Impact" },
  { href: "/advisors", label: "Advisors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Gold accent line at top */}
      <div className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Khel Setu Foundation"
              width={48}
              height={48}
              className="h-11 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-navy group-hover:text-navy-light transition-colors">
                Khel Setu
              </span>
              <span className="block text-[10px] text-gold font-semibold tracking-[0.2em] uppercase">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-navy/80 hover:text-navy font-medium text-sm px-3 py-2 rounded-lg hover:bg-cream transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-shine ml-3 bg-navy text-white px-6 py-2.5 rounded-lg hover:bg-navy-light transition-all duration-200 font-semibold text-sm"
            >
              Get Involved
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy hover:bg-cream rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-navy hover:text-gold hover:bg-cream font-medium py-2.5 px-3 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block bg-navy text-white px-5 py-2.5 rounded-lg text-center font-semibold"
              >
                Get Involved
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
