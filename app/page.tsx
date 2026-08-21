import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Users from "@/components/Users";
import Features from "@/components/Features";
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

        <Users />

        <Features />

        <Team />

        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}