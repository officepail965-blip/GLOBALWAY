const values = [
  {
    num: "01",
    title: "Excellence",
    desc: "Chaque mission est menée avec le niveau d'exigence que nos clients sont en droit d'attendre. Nous ne nous satisfaisons pas de la conformité apparente : nous visons des résultats mesurables et durables.",
  },
  {
    num: "02",
    title: "Intégrité",
    desc: "Nous disons ce que nous pensons, recommandons ce qui est juste pour le client — même si cela va à l'encontre d'une vente supplémentaire. La confiance est notre actif le plus précieux.",
  },
  {
    num: "03",
    title: "Innovation",
    desc: "Nous intégrons en permanence les meilleures méthodologies, les outils les plus adaptés et les dernières avancées technologiques pour que nos clients bénéficient d'un conseil au niveau de l'état de l'art.",
  },
  {
    num: "04",
    title: "Proximité",
    desc: "Nous sommes des partenaires, pas des prestataires. Nous nous impliquons dans vos projets, nous travaillons à vos côtés, et nous partageons votre réussite.",
  },
];

export default function Values() {
  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow">Nos valeurs</span>
          <h2 className="section-title">
            Nos valeurs <span className="text-brand-yellow-dark">fondamentales</span>
          </h2>
          <p className="text-lg text-brand-gray-700">
            Quatre principes qui guident chacune de nos interventions et structurent notre relation avec nos clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl border-t-4 border-brand-yellow card-hover relative"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-brand-yellow/15 font-display group-hover:text-brand-yellow/40 transition-colors">
                {v.num}
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4 font-display relative z-10">
                {v.title}
              </h3>
              <p className="text-brand-gray-700 leading-relaxed text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
