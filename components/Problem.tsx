"use client";

import { motion } from "framer-motion";
import {
  FaUser,
  FaBuilding,
  FaLightbulb,
  FaGlobe,
  FaSearch,
  FaMoneyBillWave,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const problemPoints = [
  {
    icon: FaGlobe,
    title: "Innovation is Scattered",
    description:
      "Student and public innovators share ideas through GitHub, LinkedIn, portfolios, college events, hackathons, and personal platforms. There is no single place where companies can discover them efficiently.",
  },
  {
    icon: FaUsers,
    title: "Not Everyone Joins Hackathons",
    description:
      "Many talented students and independent innovators never participate in hackathons because of time, travel, eligibility, team, location, or other constraints. Their ideas remain invisible to companies.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Hackathons Can Be Expensive",
    description:
      "Companies often conduct hackathons to discover innovative ideas and talent, but organizing events requires significant spending on venues, travel, logistics, prizes, marketing, and coordination.",
  },
  {
    icon: FaSearch,
    title: "Finding the Right Idea Is Difficult",
    description:
      "When companies need a specific type of innovation, technology, or solution, manually searching thousands of projects and profiles is time-consuming and inefficient.",
  },
];

const currentFlow = [
  {
    icon: FaLightbulb,
    title: "Innovator Creates",
    description: "Idea, prototype, project, or portfolio",
  },
  {
    icon: FaGlobe,
    title: "Posts Elsewhere",
    description: "GitHub, LinkedIn, hackathons, college events",
  },
  {
    icon: FaExclamationTriangle,
    title: "Visibility Drops",
    description: "Innovation becomes difficult to discover",
  },
  {
    icon: FaBuilding,
    title: "Company Searches",
    description: "Manual search or expensive hackathon",
  },
  {
    icon: FaSearch,
    title: "Opportunity Gets Missed",
    description: "Relevant ideas and innovators remain undiscovered",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-[-180px] w-[450px] h-[450px] bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[-180px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-red-400 uppercase tracking-[0.25em] text-sm font-semibold">
            The Problem
          </p>

        </motion.div>

        {/* Main Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-[#151B2E] border border-red-500/10 rounded-3xl p-8 md:p-12">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                  <FaExclamationTriangle />
                  The Discovery Gap
                </div>

                <h3 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
                  Companies don't lack
                  <span className="text-red-400">
                    {" "}problems.
                  </span>
                  <br />
                  They lack efficient access to
                  <span className="text-purple-400">
                    {" "}ideas.
                  </span>
                </h3>

                <p className="text-slate-400 text-lg leading-8 mt-6">
                  A company may need a startup idea, a new product concept,
                  an AI solution, or a specific technology. Traditionally,
                  it may organize a hackathon or manually search through
                  professional networks and repositories.
                </p>

                <p className="text-slate-400 text-lg leading-8 mt-4">
                  But this approach is expensive, time-consuming, and
                  excludes innovators who never participate in those events.
                </p>

              </div>

              {/* Right */}
              <div className="space-y-4">

                <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-5">
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                      <FaMoneyBillWave />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Expensive Discovery
                      </h4>

                      <p className="text-slate-500 text-sm mt-1">
                        Events, travel, logistics, prizes and coordination
                      </p>
                    </div>

                  </div>
                </div>

                <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-5">
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
                      <FaGlobe />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Scattered Innovation
                      </h4>

                      <p className="text-slate-500 text-sm mt-1">
                        Ideas distributed across multiple platforms
                      </p>
                    </div>

                  </div>
                </div>

                <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-5">
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <FaUsers />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Hidden Innovators
                      </h4>

                      <p className="text-slate-500 text-sm mt-1">
                        Talented people who never enter hackathons
                      </p>
                    </div>

                  </div>
                </div>

                <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-5">
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <FaSearch />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Manual Evaluation
                      </h4>

                      <p className="text-slate-500 text-sm mt-1">
                        Difficult to compare hundreds of ideas efficiently
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* Current Problem Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >

          <div className="text-center mb-12">

            <p className="text-red-400 uppercase tracking-widest text-sm font-semibold">
              Current Situation
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-3">
              How valuable ideas get lost
            </h3>

          </div>

          <div className="relative">

            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-14 left-[8%] right-[8%] h-px bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

              {currentFlow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="relative bg-[#151B2E] border border-slate-800 rounded-2xl p-6 text-center"
                  >

                    <div className="w-12 h-12 mx-auto rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                      <Icon />
                    </div>

                    <h4 className="font-semibold mt-5">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm leading-6 mt-2">
                      {item.description}
                    </p>

                    {index < currentFlow.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-12 text-red-400 text-lg z-20">
                        →
                      </div>
                    )}

                  </motion.div>
                );
              })}

            </div>

          </div>
        </motion.div>

        {/* Hackathon Limitation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Hackathon */}
            <div className="bg-[#151B2E] border border-red-500/10 rounded-3xl p-8 md:p-10">

              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center text-xl">
                <FaRocket />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mt-6">
                The Hackathon-Only Approach
              </h3>

              <p className="text-slate-400 leading-7 mt-4">
                Hackathons are valuable, but they cannot capture the entire
                innovation ecosystem.
              </p>

              <div className="space-y-3 mt-6">

                {[
                  "Requires event planning and coordination",
                  "Involves travel and venue expenses",
                  "Requires prizes, marketing and logistics",
                  "Limited to participants who can attend",
                  "Ideas are often produced within a short event window",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-slate-400"
                  >
                    <span className="text-red-400 mt-1">×</span>
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* ScoutX Opportunity */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-3xl p-8 md:p-10">

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl">
                <FaLightbulb />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mt-6">
                The Untapped Opportunity
              </h3>

              <p className="text-slate-400 leading-7 mt-4">
                Thousands of innovators are already building ideas outside
                hackathons. The challenge is finding and evaluating them.
              </p>

              <div className="space-y-3 mt-6">

                {[
                  "Students can submit ideas directly",
                  "Public innovators can participate",
                  "Ideas can be submitted as text, prototype or portfolio",
                  "AI can evaluate and suggest improvements",
                  "Companies can discover ideas based on their requirements",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <FaCheckCircle className="text-purple-400 mt-1 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

        {/* One Line Problem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >

          <div className="bg-gradient-to-br from-red-500/10 via-[#151B2E] to-purple-500/10 border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center">

            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              The Core Problem
            </p>

          </div>

        </motion.div>

        {/* Real Example */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >

          <div className="max-w-5xl mx-auto bg-[#151B2E] border border-slate-800 rounded-3xl p-8 md:p-10">

            <div className="flex items-center gap-3">
              <FaCode className="text-purple-400" />

              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                Real Example
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mt-5">
              A valuable prototype can disappear after one event.
            </h3>

            <p className="text-slate-400 text-lg leading-8 mt-5">
              Suppose a student builds a working AI healthcare prototype.
              After a college event or hackathon, the project may remain in
              a GitHub repository or a LinkedIn post. Meanwhile, a company
              looking for exactly that type of innovation may never discover
              it.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-7">

              <span className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-sm">
                AI Healthcare Prototype
              </span>

              <FaArrowRight className="text-purple-400" />

              <span className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-sm">
                Scattered Online
              </span>

              <FaArrowRight className="text-purple-400" />

              <span className="px-4 py-2 rounded-xl bg-red-500/10 text-red-300 text-sm">
                Company Cannot Find It
              </span>

            </div>

          </div>

        </motion.div>

        {/* Transition to Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-24"
        >

          <p className="text-slate-500">
            The missing layer is not another social network.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-4">
            It is a smarter way to
            <span className="text-purple-400">
              {" "}discover innovation.
            </span>
          </h3>

          <a
            href="#solution"
            className="inline-flex items-center gap-3 mt-8 px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
          >
            See the ScoutX Solution
            <FaArrowRight />
          </a>

        </motion.div>

      </div>
    </section>
  );
}