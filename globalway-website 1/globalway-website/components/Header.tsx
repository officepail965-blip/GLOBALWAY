"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Expertises", href: "#expertises" },
  { label: "Solutions", href: "#solutions" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-brand-blue flex items-center justify-center shadow-md">
            <span className="text-brand-yellow font-bold text-xl font-display">G</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-lg font-display ${scrolled ? "text-brand-blue" : "text-white"}`}>
              GlobalWay
            </span>
            <span className={`text-xs font-medium ${scrolled ? "text-brand-gray-500" : "text-brand-yellow"}`}>
              INTERNATIONAL
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link text-sm font-medium transition-colors ${
                scrolled ? "text-brand-blue hover:text-brand-yellow-dark" : "text-white hover:text-brand-yellow"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + Country */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className={scrolled ? "text-brand-blue" : "text-white"}>🇲🇦 Maroc</span>
          </div>
          <a href="#contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Réserver un appel
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-brand-blue" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-brand-blue" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-brand-blue" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-brand-gray-100 mt-3">
          <div className="container-custom py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-brand-blue font-medium py-2 border-b border-brand-gray-100 hover:text-brand-yellow-dark transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2" onClick={() => setMobileOpen(false)}>
              Réserver un appel
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
