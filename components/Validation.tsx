"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaBuilding,
  FaBrain,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaFlask,
  FaChartLine,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface ValidationPoint {
  number: string;
  icon: IconType;
  title: string;
  test: string;
  proof: string;
}

const validationPoints: ValidationPoint[] = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Useful innovation exists.",
    test: "Bring real projects, research, prototypes, and products onto ScoutX.",
    proof: "Creators submit and maintain genuinely useful profiles.",
  },
  {
    number: "02",
    icon: FaBuilding,
    title: "Organizations need discovery.",
    test: "Give organizations real problems and let them scout for alternatives.",
    proof: "They search, save, shortlist, and return.",
  },
  {
    number: "03",
    icon: FaBrain,
    title: "ScoutX finds relevant matches.",
    test: "Compare ScoutX recommendations with conventional discovery methods.",
    proof: "Better relevance, less search time, stronger feedback.",
  },
  {
    number: "04",
    icon: FaHandshake,
    title: "Discovery creates outcomes.",
    test: "Track promising matches beyond the platform.",
    proof: "Profiles become conversations, evaluations, pilots, or opportunities.",
  },
];

const pilotSteps = [
  {
    number: "01",
    title: "Curate",
    text: "Start with a focused set of genuine innovations.",
    metric: "50–100 innovations",
  },
  {
    number: "02",
    title: "Scout",
    text: "Bring organizations with real problems onto ScoutX.",
    metric: "5–10 organizations",
  },
  {
    number: "03",
    title: "Match",
    text: "Let ScoutX search, explain, and rank relevant solutions.",
    metric: "Measure relevance",
  },
  {
    number: "04",
    title: "Track",
    text: "Follow the strongest matches beyond the search.",
    metric: "Measure outcomes",
  },
];

export default function Validation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-[#080806] px-5 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
            <FaFlask />
            Validation
          </div>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            We have the idea.
            <br />
            <span className="gradient-text">Now we prove it.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX will be validated through real creators, real organizations,
            and real discovery problems — not assumptions.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* CORE HYPOTHESIS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#11100D] p-7 md:p-10">

            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Core Hypothesis
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                The right solution may already exist.
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#817A6E]">
                If ScoutX helps an organization discover a useful solution
                it would not have found otherwise, we are solving a real
                problem.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row">

              {[
                "Real Problem",
                "ScoutX",
                "Relevant Innovation",
                "Real Outcome",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <div
                    className={`rounded-xl border px-5 py-3 text-xs font-semibold ${
                      item === "ScoutX"
                        ? "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E7C979]"
                        : "border-[#D4AF37]/10 bg-[#0B0B09] text-[#BDB5A7]"
                    }`}
                  >
                    {item}
                  </div>

                  {index < 3 && (
                    <FaArrowRight className="hidden text-[9px] text-[#D4AF37]/40 md:block" />
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
          className="mt-20 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            What We Need to Prove
          </p>

          <h3 className="mt-3 text-3xl font-bold md:text-4xl">
            Four assumptions.
            <br className="sm:hidden" /> Four tests.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#817A6E]">
            We measure behavior and outcomes — not just what people say they
            want.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* VALIDATION TESTS */}
        {/* ===================================================== */}

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {validationPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="group rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon className="text-sm" />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#D4AF37]/40">
                    {item.number}
                  </span>

                </div>

                <h4 className="mt-6 text-xl font-bold">
                  {item.title}
                </h4>

                <div className="mt-5 border-t border-[#D4AF37]/10 pt-5">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#817A6E]">
                    Test
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#A9A293]">
                    {item.test}
                  </p>

                </div>

                <div className="mt-4 flex gap-2">

                  <FaCheckCircle className="mt-1 shrink-0 text-xs text-[#D4AF37]" />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#817A6E]">
                      Proof
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#C9C1B3]">
                      {item.proof}
                    </p>
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
          className="mt-20"
        >

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              First Pilot
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Start small.
              <br />
              <span className="text-[#A9A293]">
                Learn from real usage.
              </span>
            </h3>

          </div>

          <div className="mx-auto mt-8 max-w-4xl">

            {pilotSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="grid gap-4 border-b border-white/[0.07] py-6 md:grid-cols-[45px_110px_1fr_auto] md:items-center"
              >

                <span className="font-mono text-xs text-[#D4AF37]/60">
                  {step.number}
                </span>

                <h4 className="text-base font-bold">
                  {step.title}
                </h4>

                <p className="text-sm leading-6 text-[#817A6E]">
                  {step.text}
                </p>

                <span className="w-fit rounded-full border border-[#D4AF37]/10 bg-[#11100D] px-4 py-2 text-[10px] font-semibold text-[#C9C1B3]">
                  {step.metric}
                </span>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* SUCCESS GATE */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-5xl"
        >

          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] to-[#0E0E0C] p-8 text-center md:p-11">

            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
              <FaChartLine className="text-sm" />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Success Gate
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Prove the connection.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#817A6E]">
              We do not need thousands of users. We need to repeatedly see
              this happen:
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row">

              {[
                "Problem",
                "Discovery",
                "Match",
                "Connection",
                "Outcome",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >

                  <div className="min-w-[85px] rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] px-3 py-3">
                    <span className="block text-[8px] font-bold text-[#D4AF37]">
                      0{index + 1}
                    </span>

                    <span className="mt-1 block text-[10px] font-semibold text-[#C9C1B3]">
                      {item}
                    </span>
                  </div>

                  {index < 4 && (
                    <FaArrowRight className="hidden text-[8px] text-[#D4AF37]/40 sm:block" />
                  )}

                </div>
              ))}

            </div>

            <div className="mx-auto mt-7 max-w-2xl rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-5">

              <p className="text-sm font-medium leading-6 text-[#C9C1B3] md:text-base">
                A solution that was difficult to discover becomes visible
                to someone who genuinely needs it — and something real
                happens because of that discovery.
              </p>

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* CLOSING */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm text-[#817A6E]">
            We are not trying to prove that ScoutX is perfect.
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
            We are trying to prove that{" "}
            <span className="gradient-text">
              useful innovation can be found.
            </span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}