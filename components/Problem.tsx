"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaUsers,
  FaSearch,
  FaMoneyBillWave,
  FaLightbulb,
  FaBuilding,
  FaArrowRight,
  FaExclamationTriangle,
  FaGithub,
  FaLinkedin,
  FaTrophy,
  FaCode,
} from "react-icons/fa";

const problemPoints = [
  {
    icon: FaGlobe,
    number: "01",
    title: "Innovation is scattered",
    description:
      "Ideas, prototypes, repositories, portfolios, and achievements live across disconnected platforms and events.",
  },
  {
    icon: FaUsers,
    number: "02",
    title: "Great builders stay invisible",
    description:
      "Many capable innovators never get discovered simply because they are outside traditional hiring or hackathon channels.",
  },
  {
    icon: FaSearch,
    number: "03",
    title: "Discovery is inefficient",
    description:
      "Organizations often spend significant time searching through unrelated profiles, repositories, events, and networks.",
  },
  {
    icon: FaMoneyBillWave,
    number: "04",
    title: "Events are not enough",
    description:
      "Hackathons and competitions create visibility, but valuable projects can disappear once the event is over.",
  },
];

const lostFlow = [
  {
    icon: FaLightbulb,
    title: "Build",
    description: "Someone creates a useful idea, project, or prototype.",
  },
  {
    icon: FaGithub,
    title: "Publish",
    description: "The work appears on GitHub, portfolios, events, or social platforms.",
  },
  {
    icon: FaGlobe,
    title: "Get Lost",
    description: "Without continuous discovery, visibility gradually disappears.",
  },
  {
    icon: FaBuilding,
    title: "Opportunity Missed",
    description: "The organization that could benefit from it never finds it.",
  },
];

