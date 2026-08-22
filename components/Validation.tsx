"use client";

import { motion } from "framer-motion";
import {
  FaFlask,
  FaUsers,
  FaBuilding,
  FaSearch,
  FaBrain,
  FaHandshake,
  FaChartLine,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowRight,
  FaBullseye,
  FaDatabase,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface ValidationCard {
  icon: IconType;
  number: string;
  title: string;
  question: string;
  test: string;
  evidence: string[];
}

const validationCards: ValidationCard[] = [
  {
    icon: FaUsers,
    number: "01",
    title: "Creator Demand",
    question: "Will people actually submit their innovations?",
    test: "Recruit students, developers, researchers and independent builders and ask them to create real ScoutX profiles.",
    evidence: [
      "Profile completion",
      "Evidence uploaded",
      "Submission quality",
      "Creator retention",
    ],
  },
  {
    icon: FaBuilding,
    number: "02",
    title: "Organization Demand",
    question: "Will organizations search for existing solutions?",
    test: "Give companies real problems and let them search a curated ScoutX innovation database.",
    evidence: [
      "Problems submitted",
      "Searches performed",
      "Shortlists created",
      "Repeat usage",
    ],
  },
  {
    icon: FaSearch,
    number: "03",
    title: "Discovery Quality",
    question: "Can ScoutX actually find useful innovation?",
    test: "Compare ScoutX results against normal keyword search and ask organizations to judge relevance.",
    evidence: [
      "Relevant results",
      "Search satisfaction",
      "Shortlist rate",
      "Time saved",
    ],
  },
  {
    icon: FaHandshake,
    number: "04",
    title: "Real Outcomes",
    question: "Does discovery lead to something valuable?",
    test: "Track what happens after an organization discovers an innovation.",
    evidence: [
      "Creator contacts",
      "Meetings",
      "Pilot discussions",
      "Commercial opportunities",
    ],
  },
];

const experimentSteps = [
  {
    icon: FaDatabase,
    phase: "01",
    title: "Build the Supply",
    description:
      "Create a focused, high-quality database of real innovations instead of starting with thousands of empty profiles.",
    action: "Recruit 50–100 promising projects",
  },
  {
    icon: FaBuilding,
    phase: "02",
    title: "Bring Real Problems",
    description:
      "Work with a small group of organizations and collect problems they genuinely want solved.",
    action: "Recruit 5–10 pilot organizations",
  },
  {
    icon: FaBrain,
    phase: "03",
    title: "Test Discovery",
    description:
      "Let organizations search ScoutX and evaluate whether the results are relevant enough to investigate.",
    action: "Measure relevance + shortlist rate",
  },
  {
    icon: FaHandshake,
    phase: "04",
    title: "Track Connections",
    description:
      "Follow the journey after discovery to see whether creators and organizations actually want to connect.",
    action: "Track contact → discussion → opportunity",
  },
  {
    icon: FaChartLine,
    phase: "05",
    title: "Test Payment",
    description:
      "Once organizations receive real value, test whether they are willing to pay for repeated discovery.",
    action: "Convert pilots into paid accounts",
  },
];

const metrics = [
  {
    label: "SUPPLY",
    value: "Are good innovations entering?",
    items: ["Submissions", "Profile completion", "Evidence quality"],
  },
  {
    label: "DEMAND",
    value: "Are organizations looking?",
    items: ["Problems", "Searches", "Repeat searches"],
  },
  {
    label: "MATCH",
    value: "Are results useful?",
    items: ["Relevance", "Shortlists", "Search satisfaction"],
  },
  {
    label: "OUTCOME",
    value: "Is value being created?",
    items: ["Contacts", "Meetings", "Pilots / opportunities"],
  },
];

const risks = [
  {
    title: "Not enough quality innovation",
    response:
      "Start with curated projects instead of opening the platform to unlimited low-quality submissions.",
  },
  {
    title: "Organizations don't search",
    response:
      "Test the product with real problems rather than asking companies hypothetical questions.",
  },
  {
    title: "Search results are not relevant",
    response:
      "Use human feedback to continuously improve structured search and AI-assisted matching.",
  },
  {
    title: "Creators don't see value",
    response:
      "Measure whether visibility, connections and opportunities are strong enough to motivate continued participation.",
  },
];

export default function Validation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-[#080806] px-6 py-24 text-[#F7F2E8] sm:px-10 lg:px-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-250px] top-[300px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.04] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-250px] top-[1000px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            <FaFlask className="text-[10px]" />
            Validation
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Don't assume.
            <br />

            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Prove it.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] sm:text-lg">
            ScoutX will be validated through real innovators, real
            organizational problems, real searches, and real outcomes —
            not assumptions.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* VALIDATION LOOP */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="grid gap-3 md:grid-cols-4">

            {[
              ["Hypothesis", "What do we believe?"],
              ["Experiment", "How do we test it?"],
              ["Evidence", "What actually happened?"],
              ["Decision", "What do we change?"],
            ].map(([title, text], index) => (
              <div key={title} className="flex items-center">
                <div className="w-full rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-5 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    0{index + 1}
                  </div>

                  <h3 className="mt-2 text-sm font-bold">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs text-[#817A6E]">
                    {text}
                  </p>
                </div>

                {index < 3 && (
                  <FaArrowRight className="mx-2 hidden shrink-0 text-xs text-[#D4AF37]/40 md:block" />
                )}
              </div>
            ))}

          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* CORE QUESTION */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            What must ScoutX prove?
          </p>

          <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
            Four signals will tell us if the marketplace works.
          </h3>
        </motion.div>

        {/* ===================================================== */}
        {/* VALIDATION CARDS */}
        {/* ===================================================== */}

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {validationCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon />
                  </div>

                  <span className="font-mono text-xs text-[#D4AF37]/50">
                    {card.number}
                  </span>

                </div>

                <h4 className="mt-6 text-xl font-bold">
                  {card.title}
                </h4>

                <p className="mt-2 text-sm font-medium text-[#D4AF37]">
                  {card.question}
                </p>

                <div className="mt-5 rounded-2xl border border-white/[0.06] bg-[#0B0B09] p-4">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817A6E]">
                    Experiment
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#A9A293]">
                    {card.test}
                  </p>

                </div>

                <div className="mt-5">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817A6E]">
                    Evidence
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {card.evidence.map((item) => (
                      <span
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/[0.04] px-3 py-1.5 text-[11px] text-[#A9A293]"
                      >
                        <FaCheckCircle className="text-[9px] text-[#D4AF37]" />
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* ===================================================== */}
        {/* PILOT ROADMAP */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Pilot Roadmap
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Validate ScoutX in five steps.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#A9A293] sm:text-base">
              Start narrow. Prove value. Then expand.
            </p>

          </div>

          <div className="mt-10">

            {experimentSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="relative grid gap-5 border-b border-white/[0.07] py-7 md:grid-cols-[70px_50px_1fr_auto] md:items-center"
                >

                  <span className="font-mono text-xs text-[#D4AF37]/60">
                    {step.phase}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/10 bg-[#D4AF37]/[0.06] text-[#E7C979]">
                    <Icon className="text-sm" />
                  </div>

                  <div>

                    <h4 className="text-lg font-bold">
                      {step.title}
                    </h4>

                    <p className="mt-1 max-w-2xl text-sm leading-6 text-[#8F887B]">
                      {step.description}
                    </p>

                  </div>

                  <div className="rounded-full border border-[#D4AF37]/10 bg-[#11100D] px-4 py-2 text-center text-[11px] font-medium text-[#C9C1B3]">
                    {step.action}
                  </div>

                </motion.div>
              );
            })}

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* METRICS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Evidence Dashboard
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Measure value, not vanity.
            </h3>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-6"
              >

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  {metric.label}
                </p>

                <h4 className="mt-3 text-base font-bold">
                  {metric.value}
                </h4>

                <div className="mt-5 space-y-2">

                  {metric.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-[#8F887B]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
                      {item}
                    </div>
                  ))}

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* RISK SECTION */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                <FaExclamationTriangle />
                Risks
              </div>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                We validate the weaknesses too.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#8F887B]">
                A strong startup doesn't only search for evidence that its
                idea works. It actively looks for reasons it might fail.
              </p>

            </div>

            <div className="space-y-3">

              {risks.map((risk) => (
                <div
                  key={risk.title}
                  className="rounded-2xl border border-white/[0.07] bg-[#11100D] p-5"
                >

                  <h4 className="font-semibold">
                    {risk.title}
                  </h4>

                  <div className="mt-3 flex gap-3">

                    <FaBullseye className="mt-1 shrink-0 text-xs text-[#D4AF37]" />

                    <p className="text-sm leading-6 text-[#8F887B]">
                      {risk.response}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* FIRST PILOT */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] to-[#0E0E0C] p-8 sm:p-12"
        >

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                First Pilot
              </p>

              <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
                Start small.
                <br />
                <span className="text-[#A9A293]">
                  Learn fast.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8F887B]">
                Instead of trying to create a massive marketplace immediately,
                ScoutX can begin with a focused domain, curated innovations,
                real organizational problems and measurable discovery
                outcomes.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[430px]">

              {[
                ["5–10", "Organizations"],
                ["50–100", "Innovations"],
                ["Real", "Problems"],
                ["1", "Focused Domain"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-4 text-center"
                >

                  <div className="text-xl font-bold text-[#E7C979]">
                    {value}
                  </div>

                  <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#817A6E]">
                    {label}
                  </div>

                </div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* FINAL */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-4xl text-center"
        >

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The Validation Goal
          </p>

          <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Prove that ScoutX creates a
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              {" "}repeatable connection.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8F887B] sm:text-base">
            The strongest validation is not the number of users.
            It is when organizations discover something useful,
            creators receive meaningful opportunities, and both sides
            come back to ScoutX again.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">

            {[
              "Test",
              "Measure",
              "Learn",
              "Improve",
              "Repeat",
            ].map((item, index) => (
              <span
                key={item}
                className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-4 py-2 text-xs font-semibold text-[#C9C1B3]"
              >
                <span className="mr-2 text-[#D4AF37]">
                  0{index + 1}
                </span>
                {item}
              </span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}