"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaSearch,
  FaLightbulb,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaBuilding,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F8F3E8] text-[#171611] flex items-center pt-28 md:pt-32 px-6"
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      {/* Top gold glow */}
      <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] rounded-full bg-[#C9A646]/10 blur-3xl pointer-events-none" />

      {/* Bottom gold glow */}
      <div className="absolute bottom-[-180px] right-[-180px] w-[550px] h-[550px] rounded-full bg-[#C9A646]/8 blur-3xl pointer-events-none" />

      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 w-[750px] h-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A646]/[0.025] blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.18] pointer-events-none" />

      {/* Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8F3E8] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="text-center max-w-5xl mx-auto">

          {/* =================================================
              BADGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-[#C9A646]/10
              border border-[#B58A24]/25
              text-[#8D6D25]
              text-sm
              font-semibold
              shadow-[0_8px_30px_rgba(181,138,36,0.08)]
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A646] animate-pulse shadow-[0_0_10px_rgba(201,166,70,0.7)]" />

            Innovation Discovery &amp; Talent Visibility Platform
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-bold
              leading-[1.02]
              tracking-tight
              mt-8
              text-[#171611]
            "
          >
            Innovation Exists.

            <span className="block text-gradient">
              Discovery Doesn't.
            </span>
          </motion.h1>

          {/* =================================================
              ANIMATED STATEMENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="
              mt-8
              text-xl
              md:text-2xl
              text-[#625D52]
              min-h-[2.2rem]
            "
          >
            <TypeAnimation
              sequence={[
                "Discover what innovators have actually built.",
                2500,

                "Turn scattered projects into discoverable innovation.",
                2500,

                "Evaluate talent through real project evidence.",
                2500,

                "Connect promising innovators with organizations.",
                2500,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </motion.div>

          {/* =================================================
              PROJECT DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="
              mt-8
              text-[#625D52]
              text-lg
              md:text-xl
              leading-8
              max-w-4xl
              mx-auto
            "
          >
            <span className="text-[#171611] font-bold">
              ScoutX
            </span>{" "}
            is an innovation discovery platform that brings together{" "}
            <span className="text-[#A67C1F] font-semibold">
              student and early-stage innovators,
            </span>{" "}
            their{" "}
            <span className="text-[#A67C1F] font-semibold">
              ideas, prototypes, builders, and evidence
            </span>{" "}
            in one structured profile — helping companies, hackathon
            organizers, and incubators{" "}
            <span className="text-[#A67C1F] font-semibold">
              discover, evaluate, and connect
            </span>{" "}
            with promising innovation.
          </motion.p>

          {/* =================================================
              CTA
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >

            {/* Primary CTA */}

            <a
              href="#solution"
              className="
                group
                inline-flex
                items-center
                gap-3
                px-7
                py-4
                rounded-xl
                bg-[#171611]
                text-white
                font-semibold
                border border-[#171611]
                shadow-[0_12px_35px_rgba(23,22,17,0.18)]
                hover:bg-[#2A281F]
                hover:border-[#B58A24]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Explore ScoutX

              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-[#C9A646]" />
            </a>

            {/* Secondary CTA */}

            <a
              href="#problem"
              className="
                inline-flex
                items-center
                justify-center
                px-7
                py-4
                rounded-xl
                bg-[#FFFDF8]
                text-[#171611]
                font-semibold
                border border-[#B58A24]/30
                hover:bg-[#C9A646]/10
                hover:border-[#B58A24]/50
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              See the Discovery Gap
            </a>

          </motion.div>
        </div>

        {/* =====================================================
            TRUST / VALUE STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="
            max-w-4xl
            mx-auto
            mt-16
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-3
          "
        >

          {/* Card 1 */}

          <div
            className="
              rounded-2xl
              bg-[#FFFDF8]
              border border-[#171611]/8
              px-5
              py-4
              flex
              items-center
              justify-center
              gap-3
              shadow-[0_10px_35px_rgba(60,45,15,0.06)]
            "
          >
            <div className="w-9 h-9 rounded-lg bg-[#C9A646]/10 text-[#A67C1F] flex items-center justify-center">
              <FaLightbulb />
            </div>

            <div className="text-left">
              <p className="text-[#171611] text-sm font-semibold">
                Real Ideas
              </p>

              <p className="text-[#746E62] text-xs mt-0.5">
                Projects &amp; prototypes
              </p>
            </div>
          </div>

          {/* Card 2 */}

          <div
            className="
              rounded-2xl
              bg-[#FFFDF8]
              border border-[#171611]/8
              px-5
              py-4
              flex
              items-center
              justify-center
              gap-3
              shadow-[0_10px_35px_rgba(60,45,15,0.06)]
            "
          >
            <div className="w-9 h-9 rounded-lg bg-[#C9A646]/10 text-[#A67C1F] flex items-center justify-center">
              <FaSearch />
            </div>

            <div className="text-left">
              <p className="text-[#171611] text-sm font-semibold">
                AI Discovery
              </p>

              <p className="text-[#746E62] text-xs mt-0.5">
                Smarter evaluation
              </p>
            </div>
          </div>

          {/* Card 3 */}

          <div
            className="
              rounded-2xl
              bg-[#FFFDF8]
              border border-[#171611]/8
              px-5
              py-4
              flex
              items-center
              justify-center
              gap-3
              shadow-[0_10px_35px_rgba(60,45,15,0.06)]
            "
          >
            <div className="w-9 h-9 rounded-lg bg-[#C9A646]/10 text-[#A67C1F] flex items-center justify-center">
              <FaBuilding />
            </div>

            <div className="text-left">
              <p className="text-[#171611] text-sm font-semibold">
                Better Connections
              </p>

              <p className="text-[#746E62] text-xs mt-0.5">
                Innovators ↔ Organizations
              </p>
            </div>
          </div>

        </motion.div>

        {/* =====================================================
            CORE PROBLEM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="gold-line mx-auto" />
        </motion.div>

      </div>
    </section>
  );
}