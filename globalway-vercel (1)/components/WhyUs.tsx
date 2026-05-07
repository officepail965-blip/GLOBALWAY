import Link from "next/link";

const reasons = [
  {
    num: "01",
    title: "Expertise pluridisciplinaire",
    desc: "Strategie, ISO, digital, IA, cybersecurite : un interlocuteur unique pour toutes vos transformations.",
  },
  {
    num: "02",
    title: "Plus de 30 experts mobilisables",
    desc: "Des praticiens certifies qui ont exerce dans vos secteurs et comprennent vos enjeux operationnels.",
  },
  {
    num: "03",
    title: "Approche sur mesure",
    desc: "Chaque mission commence par un diagnostic approfondi. Pas de solutions generiques, jamais.",
  },
  {
    num: "04",
    title: "Presence internationale",
    desc: "Trois bureaux au Maroc, en France et en Tunisie, avec une connaissance fine des marches locaux et des standards internationaux.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="section-eyebrow">Pourquoi GlobalWay International ?</span>
            <h2 className="section-title">
              Un partenaire qui s'implique,{" "}
              <br />
              <span className="text-brand-yellow-dark">pas juste un prestataire</span>
            </h2>
            <p className="text-lg text-brand-gray-700 leading-relaxed mb-8">
              Nous nous engageons aux cotes de nos clients pour reussir leurs projets de transformation. Notre approche conjugue rigueur methodologique, proximite operationnelle et exigence de resultats mesurables.
            </p>
            <Link href="/contact" className="btn-primary">
              Demarrer un projet
            </Link>
          </div>

          <div className="space-y-5">
            {reasons.map((r, idx) => (
              <div
                key={idx}
                className="group flex gap-6 p-6 rounded-2xl bg-brand-gray-50 hover:bg-brand-blue transition-all duration-300 card-hover border border-transparent hover:border-brand-yellow"
              >
                <div className="flex-shrink-0">
                  <div className="text-5xl font-bold font-display text-brand-yellow group-hover:text-brand-yellow transition-colors">
                    {r.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-blue group-hover:text-white mb-2 font-display">
                    {r.title}
                  </h3>
                  <p className="text-brand-gray-700 group-hover:text-white/90 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
