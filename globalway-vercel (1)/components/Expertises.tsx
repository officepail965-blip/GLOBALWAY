import Link from "next/link";

const expertises = [
  {
    title: "Conseil stratégique & Gouvernance",
    desc: "Vision, gouvernance, plan stratégique. Nous accompagnons les dirigeants dans la définition et la mise en œuvre de leurs orientations stratégiques.",
    href: "/solutions/conseil-strategique",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "PMO & Excellence opérationnelle",
    desc: "Structure, processus, excellence opérationnelle. Pilotage de programmes et alignement des organisations selon les meilleurs standards.",
    href: "/solutions/pmo-excellence-operationnelle",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Transformation digitale",
    desc: "Stratégie SI, conduite du changement. Évaluation, mise en œuvre et sécurisation des choix technologiques selon les meilleures pratiques.",
    href: "/solutions/transformation-digitale",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Conseil IA & Automatisation",
    desc: "RPA, IA générative, cas d'usage métier. Identification et déploiement des opportunités d'automatisation pour générer de la valeur.",
    href: "/solutions/ia-automatisation",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Conformité qualité & Certification ISO",
    desc: "ISO 9001, 27001, 14001, 45001 et plus. Mise en place et accompagnement vers la certification de vos systèmes de management.",
    href: "/solutions/conformite-iso",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Cybersécurité & Risques",
    desc: "SMSI, audit sécurité, RGPD. Protection de votre patrimoine informationnel et conformité aux exigences réglementaires.",
    href: "/solutions/cybersecurite",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Experts à la demande",
    desc: "Talents certifiés, management de transition. Mobilisation rapide de profils experts pour vos projets les plus exigeants.",
    href: "/solutions/experts-a-la-demande",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Formation & Coaching",
    desc: "Programmes exécutifs, audit interne. Renforcement des compétences et accompagnement individuel des dirigeants et de leurs équipes.",
    href: "/solutions/formation-coaching",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
];

export default function Expertises() {
  return (
    <section id="expertises" className="section-padding bg-brand-gray-50 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow">Nos domaines d'expertise</span>
          <h2 className="section-title">
            8 expertises. <span className="text-brand-yellow-dark">Un seul partenaire.</span>
          </h2>
          <p className="text-lg text-brand-gray-700">
            GlobalWay International couvre l'ensemble du spectre de la transformation des organisations, du conseil amont à l'accompagnement opérationnel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl border border-brand-gray-100 card-hover relative overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-yellow/10 rounded-bl-full transition-all duration-300 group-hover:bg-brand-yellow/30" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center mb-5 group-hover:bg-brand-yellow group-hover:text-brand-blue transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-blue mb-3 font-display leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-gray-700 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span className="text-xs font-semibold text-brand-yellow-dark group-hover:underline">
                  En savoir plus →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/solutions" className="btn-outline">
            Voir toutes nos offres
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
