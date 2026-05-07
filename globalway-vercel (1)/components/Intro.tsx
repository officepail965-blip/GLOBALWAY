import Link from "next/link";

const stats = [
  { value: "+30", label: "Collaborateurs experts", bg: "bg-brand-blue", valueCls: "text-brand-yellow", labelCls: "text-white/85" },
  { value: "+7 ans", label: "d'expertise au service", bg: "bg-brand-yellow", valueCls: "text-brand-blue", labelCls: "text-brand-blue/80" },
  { value: "8", label: "Secteurs d'activité", bg: "bg-white border-2 border-brand-blue", valueCls: "text-brand-blue", labelCls: "text-brand-gray-700" },
  { value: "9", label: "Domaines de compétence", bg: "bg-brand-blue-dark", valueCls: "text-brand-yellow", labelCls: "text-white/85" },
];

export default function Intro() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left : texte */}
          <div className="flex flex-col">
            <span className="section-eyebrow">Notre cabinet</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue font-display leading-tight mb-6">
              Un partenaire qui comprend stratégie, opérations et digital{" "}
              <br />
              <span className="text-brand-yellow-dark">sans détours</span>
            </h2>

            <div className="w-16 h-1 bg-brand-yellow rounded-full mb-7" />

            <p className="text-base md:text-lg text-brand-gray-700 leading-relaxed mb-5">
              Fondé en 2018, GlobalWay International est né d'une conviction simple : les organisations qui réussissent leur transformation ont besoin d'un partenaire qui maîtrise à la fois la stratégie, les opérations, le digital et les exigences réglementaires, sans avoir à jongler entre plusieurs prestataires.
            </p>
            <p className="text-base md:text-lg text-brand-gray-700 leading-relaxed mb-10">
              Depuis plus de 7 ans, nous accompagnons des dirigeants et des équipes de direction dans leurs projets les plus structurants : refonte organisationnelle, certification ISO, digitalisation des processus, déploiement de l'IA, renforcement de la cybersécurité et développement des compétences.
            </p>

            {/* CTA → article blog Notre Histoire */}
            <div>
              <Link
                href="/blog/notre-histoire"
                className="btn-outline inline-flex items-center gap-2"
              >
                En savoir plus sur notre histoire
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right : stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`${s.bg} rounded-2xl p-8 shadow-lg card-hover flex flex-col justify-between min-h-[160px]`}
              >
                <div className={`text-5xl font-bold font-display mb-3 ${s.valueCls}`}>
                  {s.value}
                </div>
                <div className={`text-sm font-medium uppercase tracking-wide leading-snug ${s.labelCls}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
