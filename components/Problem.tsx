"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaTrophy,
  FaClock,
  FaBuilding,
  FaLightbulb,
  FaProjectDiagram,
  FaUsers,
  FaGithub,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

const problems = [
  {
    Icon: FaProjectDiagram,
    number: "01",
    title: "Great innovation stays invisible",
    description:
      "Students, developers, researchers, and independent builders create valuable ideas and prototypes, but many never reach the organizations that could use them.",
  },
  {
    Icon: FaTrophy,
    number: "02",
    title: "Discovery depends on temporary channels",
    description:
      "Hackathons, competitions, incubators, and networks can expose innovation, but they are limited by time, participation, reach, and access.",
  },
  {
    Icon: FaSearch,
    number: "03",
    title: "Finding the right solution takes time",
    description:
      "Organizations may search GitHub, portfolios, research, networks, or institutions, but identifying which project actually fits a problem is difficult.",
  },
  {
    Icon: FaClock,
    number: "04",
    title: "Problems and solutions rarely meet",
    description:
      "A creator may already have a solution without knowing who needs it, while an organization may spend time and money searching for something that already exists.",
  },
];

const discoveryChannels = [
  [FaGithub, "GitHub"],
  [FaUsers, "Networks"],
  [FaTrophy, "Hackathons"],
  [FaCode, "Portfolios"],
] as const;

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

        {/* HEADER */}
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
            Innovation exists everywhere, but organizations often discover it
            through limited networks, events, and search channels.
          </p>
        </motion.div>

        {/* DISCOVERY GAP */}
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
                Discovery is not continuous.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#8F887B]">
              Today, organizations often rely on channels that make only a
              portion of innovators visible.
            </p>
          </div>

          {/* CHANNELS */}
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {discoveryChannels.map(([Icon, label]) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-white/[0.03] px-4 py-4"
              >
                <Icon className="text-[#D4AF37]" />
                <span className="text-sm text-[#C9C1B3]">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* HACKATHON PROBLEM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaTrophy />
              </div>

              <h3 className="mt-5 text-2xl font-bold md:text-3xl">
                Hackathons help.
                <br />
                <span className="gradient-text">
                  But they are temporary.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#A9A293]">
                Hackathons and innovation challenges can bring creators and
                organizations together, but organizing, participating, judging,
                and running them takes significant time, coordination, and
                resources.
              </p>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Even online hackathons
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Limited to a specific event or time period",
                  "Only attracts people who discover or join the event",
                  "Large numbers of submissions are difficult to evaluate",
                  "Good projects can disappear after the event ends",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#A9A293]"
                  >
                    <FaArrowRight className="mt-1 shrink-0 text-[10px] text-[#D4AF37]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* FOUR CORE PROBLEMS */}
        <div className="mt-14">
          <div className="mb-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              The Core Issues
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Four reasons innovation gets missed.
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(
              ({ Icon, number, title, description }, index) => (
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
                    <Icon className="text-sm" />
                  </div>

                  <h4 className="mt-4 text-base font-bold">{title}</h4>

                  <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                    {description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* THE MISSING LAYER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09]"
        >
          <div className="p-8 text-center md:p-12">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              The Missing Layer
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              What if the right solution
              <br />
              <span className="gradient-text">
                already exists?
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#A9A293] md:text-base">
              Somewhere, a student, developer, researcher, or independent
              builder may already have something relevant. The challenge is
              finding them before spending more time and resources building
              from scratch.
            </p>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#D4AF37]/15 bg-[#0B0B09] p-5">
              <p className="text-sm font-semibold text-[#E7C979]">
                ScoutX introduces a continuous discovery layer.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                Instead of waiting for the next hackathon, challenge, or
                networking opportunity, innovations remain discoverable
                whenever an organization needs them.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {[
                "Discover",
                "Understand",
                "Match",
                "Connect",
              ].map((item, index) => (
                <span
                  key={item}
                  className={`rounded-xl border px-5 py-3 text-sm font-semibold ${
                    index === 3
                      ? "border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#E7C979]"
                      : "border-[#D4AF37]/10 text-[#A9A293]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm text-[#817A6E]">
              The goal isn't to make ideas popular.
            </p>

            <h4 className="mt-2 text-xl font-bold md:text-2xl">
              It's to make the{" "}
              <span className="gradient-text">
                right ideas findable.
              </span>
            </h4>

          </div>
        </motion.div>

      </div>
    </section>
  );
}