const milestones = [
  {
    year: "2018",
    title: "Les fondations",
    desc: "GlobalWay International voit le jour avec une équipe fondatrice de consultants expérimentés, unis par la volonté de proposer un conseil ancré dans la réalité opérationnelle des entreprises maghrébines et internationales.",
  },
  {
    year: "2019 — 2021",
    title: "La croissance",
    desc: "Le cabinet s'étend, développe ses expertises ISO et digitales, et ouvre de nouveaux bureaux pour répondre à la demande croissante de ses clients au Maroc et en France.",
  },
  {
    year: "2022 — 2024",
    title: "L'accélération digitale",
    desc: "GlobalWay intègre des expertises en intelligence artificielle, automatisation et cybersécurité, reflétant les nouvelles priorités des organisations dans un environnement en mutation rapide.",
  },
  {
    year: "Aujourd'hui",
    title: "Un partenaire de référence",
    desc: "+30 collaborateurs, 3 bureaux, 8 secteurs d'activité, 9 domaines de compétences. GlobalWay International est reconnu comme un partenaire pour les organisations qui engagent des transformations ambitieuses.",
  },
];

export default function Timeline() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow">Notre histoire</span>
          <h2 className="section-title">
            7 années au service <span className="text-brand-yellow-dark">de votre transformation</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-yellow via-brand-blue to-brand-yellow md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 top-2 w-4 h-4 rounded-full bg-brand-yellow ring-4 ring-white shadow-lg md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div className={`pl-20 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="inline-block bg-brand-blue text-brand-yellow text-sm font-bold px-4 py-1.5 rounded-full mb-3 font-display">
                    {m.year}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-3 font-display">
                    {m.title}
                  </h3>
                  <p className="text-brand-gray-700 leading-relaxed">{m.desc}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
