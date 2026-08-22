"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaCheckCircle,
  FaLightbulb,
  FaSearch,
  FaTools,
  FaUser,
} from "react-icons/fa";

const aiSignals = [
  "Problem fit",
  "Technology match",
  "Related work",
  "Feasibility",
  "Evidence",
  "Improvement opportunities",
];

const innovatorSteps = [
  {
    icon: FaLightbulb,
    title: "Share",
    text: "Post an idea, prototype, research project, or portfolio.",
  },
  {
    icon: FaBrain,
    title: "AI Analysis",
    text: "ScoutX structures and analyzes the innovation.",
  },
  {
    icon: FaSearch,
    title: "Get Discovered",
    text: "Organizations can find it through problem-based search.",
  },
];

const organizationSteps = [
  {
    icon: FaSearch,
    title: "Describe",
    text: "Enter the problem, requirement, or technology you need.",
  },
  {
    icon: FaBrain,
    title: "Match",
    text: "AI ranks existing innovations by relevance.",
  },
  {
    icon: FaUser,
    title: "Connect",
    text: "Explore the work and contact the creator directly.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            The ScoutX Solution
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Make innovation{" "}
            <span className="text-gradient">discoverable.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX creates a continuous discovery layer where innovators can
            showcase their work and organizations can find relevant solutions
            to real problems.
          </p>
        </motion.div>

        {/* CORE FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8"
        >
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">

            <div className="text-center md:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#817A6E]">
                Today
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Discovery depends on access.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                Hackathons, networks and institutions can make innovators
                visible, but they are limited in reach, time and cost.
              </p>
            </div>

            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
              <FaArrowRight />
            </div>

            <div className="text-center md:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                With ScoutX
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Discovery becomes continuous.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                Innovations stay searchable and can be matched with problems
                whenever an organization needs a solution.
              </p>
            </div>

          </div>
        </motion.div>

        {/* TWO SIDES */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">

          <FlowCard
            label="For Innovators"
            title="Build once. Stay discoverable."
            steps={innovatorSteps}
          />

          <FlowCard
            label="For Organizations"
            title="Search for solutions, not just people."
            steps={organizationSteps}
          />

        </div>

        {/* AI MATCHING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#11100D]"
        >
          <div className="grid md:grid-cols-2">

            <div className="p-7 md:p-9">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaBrain />
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                AI Matching
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Beyond keyword search.
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#A9A293]">
                ScoutX analyzes both the organization's problem and the
                innovation to identify meaningful matches and explain why
                they are relevant.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#BDB5A7]">
                <FaBuilding className="text-[#D4AF37]" />
                Problem
                <FaArrowRight className="text-[#D4AF37]/40" />
                <FaBrain className="text-[#D4AF37]" />
                AI Match
                <FaArrowRight className="text-[#D4AF37]/40" />
                <FaLightbulb className="text-[#D4AF37]" />
                Innovation
              </div>

            </div>

            <div className="border-t border-[#D4AF37]/10 bg-[#0D0C0A] p-7 md:border-l md:border-t-0 md:p-9">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                What AI considers
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {aiSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-2 rounded-xl border border-[#D4AF37]/10 bg-[#11100D] px-3 py-2.5 text-xs text-[#C9C1B3]"
                  >
                    <FaCheckCircle className="shrink-0 text-[10px] text-[#D4AF37]" />
                    {signal}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </motion.div>

        {/* CONNECTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Loop
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Problem →{" "}
            <span className="text-gradient">
              Match → Connection
            </span>
          </h3>

          <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-center gap-3 md:flex-row">

            <ConnectionCard
              icon={FaBuilding}
              label="Organization"
              text="Real problem"
            />

            <FaArrowRight className="rotate-90 text-[#D4AF37]/40 md:rotate-0" />

            <ConnectionCard
              icon={FaBrain}
              label="ScoutX AI"
              text="Finds relevance"
              highlight
            />

            <FaArrowRight className="rotate-90 text-[#D4AF37]/40 md:rotate-0" />

            <ConnectionCard
              icon={FaLightbulb}
              label="Innovation"
              text="Potential solution"
            />

            <FaArrowRight className="rotate-90 text-[#D4AF37]/40 md:rotate-0" />

            <ConnectionCard
              icon={FaUser}
              label="Creator"
              text="Direct connection"
            />

          </div>
        </motion.div>

        {/* NO MATCH */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 text-center md:p-9"
        >
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
            <FaTools />
          </div>

          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            No strong match?
          </p>

          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            Turn the problem into an{" "}
            <span className="text-gradient">opportunity.</span>
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#A9A293]">
            Organizations can post unsolved problems, allowing innovators to
            discover real needs and build new solutions.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <FlowPill text="Problem" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Post" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Innovators Discover" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="New Solutions" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* FLOW CARD */

function FlowCard({
  label,
  title,
  steps,
}: {
  label: string;
  title: string;
  steps: readonly {
    icon: React.ElementType;
    title: string;
    text: string;
  }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition hover:border-[#D4AF37]/25 md:p-7"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
        {label}
      </p>

      <h3 className="mt-3 text-xl font-bold">
        {title}
      </h3>

      <div className="mt-6 space-y-3">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className="flex gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
              <Icon className="text-xs" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold text-[#D4AF37]">
                  0{index + 1}
                </span>

                <h4 className="text-sm font-semibold">
                  {title}
                </h4>
              </div>

              <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* CONNECTION CARD */

function ConnectionCard({
  icon: Icon,
  label,
  text,
  highlight = false,
}: {
  icon: React.ElementType;
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`w-full rounded-2xl border p-4 text-center md:w-44 ${
        highlight
          ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.08]"
          : "border-[#D4AF37]/10 bg-[#11100D]"
      }`}
    >
      <div
        className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl ${
          highlight
            ? "bg-[#D4AF37]/15 text-[#E7C979]"
            : "bg-[#D4AF37]/10 text-[#D4AF37]"
        }`}
      >
        <Icon className="text-xs" />
      </div>

      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
        {label}
      </p>

      <p className="mt-1 text-xs text-[#A9A293]">
        {text}
      </p>
    </div>
  );
}

/* PILL */

function FlowPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-3 py-1.5 text-[#A9A293]">
      {text}
    </span>
  );
}