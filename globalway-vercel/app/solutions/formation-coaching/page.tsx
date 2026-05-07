import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/lib/solutions-data";

export async function generateMetadata(): Promise<Metadata> {
  const solution = getSolutionBySlug("formation-coaching");
  if (!solution) return {};
  return {
    title: "Formation et Coaching Executif | Certifications PMP, ISO | GlobalWay",
    description: "Developpez les competences de vos equipes avec GlobalWay International. Preparation PMP, Prince2, Lead Auditor ISO et coaching certifie ICF pour dirigeants avec 93% de taux de reussite.",
    alternates: {
      canonical: "https://www.globalway-international.com/solutions/formation-coaching",
    },
    openGraph: {
      title: "Formation et Coaching Executif | Certifications PMP, ISO | GlobalWay",
      description: "Developpez les competences de vos equipes avec GlobalWay International. Preparation PMP, Prince2, Lead Auditor ISO et coaching certifie ICF pour dirigeants avec 93% de taux de reussite.",
      images: [{ url: solution.heroImage }],
    },
  };
}

export default function Page() {
  const solution = getSolutionBySlug("formation-coaching");
  if (!solution) notFound();
  return (
    <>
      <Header />
      <SolutionPageTemplate solution={solution} />
      <Footer />
    </>
  );
}
