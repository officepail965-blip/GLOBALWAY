import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Expertises from "@/components/Expertises";
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
      <Expertises />
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
