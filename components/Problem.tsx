"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaUsers,
  FaSearch,
  FaTrophy,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaArrowRight,
  FaExclamationTriangle,
} from "react-icons/fa";

const problemPoints = [
  {
    icon: FaGlobe,
    number: "01",
    title: "Innovation is scattered",
    description:
      "Ideas, prototypes, repositories, portfolios, and achievements live across disconnected platforms.",
  },
  {
    icon: FaUsers,
    number: "02",
    title: "Great builders stay invisible",
    description:
      "Capable innovators are often missed outside traditional hiring and hackathon channels.",
  },
  {
    icon: FaSearch,
    number: "03",
    title: "Discovery is inefficient",
    description:
      "Organizations waste time searching across unrelated profiles, repositories, events, and networks.",
  },
  {
    icon: FaTrophy,
    number: "04",
    title: "Events are not enough",
    description:
      "Promising projects often lose visibility when hackathons and competitions end.",
  },
];

const scatteredSources = [
  { icon: FaGithub, label: "GitHub" },
  { icon: FaLinkedin, label: "LinkedIn" },
  { icon: FaTrophy, label: "Hackathons" },
  { icon: FaCode, label: "Portfolios" },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/7 blur-[120px]" />
        <div className="absolute -bottom-48 -right-40 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C979]">
            <FaExclamationTriangle className="text-[10px]" />
            The Problem
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Innovation exists.
            <br />
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Discovery is broken.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            Students, developers, researchers, and builders create valuable
            solutions every day, but the organizations that need them often
            never find them.
          </p>
        </motion.div>

        {/* DISCOVERY GAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              The Discovery Gap
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Valuable work is everywhere.{" "}
              <span className="text-[#8F887B]">Discovery isn't.</span>
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {scatteredSources.map((source) => {
              const Icon = source.icon;

              return (
                <div
                  key={source.label}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/10 bg-white/[0.03] px-4 py-4"
                >
                  <Icon className="text-[#D4AF37]" />
                  <span className="text-sm font-medium text-[#C9C1B3]">
                    {source.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-xl border border-[#D4AF37]/10 px-4 py-2 text-[#A9A293]">
              Projects
            </span>

            <FaArrowRight className="text-[#D4AF37]" />

            <span className="rounded-xl border border-[#D4AF37]/10 px-4 py-2 text-[#A9A293]">
              Evidence
            </span>

            <FaArrowRight className="text-[#D4AF37]" />

            <span className="rounded-xl border border-[#D4AF37]/10 px-4 py-2 text-[#A9A293]">
              Capabilities
            </span>

            <FaArrowRight className="text-[#D4AF37]" />

            <span className="rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 font-semibold text-[#E7C979]">
              Opportunity
            </span>
          </div>
        </motion.div>

        {/* WHY DISCOVERY FAILS */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why discovery fails
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Four gaps keep innovation hidden.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problemPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25"
                >
                  <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-[#D4AF37]/20">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon />
                  </div>

                  <h4 className="mt-5 text-lg font-bold">{item.title}</h4>

                  <p className="mt-3 text-sm leading-6 text-[#8F887B]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CORE GAP */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] p-8 text-center md:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            The Core Gap
          </p>

          <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Companies don't lack problems.
            <br />
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              They lack access to the right ideas.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            The challenge is not creating more innovation. It is creating a
            reliable discovery layer that helps organizations find, understand,
            and connect with innovation that already exists.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {["Find", "Understand", "Connect"].map((item, index) => (
              <span
                key={item}
                className={`rounded-xl border px-6 py-3 font-semibold ${
                  index === 2
                    ? "border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#E7C979]"
                    : "border-[#D4AF37]/10 bg-white/[0.03] text-[#A9A293]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* SMALL TRANSITION */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#817A6E]">
            The missing layer isn't another social network.
          </p>

          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            It's a smarter way to{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              discover innovation.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}