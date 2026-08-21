"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaComments,
  FaGlobe,
  FaRobot,
  FaSearch,
  FaBullseye,
} from "react-icons/fa";

const advantages = [
  {
    icon: FaGlobe,
    title: "Beyond Traditional Discovery",
    text: "Discover innovators and projects beyond resumes, networks, and one-time events.",
  },
  {
    icon: FaRobot,
    title: "AI-Assisted Evaluation",
    text: "Understand innovation through project evidence, relevance, feasibility, and related work.",
  },
  {
    icon: FaBullseye,
    title: "Requirement-Based Matching",
    text: "Match organizational technology and domain needs with relevant innovations.",
  },
  {
    icon: FaComments,
    title: "From Discovery to Connection",
    text: "Shortlist promising ideas, connect with builders, or post problems for innovators to solve.",
  },
];

const fragmented = [
  "Projects scattered across platforms",
  "Manual searching and comparison",
  "Limited visibility after events",
  "Talent judged mainly through profiles",
];

const scoutx = [
  "Structured innovation profiles",
  "AI-assisted project insights",
  "Technology & domain matching",
  "Evidence-backed discovery",
  "Direct connection with builders",
];

export default function Advantage() {
  return (
    <section
      id="advantage"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-16 text-[#F7F1E3] md:py-20"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#D4AF37]/[0.06] blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Advantage
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            One discovery layer for{" "}
            <span className="gradient-text">
              innovation.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX brings projects, evidence, innovators, and organizational
            requirements into one continuous discovery ecosystem.
          </p>
        </motion.div>

        {/* ADVANTAGES */}
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-5 transition hover:border-[#D4AF37]/25"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/10 bg-[#D4AF37]/[0.07] text-[#E7C979]">
                <Icon className="text-sm" />
              </div>

              <h3 className="mt-4 text-sm font-bold">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* COMPARISON */}
        <div className="mt-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              The Difference
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              From fragmented discovery to{" "}
              <span className="gradient-text">
                focused discovery.
              </span>
            </h3>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">

            {/* Fragmented */}
            <div className="rounded-2xl border border-white/[0.06] bg-[#11100D] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777267]">
                Today
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Fragmented Discovery
              </h3>

              <div className="mt-5 space-y-3">
                {fragmented.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#8F887B]"
                  >
                    <span className="mt-0.5 text-[#6D675D]">
                      ×
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ScoutX */}
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#15130E] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                With ScoutX
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Continuous Innovation Discovery
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#A9A293]">
                Organizations can discover existing innovation or post
                problems when the right solution does not yet exist.
              </p>

              <div className="mt-5 space-y-3">
                {scoutx.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#C0B8A9]"
                  >
                    <FaCheckCircle className="mt-0.5 shrink-0 text-xs text-[#D4AF37]" />

                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* CORE DIFFERENTIATOR */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Why ScoutX?
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Discover what people{" "}
            <span className="gradient-text">
              actually build.
            </span>
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#A9A293]">
            Instead of relying only on resumes, networks, or events,
            ScoutX connects real project evidence with real organizational
            needs.
          </p>
        </motion.div>

      </div>
    </section>
  );
}