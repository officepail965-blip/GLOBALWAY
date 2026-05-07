import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/lib/solutions-data";

export async function generateMetadata(): Promise<Metadata> {
  const solution = getSolutionBySlug("conseil-strategique");
  if (!solution) return {};
  return {
    title: "Conseil Strategique et Gouvernance | GlobalWay International",
    description: "Definissez une strategie claire et une gouvernance efficace avec GlobalWay International. Diagnostic strategique, plan a 3-5 ans et refonte de gouvernance pour les dirigeants exigeants.",
    alternates: {
      canonical: "https://www.globalway-international.com/solutions/conseil-strategique",
    },
    openGraph: {
      title: "Conseil Strategique et Gouvernance | GlobalWay International",
      description: "Definissez une strategie claire et une gouvernance efficace avec GlobalWay International. Diagnostic strategique, plan a 3-5 ans et refonte de gouvernance pour les dirigeants exigeants.",
      images: [{ url: solution.heroImage }],
    },
  };
}

export default function Page() {
  const solution = getSolutionBySlug("conseil-strategique");
  if (!solution) notFound();
  return (
    <>
      <Header />
      <SolutionPageTemplate solution={solution} />
      <Footer />
    </>
  );
}
