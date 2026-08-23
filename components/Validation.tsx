"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaChartLine,
  FaCheck,
  FaFlask,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const tests = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Can we attract useful innovation?",
    text: "Creators publish real projects, research, prototypes, and products.",
    signal: "Quality submissions",
  },
  {
    number: "02",
    icon: FaUsers,
    title: "Will organizations actually search?",
    text: "Organizations bring real problems and use ScoutX to find alternatives.",
    signal: "Search & repeat usage",
  },
  {
    number: "03",
    icon: FaBrain,
    title: "Are the matches useful?",
    text: "ScoutX recommendations are compared with normal discovery methods.",
    signal: "Match relevance",
  },
  {
    number: "04",
    icon: FaChartLine,
    title: "Does discovery lead somewhere?",
    text: "Strong matches move into conversations, evaluations, pilots, or adoption.",
    signal: "Real outcomes",
  },
];

const pilot = [
  ["01", "Seed", "50–100 quality innovations"],
  ["02", "Invite", "5–10 organizations with real problems"],
  ["03", "Match", "Run real discovery missions"],
  ["04", "Measure", "Track searches, matches, and outcomes"],
];

export default function Validation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-[#080806] px-5 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
            <FaFlask />
            Validation
          </div>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Don't prove the platform.
            <br />
            <span className="gradient-text">Prove the outcome.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX only needs to prove one thing:
            <span className="text-[#E7C979]">
              {" "}people can discover useful innovation they would otherwise miss.
            </span>
          </p>
        </motion.div>

        {/* CORE VALIDATION LOOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8"
        >
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            {["Problem", "ScoutX", "Relevant Solution", "Outcome"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`min-w-[130px] rounded-xl border px-4 py-3 text-center text-xs font-semibold ${
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
              )
            )}
          </div>
        </motion.div>

        {/* WHAT WE TEST */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              What We Test
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Four questions.
              <br />
              <span className="gradient-text">Four measurable signals.</span>
            </h3>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {tests.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition hover:-translate-y-1 hover:border-[#D4AF37]/25"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
                      <Icon className="text-sm" />
                    </div>

                    <span className="text-[10px] font-bold tracking-widest text-[#D4AF37]/40">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-lg font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#817A6E]">
                    {item.text}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-[#D4AF37]/10 pt-4">
                    <FaCheck className="text-[10px] text-[#D4AF37]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#BDB5A7]">
                      {item.signal}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* FIRST PILOT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              First Pilot
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Start small.
              <br />
              <span className="gradient-text">Measure everything.</span>
            </h3>
          </div>

          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[2rem] border border-[#D4AF37]/10 bg-[#11100D]">
            {pilot.map(([number, title, text], index) => (
              <div
                key={number}
                className={`grid gap-3 px-6 py-5 md:grid-cols-[50px_120px_1fr] md:items-center ${
                  index !== pilot.length - 1
                    ? "border-b border-white/[0.06]"
                    : ""
                }`}
              >
                <span className="font-mono text-xs text-[#D4AF37]/60">
                  {number}
                </span>

                <h4 className="text-sm font-bold">
                  {title}
                </h4>

                <p className="text-sm text-[#817A6E]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SUCCESS CRITERIA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] to-[#0E0E0C] p-7 text-center md:p-10">
            <FaChartLine className="mx-auto text-lg text-[#D4AF37]" />

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Success Criteria
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Discovery must create value.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#817A6E]">
              The pilot succeeds when organizations repeatedly discover
              relevant solutions they would not have found through their
              existing networks.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {[
                "Relevant matches",
                "Time saved",
                "Repeat usage",
                "Real connections",
                "Real outcomes",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-2 text-[10px] font-semibold text-[#BDB5A7]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CLOSING */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm text-[#817A6E]">
            The goal is simple.
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            <span className="gradient-text">
              Find something valuable that would have been missed.
            </span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}