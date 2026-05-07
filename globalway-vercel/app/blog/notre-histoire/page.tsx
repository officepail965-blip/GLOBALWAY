import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Notre Histoire | GlobalWay International, Cabinet de Conseil depuis 2018",
  description:
    "Découvrez l'histoire de GlobalWay International : de sa fondation à Casablanca en 2018 à son développement au Maroc, en France et en Tunisie. 7 ans d'expertise au service de la transformation des organisations.",
  keywords: [
    "histoire GlobalWay International",
    "cabinet conseil Maroc fondation",
    "conseil stratégique Casablanca 2018",
    "transformation digitale Maroc",
    "certification ISO cabinet conseil",
  ],
  alternates: {
    canonical: "https://www.globalway-international.com/blog/notre-histoire",
  },
  openGraph: {
    title: "Notre Histoire | GlobalWay International",
    description:
      "7 ans de conseil stratégique, de rigueur méthodologique et d'engagement au service de la transformation des organisations. Retracez notre parcours depuis Casablanca.",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80" }],
  },
};

export default function NotreHistoirePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Article Hero */}
      <section className="relative pt-32 pb-0 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center pb-16">
          <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brand-yellow">Notre Histoire</span>
          </nav>
          <span className="inline-block bg-brand-yellow text-brand-blue text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            A propos
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
            Notre Histoire : 7 ans au service de la transformation des organisations
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              15 janvier 2025
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              8 min de lecture
            </span>
          </div>
        </div>
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80"
            alt="GlobalWay International - Notre histoire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">

              {/* Intro */}
              <div className="bg-brand-yellow-soft border-l-4 border-brand-yellow rounded-r-2xl p-6 mb-10 not-prose">
                <p className="text-brand-blue font-semibold text-lg leading-relaxed">
                  GlobalWay International est ne en 2018 a Casablanca d'une conviction simple mais exigeante : les organisations meritent un conseil ancre dans la realite operationnelle, delivre par des experts qui ont eux-memes dirige des projets complexes, et mesurable dans ses resultats.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-blue font-display mt-12 mb-5">
                2018 : Une idee, une equipe, une conviction
              </h2>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                Tout commence au coeur de Casablanca, dans un contexte ou les entreprises marocaines s'engagent massivement dans des transformations d'envergure : digitalisation acceleree, exigences de certification ISO croissantes, pression reglementaire et besoin urgent de renforcer leur gouvernance. Face a cette demande, les dirigeants se heurtent souvent au meme constat : un manque d'interlocuteurs capables de couvrir l'ensemble du spectre de la transformation, de la vision strategique jusqu'a l'implementation operationnelle.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                C'est de ce manque que nait GlobalWay International. L'equipe fondatrice, composee de consultants aguerris ayant exerce au sein de grands cabinets internationaux et de fonctions dirigeantes en entreprise, pose une premiere ambition claire : etre le partenaire de confiance des organisations qui engagent des transformations ambitieuses, en Afrique du Nord et au-dela.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-8">
                Les premiers mois sont ceux de la construction. Construction d'une methodologie proprietary, fondee sur trois piliers fondamentaux : le diagnostic rigoureux avant toute recommandation, l'ancrage operationnel de chaque conseil delivre, et la mesure systematique des resultats obtenus. Ces trois principes restent, aujourd'hui encore, l'ADN de chaque mission conduite par GlobalWay International.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue font-display mt-12 mb-5">
                2019 a 2021 : La croissance et l'ouverture internationale
              </h2>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                Les premieres missions confirment la pertinence du positionnement. GlobalWay International intervient sur des projets de certification ISO 9001 dans le secteur industriel, accompagne des directions generales dans la refonte de leur modele de gouvernance, et pilote les premiers programmes de transformation digitale pour des entreprises de taille intermediaire.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                Le bouche-a-oreille fait son oeuvre. En deux ans, l'equipe triple. De nouveaux profils d'experts rejoignent le cabinet : specialistes en gestion de projets certifies PMP et Prince2, consultants en systemes d'information, experts qualite certifies Lead Auditor, coachs certifies ICF. Cette diversite de competences, tous ancres dans la pratique, devient rapidement l'un des atouts differenciateurs de GlobalWay International.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-8">
                En 2020, le cabinet ouvre un bureau en France, a Saint-Cyr-Sur-Loire, pres de Tours. Cette implantation strategique repond a une double logique : accompagner des clients marocains dans leur developpement sur le marche francais et europeen, et offrir aux entreprises francaises un acces privilegie a des expertises competitives pour leurs projets de transformation en Afrique du Nord.
              </p>

              <div className="grid sm:grid-cols-3 gap-5 my-12 not-prose">
                {[
                  { value: "+30", label: "Experts mobilisables", sub: "Profils certifies et operationnels" },
                  { value: "3", label: "Bureaux", sub: "Maroc, France et Tunisie" },
                  { value: "9", label: "Domaines d'expertise", sub: "Du conseil a la certification" },
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-brand-gray-50 rounded-2xl p-6 border border-brand-gray-100">
                    <div className="text-4xl font-bold text-brand-blue font-display mb-1">{stat.value}</div>
                    <div className="font-bold text-brand-blue text-sm mb-1">{stat.label}</div>
                    <div className="text-brand-gray-500 text-xs">{stat.sub}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-brand-blue font-display mt-12 mb-5">
                2022 a 2024 : L'acceleration digitale et l'integration de l'IA
              </h2>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                La periode 2022-2024 marque un tournant majeur dans la trajectoire de GlobalWay International. Le monde sort progressivement des perturbations de la pandemie avec des organisations profondement transformees dans leurs modes de fonctionnement, et confrontees a un triple defi : accelerer leur digitalisation, securiser leurs systemes d'information face a des menaces cyber exponentielles, et integrer les nouvelles capacites offertes par l'intelligence artificielle.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                GlobalWay International anticipe ces evolutions. Le cabinet investit massivement dans le recrutement d'experts en cybersecurite certifies CISSP et CISM, en intelligence artificielle et automatisation robotisee des processus (RPA), et en gouvernance de la donnee. Une nouvelle practice IA et Automatisation est lancee, qui rencontre immediatement un fort interet des clients existants comme de nouveaux prospects.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                En 2023, le cabinet ouvre son troisieme bureau a Tunis, Tunisie. Cette implantation complete la couverture geographique de GlobalWay International et repond a une demande croissante d'entreprises tunisiennes en matiere de certification ISO, de transformation digitale et de conseil en gouvernance.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-8">
                Le portefeuille d'expertises s'etend desormais sur 9 domaines : conseil strategique et gouvernance, PMO et excellence operationnelle, transformation digitale, conseil IA et automatisation, conformite qualite et certification ISO, cybersecurite et gestion des risques, experts a la demande, formation et coaching, et gestion du changement. Cette couverture complete fait de GlobalWay International l'un des rares cabinets en Afrique du Nord capable de repondre a l'ensemble des besoins de transformation d'une organisation au sein d'une relation de partenariat unique.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue font-display mt-12 mb-5">
                Aujourd'hui : Un partenaire de reference pour les transformations ambitieuses
              </h2>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                En 2025, GlobalWay International compte plus de 30 experts mobilisables, trois bureaux au Maroc, en France et en Tunisie, et une presence active dans 8 grands secteurs d'activite : l'industrie et la production, la sante et la pharmacie, les ICT et les telecoms, la finance et la banque, l'education et la formation, la logistique et le transport, le tourisme et l'hotellerie, et le commerce et la distribution.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                Notre taux de satisfaction client, mesure systematiquement a l'issue de chaque mission, depasse 94%. Notre taux de certification ISO au premier passage atteint 94%. Et plus de 70% de nos nouveaux clients nous sont recommandes par des clients existants, ce qui constitue, a nos yeux, la recompense la plus significative de 7 annees d'engagement.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-8">
                Ce qui ne change pas, depuis le premier jour, c'est notre conviction fondamentale : un bon conseil ne se mesure pas a la qualite d'une presentation PowerPoint, mais aux resultats concrets qu'il genere dans la realite de vos operations. C'est cette conviction qui guide chacun de nos engagements et chacun de nos experts, chaque jour.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue font-display mt-12 mb-5">
                Nos valeurs, le fil conducteur de 7 ans d'histoire
              </h2>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                L'histoire de GlobalWay International est avant tout une histoire de valeurs. L'excellence, d'abord : nous ne nous satisfaisons pas de resultats approximatifs. Chaque mission est menee avec le niveau d'exigence que nos clients sont en droit d'attendre. L'integrite, ensuite : nous disons ce que nous pensons, nous recommandons ce qui est juste pour le client, meme si cela implique de renoncer a une vente supplementaire.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-5">
                L'innovation, egalement : nous investissons en permanence dans les meilleures methodologies et les dernieres avancees technologiques pour que nos clients beneficient d'un conseil au niveau de l'etat de l'art mondial. Et enfin, la proximite : nous sommes des partenaires, pas des prestataires. Nous nous impliquons dans vos projets, nous travaillons a vos cotes, et nous partageons sincerement votre reussite.
              </p>
              <p className="text-brand-gray-700 leading-relaxed mb-8">
                Ces valeurs ne sont pas une liste d'intentions affichee sur un mur. Ce sont des engagements operationnels que nos clients verifieront des la premiere semaine de collaboration.
              </p>

              <div className="bg-brand-blue rounded-2xl p-10 not-prose my-12 text-center">
                <h3 className="text-2xl font-bold text-white font-display mb-4">
                  Ecrivons ensemble le prochain chapitre
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Notre histoire continue de s'ecrire avec chaque client que nous accompagnons. Si vous envisagez un projet de transformation, nous serions honores d'en faire partie.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="btn-primary">
                    Demarrer un projet
                  </Link>
                  <Link href="/solutions" className="btn-secondary">
                    Nos expertises
                  </Link>
                </div>
              </div>

            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-brand-gray-100">
              {["Conseil strategique", "Cabinet de conseil Maroc", "Transformation digitale", "ISO certification", "GlobalWay International", "Histoire entreprise"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-brand-gray-50 border border-brand-gray-200 rounded-full text-xs font-medium text-brand-gray-700">
                  {tag}
                </span>
              ))}
            </div>

            {/* Back to blog */}
            <div className="mt-12">
              <Link href="/blog" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-yellow-dark transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour au blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
