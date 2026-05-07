export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
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
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-yellow/40 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-brand-yellow text-sm font-semibold tracking-wide">
              Cabinet de conseil — Maroc · France · Tunisie
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
            GlobalWay <span className="text-brand-yellow">International</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-white/95 font-light mb-8 max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Accélérez la performance de votre organisation avec des experts qui transforment vos enjeux en opportunités de croissance.
          </h2>

          <p className="text-base md:text-lg text-white/85 mb-10 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Depuis 2018, nous accompagnons les dirigeants et leurs équipes dans leurs projets de transformation : conseil stratégique, excellence opérationnelle, digitalisation, conformité ISO, cybersécurité et formation.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#expertises" className="btn-primary text-base">
              Découvrir nos services
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary text-base">
              Diagnostic gratuit
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-white/70 text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-brand-yellow to-transparent" />
      </div>
    </section>
  );
}
