import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/lib/solutions-data";

export async function generateMetadata(): Promise<Metadata> {
  const solution = getSolutionBySlug("pmo-excellence-operationnelle");
  if (!solution) return {};
  return {
    title: "PMO et Excellence Operationnelle | GlobalWay International",
    description: "Pilotez vos projets avec rigueur grace a notre expertise PMO. Mise en place de bureau de projets, gestion de portefeuille et excellence operationnelle pour 89% de projets livres dans les delais.",
    alternates: {
      canonical: "https://www.globalway-international.com/solutions/pmo-excellence-operationnelle",
    },
    openGraph: {
      title: "PMO et Excellence Operationnelle | GlobalWay International",
      description: "Pilotez vos projets avec rigueur grace a notre expertise PMO. Mise en place de bureau de projets, gestion de portefeuille et excellence operationnelle pour 89% de projets livres dans les delais.",
      images: [{ url: solution.heroImage }],
    },
  };
}

export default function Page() {
  const solution = getSolutionBySlug("pmo-excellence-operationnelle");
  if (!solution) notFound();
  return (
    <>
      <Header />
      <SolutionPageTemplate solution={solution} />
      <Footer />
    </>
  );
}
