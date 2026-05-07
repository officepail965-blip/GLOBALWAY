import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/lib/solutions-data";

export async function generateMetadata(): Promise<Metadata> {
  const solution = getSolutionBySlug("conformite-iso");
  if (!solution) return {};
  return {
    title: "Certification ISO 9001, 27001, 14001 | 94% de Reussite au 1er Passage",
    description: "Obtenez votre certification ISO avec GlobalWay International. Accompagnement ISO 9001, 27001, 14001 et 45001 avec un taux de reussite de 94% au premier passage en moins de 9 mois.",
    alternates: {
      canonical: "https://www.globalway-international.com/solutions/conformite-iso",
    },
    openGraph: {
      title: "Certification ISO 9001, 27001, 14001 | 94% de Reussite au 1er Passage",
      description: "Obtenez votre certification ISO avec GlobalWay International. Accompagnement ISO 9001, 27001, 14001 et 45001 avec un taux de reussite de 94% au premier passage en moins de 9 mois.",
      images: [{ url: solution.heroImage }],
    },
  };
}

export default function Page() {
  const solution = getSolutionBySlug("conformite-iso");
  if (!solution) notFound();
  return (
    <>
      <Header />
      <SolutionPageTemplate solution={solution} />
      <Footer />
    </>
  );
}
