const solutions = [
  {
    title: "ISO 9001 Express",
    tag: "Certification",
    desc: "Accompagnement structuré vers la certification ISO 9001 en moins de 9 mois. Méthode rigoureuse, équipe dédiée, déploiement opérationnel maîtrisé.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "Diagnostic Cyber 360°",
    tag: "Cybersécurité",
    desc: "Audit complet de votre exposition au risque cyber, plan de remédiation priorisé et mise en conformité ISO 27001 / RGPD pour sécuriser votre activité.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    title: "IA & Automatisation",
    tag: "Innovation",
    desc: "Identification des cas d'usage à plus forte valeur, déploiement de solutions RPA et intégration d'IA générative dans vos processus métier.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    title: "Coaching Exécutif",
    tag: "Leadership",
    desc: "Programmes individuels et collectifs pour les comités de direction. Résultats mesurables sur la dynamique d'équipe en 3 mois en moyenne.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 mb-16 items-end">
          <div className="lg:col-span-2">
            <span className="section-eyebrow">Nos solutions phares</span>
            <h2 className="section-title">
              Les innovations & expertises pour anticiper les défis de demain
            </h2>
          </div>
          <p className="text-lg text-brand-gray-700">
            Dans un monde en évolution rapide, nous mobilisons les approches les plus pertinentes pour transformer vos enjeux en leviers de croissance durable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-brand-gray-100 card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/30 to-transparent" />
                <span className="absolute top-4 left-4 inline-block bg-brand-yellow text-brand-blue text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {s.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-brand-blue mb-3 font-display group-hover:text-brand-yellow-dark transition-colors">
                  {s.title}
                </h3>
                <p className="text-brand-gray-700 mb-5 leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-yellow-dark transition-colors"
                >
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
