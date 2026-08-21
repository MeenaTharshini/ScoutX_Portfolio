"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8]"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.06] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]"
        >
          Innovation Discovery Platform
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Innovation Exists.
          <br />
          <span className="text-gradient">
            Discovery Doesn&apos;t.
          </span>
        </motion.h1>

        {/* Supporting statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A9A293] md:text-lg"
        >
          ScoutX helps organizations discover what people have actually built
          — and helps innovators find real problems worth solving.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#solution"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] px-6 py-3.5 text-sm font-bold text-[#0B0B09] transition hover:-translate-y-0.5"
          >
            Explore ScoutX
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#problem"
            className="inline-flex items-center gap-3 rounded-xl border border-[#D4AF37]/20 bg-[#11100D] px-6 py-3.5 text-sm font-semibold text-[#D8D0C1] transition hover:border-[#D4AF37]/40 hover:text-[#F7F2E8]"
          >
            <FaSearch className="text-xs text-[#D4AF37]" />
            See the Discovery Gap
          </a>
        </motion.div>

        {/* Minimal value indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-14 flex max-w-xl flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-[#8F887B]"
        >
          <span>Projects & Prototypes</span>
          <span>•</span>
          <span>AI-Assisted Evaluation</span>
          <span>•</span>
          <span>Smart Matching</span>
        </motion.div>

      </div>
    </section>
  );
}