import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import CardsCarousel from "@/components/CardsCarousel";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <CardsCarousel />
        <Sponsors />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
