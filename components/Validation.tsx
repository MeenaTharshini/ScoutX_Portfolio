"use client";

import { motion } from "framer-motion";
import {
  FaFlask,
  FaLightbulb,
  FaBuilding,
  FaBrain,
  FaHandshake,
  FaChartLine,
  FaExclamationTriangle,
  FaArrowRight,
  FaCheckCircle,
  FaBullseye,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface ValidationTest {
  number: string;
  icon: IconType;
  title: string;
  question: string;
  experiment: string;
  signal: string[];
}

const validationTests: ValidationTest[] = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Can hidden innovators become discoverable?",
    question:
      "Will people submit ideas, prototypes, research, or portfolios even without hackathons or institutional networks?",
    experiment:
      "Recruit students, developers, researchers, and independent builders who have existing work but limited access to innovation programs.",
    signal: [
      "Innovation submissions",
      "Profile completion",
      "Evidence quality",
      "Creator retention",
    ],
  },
  {
    number: "02",
    icon: FaBuilding,
    title: "Do organizations have a discovery problem?",
    question:
      "Will companies search outside their existing networks when they need a solution?",
    experiment:
      "Bring real technical or business problems from pilot organizations and let them search ScoutX for existing innovations.",
    signal: [
      "Problems submitted",
      "Searches performed",
      "Shortlists created",
      "Repeat searches",
    ],
  },
  {
    number: "03",
    icon: FaBrain,
    title: "Does AI improve discovery?",
    question:
      "Can ScoutX identify useful innovations beyond simple keyword matching?",
    experiment:
      "Compare ScoutX's AI-assisted results with conventional keyword search and have organizations rate the relevance of the results.",
    signal: [
      "Relevant matches",
      "Match accuracy",
      "Search satisfaction",
      "Time saved",
    ],
  },
  {
    number: "04",
    icon: FaHandshake,
    title: "Does discovery create opportunity?",
    question:
      "When the right innovation is found, do organizations actually want to meet the creator?",
    experiment:
      "Track what happens after a match — profile views, creator contacts, discussions, pilots, and potential collaborations.",
    signal: [
      "Creator contacts",
      "Meetings",
      "Pilot discussions",
      "Collaboration opportunities",
    ],
  },
  {
    number: "05",
    icon: FaChartLine,
    title: "Will organizations pay for discovery?",
    question:
      "Is finding relevant innovation valuable enough to become a recurring business service?",
    experiment:
      "After demonstrating useful matches, offer pilot organizations paid discovery missions or ScoutX Pro access.",
    signal: [
      "Paid pilots",
      "Conversion rate",
      "Repeat usage",
      "Willingness to pay",
    ],
  },
];

const pilotSteps = [
  {
    number: "01",
    title: "Curate the supply",
    description:
      "Start with a small set of genuine innovations from students, builders, researchers, and developers.",
    metric: "50–100 innovations",
  },
  {
    number: "02",
    title: "Bring real problems",
    description:
      "Partner with organizations that have actual problems they are willing to explore solutions for.",
    metric: "5–10 organizations",
  },
  {
    number: "03",
    title: "Run the match",
    description:
      "Let organizations describe their problems and compare ScoutX recommendations with conventional discovery.",
    metric: "Measure relevance",
  },
  {
    number: "04",
    title: "Follow the connection",
    description:
      "Track whether useful discoveries turn into conversations, technical evaluations, pilots, or opportunities.",
    metric: "Track outcomes",
  },
  {
    number: "05",
    title: "Test payment",
    description:
      "If ScoutX repeatedly saves discovery time or surfaces valuable solutions, test whether organizations will pay.",
    metric: "Paid pilot",
  },
];

const risks = [
  {
    title: "Low-quality or incomplete innovations",
    response:
      "Begin with curated submissions, structured profiles, evidence requirements, and progressive quality checks instead of opening the marketplace without controls.",
  },
  {
    title: "Organizations don't actively search",
    response:
      "Do not validate this with surveys alone. Give organizations real problems and measure whether they actually use ScoutX to find alternatives.",
  },
  {
    title: "AI produces weak matches",
    response:
      "Keep human relevance feedback in the loop and measure AI recommendations against organization-reviewed results before relying on automated ranking.",
  },
  {
    title: "Creators don't receive meaningful value",
    response:
      "Measure actual visibility, qualified contacts, conversations, pilots, and opportunities — not just profile views.",
  },
  {
    title: "The marketplace becomes empty",
    response:
      "Start narrow with one focused domain and manually curate the first supply instead of trying to launch a large general-purpose marketplace immediately.",
  },
];

