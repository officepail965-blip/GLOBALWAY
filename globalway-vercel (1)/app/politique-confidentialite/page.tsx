import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | GlobalWay International",
  description: "Politique de protection des données personnelles de GlobalWay International, conforme au RGPD et à la réglementation marocaine sur la protection des données.",
  alternates: {
    canonical: "https://www.globalway-international.com/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <section className="pt-32 pb-16 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-brand-yellow">Politique de confidentialite</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display">Politique de confidentialite</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto prose prose-lg">
          <p>GlobalWay International accorde une importance primordiale a la protection de vos donnees personnelles. La presente politique de confidentialite decrit comment nous collectons, utilisons et protegeons vos donnees lors de votre utilisation de notre site web.</p>
          <h2>Responsable du traitement</h2>
          <p><strong>GlobalWay International</strong>, Immeuble Hakim, lotissement Safa bureau 07 etage 2, Casablanca 24001, Maroc. Contact : contact@globalway-international.com</p>
          <h2>Donnees collectees</h2>
          <p>Nous collectons les donnees personnelles suivantes dans le cadre de nos interactions avec vous :</p>
          <ul>
            <li>Donnees d'identification : prenom, nom, adresse e-mail, numero de telephone</li>
            <li>Donnees professionnelles : nom de l'entreprise, fonction, secteur d'activite</li>
            <li>Donnees de navigation : adresse IP, pages visitees, duree de visite (via cookies analytiques)</li>
            <li>Contenus des echanges : messages envoyes via le formulaire de contact</li>
          </ul>
          <h2>Finalites du traitement</h2>
          <p>Vos donnees sont collectees et traitees pour les finalites suivantes :</p>
          <ul>
            <li>Traitement de vos demandes de contact et de diagnostic</li>
            <li>Envoi de notre newsletter si vous y avez consenti</li>
            <li>Amelioration de l'experience utilisateur sur notre site</li>
            <li>Respect de nos obligations legales et reglementaires</li>
          </ul>
          <h2>Base legale des traitements</h2>
          <p>Le traitement de vos donnees repose sur : votre consentement explicite (formulaire de contact, newsletter), l'execution d'un contrat ou de mesures precontractuelles, et nos interets legitimes en matiere de developpement commercial.</p>
          <h2>Conservation des donnees</h2>
          <p>Vos donnees sont conservees pendant une duree maximale de 3 ans a compter de notre dernier contact. Les donnees de prospects sont supprimees apres 2 ans d'inactivite.</p>
          <h2>Vos droits</h2>
          <p>Conformement a la reglementation applicable, vous disposez des droits suivants sur vos donnees personnelles :</p>
          <ul>
            <li>Droit d'acces a vos donnees personnelles</li>
            <li>Droit de rectification des donnees inexactes</li>
            <li>Droit a l'effacement de vos donnees</li>
            <li>Droit a la portabilite de vos donnees</li>
            <li>Droit d'opposition au traitement de vos donnees</li>
            <li>Droit de retirer votre consentement a tout moment</li>
          </ul>
          <p>Pour exercer ces droits, adressez votre demande a : <a href="mailto:contact@globalway-international.com">contact@globalway-international.com</a></p>
          <h2>Cookies</h2>
          <p>Notre site utilise des cookies techniques necessaires a son fonctionnement et des cookies analytiques anonymises pour mesurer l'audience. Vous pouvez parametrer votre navigateur pour refuser les cookies, ce qui peut affecter certaines fonctionnalites du site.</p>
          <h2>Securite des donnees</h2>
          <p>GlobalWay International met en oeuvre les mesures techniques et organisationnelles appropriees pour proteger vos donnees contre tout acces non autorise, modification, divulgation ou destruction.</p>
          <h2>Modifications de la presente politique</h2>
          <p>GlobalWay International se reserve le droit de modifier la presente politique de confidentialite a tout moment. Les modifications prennent effet des leur publication sur cette page.</p>
          <p className="text-brand-gray-500 text-sm mt-8">Derniere mise a jour : janvier 2025</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
