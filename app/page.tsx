import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
            02 — CONTEXT
            Why does ScoutX need to exist?
        ====================================================== */}
        <About />

        {/* =====================================================
            03 — THE PROBLEM
            What is broken today?
        ====================================================== */}
        <Problem />

        {/* =====================================================
            04 — THE SOLUTION
            How does ScoutX solve the problem?
        ====================================================== */}
        <Solution />

        {/* =====================================================
            05 — PRODUCT CAPABILITIES
            What can ScoutX actually do?
        ====================================================== */}
        <Features />

        {/* =====================================================
            06 — USERS & ECOSYSTEM
            Who gets value from ScoutX?
        ====================================================== */}
        <Users />

        {/* =====================================================
            07 — TEAM
            Who is building ScoutX?
        ====================================================== */}
        <Team />

        {/* =====================================================
            08 — FINAL CTA / CONTACT
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