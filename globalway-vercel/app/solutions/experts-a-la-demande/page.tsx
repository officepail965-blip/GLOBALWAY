import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/lib/solutions-data";

export async function generateMetadata(): Promise<Metadata> {
  const solution = getSolutionBySlug("experts-a-la-demande");
  if (!solution) return {};
  return {
    title: "Experts a la Demande et Management de Transition | 48h",
    description: "Plus de 200 experts certifies mobilisables en 48 heures. Management de transition, staffing de projet et consultants specialises pour vos missions critiques au Maroc, en France et en Tunisie.",
    alternates: {
      canonical: "https://www.globalway-international.com/solutions/experts-a-la-demande",
    },
    openGraph: {
      title: "Experts a la Demande et Management de Transition | 48h",
      description: "Plus de 200 experts certifies mobilisables en 48 heures. Management de transition, staffing de projet et consultants specialises pour vos missions critiques au Maroc, en France et en Tunisie.",
      images: [{ url: solution.heroImage }],
    },
  };
}

export default function Page() {
  const solution = getSolutionBySlug("experts-a-la-demande");
  if (!solution) notFound();
  return (
    <>
      <Header />
      <SolutionPageTemplate solution={solution} />
      <Footer />
    </>
  );
}
