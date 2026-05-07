import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/lib/solutions-data";

export async function generateMetadata(): Promise<Metadata> {
  const solution = getSolutionBySlug("transformation-digitale");
  if (!solution) return {};
  return {
    title: "Transformation Digitale | Strategie SI et Conduite du Changement",
    description: "Accelerez votre transformation digitale avec GlobalWay International. Strategie SI, selection des outils, conduite du changement et gouvernance de la donnee pour un ROI mesurable.",
    alternates: {
      canonical: "https://www.globalway-international.com/solutions/transformation-digitale",
    },
    openGraph: {
      title: "Transformation Digitale | Strategie SI et Conduite du Changement",
      description: "Accelerez votre transformation digitale avec GlobalWay International. Strategie SI, selection des outils, conduite du changement et gouvernance de la donnee pour un ROI mesurable.",
      images: [{ url: solution.heroImage }],
    },
  };
}

export default function Page() {
  const solution = getSolutionBySlug("transformation-digitale");
  if (!solution) notFound();
  return (
    <>
      <Header />
      <SolutionPageTemplate solution={solution} />
      <Footer />
    </>
  );
}