export default function Validation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-[#080806] px-6 py-24 text-[#F7F2E8] sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-250px] top-[250px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-250px] top-[1100px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.03] blur-[140px]" />

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
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
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
            organizational problems, real discovery, and measurable outcomes.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* CORE HYPOTHESIS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  The Creator Side
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  “I built something. Can anyone find it?”
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#8F887B]">
                  People with ideas and prototypes should not need a hackathon,
                  institution, or existing network to become visible.
                </p>
              </div>

              <div className="hidden lg:block">
                <FaArrowRight className="text-xl text-[#D4AF37]/50" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  The Organization Side
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  “Who has already solved this?”
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#8F887B]">
                  Organizations should be able to discover relevant work
                  beyond the people and networks they already know.
                </p>
              </div>

            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-6 text-center">
              <p className="text-sm font-medium text-[#C9C1B3]">
                ScoutX must prove that these two sides can repeatedly find each
                other.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* VALIDATION QUESTIONS */}
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
            Five questions determine whether the model works.
          </h3>
        </motion.div>

        {/* ===================================================== */}
        {/* VALIDATION TESTS */}
        {/* ===================================================== */}

        <div className="mt-10 grid gap-5 lg:grid-cols-2">

          {validationTests.map((test, index) => {
            const Icon = test.icon;

            return (
              <motion.article
                key={test.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className={`rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25 ${
                  index === 4 ? "lg:col-span-2" : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon />
                  </div>

                  <span className="font-mono text-xs text-[#D4AF37]/50">
                    {test.number}
                  </span>

                </div>

                <h4 className="mt-6 text-xl font-bold">
                  {test.title}
                </h4>

                <p className="mt-2 text-sm font-medium leading-6 text-[#D4AF37]">
                  {test.question}
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">

                  <div className="rounded-2xl border border-white/[0.06] bg-[#0B0B09] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817A6E]">
                      Experiment
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#A9A293]">
                      {test.experiment}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817A6E]">
                      Signals
                    </p>

                    <div className="flex flex-wrap gap-2 md:max-w-[280px]">
                      {test.signal.map((item) => (
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

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* ===================================================== */}
        {/* PILOT */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              First Pilot
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Start narrow.{" "}
              <span className="text-[#A9A293]">
                Learn quickly.
              </span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#8F887B] sm:text-base">
              ScoutX should not attempt to build a massive marketplace before
              proving that discovery creates value.
            </p>
          </div>

          <div className="mt-10">

            {pilotSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="grid gap-4 border-b border-white/[0.07] py-6 md:grid-cols-[60px_1fr_auto] md:items-center"
              >

                <span className="font-mono text-xs text-[#D4AF37]/60">
                  {step.number}
                </span>

                <div>
                  <h4 className="text-lg font-bold">
                    {step.title}
                  </h4>

                  <p className="mt-1 max-w-3xl text-sm leading-6 text-[#8F887B]">
                    {step.description}
                  </p>
                </div>

                <div className="w-fit rounded-full border border-[#D4AF37]/10 bg-[#11100D] px-4 py-2 text-[11px] font-medium text-[#C9C1B3]">
                  {step.metric}
                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* RISKS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                <FaExclamationTriangle />
                Risks
              </div>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                What could make ScoutX fail?
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#8F887B]">
                Validation is not about proving ScoutX is right. It is about
                finding evidence strong enough to know what works, what fails,
                and what needs to change.
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
        {/* SUCCESS CRITERIA */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-5xl"
        >

          <div className="rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] to-[#0E0E0C] p-8 text-center sm:p-12">

            <div className="flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaUsers />
              </div>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Validation Goal
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-5xl">
              Prove the connection.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8F887B] sm:text-base">
              ScoutX succeeds when a creator who was previously difficult to
              discover becomes visible to an organization with a real problem
              — and that discovery leads to a meaningful conversation,
              opportunity, or collaboration.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">

              {[
                "Discover",
                "Match",
                "Connect",
                "Validate",
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

          </div>

        </motion.div>

      </div>
    </section>
  );
}