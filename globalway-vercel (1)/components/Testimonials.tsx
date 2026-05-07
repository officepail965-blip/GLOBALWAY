const testimonials = [
  {
    quote:
      "GlobalWay nous a guides vers ISO 9001 en moins de 9 mois. Methode rigoureuse, equipe reactive : un accompagnement exemplaire.",
    role: "Directeur General",
    sector: "Industrie, Maroc",
  },
  {
    quote:
      "Une approche digitale qui integre le facteur humain. Nos equipes ont adhere au changement des le depart, ce qui est rare.",
    role: "DSI",
    sector: "Secteur ICT, France",
  },
  {
    quote:
      "Le coaching executif a profondement change la dynamique de notre comite de direction. Des resultats mesurables en 3 mois.",
    role: "DRH Groupe",
    sector: "Finance, Maroc",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-gray-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-[200px] font-bold text-brand-yellow/10 leading-none font-display select-none">
        "
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow">Temoignages clients</span>
          <h2 className="section-title">
            Ils nous ont <span className="text-brand-yellow-dark">fait confiance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl card-hover border-l-4 border-brand-yellow"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-gray-700 leading-relaxed mb-6 italic">
                &laquo; {t.quote} &raquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-brand-gray-100">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-brand-yellow font-bold text-lg font-display">
                  {t.role.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-brand-blue font-display">{t.role}</div>
                  <div className="text-sm text-brand-gray-500">{t.sector}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
