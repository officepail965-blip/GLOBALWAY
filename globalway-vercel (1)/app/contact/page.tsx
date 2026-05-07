import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nous Contacter | Diagnostic Gratuit en 30 Minutes",
  description: "Contactez GlobalWay International pour un diagnostic gratuit et sans engagement. Nos experts en conseil stratégique, ISO, cybersécurité et transformation digitale vous répondent sous 24h.",
  alternates: {
    canonical: "https://www.globalway-international.com/contact",
  },
};

const offices = [
  {
    country: "Maroc",
    city: "Casablanca",
    address: "Immeuble Hakim, lotissement Safa bureau 07 etage 2, Casablanca 24001",
    phone: "+212 783-493406",
    email: "contact@globalway-international.com",
  },
  {
    country: "France",
    city: "Tours",
    address: "Immeuble 01, residence Galia, Tours Saint-Cyr-Sur-Loire 37001",
    phone: "+212 783-493406",
    email: "contact@globalway-international.com",
  },
  {
    country: "Tunisie",
    city: "Tunis",
    address: "Immeuble Yesmine, etage 3 bureau 5, centre urbain nord, Tunis 1001",
    phone: "+212 783-493406",
    email: "contact@globalway-international.com",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-brand-yellow text-sm font-bold tracking-widest uppercase mb-4">
            Nous contacter
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
            Demarrons la conversation
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Un diagnostic gratuit de 30 minutes avec l'un de nos experts pour identifier vos priorites et les leviers d'action les plus impactants.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Form */}
            <div className="bg-white rounded-3xl border border-brand-gray-100 shadow-xl p-10">
              <h2 className="text-2xl font-bold text-brand-blue font-display mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-brand-gray-500 mb-8 text-sm">
                Reponse garantie sous 24 heures ouvrables.
              </p>

              <form className="space-y-6" action="mailto:contact@globalway-international.com" method="post" encType="text/plain">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-semibold text-brand-blue mb-2">
                      Prenom <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      required
                      placeholder="Jean"
                      className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 text-brand-gray-900 placeholder-brand-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-brand-blue mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      placeholder="Dupont"
                      className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 text-brand-gray-900 placeholder-brand-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-blue mb-2">
                    Adresse e-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jean.dupont@entreprise.com"
                    className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 text-brand-gray-900 placeholder-brand-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-brand-blue mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    placeholder="+212 6 00 00 00 00"
                    className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 text-brand-gray-900 placeholder-brand-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="entreprise" className="block text-sm font-semibold text-brand-blue mb-2">
                    Entreprise
                  </label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    placeholder="Nom de votre organisation"
                    className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 text-brand-gray-900 placeholder-brand-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-brand-blue mb-2">
                    Sujet de votre demande <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 text-brand-gray-900 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all bg-white"
                  >
                    <option value="">Selectionnez un sujet</option>
                    <option value="conseil-strategique">Conseil strategique et gouvernance</option>
                    <option value="pmo">PMO et excellence operationnelle</option>
                    <option value="digital">Transformation digitale</option>
                    <option value="ia">Intelligence artificielle et automatisation</option>
                    <option value="iso">Certification ISO</option>
                    <option value="cyber">Cybersecurite</option>
                    <option value="experts">Experts a la demande</option>
                    <option value="formation">Formation et coaching</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-blue mb-2">
                    Votre message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Decrivez brievement votre projet ou votre problematique..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 text-brand-gray-900 placeholder-brand-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="rgpd"
                    name="rgpd"
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 accent-brand-blue flex-shrink-0"
                  />
                  <label htmlFor="rgpd" className="text-sm text-brand-gray-500 leading-relaxed">
                    J'accepte que mes donnees soient utilisees pour traiter ma demande de contact, conformement a la{" "}
                    <a href="/politique-confidentialite" className="text-brand-blue underline hover:text-brand-yellow-dark">
                      politique de confidentialite
                    </a>{" "}
                    de GlobalWay International.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-base rounded-xl"
                >
                  Envoyer ma demande
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-blue font-display mb-4">
                  Pourquoi nous contacter ?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: "clock", title: "Reponse en moins de 24h", desc: "Notre equipe s'engage a vous repondre dans un delai de 24 heures ouvrables." },
                    { icon: "gift", title: "Premier echange offert", desc: "La consultation initiale est gratuite et sans engagement. Nous identifions ensemble vos besoins." },
                    { icon: "shield", title: "Confidentialite garantie", desc: "Toutes vos informations sont traitees avec la plus stricte confidentialite." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-brand-gray-50 rounded-2xl border border-brand-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue flex-shrink-0 flex items-center justify-center">
                        {item.icon === "clock" && (
                          <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                          </svg>
                        )}
                        {item.icon === "gift" && (
                          <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                          </svg>
                        )}
                        {item.icon === "shield" && (
                          <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-blue mb-1">{item.title}</h3>
                        <p className="text-sm text-brand-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-blue font-display mb-6">Nos bureaux</h2>
                <div className="space-y-5">
                  {offices.map((o, idx) => (
                    <div key={idx} className="p-6 bg-brand-gray-50 rounded-2xl border border-brand-gray-100">
                      <h3 className="font-bold text-brand-blue font-display mb-3">{o.country} — {o.city}</h3>
                      <div className="space-y-2 text-sm text-brand-gray-700">
                        <p>{o.address}</p>
                        <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-yellow-dark transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {o.phone}
                        </a>
                        <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-brand-blue hover:text-brand-yellow-dark transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {o.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
