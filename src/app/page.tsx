import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import HowItWorks from "@/components/sections/HowItWorks";
import ForWho from "@/components/sections/ForWho";
import Credibility from "@/components/sections/Credibility";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Services />
        <Differentials />
        <HowItWorks />
        <ForWho />
        <Credibility />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
