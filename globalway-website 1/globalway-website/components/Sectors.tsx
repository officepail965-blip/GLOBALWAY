const sectors = [
  {
    title: "Industrie & Production",
    desc: "Excellence opérationnelle, lean manufacturing, certifications ISO et transformation des lignes de production.",
    icon: "🏭",
  },
  {
    title: "Santé & Pharmacie",
    desc: "Conformité ISO 13485, qualité des soins, digitalisation des parcours et gestion des risques cliniques.",
    icon: "⚕️",
  },
  {
    title: "ICT & Télécoms",
    desc: "Transformation digitale, cybersécurité, gouvernance IT et gestion de projets technologiques complexes.",
    icon: "📡",
  },
  {
    title: "Finance & Banque",
    desc: "Gouvernance, gestion des risques, conformité réglementaire et transformation digitale des services financiers.",
    icon: "🏦",
  },
  {
    title: "Éducation & Formation",
    desc: "Qualité des programmes ISO 21001, digitalisation pédagogique et pilotage de la performance institutionnelle.",
    icon: "🎓",
  },
  {
    title: "Logistique & Transport",
    desc: "Optimisation des flux, excellence opérationnelle, ISO 9001 et digitalisation des opérations logistiques.",
    icon: "🚚",
  },
  {
    title: "Tourisme & Hôtellerie",
    desc: "Qualité de service, certification ISO, digitalisation de l'expérience client et formation des équipes opérationnelles.",
    icon: "🏨",
  },
  {
    title: "Commerce & Distribution",
    desc: "Optimisation supply chain, transformation digitale, expérience client omnicanale et performance commerciale.",
    icon: "🛍️",
  },
];

export default function Sectors() {
  return (
    <section id="secteurs" className="section-padding bg-brand-blue relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-blue-light/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-yellow mb-3">
            Nos secteurs d'activité
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Nous parlons <span className="text-brand-yellow">votre langage métier</span>
          </h2>
          <p className="text-lg text-white/85">
            Notre expertise s'étend sur 8 grands secteurs d'activité. Chaque intervention est adaptée aux contraintes réglementaires, aux enjeux métier et aux spécificités opérationnelles de votre industrie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((s, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-300 card-hover"
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-blue mb-3 font-display">
                {s.title}
              </h3>
              <p className="text-sm text-white/80 group-hover:text-brand-blue/90 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
