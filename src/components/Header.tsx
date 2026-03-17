"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/impact", label: "Our Impact" },
  { href: "/coaches", label: "Coaches" },
  { href: "/advisors", label: "Advisors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Khel Setu Foundation"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? "text-navy" : "text-white"}`}>
                Khel Setu
              </span>
              <span className="block text-xs text-gold font-semibold tracking-wider uppercase">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 text-sm ${
                  scrolled
                    ? "text-navy hover:text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-shine bg-gold text-navy px-6 py-2.5 rounded-full hover:bg-gold-light transition-all duration-300 font-semibold text-sm"
            >
              Get Involved
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? "text-navy" : "text-white"}`}
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
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-navy hover:text-gold font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-gold text-navy px-5 py-2.5 rounded-full text-center font-semibold"
            >
              Get Involved
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
