"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaUsers,
  FaMoneyBillWave,
  FaSearch,
  FaLightbulb,
  FaBuilding,
  FaArrowRight,
  FaExclamationTriangle,
} from "react-icons/fa";

const problemPoints = [
  {
    icon: FaGlobe,
    title: "Innovation is Scattered",
    description:
      "Ideas and prototypes are spread across GitHub, LinkedIn, portfolios, college events, and hackathons.",
  },
  {
    icon: FaUsers,
    title: "Hidden Innovators",
    description:
      "Talented builders who never participate in hackathons often remain invisible to organizations.",
  },
  {
    icon: FaSearch,
    title: "Discovery Is Difficult",
    description:
      "Finding the right project, technology, or innovator through scattered platforms is slow and inefficient.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Discovery Can Be Expensive",
    description:
      "Companies often rely on hackathons and events that require planning, logistics, time, and resources.",
  },
];

const lostFlow = [
  {
    icon: FaLightbulb,
    title: "Build",
    description: "An innovator creates an idea or prototype.",
  },
  {
    icon: FaGlobe,
    title: "Scatter",
    description: "The project appears across different platforms.",
  },
  {
    icon: FaSearch,
    title: "Disappear",
    description: "Visibility decreases as attention moves elsewhere.",
  },
  {
    icon: FaBuilding,
    title: "Missed",
    description: "The right organization never discovers it.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-[-200px] w-[450px] h-[450px] bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            The Problem
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Innovation exists.
            <br />
            <span className="text-red-400">
              Discovery is the problem.
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-7">
            Valuable ideas and prototypes are being created every day.
            But they are scattered across platforms, events, and personal
            networks—making them difficult for the right organizations to
            discover and evaluate.
          </p>
        </motion.div>

        {/* DISCOVERY GAP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <FaExclamationTriangle className="text-red-400" />

            <p className="text-red-400 uppercase tracking-widest text-sm font-semibold">
              The Discovery Gap
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problemPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group bg-[#151B2E] border border-slate-800 hover:border-red-500/20 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                    <Icon />
                  </div>

                  <h3 className="text-lg font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-6 mt-3">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* HOW IDEAS GET LOST */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <p className="text-slate-500 uppercase tracking-widest text-sm">
              The Current Journey
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              How valuable ideas get lost
            </h3>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-px bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {lostFlow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative bg-[#151B2E] border border-slate-800 rounded-2xl p-6 text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                      <Icon />
                    </div>

                    <p className="text-red-400 text-xs font-semibold mt-4">
                      0{index + 1}
                    </p>

                    <h4 className="font-semibold text-lg mt-2">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm leading-6 mt-2">
                      {item.description}
                    </p>

                    {index < lostFlow.length - 1 && (
                      <FaArrowRight className="hidden lg:block absolute -right-3 top-12 text-red-400 z-10" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CORE PROBLEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-red-500/10 via-[#151B2E] to-purple-500/10 border border-purple-500/20 rounded-3xl px-7 py-12 md:px-14 md:py-16">
            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              The Core Problem
            </p>

            <h3 className="text-2xl md:text-4xl font-bold leading-tight mt-5">
              Companies don't lack problems.
              <br />
              <span className="text-purple-400">
                They lack efficient access to ideas.
              </span>
            </h3>

            <p className="text-slate-400 text-base md:text-lg leading-8 max-w-3xl mx-auto mt-6">
              The problem is not a lack of innovation. It is the lack of an
              efficient way to discover, evaluate, and connect innovators with
              the organizations that need them.
            </p>
          </div>
        </motion.div>

        {/* TRANSITION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-slate-500">
            The missing layer is not another social network.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-4">
            It is a smarter way to{" "}
            <span className="text-purple-400">
              discover innovation.
            </span>
          </h3>

          <a
            href="#solution"
            className="inline-flex items-center gap-3 mt-7 px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition"
          >
            See the ScoutX Solution
            <FaArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}