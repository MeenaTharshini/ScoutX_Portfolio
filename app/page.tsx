import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
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
        {/* 01 — First impression */}
        <Hero />

        {/* 02 — Why ScoutX exists */}
        <Problem />

        {/* 03 — How ScoutX solves the problem */}
        <Solution />

        {/* 04 — What the product actually provides */}
        <Features />

        {/* 05 — Who participates in the ecosystem */}
        <Users />

        {/* 06 — Who is building ScoutX */}
        <Team />

        {/* 07 — Final conversion */}
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}