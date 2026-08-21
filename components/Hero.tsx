"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaSearch,
  FaLightbulb,
  FaBuilding,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B0B09] text-[#F7F2E8] flex items-center pt-28 md:pt-32 px-6"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Top gold glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/8 blur-[120px] pointer-events-none" />

      {/* Bottom gold glow */}
      <div className="absolute -bottom-48 -right-40 w-[550px] h-[550px] rounded-full bg-[#B08A28]/6 blur-[140px] pointer-events-none" />

      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 w-[750px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[140px] pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B09] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="text-center max-w-5xl mx-auto">
          {/* BADGE */}

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
              bg-[#D4AF37]/10
              border
              border-[#D4AF37]/20
              text-[#E7C979]
              text-xs
              md:text-sm
              font-semibold
              uppercase
              tracking-[0.12em]
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_12px_rgba(212,175,55,0.6)]" />

            Innovation Discovery & Talent Visibility Platform
          </motion.div>

          {/* MAIN HEADING */}

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
              text-[#F7F2E8]
            "
          >
            Innovation Exists.

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
              Discovery Doesn't.
            </span>
          </motion.h1>

          {/* ANIMATED STATEMENT */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="
              mt-8
              text-lg
              md:text-2xl
              text-[#A9A293]
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

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="
              mt-8
              text-[#A9A293]
              text-base
              md:text-lg
              leading-8
              max-w-4xl
              mx-auto
            "
          >
            <span className="text-[#F7F2E8] font-bold">
              ScoutX
            </span>{" "}
            is an innovation discovery platform that brings together{" "}
            <span className="text-[#E7C979] font-semibold">
              student and early-stage innovators,
            </span>{" "}
            their{" "}
            <span className="text-[#E7C979] font-semibold">
              ideas, prototypes, builders, and evidence
            </span>{" "}
            in one structured profile — helping companies, hackathon
            organizers, and incubators{" "}
            <span className="text-[#E7C979] font-semibold">
              discover, evaluate, and connect
            </span>{" "}
            with promising innovation.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {/* PRIMARY CTA */}

            <motion.a
              href="#solution"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                inline-flex
                items-center
                gap-3
                px-7
                py-4
                rounded-xl
                bg-gradient-to-br
                from-[#E7C979]
                via-[#D4AF37]
                to-[#AD8930]
                text-[#0B0B09]
                font-bold
                border
                border-[#E7C979]/30
                shadow-[0_12px_35px_rgba(201,166,70,0.18)]
                hover:shadow-[0_15px_45px_rgba(201,166,70,0.28)]
                transition-all
                duration-300
              "
            >
              Explore ScoutX

              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
            </motion.a>

            {/* SECONDARY CTA */}

            <motion.a
              href="#problem"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex
                items-center
                justify-center
                px-7
                py-4
                rounded-xl
                bg-[#F5F0E6]/[0.03]
                text-[#E7C979]
                font-semibold
                border
                border-[#D4AF37]/20
                hover:bg-[#D4AF37]/10
                hover:border-[#D4AF37]/40
                transition-all
                duration-300
              "
            >
              See the Discovery Gap
            </motion.a>
          </motion.div>
        </div>

        {/* =====================================================
            VALUE STRIP
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
            gap-4
          "
        >
          {/* CARD 1 */}

          <div
            className="
              group
              rounded-2xl
              bg-[#11100D]
              border
              border-[#D4AF37]/10
              px-5
              py-5
              flex
              items-center
              justify-center
              gap-3
              hover:border-[#D4AF37]/30
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center group-hover:bg-[#D4AF37]/15 transition">
              <FaLightbulb />
            </div>

            <div className="text-left">
              <p className="text-[#F7F2E8] text-sm font-semibold">
                Real Ideas
              </p>

              <p className="text-[#8F887B] text-xs mt-1">
                Projects & prototypes
              </p>
            </div>
          </div>

          {/* CARD 2 */}

          <div
            className="
              group
              rounded-2xl
              bg-[#11100D]
              border
              border-[#D4AF37]/10
              px-5
              py-5
              flex
              items-center
              justify-center
              gap-3
              hover:border-[#D4AF37]/30
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center group-hover:bg-[#D4AF37]/15 transition">
              <FaSearch />
            </div>

            <div className="text-left">
              <p className="text-[#F7F2E8] text-sm font-semibold">
                AI Discovery
              </p>

              <p className="text-[#8F887B] text-xs mt-1">
                Smarter evaluation
              </p>
            </div>
          </div>

          {/* CARD 3 */}

          <div
            className="
              group
              rounded-2xl
              bg-[#11100D]
              border
              border-[#D4AF37]/10
              px-5
              py-5
              flex
              items-center
              justify-center
              gap-3
              hover:border-[#D4AF37]/30
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center group-hover:bg-[#D4AF37]/15 transition">
              <FaBuilding />
            </div>

            <div className="text-left">
              <p className="text-[#F7F2E8] text-sm font-semibold">
                Better Connections
              </p>

              <p className="text-[#8F887B] text-xs mt-1">
                Innovators ↔ Organizations
              </p>
            </div>
          </div>
        </motion.div>

        {/* GOLD DIVIDER */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="max-w-4xl mx-auto mt-16 pb-10 text-center"
        >
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}