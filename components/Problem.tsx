"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaSearch,
  FaClock,
  FaTrophy,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLightbulb,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

const problems = [
  {
    Icon: FaGlobe,
    number: "01",
    title: "Innovation is scattered",
    description:
      "Ideas, prototypes, research, repositories, and independent projects live across GitHub, portfolios, hackathons, colleges, and countless disconnected places.",
  },
  {
    Icon: FaSearch,
    number: "02",
    title: "Existing solutions are hard to find",
    description:
      "When an organization faces a problem, there is no single place to search for people who may have already built, tested, or explored a solution.",
  },
  {
    Icon: FaClock,
    number: "03",
    title: "Finding solutions is expensive",
    description:
      "Organizations often depend on networking, research, R&D, innovation programs, or custom challenges to discover relevant ideas — processes that take time and resources.",
  },
  {
    Icon: FaTrophy,
    number: "04",
    title: "Hackathons are temporary",
    description:
      "Hackathons can generate great ideas, but they require significant coordination and time. Promising solutions can also disappear once the event ends.",
  },
] as const;

const sources = [
  [FaGithub, "GitHub"],
  [FaLinkedin, "Networks"],
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
              The world struggles to find them.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            Every day, people build ideas, prototypes, and technical
            solutions. But when organizations need something new, discovering
            the right existing innovation is still difficult.
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
                But discovery is fragmented.
              </span>
            </h3>
          </div>

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

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-sm text-[#A9A293]">
            {["Ideas", "Projects", "Prototypes", "Research", "Evidence"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-xl border border-[#D4AF37]/10 px-4 py-2"
                >
                  {item}
                </span>
              )
            )}

            <FaArrowRight className="mx-2 hidden text-[#D4AF37]/40 sm:block" />

            <span className="rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 font-semibold text-[#E7C979]">
              Opportunity
            </span>
          </div>
        </motion.div>

        {/* Problems */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why the Gap Exists
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Four problems make discovery difficult.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(({ Icon, number, title, description }, index) => (
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
            ))}
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
              A company has a real problem but doesn't know whether someone
              has already built a solution for it.
            </p>

            <div className="mt-6 rounded-2xl border border-[#D4AF37]/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                The usual options
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
          </div>

          {/* Missing layer */}
          <div className="flex flex-col justify-center border-t border-[#D4AF37]/10 bg-gradient-to-br from-[#17150F] to-[#0F0E0B] p-8 md:border-l md:border-t-0 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              The Missing Layer
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
              What if the solution
              <br />
              <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
                already exists?
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-[#A9A293]">
              Somewhere, someone may already have the idea, prototype, or
              technology the organization needs. The problem is finding it.
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
            Organizations don't need
            <br />
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              more ideas.
            </span>
            <br />
            They need access to the right ones.
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            The challenge is not simply creating new innovation. It is
            discovering, understanding, and connecting with innovation that
            already exists — before spending the time and resources to create
            it again.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Find", "Evaluate", "Connect"].map((item, index) => (
              <span
                key={item}
                className={`rounded-xl border px-5 py-3 text-sm font-semibold ${
                  index === 2
                    ? "border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#E7C979]"
                    : "border-[#D4AF37]/10 text-[#A9A293]"
                }`}
              >
                {item}
              </span>
            ))}
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
            The answer isn't another social network.
          </p>

          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            It's a smarter way to{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              discover what already exists.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}