const scatteredSources = [
  {
    icon: FaGithub,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    icon: FaTrophy,
    label: "Hackathons",
  },
  {
    icon: FaCode,
    label: "Portfolios",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#0B0B09] text-[#F7F2E8] py-24 md:py-32 px-6"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/8 blur-[120px]" />

        <div className="absolute top-[35%] right-[-220px] w-[500px] h-[500px] rounded-full bg-[#B08A28]/6 blur-[120px]" />

        <div className="absolute bottom-[-250px] left-[30%] w-[600px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#E7C979] text-xs font-semibold uppercase tracking-[0.2em]">
            <FaExclamationTriangle className="text-[10px]" />
            The Problem
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-[1.08] tracking-tight">
            Innovation exists.
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
              Discovery is broken.
            </span>
          </h2>

          <p className="text-[#A9A293] text-base md:text-lg leading-8 mt-7 max-w-3xl mx-auto">
            Every day, students, developers, researchers, and independent
            builders create valuable solutions. But the right organizations
            often never discover them.
          </p>
        </motion.div>

        {/* =====================================================
            SCATTERED ECOSYSTEM VISUAL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10">

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#D4AF37]/5 blur-[100px] rounded-full" />

            <div className="relative z-10">

              <div className="text-center">
                <p className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
                  The Discovery Gap
                </p>

                <h3 className="text-2xl md:text-4xl font-bold mt-3">
                  Valuable work is everywhere.
                  <span className="text-[#A9A293]">
                    {" "}Discovery isn't.
                  </span>
                </h3>
              </div>

              {/* Sources */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {scatteredSources.map((source, index) => {
                  const Icon = source.icon;

                  return (
                    <motion.div
                      key={source.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="group flex items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#F5F0E6]/[0.03] px-5 py-5 hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-300"
                    >
                      <Icon className="text-[#D4AF37]" />

                      <span className="text-sm font-medium text-[#C9C1B3]">
                        {source.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Discovery message */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10">

                <div className="px-5 py-3 rounded-xl border border-[#D4AF37]/10 bg-[#F5F0E6]/[0.03] text-sm text-[#A9A293]">
                  Projects
                </div>

                <FaArrowRight className="text-[#D4AF37] rotate-90 md:rotate-0" />

                <div className="px-5 py-3 rounded-xl border border-[#D4AF37]/10 bg-[#F5F0E6]/[0.03] text-sm text-[#A9A293]">
                  Evidence
                </div>

                <FaArrowRight className="text-[#D4AF37] rotate-90 md:rotate-0" />

                <div className="px-5 py-3 rounded-xl border border-[#D4AF37]/10 bg-[#F5F0E6]/[0.03] text-sm text-[#A9A293]">
                  Capabilities
                </div>

                <FaArrowRight className="text-[#D4AF37] rotate-90 md:rotate-0" />

                <div className="px-5 py-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-sm font-semibold text-[#E7C979]">
                  Opportunity
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FOUR PROBLEMS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-semibold">
              Why discovery fails
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Four gaps keep innovation hidden.
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problemPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-2xl bg-[#11100D] border border-[#D4AF37]/10 p-6 hover:-translate-y-1 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <span className="absolute top-5 right-5 text-[#D4AF37]/20 text-xs font-bold tracking-widest">
                    {item.number}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center group-hover:bg-[#D4AF37]/15 transition">
                    <Icon />
                  </div>

                  <h4 className="text-lg font-bold mt-5">
                    {item.title}
                  </h4>

                  <p className="text-[#8F887B] text-sm leading-6 mt-3">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            LOST JOURNEY
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <p className="text-[#A67C00] uppercase tracking-[0.25em] text-xs font-semibold">
              The Current Journey
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Build something valuable.
              <br />

              <span className="text-[#D4AF37]">
                Then watch it disappear.
              </span>
            </h3>
          </div>

          <div className="relative">

            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {lostFlow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative text-center"
                  >
                    <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-[#F5F0E6] text-[#A67C00] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                      <Icon className="text-lg" />
                    </div>

                    <span className="block text-[#D4AF37] text-[10px] tracking-[0.25em] font-bold mt-5">
                      0{index + 1}
                    </span>

                    <h4 className="text-lg font-bold mt-2">
                      {item.title}
                    </h4>

                    <p className="text-[#8F887B] text-sm leading-6 mt-2 max-w-xs mx-auto">
                      {item.description}
                    </p>

                    {index < lostFlow.length - 1 && (
                      <FaArrowRight className="hidden lg:block absolute top-7 -right-3 text-[#D4AF37]/50 text-xs" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CORE PROBLEM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden max-w-5xl mx-auto rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] p-8 md:p-14 text-center">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#D4AF37]/10 blur-[90px] rounded-full" />

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#E7C979] text-xs uppercase tracking-[0.2em] font-semibold">
                <FaExclamationTriangle />
                The Core Gap
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mt-7 leading-tight">
                Companies don't lack problems.
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
                  They lack access to the right ideas.
                </span>
              </h3>

              <p className="text-[#A9A293] text-base md:text-lg leading-8 max-w-3xl mx-auto mt-6">
                The real challenge is not creating more innovation.
                It is creating a reliable discovery layer that helps
                organizations find, understand, and connect with innovation
                that already exists.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-10">

                <div className="rounded-xl bg-[#F5F0E6]/[0.03] border border-[#D4AF37]/10 px-4 py-5">
                  <div className="text-2xl font-bold text-[#E7C979]">
                    Find
                  </div>

                  <p className="text-xs text-[#817A6E] mt-1">
                    Discover relevant work
                  </p>
                </div>

                <div className="rounded-xl bg-[#F5F0E6]/[0.03] border border-[#D4AF37]/10 px-4 py-5">
                  <div className="text-2xl font-bold text-[#E7C979]">
                    Understand
                  </div>

                  <p className="text-xs text-[#817A6E] mt-1">
                    Evaluate real evidence
                  </p>
                </div>

                <div className="rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-4 py-5">
                  <div className="text-2xl font-bold text-[#E7C979]">
                    Connect
                  </div>

                  <p className="text-xs text-[#817A6E] mt-1">
                    Create opportunity
                  </p>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TRANSITION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-[#817A6E] text-sm">
            The missing layer isn't another social network.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-4">
            It's a smarter way to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
              discover innovation.
            </span>
          </h3>

          <motion.a
            href="#solution"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 mt-8 px-7 py-3.5 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#AD8930] text-[#0B0B09] font-bold text-sm shadow-[0_12px_35px_rgba(201,166,70,0.18)] hover:shadow-[0_15px_45px_rgba(201,166,70,0.28)] transition-all duration-300"
          >
            See How ScoutX Solves It
            <FaArrowRight className="text-xs" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}