import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales | GlobalWay International",
  description: "Mentions légales du site GlobalWay International : éditeur, hébergeur, propriété intellectuelle et responsabilités légales.",
  alternates: {
    canonical: "https://www.globalway-international.com/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <section className="pt-32 pb-16 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-brand-yellow">Mentions legales</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display">Mentions legales</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto prose prose-lg">
          <h2>Editeur du site</h2>
          <p>Le present site est edite par la societe <strong>GlobalWay International</strong>, cabinet de conseil en strategie et transformation organisationnelle.</p>
          <ul>
            <li><strong>Forme juridique :</strong> Societe a responsabilite limitee (SARL)</li>
            <li><strong>Siege social :</strong> Immeuble Hakim, lotissement Safa bureau 07 etage 2, Casablanca 24001, Maroc</li>
            <li><strong>Telephone :</strong> +212 783-493406</li>
            <li><strong>Email :</strong> contact@globalway-international.com</li>
            <li><strong>Directeur de la publication :</strong> Le Directeur General de GlobalWay International</li>
          </ul>
          <h2>Hebergement</h2>
          <p>Le site est heberge par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, Etats-Unis. Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.</p>
          <h2>Propriete intellectuelle</h2>
          <p>L'ensemble des contenus presentes sur ce site (textes, images, graphismes, logos, icones, sons, logiciels) sont la propriete exclusive de GlobalWay International ou de ses partenaires et sont proteges par les lois relatives a la propriete intellectuelle. Toute reproduction, representation, modification, publication ou adaptation de tout ou partie des elements du site est interdite sans l'autorisation prealable et ecrite de GlobalWay International.</p>
          <h2>Limitation de responsabilite</h2>
          <p>GlobalWay International s'efforce d'assurer l'exactitude et la mise a jour des informations diffusees sur ce site. Toutefois, le cabinet ne peut garantir l'exactitude, la precision ou l'exhaustivite des informations mises a disposition sur ce site. En consequence, GlobalWay International decline toute responsabilite pour toute imprecision, inexactitude ou omission portant sur des informations disponibles sur ce site.</p>
          <h2>Liens hypertextes</h2>
          <p>Le site peut contenir des liens vers des sites tiers. GlobalWay International n'exerce aucun controle sur ces sites et decline toute responsabilite quant a leur contenu ou a leur politique de confidentialite.</p>
          <h2>Droit applicable</h2>
          <p>Les presentes mentions legales sont soumises au droit marocain. En cas de litige, et apres l'echec de toute tentative de recherche d'une solution amiable, les tribunaux du ressort du siege social de GlobalWay International seront seuls competents.</p>
          <p className="text-brand-gray-500 text-sm mt-8">Derniere mise a jour : janvier 2025</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
