import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/10/17/185328-876892005_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-12">
        <div className="max-w-4xl">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-yellow/40 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-brand-yellow text-sm font-semibold tracking-wide">
              Cabinet de conseil — Maroc · France · Tunisie · Depuis 2018
            </span>
          </div>

          {/* H1 — titre principal SEO */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6 animate-fade-up">
            Le cabinet de conseil qui{" "}
            <span className="text-brand-yellow">transforme vos ambitions</span>{" "}
            en résultats mesurables
          </h1>

          {/* Accroche sous-titre */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-10 max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Stratégie, transformation digitale, certification ISO, cybersécurité, IA et coaching exécutif : nous accompagnons les dirigeants qui veulent aller vite, sans prendre de risques.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/contact" className="btn-primary text-base">
              Demander un diagnostic gratuit
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/solutions" className="btn-secondary text-base">
              Découvrir nos expertises
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-white/60 text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-brand-yellow to-transparent" />
      </div>
    </section>
  );
}
