"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaLightbulb,
  FaSearch,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaUserTie,
  FaProjectDiagram,
} from "react-icons/fa";

const solutionSteps = [
  {
    number: "01",
    icon: FaBuilding,
    title: "Post a Real Problem",
    description:
      "Organizations describe a real-world challenge, required capabilities, domain, and desired outcome instead of posting only a traditional job.",
  },
  {
    number: "02",
    icon: FaLightbulb,
    title: "Build an Innovation Passport",
    description:
      "Innovators showcase their project through the problem solved, technology used, prototype stage, evidence, outcomes, and potential applications.",
  },
  {
    number: "03",
    icon: FaSearch,
    title: "Discover Relevant Solutions",
    description:
      "ScoutX analyzes project capabilities and problem requirements to surface innovations that are relevant to the organization's challenge.",
  },
  {
    number: "04",
    icon: FaChartLine,
    title: "Evaluate with Evidence",
    description:
      "Organizations can evaluate prototype readiness, technical capabilities, validation, impact indicators, and supporting project evidence.",
  },
  {
    number: "05",
    icon: FaRocket,
    title: "Connect & Collaborate",
    description:
      "Relevant builders and organizations can move from discovery to discussion, pilot projects, internships, incubation, or collaboration.",
  },
];

const innovationLayers = [
  {
    icon: FaProjectDiagram,
    title: "Problem",
    description: "What needs to be solved?",
  },
  {
    icon: FaLightbulb,
    title: "Prototype",
    description: "What has already been built?",
  },
  {
    icon: FaUserTie,
    title: "Builder",
    description: "Who built it?",
  },
  {
    icon: FaShieldAlt,
    title: "Evidence",
    description: "Can the innovation be verified?",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
            The ScoutX Solution
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            A discovery layer for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              real-world innovation
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6 max-w-3xl mx-auto">
            ScoutX connects organizations with existing innovations by
            understanding both sides of the equation:
            <span className="text-purple-400 font-medium">
              {" "}
              what problem needs to be solved
            </span>{" "}
            and
            <span className="text-purple-400 font-medium">
              {" "}
              what has already been built.
            </span>
          </p>
        </motion.div>

        {/* Core Concept */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="bg-[#151B2E] border border-purple-500/20 rounded-3xl p-8 md:p-12">

            <p className="text-slate-500 uppercase tracking-widest text-xs text-center">
              The ScoutX Innovation Graph
            </p>

            <div className="grid md:grid-cols-3 items-center gap-6 mt-10">

              {/* Problem */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-3xl">
                  <FaBuilding />
                </div>

                <h3 className="text-xl font-bold mt-5">
                  Organization
                </h3>

                <p className="text-slate-500 text-sm mt-2">
                  Has a real-world problem
                </p>
              </div>

              {/* Matching */}
              <div className="text-center">

                <div className="flex justify-center items-center gap-2 text-purple-400 text-2xl">
                  <span>→</span>
                  <FaSearch className="text-lg" />
                  <span>←</span>
                </div>

                <div className="mt-4 px-6 py-4 rounded-2xl bg-purple-500/10 border border-purple-500/30">
                  <h3 className="font-bold text-purple-300">
                    ScoutX Matching
                  </h3>

                  <p className="text-slate-500 text-xs mt-2">
                    Problem ↔ Innovation
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center text-3xl">
                  <FaLightbulb />
                </div>

                <h3 className="text-xl font-bold mt-5">
                  Innovation
                </h3>

                <p className="text-slate-500 text-sm mt-2">
                  Has an existing prototype
                </p>
              </div>

            </div>

            {/* Result */}
            <div className="flex justify-center mt-10">
              <div className="text-center">
                <div className="text-purple-400 text-2xl mb-3">
                  ↓
                </div>

                <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20">
                  <p className="text-purple-300 font-semibold">
                    Discovery → Evaluation → Collaboration
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Innovation Passport */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                For Innovators
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Turn a project into an
                <span className="text-purple-400">
                  {" "}
                  Innovation Passport.
                </span>
              </h3>

              <p className="text-slate-400 mt-6 text-lg leading-8">
                Instead of presenting a generic resume, innovators create a
                structured identity for what they have actually built.
              </p>

              <div className="space-y-4 mt-8">

                {[
                  "Problem the project solves",
                  "Technology and technical capabilities",
                  "Prototype or development stage",
                  "GitHub, demo, documentation and other evidence",
                  "Potential real-world applications",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-purple-400 shrink-0" />

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* Passport Card */}
            <div className="bg-[#151B2E] border border-purple-500/20 rounded-3xl p-7 md:p-8">

              <div className="flex items-center justify-between mb-7">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Innovation Passport
                  </p>

                  <h4 className="text-2xl font-bold mt-2">
                    CropVision AI
                  </h4>
                </div>

                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                  Prototype Ready
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">

                {innovationLayers.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="bg-slate-800/60 border border-slate-700 rounded-xl p-4"
                    >
                      <Icon className="text-purple-400" />

                      <h5 className="font-semibold mt-3">
                        {item.title}
                      </h5>

                      <p className="text-slate-500 text-xs mt-1">
                        {item.description}
                      </p>
                    </div>
                  );
                })}

              </div>

              {/* Readiness */}
              <div className="mt-5 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">

                <div className="flex justify-between text-sm mb-3">
                  <span className="text-slate-400">
                    Innovation Readiness
                  </span>

                  <span className="text-purple-400 font-semibold">
                    87%
                  </span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" />
                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* How It Works */}
        <div className="mt-28">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-purple-400 uppercase tracking-widest text-sm">
              How ScoutX Works
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-3">
              From problem to opportunity
            </h3>

            <p className="text-slate-500 max-w-2xl mx-auto mt-5">
              A simple discovery workflow designed to move promising
              innovations beyond visibility and toward real-world use.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative">

            {/* Connecting line */}
            <div className="hidden lg:block absolute top-14 left-[8%] right-[8%] h-px bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

              {solutionSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                    }}
                    className="relative bg-[#151B2E] border border-slate-800 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300"
                  >

                    <div className="flex items-center justify-between">

                      <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                        <Icon />
                      </div>

                      <span className="text-slate-700 font-bold text-xl">
                        {step.number}
                      </span>

                    </div>

                    <h4 className="text-lg font-semibold mt-6">
                      {step.title}
                    </h4>

                    <p className="text-slate-500 text-sm leading-6 mt-3">
                      {step.description}
                    </p>

                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>

        {/* Why It Is Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
        >

          <div className="bg-gradient-to-br from-purple-500/10 via-[#151B2E] to-violet-500/5 border border-purple-500/20 rounded-3xl p-8 md:p-12">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                What Makes ScoutX Different
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4">
                Not another professional network.
              </h3>

              <p className="text-slate-400 text-lg leading-8 mt-6">
                Traditional platforms are primarily centered around people,
                profiles, jobs, and connections. ScoutX is centered around
                <span className="text-purple-400 font-medium">
                  {" "}
                  problems, prototypes, evidence, and potential impact.
                </span>
              </p>

            </div>

            {/* Comparison */}
            <div className="grid md:grid-cols-2 gap-5 mt-12 max-w-4xl mx-auto">

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">

                <p className="text-slate-500 text-xs uppercase tracking-widest">
                  Traditional Discovery
                </p>

                <div className="mt-5 space-y-3">

                  {[
                    "Person → Resume",
                    "Job → Application",
                    "Profile → Connection",
                    "Recruitment → Selection",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-slate-500"
                    >
                      <span className="text-slate-700">×</span>
                      {item}
                    </div>
                  ))}

                </div>
              </div>

              <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-6">

                <p className="text-purple-400 text-xs uppercase tracking-widest">
                  ScoutX
                </p>

                <div className="mt-5 space-y-3">

                  {[
                    "Problem → Innovation",
                    "Prototype → Evidence",
                    "Capability → Match",
                    "Discovery → Collaboration",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <FaCheckCircle className="text-purple-400" />
                      {item}
                    </div>
                  ))}

                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >

          <p className="text-slate-500">
            From scattered projects to discoverable innovation.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-4">
            Build.
            <span className="text-purple-400"> Prove.</span>
            Discover.
            <span className="text-purple-400"> Collaborate.</span>
          </h3>

          <a
            href="#features"
            className="inline-flex items-center gap-3 mt-8 px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
          >
            Explore the Platform
            <FaArrowRight />
          </a>

        </motion.div>

      </div>
    </section>
  );
}