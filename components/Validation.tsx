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
  FaSearch,
  FaRocket,
  FaUsers,
  FaSyncAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface ValidationPoint {
  number: string;
  icon: IconType;
  title: string;
  belief: string;
  action: string;
  signal: string;
}

const validationPoints: ValidationPoint[] = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Can we make good work discoverable?",
    belief:
      "People are already building useful things, but much of that work never reaches the people who could use it.",
    action:
      "We will start with real projects from students, developers, researchers, and independent builders and turn them into structured ScoutX profiles.",
    signal:
      "People actually submit, complete, and maintain useful profiles.",
  },
  {
    number: "02",
    icon: FaBuilding,
    title: "Will organizations actually scout?",
    belief:
      "Organizations may have a discovery problem, but we cannot assume they will change how they search.",
    action:
      "We will bring real technical and business problems to ScoutX and watch whether organizations use the platform to find alternatives.",
    signal:
      "Real problems lead to searches, shortlists, and repeat usage.",
  },
  {
    number: "03",
    icon: FaBrain,
    title: "Does AI improve the search?",
    belief:
      "Simply indexing projects is not enough. ScoutX has to understand what an innovation actually does.",
    action:
      "We will compare ScoutX recommendations with conventional search and ask organizations whether the matches are genuinely useful.",
    signal:
      "Better relevance, less search time, and stronger user feedback.",
  },
  {
    number: "04",
    icon: FaHandshake,
    title: "Does discovery lead somewhere?",
    belief:
      "A match has no value if nobody takes the next step.",
    action:
      "We will follow promising matches from discovery to profile views, conversations, evaluations, pilots, and collaborations.",
    signal:
      "Useful discoveries create real-world conversations or opportunities.",
  },
  {
    number: "05",
    icon: FaChartLine,
    title: "Is that value worth paying for?",
    belief:
      "If ScoutX genuinely saves time or surfaces valuable solutions, organizations should eventually pay for that value.",
    action:
      "Only after proving useful discovery, we will test paid Discovery Missions and ScoutX Pro with organizations.",
    signal:
      "Organizations return, convert, and are willing to pay.",
  },
];

const pilotSteps = [
  {
    number: "01",
    icon: FaUsers,
    title: "Start with a focused network",
    description:
      "We will manually bring in a small number of genuine innovations instead of opening a huge marketplace immediately.",
    metric: "50–100 innovations",
  },
  {
    number: "02",
    icon: FaBuilding,
    title: "Bring real problems",
    description:
      "We will work with organizations that have problems they genuinely want to solve.",
    metric: "5–10 organizations",
  },
  {
    number: "03",
    icon: FaSearch,
    title: "Let them scout",
    description:
      "Organizations describe what they need. ScoutX searches, explains, and ranks relevant innovations.",
    metric: "Measure relevance",
  },
  {
    number: "04",
    icon: FaHandshake,
    title: "Track what happens",
    description:
      "We will follow the strongest matches beyond the screen to see whether they create conversations, evaluations, or pilots.",
    metric: "Track outcomes",
  },
  {
    number: "05",
    icon: FaRocket,
    title: "Test payment",
    description:
      "Once the discovery value is proven, we will ask organizations to pay for solving specific discovery problems.",
    metric: "Paid pilot",
  },
];

const risks = [
  {
    title: "Not enough quality",
    description:
      "If the innovation layer is weak, discovery will be weak.",
    response:
      "We start curated, require evidence, and improve quality standards before expanding supply.",
  },
  {
    title: "Nobody searches",
    description:
      "Organizations may say discovery matters but continue using their existing networks.",
    response:
      "We measure behavior, not survey answers. Real problems will be our test.",
  },
  {
    title: "AI looks smart but isn't useful",
    description:
      "Good-sounding recommendations are meaningless if organizations do not find them relevant.",
    response:
      "Human feedback stays in the loop until the recommendations consistently prove useful.",
  },
  {
    title: "Creators get no real value",
    description:
      "More profile views do not automatically mean more opportunity.",
    response:
      "We measure qualified contacts, conversations, evaluations, and opportunities.",
  },
  {
    title: "We go too broad too early",
    description:
      "A massive marketplace could become difficult to populate and difficult to search.",
    response:
      "We start narrow, learn where the strongest demand exists, and expand from evidence.",
  },
];

