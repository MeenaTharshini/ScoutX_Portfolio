import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Advantage from "@/components/Advantage";
import Users from "@/components/Users";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "ScoutX — Discover What People Can Build",
  description:
    "ScoutX is an innovation discovery platform connecting real-world problems with projects, prototypes, talent, institutions, and opportunities.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080806] text-white antialiased">
      <Navbar />

      <main id="main-content" className="relative overflow-hidden">
        {/* 01 — What is ScoutX? */}
        <Hero />

        {/* 02 — What ScoutX does */}
        <About />

        {/* 03 — Why ScoutX exists */}
        <Problem />

        {/* 04 — How ScoutX solves it */}
        <Solution />

        {/* 05 — Why ScoutX is different */}
        <Advantage />

        {/* 06 — Who ScoutX is for */}
        <Users />

        {/* 07 — Who is building ScoutX */}
        <Team />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}