import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Stratégie, Transformation et Innovation | GlobalWay International",
  description: "Analyses, retours d'expérience et conseils pratiques de GlobalWay International sur la stratégie d'entreprise, la transformation digitale, les certifications ISO et la cybersécurité.",
  alternates: {
    canonical: "https://www.globalway-international.com/blog",
  },
};

const articles = [
  {
    slug: "notre-histoire",
    title: "Notre Histoire : 7 ans au service de la transformation des organisations",
    excerpt:
      "De Casablanca a Paris, de l'idee fondatrice aux plus de 30 experts mobilisables aujourd'hui : retracez le parcours de GlobalWay International, cabinet de conseil ne en 2018 d'une conviction profonde sur ce que le conseil aux entreprises devrait etre.",
    category: "A propos",
    date: "15 janvier 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    featured: true,
  },
];

export default function BlogPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      <section className="relative pt-32 pb-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-brand-yellow text-sm font-bold tracking-widest uppercase mb-4">
            Blog et insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
            Nos analyses et expertises
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Strategie, transformation digitale, ISO, IA, cybersecurite : nos experts partagent leurs convictions et retours d'experience.
          </p>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="container-custom">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-brand-gray-100 card-hover grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/60 to-transparent lg:block hidden" />
                  <span className="absolute top-6 left-6 inline-block bg-brand-yellow text-brand-blue text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-brand-gray-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime} de lecture
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue mb-4 font-display group-hover:text-brand-yellow-dark transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-brand-gray-700 leading-relaxed mb-8">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-blue font-semibold group-hover:text-brand-yellow-dark transition-colors">
                    Lire l'article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