export default function Validation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-[#080806] px-6 py-24 text-[#F7F2E8] sm:px-10 lg:px-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-250px] top-[250px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-250px] top-[1200px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.03] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================== */}
        {/* INTRO */}
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
            How We Will Validate ScoutX
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            We have the idea.
            <br />
            <span className="gradient-text">
              Now we need to prove it.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] sm:text-lg">
            We are not building ScoutX on assumptions. We are going to put it
            in front of real creators, real organizations, and real problems —
            and let what happens determine what we build next.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* THE ONE THING WE NEED TO PROVE */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#11100D] p-7 sm:p-10">

            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
                Our Core Hypothesis
              </p>

              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                The right solution may already exist.
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#8F887B]">
                If ScoutX can help an organization discover a useful solution
                it would not have found otherwise — and help that creator reach
                a real opportunity — then we are solving something valuable.
              </p>
            </div>

            <div className="mt-9 grid gap-3 md:grid-cols-5 md:items-center">

              {[
                "Real problem",
                "ScoutX",
                "Relevant innovation",
                "Creator",
                "Opportunity",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 md:block"
                >
                  <div className="flex flex-1 items-center justify-center rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-4 text-center text-xs font-semibold text-[#C9C1B3]">
                    {item}
                  </div>

                  {index < 4 && (
                    <FaArrowRight className="shrink-0 text-[10px] text-[#D4AF37]/40 md:mx-auto md:mt-3 md:block" />
                  )}
                </div>
              ))}

            </div>

          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* WHAT WE NEED TO PROVE */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            What We Need to Prove
          </p>

          <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
            Five assumptions. Five real tests.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#817A6E]">
            We do not need perfect answers on day one. We need enough evidence
            to know what works and what needs to change.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* FIVE TESTS */}
        {/* ===================================================== */}

        <div className="mt-10 space-y-4">

          {validationPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition duration-300 hover:border-[#D4AF37]/25 sm:p-7"
              >

                <div className="grid gap-6 lg:grid-cols-[55px_0.9fr_1.4fr_1fr] lg:items-center">

                  {/* NUMBER / ICON */}

                  <div className="flex items-center gap-4 lg:block">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                      <Icon />
                    </div>

                    <span className="font-mono text-xs text-[#D4AF37]/50 lg:mt-3 lg:block">
                      {item.number}
                    </span>
                  </div>

                  {/* QUESTION */}

                  <div>
                    <h4 className="text-xl font-bold leading-7">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                      {item.belief}
                    </p>
                  </div>

                  {/* TEST */}

                  <div className="rounded-2xl border border-white/[0.06] bg-[#0B0B09] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817A6E]">
                      What We'll Do
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#A9A293]">
                      {item.action}
                    </p>
                  </div>

                  {/* SIGNAL */}

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817A6E]">
                      Evidence
                    </p>

                    <div className="mt-3 flex gap-2">
                      <FaCheckCircle className="mt-1 shrink-0 text-xs text-[#D4AF37]" />

                      <p className="text-sm leading-6 text-[#C9C1B3]">
                        {item.signal}
                      </p>
                    </div>
                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* ===================================================== */}
        {/* FIRST PILOT */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Our First Pilot
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Small enough to learn.
              <br />
              <span className="text-[#A9A293]">
                Real enough to matter.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#8F887B] sm:text-base">
              We would rather prove ScoutX with a small number of meaningful
              interactions than launch a huge marketplace without knowing
              whether the core loop works.
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-5xl">

            {pilotSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="grid gap-4 border-b border-white/[0.07] py-7 md:grid-cols-[45px_45px_1fr_auto] md:items-center"
                >

                  <span className="font-mono text-xs text-[#D4AF37]/60">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon className="text-xs" />
                  </div>

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
              );
            })}

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* WHAT FAILURE TEACHES US */}
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
                If We're Wrong
              </div>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Failure is
                <br />
                <span className="text-[#A9A293]">
                  useful information.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#8F887B]">
                Validation is not about proving that every part of our idea is
                right. If something does not work, we want to know early enough
                to change it.
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs font-medium text-[#C9C1B3]">
                <FaSyncAlt className="text-[#D4AF37]" />
                Test → Learn → Adapt → Test again
              </div>

            </div>

            <div className="space-y-3">

              {risks.map((risk, index) => (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/[0.07] bg-[#11100D] p-5"
                >

                  <div className="flex gap-4">

                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                      <FaBullseye className="text-[10px]" />
                    </div>

                    <div className="flex-1">

                      <h4 className="font-semibold">
                        {risk.title}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-[#6F6A60]">
                        {risk.description}
                      </p>

                      <div className="mt-3 border-l border-[#D4AF37]/20 pl-3">
                        <p className="text-sm leading-6 text-[#A9A293]">
                          {risk.response}
                        </p>
                      </div>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* SUCCESS GATE */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-5xl"
        >

          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] to-[#0E0E0C] p-8 text-center sm:p-12">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
              <FaChartLine />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Our Success Gate
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-5xl">
              Prove the connection.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8F887B] sm:text-base">
              We do not need thousands of users to know whether ScoutX has
              potential. We need to repeatedly see this happen:
            </p>

            <div className="mx-auto mt-8 max-w-3xl">

              <div className="grid gap-2 sm:grid-cols-5">

                {[
                  "Problem",
                  "Discovery",
                  "Match",
                  "Connection",
                  "Outcome",
                ].map((item, index) => (
                  <div key={item} className="relative">

                    <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] px-3 py-4">
                      <span className="block text-[9px] font-bold text-[#D4AF37]">
                        0{index + 1}
                      </span>

                      <span className="mt-1 block text-xs font-semibold text-[#C9C1B3]">
                        {item}
                      </span>
                    </div>

                    {index < 4 && (
                      <FaArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-[9px] text-[#D4AF37]/50 sm:block" />
                    )}

                  </div>
                ))}

              </div>

            </div>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-6">

              <p className="text-base font-medium leading-7 text-[#C9C1B3] sm:text-lg">
                A solution that was difficult to discover becomes visible to
                someone who genuinely needs it — and that discovery creates
                something real.
              </p>

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* FOUNDER CLOSING */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >

          <p className="text-sm leading-7 text-[#817A6E]">
            We are not trying to prove that ScoutX is perfect.
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
            We are trying to prove that
            <br />
            <span className="gradient-text">
              useful innovation can be found.
            </span>
          </h3>

        </motion.div>

      </div>
    </section>
  );
}