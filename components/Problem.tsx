"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaTrophy,
  FaLightbulb,
  FaUsers,
  FaGithub,
  FaCode,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

const discoveryChannels = [
  [FaTrophy, "Hackathons"],
  [FaUsers, "Networks"],
  [FaGithub, "GitHub"],
  [FaCode, "Portfolios"],
] as const;

const problems = [
  {
    number: "01",
    title: "Temporary",
    description:
      "Hackathons, challenges, and competitions create discovery moments — but only for a limited time.",
  },
  {
    number: "02",
    title: "Limited Reach",
    description:
      "Great builders outside existing communities, institutions, and networks can remain invisible.",
  },
  {
    number: "03",
    title: "Hard to Evaluate",
    description:
      "Finding projects is easy. Understanding which one actually fits a real problem is much harder.",
  },
  {
    number: "04",
    title: "Easy to Lose",
    description:
      "When an event ends or attention moves elsewhere, valuable projects can disappear from view.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#D4AF37]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =====================================================
            01 — PROBLEM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C979]">
            <FaLightbulb className="text-[10px]" />
            The Problem
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Great ideas are being built.
            <br />
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Many remain undiscovered.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            Innovation is being created across colleges, startups,
            research labs, communities, and independent builders.
            But discovery is still fragmented.
          </p>
        </motion.div>

        {/* =====================================================
            02 — DISCOVERY GAP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              The Discovery Gap
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Innovation is everywhere.
              <br />
              <span className="text-[#8F887B]">
                But discovery is fragmented.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#8F887B]">
              Organizations currently discover innovation through separate
              channels, each showing only part of the picture.
            </p>
          </div>

          {/* DISCOVERY CHANNELS */}

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {discoveryChannels.map(([Icon, label]) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-white/[0.03] px-4 py-4"
              >
                <Icon className="text-[#D4AF37]" />

                <span className="text-sm text-[#C9C1B3]">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* =====================================================
            03 — WHY EXISTING CHANNELS AREN'T ENOUGH
        ====================================================== */}

        <div className="mt-14">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-7 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why Existing Channels Aren't Enough
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Discovery shouldn't depend on opportunity.
            </h3>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {problems.map(
              ({ number, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-5 transition hover:-translate-y-1 hover:border-[#D4AF37]/25"
                >

                  <span className="text-xs font-bold tracking-widest text-[#D4AF37]/30">
                    {number}
                  </span>

                  <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    {index === 0 && <FaTrophy className="text-sm" />}
                    {index === 1 && <FaUsers className="text-sm" />}
                    {index === 2 && <FaSearch className="text-sm" />}
                    {index === 3 && <FaCode className="text-sm" />}
                  </div>

                  <h4 className="mt-4 text-base font-bold">
                    {title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                    {description}
                  </p>

                </motion.div>
              )
            )}

          </div>
        </div>

        {/* =====================================================
            04 — THE INSIGHT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09]"
        >

          <div className="p-8 text-center md:p-12">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              The Insight
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              What if the right solution
              <br />
              <span className="gradient-text">
                already exists?
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
              Instead of building from scratch, discover what is
              already being built.
            </p>

            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">

              {[
                "Existing Ideas",
                "Relevant Projects",
                "Real Problems",
                "Right Connections",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <span className="rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] px-5 py-3 text-sm font-semibold text-[#A9A293]">
                    {item}
                  </span>

                  {index < 3 && (
                    <FaArrowRight className="text-xs text-[#D4AF37]" />
                  )}

                </div>
              ))}

            </div>

            <div className="mx-auto mt-9 max-w-2xl rounded-2xl border border-[#D4AF37]/15 bg-[#0B0B09] p-5">

              <p className="text-sm font-semibold text-[#E7C979]">
                The opportunity is not more ideas.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                It is creating a better way to discover the ideas
                that already exist.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}