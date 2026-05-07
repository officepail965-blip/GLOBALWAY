import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | GlobalWay International",
  description: "Conditions générales d'utilisation du site GlobalWay International. Accès, responsabilité, propriété intellectuelle et droit applicable.",
  alternates: {
    canonical: "https://www.globalway-international.com/conditions-utilisation",
  },
};

export default function ConditionsUtilisationPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <section className="pt-32 pb-16 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-brand-yellow">Conditions d'utilisation</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display">Conditions d'utilisation</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto prose prose-lg">
          <p>Les presentes conditions d'utilisation regissent votre acces et votre utilisation du site web de GlobalWay International. En accedant a ce site, vous acceptez sans reserve les conditions ci-apres.</p>
          <h2>Acces au site</h2>
          <p>L'acces au site est libre et gratuit. GlobalWay International se reserve le droit de suspendre, modifier ou interrompre l'acces au site, en tout ou partie, a tout moment et sans preavis, notamment pour des raisons de maintenance ou d'evolution du contenu.</p>
          <h2>Utilisation du site</h2>
          <p>Vous vous engagez a utiliser ce site dans le respect de la legislation en vigueur et des presentes conditions. Il est notamment interdit de :</p>
          <ul>
            <li>Reproduire, copier ou distribuer tout contenu du site sans autorisation prealable</li>
            <li>Utiliser le site a des fins commerciales sans accord ecrit de GlobalWay International</li>
            <li>Diffuser des informations incorrectes, mensongeres ou portant atteinte aux droits de tiers</li>
            <li>Tenter d'acceder de maniere non autorisee aux systemes informatiques du site</li>
          </ul>
          <h2>Propriete intellectuelle</h2>
          <p>L'ensemble des elements composant ce site (textes, visuels, logos, marques, architecture) est la propriete de GlobalWay International et est protege par les lois applicables en matiere de propriete intellectuelle. Toute reproduction, meme partielle, est soumise a autorisation prealable et ecrite.</p>
          <h2>Responsabilite</h2>
          <p>GlobalWay International s'efforce de maintenir les informations du site a jour et exactes, mais ne peut en garantir l'exhaustivite ou l'absence d'erreurs. L'utilisation des informations du site se fait sous l'entiere responsabilite de l'utilisateur.</p>
          <h2>Droit applicable et juridiction</h2>
          <p>Les presentes conditions sont regies par le droit marocain. Tout litige relatif a l'utilisation du site sera soumis aux tribunaux competents du ressort du siege social de GlobalWay International a Casablanca, Maroc.</p>
          <p className="text-brand-gray-500 text-sm mt-8">Derniere mise a jour : janvier 2025</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
