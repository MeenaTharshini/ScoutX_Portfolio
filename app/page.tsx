import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Users from "@/components/Users";
import Advantage from "@/components/Advantage";
import Business from "@/components/Business";
import Market from "@/components/Market";
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

        {/* 03 — What ScoutX actually is */}
        <About />

        {/* 04 — How ScoutX works */}
        <Solution />

        {/* 05 — AI intelligence behind discovery */}
        <Features />

        {/* 06 — Innovators + Organizations */}
        <Users />

        {/* 07 — Why ScoutX is different */}
        <Advantage />

        {/* 08 — How ScoutX can become a business */}
        <Business />

        {/* 09 — Market, ecosystem & growth */}
        <Market />

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