import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { solutions } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "Nos Solutions | 8 Expertises pour Transformer votre Organisation",
  description: "Découvrez les 8 domaines d'expertise de GlobalWay International : conseil stratégique, PMO, transformation digitale, IA, certification ISO, cybersécurité, experts à la demande et formation.",
  alternates: {
    canonical: "https://www.globalway-international.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-blue-dark to-transparent" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-brand-yellow text-sm font-bold tracking-widest uppercase mb-4">
            Nos solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
            8 expertises.{" "}
            <span className="text-brand-yellow">Un seul partenaire.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            GlobalWay International couvre l'ensemble du spectre de la transformation des organisations, du conseil amont à l'accompagnement opérationnel terrain.
          </p>
        </div>
      </section>

      {/* Grid of solutions */}
      <section className="section-padding bg-brand-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-brand-gray-100 card-hover flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={sol.heroImage}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent" />
                  <span className="absolute top-4 left-4 inline-block bg-brand-yellow text-brand-blue text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {sol.tag}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-brand-blue mb-2 font-display group-hover:text-brand-yellow-dark transition-colors leading-snug">
                    {sol.title}
                  </h2>
                  <p className="text-brand-gray-700 text-sm leading-relaxed mb-5 flex-1">
                    {sol.valueProposition}
                  </p>
                  <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:text-brand-yellow-dark transition-colors">
                    Découvrir cette expertise
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 bg-brand-blue rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Vous ne savez pas par où commencer ?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Réservez un diagnostic gratuit de 30 minutes avec l'un de nos experts. Nous identifierons ensemble vos priorités et les leviers d'action les plus impactants.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#contact" className="btn-primary">
                  Réserver un diagnostic gratuit
                </Link>
                <a
                  href="tel:+212783493406"
                  className="btn-secondary"
                >
                  +212 783-493406
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
