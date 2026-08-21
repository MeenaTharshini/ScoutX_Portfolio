import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantage from "@/components/Advantage";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Users from "@/components/Users";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// Remove this if Advantage.tsx does not exist.
// import Advantage from "@/components/Advantage";

export const metadata: Metadata = {
  title: "ScoutX — Discover What People Can Build",
  description:
    "ScoutX is an innovation discovery platform connecting real-world problems with projects, prototypes, talent, institutions, and opportunities.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080806] text-white antialiased">
      {/* =========================================================
          NAVIGATION
      ========================================================== */}
      <Navbar />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <main id="main-content" className="relative overflow-hidden">
        {/* Hero */}
        <Hero />

        {/* About ScoutX */}
        <About />

        {/* The problem ScoutX solves */}
        <Problem />

        {/* ScoutX solution */}
        <Solution />

        {/* =====================================================
            ADVANTAGE
            Uncomment when Advantage.tsx exists.
        ====================================================== */}
        {/*
        <Advantage />
        */}

        {/* Platform features */}
        <Features />
        <Advantage/>
        {/* Ecosystem / users */}
        <Users />

        {/* Team */}
        <Team />

        {/* Contact / conversion */}
        <Contact />
      </main>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <Footer />

      {/* =========================================================
          GLOBAL BACK TO TOP
      ========================================================== */}
      <BackToTop />
    </div>
  );
}