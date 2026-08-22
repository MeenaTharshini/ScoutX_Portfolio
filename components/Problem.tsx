"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaSearch,
  FaClock,
  FaTrophy,
  FaGithub,
  FaUsers,
  FaCode,
  FaLightbulb,
  FaBuilding,
  FaArrowRight,
  FaUserSecret,
  FaProjectDiagram,
} from "react-icons/fa";

const problems = [
  {
    Icon: FaUserSecret,
    number: "01",
    title: "Valuable innovation stays invisible",
    description:
      "Students, developers, researchers, and independent builders create ideas and prototypes every day. Many never reach the networks where organizations look for innovation.",
  },
  {
    Icon: FaTrophy,
    number: "02",
    title: "Discovery depends on access",
    description:
      "Hackathons, competitions, incubators, institutions, and professional networks make some innovators visible. But many capable builders never enter those channels.",
  },
  {
    Icon: FaSearch,
    number: "03",
    title: "Finding the right innovation is difficult",
    description:
      "Even when organizations search across GitHub, portfolios, research, or networks, it is difficult to determine which project actually matches their problem.",
  },
  {
    Icon: FaClock,
    number: "04",
    title: "Ideas and problems rarely meet",
    description:
      "A builder may have a promising solution without knowing who needs it, while an organization may have a real problem without knowing who is capable of solving it.",
  },
] as const;

const sources = [
  [FaGithub, "GitHub"],
  [FaUsers, "Networks"],
  [FaTrophy, "Hackathons"],
  [FaCode, "Portfolios"],
] as const;

const hiddenBuilders = [
  "Students",
  "Independent Builders",
  "Developers",
  "Researchers",
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#D4AF37]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#D4AF37]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              Many of them remain invisible.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            Every day, people build ideas, prototypes, research, and technical
            solutions. But visibility often depends on whether they entered the
            right hackathon, network, institution, or innovation program.
          </p>
        </motion.div>

        {/* Discovery Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
                Visibility is not.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#8F887B] md:text-base">
              Organizations tend to discover innovation through channels that
              already make creators visible.
            </p>
          </div>

          {/* Existing discovery channels */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {sources.map(([Icon, label]) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/10 bg-white/[0.03] px-4 py-4"
              >
                <Icon className="text-[#D4AF37]" />

                <span className="text-sm font-medium text-[#C9C1B3]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Hidden innovation */}
          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-6">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaProjectDiagram />
              </div>

              <div className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Outside the visible ecosystem
                </p>

                <p className="mt-1 text-sm text-[#A9A293]">
                  Valuable work can remain disconnected from the organizations
                  that could benefit from it.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {hiddenBuilders.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-[#D4AF37]/10 px-4 py-2 text-xs text-[#8F887B]"
                >
                  {item}
                </span>
              ))}

              <FaArrowRight className="mx-2 hidden self-center text-[#D4AF37]/40 sm:block" />

              <span className="rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold text-[#E7C979]">
                Unseen Innovation
              </span>
            </div>
          </div>
        </motion.div>

        {/* Problems */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why the Gap Exists
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Four barriers keep innovation disconnected.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(
              ({ Icon, number, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25"
                >
                  <span className="text-xs font-bold tracking-widest text-[#D4AF37]/30">
                    {number}
                  </span>

                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979] transition group-hover:bg-[#D4AF37]/15">
                    <Icon />
                  </div>

                  <h4 className="mt-5 text-lg font-bold">{title}</h4>

                  <p className="mt-3 text-sm leading-6 text-[#8F887B]">
                    {description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Real-world scenario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid gap-6 overflow-hidden rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] md:grid-cols-2"
        >
          {/* Organization */}
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaBuilding />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  The Organization
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  “We need a solution.”
                </h3>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-[#A9A293]">
              A company has a real problem and wants to know whether someone
              has already built something that could help.
            </p>

            <div className="mt-6 rounded-2xl border border-[#D4AF37]/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                The usual discovery paths
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Search networks",
                  "Contact institutions",
                  "Run R&D",
                  "Launch a challenge",
                  "Organize a hackathon",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[#D4AF37]/10 px-3 py-2 text-xs text-[#A9A293]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-[#817A6E]">
              These channels can be valuable — but they don't expose everyone
              who is already building.
            </p>
          </div>

          {/* Missing layer */}
          <div className="flex flex-col justify-center border-t border-[#D4AF37]/10 bg-gradient-to-br from-[#17150F] to-[#0F0E0B] p-8 md:border-l md:border-t-0 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              The Missing Layer
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
              What if the right solution
              <br />
              <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
                was built by someone you've never met?
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-[#A9A293]">
              Somewhere, a student, developer, researcher, or independent
              builder may already have something relevant. The organization
              simply has no way to discover them.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#D4AF37]/15" />

              <span className="text-sm font-semibold text-[#E7C979]">
                That is the discovery gap.
              </span>

              <div className="h-px flex-1 bg-[#D4AF37]/15" />
            </div>
          </div>
        </motion.div>

        {/* Core Gap */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] p-8 text-center md:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            The Core Problem
          </p>

          <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Innovation shouldn't be
            <br />
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              discoverable only through access.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            Valuable work can come from anywhere. But today, organizations
            often discover innovation through the people, events, and networks
            already visible to them. ScoutX aims to create a continuous layer
            where ideas, prototypes, research, and solutions can become
            discoverable — regardless of where or how they were built.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Make Visible", "Understand", "Match", "Connect"].map(
              (item, index) => (
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
              )
            )}
          </div>
        </motion.div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#817A6E]">
            The goal isn't to make ideas popular.
          </p>

          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            It's to make the{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              right ideas findable.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}