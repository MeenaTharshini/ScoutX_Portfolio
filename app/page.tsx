import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Users from "@/components/Users";
import WhyWe from "@/components/WhyWe";
import Business from "@/components/Business";
import Validation from "@/components/Validation";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "ScoutX — Innovation Exists. Discovery Doesn't.",
  description:
    "ScoutX is a continuous innovation discovery platform connecting organizations with people who are building ideas, prototypes, research, and solutions.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080806] text-white antialiased">
      <Navbar />

      <main id="main-content" className="relative overflow-hidden">
        {/* 01 — The big idea */}
        <Hero />

        {/* 02 — Why this problem exists */}
        <Problem />

        {/* 04 — How ScoutX works */}
        <Solution />

        {/* 06 — Innovators + Organizations */}
        <Users />

        {/* 07 — Why ScoutX is different */}
        <WhyWe />

        {/* 08 — How ScoutX can become a business */}
        <Business />

        {/* 10 — What must be validated */}
        <Validation />

        {/* 11 — The people building ScoutX */}
        <Team />

        {/* 12 — Join / Contact */}
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}