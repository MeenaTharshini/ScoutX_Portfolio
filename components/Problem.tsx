"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTrophy,
  FaGlobe,
  FaExclamationTriangle,
  FaArrowDown,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";

const sources = [
  {
    icon: FaGithub,
    title: "GitHub",
    description: "Projects and prototypes",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    description: "Posts and achievements",
  },
  {
    icon: FaTrophy,
    title: "Hackathons",
    description: "Ideas and submissions",
  },
  {
    icon: FaGlobe,
    title: "Portfolios",
    description: "Personal project showcases",
  },
];

const consequences = [
  "Promising prototypes become difficult to discover",
  "Organizations spend time searching across disconnected platforms",
  "Students struggle to get visibility beyond their immediate network",
  "Useful innovations can remain unnoticed after competitions and events",
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-[-150px] w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[-150px] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            The Problem
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Innovation is everywhere.
            <span className="block text-slate-500">
              Discovery isn't.
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-8 mt-6">
            Students and early-stage innovators are constantly building
            prototypes and solving meaningful problems. But their work is
            scattered across platforms that were never designed for
            innovation discovery.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="relative bg-[#151B2E] border border-red-500/10 rounded-3xl p-8 md:p-12 text-center">

            <div className="absolute top-6 left-6 text-red-400/20 text-4xl">
              <FaExclamationTriangle />
            </div>

            <p className="text-slate-500 uppercase tracking-widest text-xs">
              The Discovery Gap
            </p>

            <h3 className="text-2xl md:text-4xl font-semibold mt-5 leading-relaxed">
              The problem is not a lack of innovation.
              <span className="block text-red-400 mt-2">
                It is the lack of efficient discovery.
              </span>
            </h3>

            <p className="text-slate-400 max-w-3xl mx-auto mt-6 leading-8">
              Valuable ideas, prototypes, and technical projects often exist
              independently of the organizations that could benefit from them.
              There is no dedicated layer connecting real-world problems with
              these emerging solutions.
            </p>
          </div>
        </motion.div>

        {/* Scattered Information */}
        <div className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-purple-400 uppercase tracking-widest text-sm">
              Today's Reality
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Innovation is scattered across the internet
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5">

            {sources.map((source, index) => {
              const Icon = source.icon;

              return (
                <motion.div
                  key={source.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#151B2E] border border-slate-800 hover:border-purple-500/30 rounded-2xl p-6 text-center transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl">
                    <Icon />
                  </div>

                  <h4 className="font-semibold text-lg mt-5">
                    {source.title}
                  </h4>

                  <p className="text-slate-500 text-sm mt-2">
                    {source.description}
                  </p>
                </motion.div>
              );
            })}

          </div>

          {/* Scattered → */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <div className="hidden md:block h-px w-24 bg-slate-800" />

            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaArrowDown className="md:hidden" />
              <span>Disconnected information</span>
              <FaArrowDown className="md:hidden" />
            </div>

            <div className="hidden md:block h-px w-24 bg-slate-800" />
          </div>

        </div>

        {/* The Broken Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-[#101625] border border-slate-800 rounded-3xl p-8 md:p-12">

            <p className="text-slate-500 uppercase tracking-widest text-xs text-center">
              What happens today
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3 mt-10">

              {/* Step 1 */}
              <div className="w-full md:w-48 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <FaLightbulb />
                </div>

                <h4 className="font-semibold mt-4">
                  Innovator Builds
                </h4>

                <p className="text-slate-500 text-sm mt-2">
                  Creates an idea or prototype
                </p>
              </div>

              <div className="text-slate-700 text-2xl rotate-90 md:rotate-0">
                →
              </div>

              {/* Step 2 */}
              <div className="w-full md:w-48 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <FaGlobe />
                </div>

                <h4 className="font-semibold mt-4">
                  Posts Everywhere
                </h4>

                <p className="text-slate-500 text-sm mt-2">
                  Shares across multiple platforms
                </p>
              </div>

              <div className="text-slate-700 text-2xl rotate-90 md:rotate-0">
                →
              </div>

              {/* Step 3 */}
              <div className="w-full md:w-48 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
                  <FaSearch />
                </div>

                <h4 className="font-semibold mt-4">
                  Hard to Discover
                </h4>

                <p className="text-slate-500 text-sm mt-2">
                  Organizations cannot efficiently find it
                </p>
              </div>

              <div className="text-slate-700 text-2xl rotate-90 md:rotate-0">
                →
              </div>

              {/* Step 4 */}
              <div className="w-full md:w-48 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                  <FaExclamationTriangle />
                </div>

                <h4 className="font-semibold mt-4">
                  Opportunity Lost
                </h4>

                <p className="text-slate-500 text-sm mt-2">
                  Potential innovation remains unnoticed
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Consequences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid lg:grid-cols-2 gap-10 items-center"
        >

          {/* Left */}
          <div>
            <p className="text-red-400 uppercase tracking-widest text-sm font-semibold">
              The Discovery Gap
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
              Good ideas can disappear
              <span className="text-slate-500">
                {" "}
                before reaching the right people.
              </span>
            </h3>

            <p className="text-slate-400 mt-6 leading-8">
              A working prototype built during a college hackathon may be
              valuable to a startup months later. But if nobody can discover
              it, the opportunity is lost.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-3">

            {consequences.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start bg-[#151B2E] border border-slate-800 rounded-xl p-4"
              >
                <div className="mt-1 text-red-400">
                  <FaExclamationTriangle className="text-sm" />
                </div>

                <p className="text-slate-400 text-sm leading-6">
                  {item}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* Transition to Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center">

            <p className="text-slate-500 text-sm uppercase tracking-widest">
              So what if
            </p>

            <h3 className="text-2xl md:text-4xl font-bold mt-4">
              Organizations could discover
              <span className="text-purple-400">
                {" "}
                existing solutions
              </span>
              ?
            </h3>

            <div className="mt-6 text-purple-400 text-2xl animate-bounce">
              ↓
            </div>

            <p className="text-purple-300 font-medium mt-3">
              That's where ScoutX begins.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}