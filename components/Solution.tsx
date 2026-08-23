"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaCheck,
  FaComments,
  FaLightbulb,
  FaSearch,
  FaTools,
  FaUser,
} from "react-icons/fa";

const intelligence = [
  "Understand the problem",
  "Analyze the solution",
  "Find related work",
  "Evaluate feasibility",
  "Identify differentiation",
  "Surface improvement areas",
];

const creatorFlow = [
  {
    icon: FaLightbulb,
    number: "01",
    title: "Publish",
    text: "Share an idea, prototype, research project, product, or solution.",
  },
  {
    icon: FaBrain,
    number: "02",
    title: "Analyze",
    text: "ScoutX structures the innovation and generates useful AI insights.",
  },
  {
    icon: FaTools,
    number: "03",
    title: "Improve",
    text: "See gaps, related work, opportunities, and ways to strengthen it.",
  },
  {
    icon: FaSearch,
    number: "04",
    title: "Get Found",
    text: "Become discoverable when someone is looking for what you built.",
  },
];

const organizationFlow = [
  {
    icon: FaSearch,
    number: "01",
    title: "Describe",
    text: "Enter a problem, requirement, technology, or capability you need.",
  },
  {
    icon: FaBrain,
    number: "02",
    title: "Match",
    text: "ScoutX analyzes the need and surfaces relevant innovations.",
  },
  {
    icon: FaUser,
    number: "03",
    title: "Evaluate",
    text: "Understand the solution, evidence, technology, and creator.",
  },
  {
    icon: FaComments,
    number: "04",
    title: "Connect",
    text: "Start a conversation for validation, collaboration, or adoption.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-24 text-[#F7F2E8] md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.055] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================================================
            HERO
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            The ScoutX Solution
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.08] md:text-6xl">
            Turn scattered innovation
            <br />
            into{" "}
            <span className="text-gradient">
              searchable opportunity.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX creates a continuous layer between people building
            solutions and people looking for them.
          </p>

          <div className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-2">
            <MiniPill text="Ideas" />
            <FaArrowRight className="text-xs text-[#D4AF37]/40" />
            <MiniPill text="AI Understanding" />
            <FaArrowRight className="text-xs text-[#D4AF37]/40" />
            <MiniPill text="Discovery" />
            <FaArrowRight className="text-xs text-[#D4AF37]/40" />
            <MiniPill text="Connection" />
          </div>
        </motion.div>

        {/* =========================================================
            THE PRODUCT IN ONE VIEW
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#11100D]"
        >
          <div className="border-b border-[#D4AF37]/10 px-6 py-5 text-center md:px-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              How ScoutX works
            </p>

            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              One platform. Two sides. One continuous loop.
            </h3>
          </div>

          <div className="grid md:grid-cols-3">

            {/* Innovator */}
            <SolutionNode
              icon={FaLightbulb}
              label="INNOVATOR"
              title="Publish what you built."
              text="Ideas, prototypes, research, products, and solutions become structured and visible."
            />

            {/* ScoutX */}
            <div className="relative border-y border-[#D4AF37]/10 bg-[#D4AF37]/[0.045] p-7 text-center md:border-x md:border-y-0 md:p-9">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-xl text-[#E7C979]">
                <FaBrain />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                SCOUTX AI
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Understand what it means.
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#A9A293]">
                ScoutX analyzes the innovation, its context, relevance,
                related work, and potential value.
              </p>
            </div>

            {/* Organization */}
            <SolutionNode
              icon={FaBuilding}
              label="ORGANIZATION"
              title="Find what you need."
              text="Search for solutions, explore relevant innovations, evaluate them, and connect with creators."
            />
          </div>
        </motion.div>

        {/* =========================================================
            CORE DIFFERENCE
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            The Core Difference
          </p>

          <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            ScoutX doesn't just store projects.
            <br />
            It makes them{" "}
            <span className="text-gradient">
              understandable.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8F887B]">
            A project sitting in a portfolio is difficult to evaluate.
            ScoutX adds context around what was built, what problem it
            addresses, how it works, and where it may fit.
          </p>
        </motion.div>

        {/* =========================================================
            AI INTELLIGENCE
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaBrain />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                AI Innovation Intelligence
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                From raw project
                <br />
                to useful intelligence.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#A9A293]">
                ScoutX AI doesn't decide whether an idea is good. It helps
                people understand it faster and from more useful angles.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {intelligence.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-[#0D0C0A] px-4 py-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10">
                    <FaCheck className="text-[9px] text-[#D4AF37]" />
                  </div>

                  <span className="text-xs text-[#C9C1B3]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            TWO USER FLOWS
        ========================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-2">

          <UserFlow
            eyebrow="FOR INNOVATORS"
            title="Give your work a path to discovery."
            steps={creatorFlow}
          />

          <UserFlow
            eyebrow="FOR ORGANIZATIONS"
            title="Start with the problem, not the network."
            steps={organizationFlow}
          />

        </div>

        {/* =========================================================
            SEARCH EXPERIENCE
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              A Different Way To Search
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Search by{" "}
              <span className="text-gradient">
                need.
              </span>
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#8F887B]">
              Organizations don't need to know who built the answer.
              They only need to describe the problem.
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8">

            <div className="grid gap-3 md:grid-cols-[1fr_auto_1.2fr_auto_1fr] md:items-stretch">

              <SearchStep
                icon={FaBuilding}
                label="THE NEED"
                text="Find a low-cost way to detect pipeline leaks."
              />

              <FlowArrow />

              <SearchStep
                icon={FaBrain}
                label="SCOUTX"
                text="Understands the problem and searches the innovation layer."
                highlight
              />

              <FlowArrow />

              <SearchStep
                icon={FaLightbulb}
                label="THE MATCH"
                text="Explore relevant solutions, evidence, technology, and creators."
              />

            </div>
          </div>
        </motion.div>

        {/* =========================================================
    NO SOLUTION / CREATE OPPORTUNITY
========================================================= */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative mt-6 overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-[#15130E] p-7 text-center md:p-10"
>
  {/* Subtle accent glow */}
  <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  {/* Top accent line */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

  <div className="relative z-10">
    {/* ICON */}
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E7C979]">
      <FaTools />
    </div>

    {/* LABEL */}
    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
      Nothing matches?
    </p>

    {/* TITLE */}
    <h3 className="mt-3 text-2xl font-bold md:text-4xl">
      Create the{" "}
      <span className="text-gradient">
        opportunity.
      </span>
    </h3>

    {/* DESCRIPTION */}
    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A9A293]">
      If an existing solution cannot be found, organizations can publish
      the problem itself — giving innovators a real opportunity to build
      toward a real need.
    </p>

    {/* FLOW */}
    <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
      <MiniPill text="Real Problem" />

      <FaArrowRight className="text-xs text-[#D4AF37]/50" />

      <MiniPill text="Open Opportunity" />

      <FaArrowRight className="text-xs text-[#D4AF37]/50" />

      <MiniPill text="New Solution" />

      <FaArrowRight className="text-xs text-[#D4AF37]/50" />

      <MiniPill text="Connection" />
    </div>

    {/* SMALL SUPPORTING LINE */}
    <p className="mt-6 text-[11px] text-[#6F695F]">
      No existing solution doesn't mean no opportunity.
    </p>
  </div>
</motion.div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <h3 className="text-3xl font-bold leading-tight md:text-5xl">
            The internet made information searchable.
            <br />
            <span className="text-gradient">
              ScoutX makes innovation searchable.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8F887B]">
            Built ideas should not disappear because the right person never
            found them.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* ================================================================
   USER FLOW
================================================================ */

function UserFlow({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: readonly {
    icon: React.ElementType;
    number: string;
    title: string;
    text: string;
  }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[2rem] border border-[#D4AF37]/10 bg-[#11100D] p-6 md:p-7"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
        {eyebrow}
      </p>

      <h3 className="mt-3 text-xl font-bold md:text-2xl">
        {title}
      </h3>

      <div className="mt-7 space-y-2">
        {steps.map(({ icon: Icon, number, title, text }) => (
          <div
            key={title}
            className="group flex gap-4 rounded-2xl border border-[#D4AF37]/10 bg-[#0D0C0A] p-4 transition hover:border-[#D4AF37]/25"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
              <Icon className="text-xs" />

              <span className="absolute -right-1 -top-1 text-[7px] font-bold text-[#D4AF37]">
                {number}
              </span>
            </div>

            <div>
              <h4 className="text-sm font-bold">
                {title}
              </h4>

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

/* ================================================================
   SOLUTION NODE
================================================================ */

function SolutionNode({
  icon: Icon,
  label,
  title,
  text,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="p-7 md:p-9">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
        <Icon />
      </div>

      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
        {label}
      </p>

      <h3 className="mt-3 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#8F887B]">
        {text}
      </p>
    </div>
  );
}

/* ================================================================
   SEARCH STEP
================================================================ */

function SearchStep({
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
      className={`rounded-2xl border p-5 text-center ${
        highlight
          ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.07]"
          : "border-[#D4AF37]/10 bg-[#0D0C0A]"
      }`}
    >
      <div
        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${
          highlight
            ? "bg-[#D4AF37]/15 text-[#E7C979]"
            : "bg-[#D4AF37]/10 text-[#D4AF37]"
        }`}
      >
        <Icon className="text-xs" />
      </div>

      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
        {label}
      </p>

      <p className="mt-2 text-xs leading-5 text-[#A9A293]">
        {text}
      </p>
    </div>
  );
}

/* ================================================================
   ARROW
================================================================ */

function FlowArrow() {
  return (
    <div className="flex items-center justify-center">
      <FaArrowRight className="rotate-90 text-xs text-[#D4AF37]/40 md:rotate-0" />
    </div>
  );
}

/* ================================================================
   PILL
================================================================ */

function MiniPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-3 py-1.5 text-xs font-medium text-[#A9A293]">
      {text}
    </span>
  );
}