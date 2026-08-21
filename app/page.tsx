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

export default function Home() {
  return (
    <>
      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <Navbar />

      <main>
        {/* =====================================================
            01 — FIRST IMPRESSION
            What is ScoutX?
        ====================================================== */}
        <Hero />

        {/* =====================================================
            02 — ABOUT SCOUTX
            What is ScoutX and who does it connect?
        ====================================================== */}
        <About />

        {/* =====================================================
            03 — THE SCOUTX ADVANTAGE
            Why is ScoutX different?
        ====================================================== */}
        <Advantage />

        {/* =====================================================
            04 — THE PROBLEM
            What is broken in innovation discovery today?
        ====================================================== */}
        <Problem />

        {/* =====================================================
            05 — THE SOLUTION
            How does ScoutX solve the discovery gap?
        ====================================================== */}
        <Solution />

        {/* =====================================================
            06 — PRODUCT CAPABILITIES
            What can ScoutX actually do?
        ====================================================== */}
        <Features />

        {/* =====================================================
            07 — USERS & ECOSYSTEM
            Who gets value from ScoutX?
        ====================================================== */}
        <Users />

        {/* =====================================================
            08 — TEAM
            Who is building ScoutX?
        ====================================================== */}
        <Team />

        {/* =====================================================
            09 — FINAL CTA / CONTACT
            What should the visitor do next?
        ====================================================== */}
        <Contact />
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

      {/* =====================================================
          UTILITY
      ====================================================== */}
      <BackToTop />
    </>
  );
}