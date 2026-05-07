import type { Metadata } from "next";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Accueil | Cabinet de Conseil en Stratégie, ISO et Transformation Digitale",
  description:
    "GlobalWay International accompagne les dirigeants depuis 2018 en conseil stratégique, transformation digitale, certification ISO, cybersécurité et coaching exécutif au Maroc, en France et en Tunisie.",
  alternates: {
    canonical: "https://www.globalway-international.com",
  },
};


import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Solutions from "@/components/Solutions";
import Sectors from "@/components/Sectors";
import WhyUs from "@/components/WhyUs";
import Values from "@/components/Values";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Intro />
      <Solutions />
      <Sectors />
      <WhyUs />
      <Values />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
