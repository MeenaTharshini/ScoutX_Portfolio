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
  FaLink,
  FaQuestion,
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
    title: "Scattered",
    description:
      "Useful innovations are spread across GitHub, hackathons, colleges, portfolios, research labs, and private networks.",
    icon: FaCode,
  },
  {
    number: "02",
    title: "Opportunity-Dependent",
    description:
      "Discovery often depends on being in the right event, institution, community, or network at the right time.",
    icon: FaTrophy,
  },
  {
    number: "03",
    title: "Hard to Match",
    description:
      "Finding a project is easy. Knowing whether it actually solves a specific real-world problem is much harder.",
    icon: FaSearch,
  },
  {
    number: "04",
    title: "Disconnected",
    description:
      "The people building solutions often don't know who needs them — and organizations don't know who has built them.",
    icon: FaUsers,
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
            01 — THE CORE PROBLEM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C979]"
          >
            <FaLightbulb className="text-[10px]" />
            The Problem
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Problems exist.
            <br />
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Solutions exist.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            But the people who need solutions often cannot find the people
            who have already built them.
          </p>
        </motion.div>

        {/* =====================================================
            02 — THE DISCONNECT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">

            {/* Organization */}
            <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaBuilding />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Organization
              </p>

              <h3 className="mt-2 text-xl font-bold">
                "Who has already solved this?"
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8F887B]">
                A company has a real technical or business problem
                and needs to find a relevant solution.
              </p>
            </div>

            {/* Gap */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaQuestion />
              </div>

              <FaArrowRight className="hidden text-[#D4AF37] md:block" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]/60">
                Discovery Gap
              </span>
              <FaArrowRight className="hidden rotate-180 text-[#D4AF37] md:block" />
            </div>

            {/* Innovator */}
            <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaLightbulb />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Innovator
              </p>

              <h3 className="mt-2 text-xl font-bold">
                "Who needs what I built?"
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8F887B]">
                A student, researcher, developer, startup, or builder
                has already created something potentially useful.
              </p>
            </div>

          </div>

          <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.05] px-5 py-4 text-center">
            <FaLink className="shrink-0 text-[#D4AF37]" />

            <p className="text-sm font-semibold text-[#C9C1B3]">
              The problem isn't always a lack of solutions.
              <span className="text-[#E7C979]">
                {" "}It's a lack of discovery.
              </span>
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            03 — WHERE DISCOVERY HAPPENS TODAY
        ====================================================== */}

        <div className="mt-14">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-7 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Where Discovery Happens Today
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Innovation is everywhere.
              <br />
              <span className="text-[#8F887B]">
                Discovery is fragmented.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#8F887B]">
              Organizations rely on disconnected channels, each revealing
              only a small part of the innovation landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {discoveryChannels.map(([Icon, label]) => (
              <motion.div
                key={label}
                whileHover={{ y: -3 }}
                className="flex items-center justify-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-[#11100D] px-4 py-5"
              >
                <Icon className="text-[#D4AF37]" />

                <span className="text-sm font-medium text-[#C9C1B3]">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            04 — WHY THE GAP EXISTS
        ====================================================== */}

        <div className="mt-14">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-7 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why Existing Channels Fall Short
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Finding innovation shouldn't depend on luck.
            </h3>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(
              ({ number, title, description, icon: Icon }, index) => (
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
            05 — THE INSIGHT
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
              <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
                already exists?
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
              Before building from scratch, organizations should be able
              to discover what is already being built.
            </p>

            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {[
                "Real Problem",
                "Existing Innovation",
                "AI Understanding",
                "Relevant Match",
                "Right Connection",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] px-5 py-3 text-sm font-semibold text-[#A9A293]">
                    {item}
                  </span>

                  {index < 4 && (
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
                It is creating a better way for existing ideas,
                real problems, and the right people to find each other.
              </p>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}