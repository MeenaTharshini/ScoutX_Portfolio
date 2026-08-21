"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaUsers,
  FaSearch,
  FaTrophy,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaArrowRight,
  FaExclamationTriangle,
} from "react-icons/fa";

const problemPoints = [
  {
    icon: FaGlobe,
    number: "01",
    title: "Innovation is scattered",
    description:
      "Ideas, prototypes, repositories, portfolios, and achievements live across disconnected platforms.",
  },
  {
    icon: FaUsers,
    number: "02",
    title: "Great builders stay invisible",
    description:
      "Capable innovators are often missed because they sit outside traditional hiring and hackathon channels.",
  },
  {
    icon: FaSearch,
    number: "03",
    title: "Discovery is inefficient",
    description:
      "Organizations waste time searching across unrelated profiles, repositories, events, and networks.",
  },
  {
    icon: FaTrophy,
    number: "04",
    title: "Events are not enough",
    description:
      "Hackathons create visibility, but promising projects often disappear when the event ends.",
  },
];

const scatteredSources = [
  { icon: FaGithub, label: "GitHub" },
  { icon: FaLinkedin, label: "LinkedIn" },
  { icon: FaTrophy, label: "Hackathons" },
  { icon: FaCode, label: "Portfolios" },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#0B0B09] text-[#F7F2E8] py-20 md:py-28 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/7 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#E7C979] text-xs font-semibold uppercase tracking-[0.2em]">
            <FaExclamationTriangle className="text-[10px]" />
            The Problem
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-[1.08] tracking-tight">
            Innovation exists.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
              Discovery is broken.
            </span>
          </h2>

          <p className="text-[#A9A293] text-base md:text-lg leading-8 mt-6 max-w-3xl mx-auto">
            Students, developers, researchers, and builders create valuable
            solutions every day. But the organizations that could use them
            often never find them.
          </p>
        </motion.div>

        {/* DISCOVERY GAP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10">
            <div className="text-center">
              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
                The Discovery Gap
              </p>

              <h3 className="text-2xl md:text-4xl font-bold mt-3">
                Valuable work is everywhere.
                <span className="text-[#8F887B]">
                  {" "}Discovery isn't.
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {scatteredSources.map((source, index) => {
                const Icon = source.icon;

                return (
                  <motion.div
                    key={source.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#F5F0E6]/[0.03] px-5 py-5"
                  >
                    <Icon className="text-[#D4AF37]" />

                    <span className="text-sm font-medium text-[#C9C1B3]">
                      {source.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm">
              <span className="px-4 py-2 rounded-xl border border-[#D4AF37]/10 text-[#A9A293]">
                Projects
              </span>

              <FaArrowRight className="text-[#D4AF37]" />

              <span className="px-4 py-2 rounded-xl border border-[#D4AF37]/10 text-[#A9A293]">
                Evidence
              </span>

              <FaArrowRight className="text-[#D4AF37]" />

              <span className="px-4 py-2 rounded-xl border border-[#D4AF37]/10 text-[#A9A293]">
                Capabilities
              </span>

              <FaArrowRight className="text-[#D4AF37]" />

              <span className="px-4 py-2 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#E7C979] font-semibold">
                Opportunity
              </span>
            </div>
          </div>
        </motion.div>

        {/* FOUR PROBLEMS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-9">
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-semibold">
              Why discovery fails
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Four gaps keep innovation hidden.
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problemPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group relative rounded-2xl bg-[#11100D] border border-[#D4AF37]/10 p-6 hover:-translate-y-1 hover:border-[#D4AF37]/25 transition-all duration-300"
                >
                  <span className="absolute top-5 right-5 text-[#D4AF37]/20 text-xs font-bold tracking-widest">
                    {item.number}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center">
                    <Icon />
                  </div>

                  <h4 className="text-lg font-bold mt-5">
                    {item.title}
                  </h4>

                  <p className="text-[#8F887B] text-sm leading-6 mt-3">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CORE GAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] p-8 md:p-12 text-center">
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold">
              The Core Gap
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">
              Companies don't lack problems.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
                They lack access to the right ideas.
              </span>
            </h3>

            <p className="text-[#A9A293] text-base md:text-lg leading-8 max-w-3xl mx-auto mt-5">
              The challenge is not creating more innovation. It is creating a
              reliable discovery layer that helps organizations find,
              understand, and connect with innovation that already exists.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["Find", "Understand", "Connect"].map((item, index) => (
                <div
                  key={item}
                  className={`px-6 py-3 rounded-xl border ${
                    index === 2
                      ? "bg-[#D4AF37]/10 border-[#D4AF37]/25 text-[#E7C979]"
                      : "bg-[#F5F0E6]/[0.03] border-[#D4AF37]/10 text-[#A9A293]"
                  }`}
                >
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TRANSITION TO SOLUTION */}
        <div className="text-center mt-14">
          <p className="text-[#817A6E] text-sm">
            The missing layer isn't another social network.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-3">
            It's a smarter way to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
              discover innovation.
            </span>
          </h3>

          <motion.a
            href="#solution"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 mt-7 px-7 py-3.5 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#AD8930] text-[#0B0B09] font-bold text-sm"
          >
            See How ScoutX Solves It
            <FaArrowRight className="text-xs" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}