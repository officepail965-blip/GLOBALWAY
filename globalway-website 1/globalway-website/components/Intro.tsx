export default function Intro() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <span className="section-eyebrow">Notre cabinet</span>
            <h2 className="section-title">
              Un partenaire qui comprend stratégie, opérations et digital — sans détours
            </h2>
            <p className="text-lg text-brand-gray-700 leading-relaxed mb-6">
              Fondé en 2018, GlobalWay International est né d'une conviction simple : les organisations qui réussissent leur transformation ont besoin d'un partenaire qui maîtrise à la fois la stratégie, les opérations, le digital et les exigences réglementaires — sans avoir à jongler entre plusieurs prestataires.
            </p>
            <p className="text-lg text-brand-gray-700 leading-relaxed mb-8">
              Depuis plus de 7 ans, nous accompagnons des dirigeants, des équipes de direction et des responsables opérationnels dans leurs projets les plus structurants : refonte organisationnelle, certification ISO, digitalisation des processus, déploiement de l'IA, renforcement de la cybersécurité et développement des compétences.
            </p>
            <a href="#contact" className="btn-outline">
              En savoir plus
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-blue rounded-2xl p-8 text-white shadow-xl card-hover">
              <div className="text-5xl font-bold text-brand-yellow mb-2 font-display">+30</div>
              <div className="text-sm text-white/90 uppercase tracking-wider">Collaborateurs experts</div>
            </div>
            <div className="bg-brand-yellow rounded-2xl p-8 text-brand-blue shadow-xl card-hover">
              <div className="text-5xl font-bold mb-2 font-display">+7 ans</div>
              <div className="text-sm font-semibold uppercase tracking-wider">Expertise au service</div>
            </div>
            <div className="bg-white border-2 border-brand-blue rounded-2xl p-8 text-brand-blue shadow-xl card-hover">
              <div className="text-5xl font-bold mb-2 font-display">8</div>
              <div className="text-sm font-semibold uppercase tracking-wider">Secteurs couverts</div>
            </div>
            <div className="bg-brand-blue-dark rounded-2xl p-8 text-white shadow-xl card-hover">
              <div className="text-5xl font-bold text-brand-yellow mb-2 font-display">9</div>
              <div className="text-sm text-white/90 uppercase tracking-wider">Domaines de compétence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
