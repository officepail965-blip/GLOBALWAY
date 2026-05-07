import Link from "next/link";
import type { SolutionData } from "@/lib/solutions-data";

interface Props {
  solution: SolutionData;
}

export default function SolutionPageTemplate({ solution }: Props) {
    const slugOrder = [
    "conseil-strategique",
    "pmo-excellence-operationnelle",
    "transformation-digitale",
    "ia-automatisation",
    "conformite-iso",
    "cybersecurite",
    "experts-a-la-demande",
    "formation-coaching",
  ];
  
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={solution.heroImage}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/70 to-brand-blue/30" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
        <div className="container-custom relative z-10 pt-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-brand-yellow">{solution.tag}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">            <span className="inline-block bg-brand-yellow text-brand-blue text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
              {solution.tag}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight max-w-4xl">
            {solution.title}
          </h1>
          <p className="text-xl text-white/85 max-w-3xl leading-relaxed mb-10">
            {solution.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className="btn-primary">
              Démarrer un projet
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+212783493406" className="btn-secondary">
              Appel découverte gratuit
            </a>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow">Le défi</span>
              <h2 className="section-title">Quel problème résolvons-nous ?</h2>
              <p className="text-lg text-brand-gray-700 leading-relaxed mb-8">
                {solution.problem}
              </p>
              <div className="bg-brand-yellow-soft border-l-4 border-brand-yellow rounded-r-2xl p-6">
                <p className="text-brand-blue font-semibold text-lg leading-relaxed">
                  {solution.valueProposition}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {solution.benefits.map((b, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl ${
                    i % 2 === 0 ? "bg-brand-blue text-white" : "bg-brand-gray-50 border border-brand-gray-100"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${
                    i % 2 === 0 ? "bg-brand-yellow/20" : "bg-brand-blue/10"
                  }`}>
                    <svg className={`w-4 h-4 ${i % 2 === 0 ? "text-brand-yellow" : "text-brand-blue"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={`font-bold text-sm mb-1 ${i % 2 === 0 ? "text-white" : "text-brand-blue"}`}>
                    {b.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${i % 2 === 0 ? "text-white/75" : "text-brand-gray-700"}`}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-brand-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-eyebrow">Notre approche</span>
            <h2 className="section-title">Ce que nous mettons en œuvre</h2>
            <p className="text-lg text-brand-gray-700">{solution.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solution.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-brand-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue flex-shrink-0 flex items-center justify-center text-brand-yellow font-bold text-lg group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue mb-2 font-display">
                      {f.title}
                    </h3>
                    <p className="text-brand-gray-700 leading-relaxed text-sm">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-yellow text-sm font-bold tracking-widest uppercase mb-3">
              Étude de cas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
              Résultats concrets chez nos clients
            </h2>
            <p className="text-white/70">
              {solution.caseStudy.client} · {solution.caseStudy.sector}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Challenge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-brand-yellow font-bold font-display">Le Défi</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                {solution.caseStudy.challenge}
              </p>
            </div>

            {/* Strategy */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-brand-yellow font-bold font-display">La Stratégie</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                {solution.caseStudy.strategy}
              </p>
            </div>

            {/* KPIs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-brand-yellow font-bold font-display">Les Résultats</h3>
              </div>
              <div className="space-y-4">
                {solution.caseStudy.results.map((r, i) => (
                  <div key={i} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/70 text-xs">{r.kpi}</span>
                      <span className="text-brand-yellow font-bold text-sm">{r.value}</span>
                    </div>
                    <p className="text-white/55 text-xs leading-snug">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          {solution.caseStudy.testimonial && (
            <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl p-10 border border-white/20 text-center">
              <svg className="w-10 h-10 text-brand-yellow mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white text-xl leading-relaxed italic mb-6">
                &ldquo;{solution.caseStudy.testimonial.text}&rdquo;
              </p>
              <div>
                <p className="text-brand-yellow font-bold">{solution.caseStudy.testimonial.author}</p>
                <p className="text-white/60 text-sm">{solution.caseStudy.testimonial.role}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-brand-gray-50 to-brand-blue-soft rounded-3xl p-12 text-center border border-brand-gray-100">
            <span className="section-eyebrow">Passez à l'action</span>
            <h2 className="section-title max-w-2xl mx-auto">
              Prêt à transformer votre organisation ?
            </h2>
            <p className="text-lg text-brand-gray-700 mb-10 max-w-2xl mx-auto">
              Échangez avec l'un de nos experts en 30 minutes. Diagnostic gratuit, sans engagement. Nous identifierons ensemble les priorités et le bon point de départ.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/#contact" className="btn-primary">
                Demander un diagnostic gratuit
              </Link>
              <a href="tel:+212783493406" className="btn-outline">
                +212 783-493406
              </a>
            </div>
            <p className="text-sm text-brand-gray-500">
              Réponse garantie sous 24h · Cabinet présent au Maroc, France et Tunisie
            </p>
          </div>

          {/* Related solutions */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-brand-blue font-display mb-8">
              Nos autres expertises
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Conseil Stratégique", href: "/solutions/conseil-strategique" },
                { label: "PMO & Excellence", href: "/solutions/pmo-excellence-operationnelle" },
                { label: "Transformation Digitale", href: "/solutions/transformation-digitale" },
                { label: "IA & Automatisation", href: "/solutions/ia-automatisation" },
                { label: "Certification ISO", href: "/solutions/conformite-iso" },
                { label: "Cybersécurité", href: "/solutions/cybersecurite" },
                { label: "Experts à la Demande", href: "/solutions/experts-a-la-demande" },
                { label: "Formation & Coaching", href: "/solutions/formation-coaching" },
              ]
                .filter((s) => !s.href.includes(solution.slug))
                .slice(0, 4)
                .map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 p-4 bg-brand-gray-50 rounded-xl border border-brand-gray-100 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all group"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span className="text-sm font-medium text-brand-blue group-hover:text-white transition-colors">
                      {s.label}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
