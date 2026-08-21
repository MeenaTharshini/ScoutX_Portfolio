import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Advantage from "@/components/Advantage";
import Features from "@/components/Features";
import Users from "@/components/Users";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Advantage />
        <Features />
        <Users />
        <Team />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}