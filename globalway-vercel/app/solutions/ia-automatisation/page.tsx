import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/lib/solutions-data";

export async function generateMetadata(): Promise<Metadata> {
  const solution = getSolutionBySlug("ia-automatisation");
  if (!solution) return {};
  return {
    title: "Conseil IA et Automatisation | ROI en moins de 6 mois",
    description: "Deployez l'intelligence artificielle et la RPA la ou elles creent vraiment de la valeur. Audit des cas d'usage, deploiement RPA et integration IA generative avec ROI en moins de 6 mois.",
    alternates: {
      canonical: "https://www.globalway-international.com/solutions/ia-automatisation",
    },
    openGraph: {
      title: "Conseil IA et Automatisation | ROI en moins de 6 mois",
      description: "Deployez l'intelligence artificielle et la RPA la ou elles creent vraiment de la valeur. Audit des cas d'usage, deploiement RPA et integration IA generative avec ROI en moins de 6 mois.",
      images: [{ url: solution.heroImage }],
    },
  };
}

export default function Page() {
  const solution = getSolutionBySlug("ia-automatisation");
  if (!solution) notFound();
  return (
    <>
      <Header />
      <SolutionPageTemplate solution={solution} />
      <Footer />
    </>
  );
}
