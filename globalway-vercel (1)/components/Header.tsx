"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const solutionsDropdown = [
  { label: "Conseil Strategique et Gouvernance", href: "/solutions/conseil-strategique" },
  { label: "PMO et Excellence Operationnelle", href: "/solutions/pmo-excellence-operationnelle" },
  { label: "Transformation Digitale", href: "/solutions/transformation-digitale" },
  { label: "Conseil IA et Automatisation", href: "/solutions/ia-automatisation" },
  { label: "Conformite Qualite et ISO", href: "/solutions/conformite-iso" },
  { label: "Cybersecurite et Risques", href: "/solutions/cybersecurite" },
  { label: "Experts a la Demande", href: "/solutions/experts-a-la-demande" },
  { label: "Formation et Coaching", href: "/solutions/formation-coaching" },
];

const navItems = [
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Secteurs", href: "/#secteurs" },
  { label: "A propos", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center" aria-label="GlobalWay International – Accueil">
          {/* Sur fond sombre (hero) : logo blanc / Sur fond blanc (scrolled) : logo doré */}
          <Logo
            variant={scrolled ? "gold" : "white"}
            className="h-9 w-auto transition-all duration-300"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`nav-link text-sm font-medium transition-colors flex items-center gap-1 ${
                    scrolled ? "text-brand-blue hover:text-brand-yellow-dark" : "text-white hover:text-brand-yellow"
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-brand-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                    dropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-brand-blue px-5 py-3">
                    <p className="text-brand-yellow text-xs font-bold tracking-widest uppercase">Nos expertises</p>
                    <p className="text-white/70 text-xs mt-0.5">8 domaines, 1 partenaire</p>
                  </div>
                  <div className="p-2">
                    {solutionsDropdown.map((sol) => (
                      <Link
                        key={sol.href}
                        href={sol.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-gray-50 transition-colors group"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm font-medium text-brand-blue group-hover:text-brand-yellow-dark transition-colors leading-snug">
                          {sol.label}
                        </span>
                        <svg className="w-3.5 h-3.5 text-brand-gray-500 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 pb-3 pt-1 border-t border-brand-gray-100">
                    <Link
                      href="/solutions"
                      className="text-xs font-semibold text-brand-blue hover:text-brand-yellow-dark transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Voir toutes nos solutions &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  scrolled ? "text-brand-blue hover:text-brand-yellow-dark" : "text-white hover:text-brand-yellow"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden lg:flex items-center gap-4">
          <span className={`text-sm font-medium ${scrolled ? "text-brand-blue" : "text-white"}`}>
            Maroc
          </span>
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Reserver un appel
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
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

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-brand-gray-100 mt-3">
          <div className="container-custom py-6 flex flex-col gap-1">
            {/* Logo mobile dans le menu ouvert */}
            <div className="mb-4 pb-4 border-b border-brand-gray-100">
              <Logo variant="gold" className="h-8 w-auto" />
            </div>

            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.href}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full text-left text-brand-blue font-medium py-2.5 border-b border-brand-gray-100 hover:text-brand-yellow-dark transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {solutionsDropdown.map((sol) => (
                        <Link
                          key={sol.href}
                          href={sol.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-sm text-brand-gray-700 hover:text-brand-yellow-dark transition-colors flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                          {sol.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-blue font-medium py-2.5 border-b border-brand-gray-100 hover:text-brand-yellow-dark transition-colors block"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary mt-4" onClick={() => setMobileOpen(false)}>
              Reserver un appel
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
