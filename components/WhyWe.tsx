"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaSearch,
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaSearch,
    title: "Continuous Discovery",
    text: "Companies don't have to wait for the next hackathon or challenge. ScoutX keeps existing ideas and prototypes discoverable.",
  },
  {
    icon: FaRobot,
    title: "AI-Assisted Understanding",
    text: "AI helps structure ideas, identify relevant technologies, compare related work, and surface useful signals.",
  },
  {
    icon: FaBullseye,
    title: "Problem-to-Innovation Matching",
    text: "Organizations can search by problem, domain, technology, or capability and connect with the people building relevant solutions.",
  },
];

const difference = [
  "Not limited to hackathon participants",
  "Ideas remain discoverable after events",
  "Evidence-based innovation profiles",
  "Organizations can search before building from scratch",
];

export default function WhyWe() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-16 text-[#F7F2E8] md:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#D4AF37]/[0.05] blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Why ScoutX?
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            Discovery should not depend on{" "}
            <span className="gradient-text">who joined the event.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#A9A293] md:text-base">
            ScoutX creates a continuous discovery layer between organizations
            looking for solutions and people already building them.
          </p>
        </motion.div>

        {/* THREE CORE REASONS */}
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
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

        {/* SIMPLE DIFFERENCE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-7"
        >
          <div className="grid gap-5 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                The difference
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Beyond hackathons.{" "}
                <span className="gradient-text">
                  Beyond portfolios.
                </span>
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#A9A293]">
                ScoutX focuses on discovering what people actually build and
                connecting that work to real organizational needs.
              </p>
            </div>

            <div className="space-y-3">
              {difference.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#C0B8A9]"
                >
                  <FaCheckCircle className="mt-0.5 shrink-0 text-xs text-[#D4AF37]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}