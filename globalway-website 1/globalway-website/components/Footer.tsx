import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-brand-yellow" />

      <div className="container-custom">
        {/* Top section: Logo + Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-brand-yellow flex items-center justify-center">
                <span className="text-brand-blue font-bold text-2xl font-display">G</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl font-display">GlobalWay</span>
                <span className="text-xs font-medium text-brand-yellow tracking-wider">INTERNATIONAL</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Cabinet de conseil en stratégie et pilotage de croissance. Maroc · France · Tunisie.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-display">Restez informé de nos publications</h4>
            <p className="text-white/70 text-sm mb-5">
              Recevez nos analyses sur la transformation, l'ISO, l'IA et la cybersécurité.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-brand-yellow focus:bg-white/15 transition-all"
              />
              <button type="submit" className="btn-primary !py-3">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Middle section: Links columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="font-bold text-brand-yellow mb-5 font-display tracking-wide uppercase text-sm">
              Accès rapide
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#expertises" className="text-white/80 hover:text-brand-yellow transition-colors">Nos domaines d'expertise</a></li>
              <li><a href="#secteurs" className="text-white/80 hover:text-brand-yellow transition-colors">Nos secteurs d'activité</a></li>
              <li><a href="#about" className="text-white/80 hover:text-brand-yellow transition-colors">À propos de notre cabinet</a></li>
              <li><a href="#solutions" className="text-white/80 hover:text-brand-yellow transition-colors">Nos études de cas</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-brand-yellow transition-colors">Nos partenaires</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-yellow mb-5 font-display tracking-wide uppercase text-sm">
              Ressources
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">Les dernières actualités</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">Notre blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">Carrières</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-brand-yellow transition-colors">Nous contacter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-yellow mb-5 font-display tracking-wide uppercase text-sm">
              Liens légaux
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-yellow transition-colors">Conditions d'utilisation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-yellow mb-5 font-display tracking-wide uppercase text-sm">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/80">
                <strong className="block text-white">Bureau Maroc</strong>
                Casablanca 24001
              </li>
              <li className="text-white/80">
                <strong className="block text-white">Bureau France</strong>
                Saint-Cyr-Sur-Loire 37001
              </li>
              <li className="text-white/80">
                <strong className="block text-white">Bureau Tunisie</strong>
                Tunis 1001
              </li>
              <li className="pt-2">
                <a href="mailto:contact@globalway-international.com" className="text-brand-yellow hover:text-brand-yellow-light transition-colors break-all">
                  contact@globalway-international.com
                </a>
              </li>
              <li>
                <a href="tel:+212783493406" className="text-brand-yellow hover:text-brand-yellow-light transition-colors font-semibold">
                  +212 783-493406
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Social + Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} GlobalWay International. Tous droits réservés.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow flex items-center justify-center transition-all hover:text-brand-blue group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-brand-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow flex items-center justify-center transition-all group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-brand-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow flex items-center justify-center transition-all group"
            >
              <svg className="w-5 h-5 text-white group-hover:text-brand-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
