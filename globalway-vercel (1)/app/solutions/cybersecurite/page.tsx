import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/lib/solutions-data";

export async function generateMetadata(): Promise<Metadata> {
  const solution = getSolutionBySlug("cybersecurite");
  if (!solution) return {};
  return {
    title: "Cybersecurite et Gestion des Risques | Audit et ISO 27001",
    description: "Protegez votre organisation des cybermenaces avec GlobalWay International. Audit cyber 360, conformite RGPD, certification ISO 27001 et plan de continuite par des experts certifies CISSP.",
    alternates: {
      canonical: "https://www.globalway-international.com/solutions/cybersecurite",
    },
    openGraph: {
      title: "Cybersecurite et Gestion des Risques | Audit et ISO 27001",
      description: "Protegez votre organisation des cybermenaces avec GlobalWay International. Audit cyber 360, conformite RGPD, certification ISO 27001 et plan de continuite par des experts certifies CISSP.",
      images: [{ url: solution.heroImage }],
    },
  };
}

export default function Page() {
  const solution = getSolutionBySlug("cybersecurite");
  if (!solution) notFound();
  return (
    <>
      <Header />
      <SolutionPageTemplate solution={solution} />
      <Footer />
    </>
  );
}
