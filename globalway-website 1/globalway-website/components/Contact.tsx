const offices = [
  {
    flag: "🇲🇦",
    country: "Maroc",
    address: "Immeuble Hakim, lotissement Safa bureau 07 étage 2, Casablanca 24001",
    email: "contact@globalway-international.com",
    phone: "+212 783-493406",
  },
  {
    flag: "🇫🇷",
    country: "France",
    address: "Immeuble 01, résidence Galia, Tours Saint-Cyr-Sur-Loire 37001",
    email: "contact@globalway-international.com",
    phone: "+212 783-493406",
  },
  {
    flag: "🇹🇳",
    country: "Tunisie",
    address: "Immeuble Yesmine, étage 3 bureau 5, centre urbain nord, Tunis 1001",
    email: "contact@globalway-international.com",
    phone: "+212 783-493406",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow">Nos implantations</span>
          <h2 className="section-title">
            Nos bureaux — <span className="text-brand-yellow-dark">Maroc, France & Tunisie</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {offices.map((o, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-brand-gray-50 to-white rounded-2xl p-8 border border-brand-gray-100 hover:border-brand-yellow shadow-sm hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{o.flag}</span>
                <h3 className="text-2xl font-bold text-brand-blue font-display">{o.country}</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-yellow-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-brand-gray-700">{o.address}</span>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-yellow-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${o.email}`} className="text-brand-gray-700 hover:text-brand-blue break-all">
                    {o.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-brand-yellow-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="text-brand-gray-700 hover:text-brand-blue font-semibold">
                    {o.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-blue-light/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
              Prêt à engager <span className="text-brand-yellow">votre transformation ?</span>
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Consultation initiale offerte — sans engagement. Chaque projet de transformation commence par une conversation. Partagez-nous vos enjeux, et nous identifions ensemble les leviers d'action prioritaires.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:contact@globalway-international.com" className="btn-primary text-base">
                Demander un diagnostic gratuit
              </a>
              <a href="tel:+212783493406" className="btn-secondary text-base">
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
