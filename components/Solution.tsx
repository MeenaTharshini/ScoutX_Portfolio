"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCode,
  FaRobot,
  FaBuilding,
  FaSearch,
  FaComments,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaRocket,
  FaFileAlt,
} from "react-icons/fa";

const solutionSteps = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Submit Your Innovation",
    description:
      "Students, developers, researchers, or anyone with an idea can submit a unique concept, text description, prototype, portfolio, or existing project.",
  },
  {
    number: "02",
    icon: FaRobot,
    title: "AI Evaluates & Improves",
    description:
      "ScoutX AI analyzes the idea for uniqueness, technology relevance, potential value, feasibility, and possible improvements.",
  },
  {
    number: "03",
    icon: FaBuilding,
    title: "Companies Post Requirements",
    description:
      "Companies describe the type of innovation they need, including the problem, industry, technologies, capabilities, and expected outcome.",
  },
  {
    number: "04",
    icon: FaSearch,
    title: "AI Finds the Best Ideas",
    description:
      "ScoutX compares company requirements with the innovation ecosystem and identifies a focused shortlist of highly relevant ideas and prototypes.",
  },
  {
    number: "05",
    icon: FaComments,
    title: "Connect Directly",
    description:
      "Companies can communicate directly with promising innovators to discuss collaboration, validation, development, pilots, or startup opportunities.",
  },
];

const aiCapabilities = [
  {
    icon: FaLightbulb,
    title: "Uniqueness",
    description: "How differentiated is the idea?",
  },
  {
    icon: FaChartLine,
    title: "Value",
    description: "What potential value can it create?",
  },
  {
    icon: FaCode,
    title: "Technology Fit",
    description: "Which technologies support the idea?",
  },
  {
    icon: FaRocket,
    title: "Potential",
    description: "Can it become a useful solution?",
  },
];

const companyRequirements = [
  "Problem or innovation area",
  "Required technologies",
  "Industry or domain",
  "Expected capabilities",
  "Desired solution type",
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-slate-900 text-white py-24 md:py-32 px-6"
    >
      {/* Background */}
      <div className="absolute top-0 left-[-180px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[-180px] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            THE SCOUTX SOLUTION
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-6 leading-tight">
            From scattered ideas to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400">
              discoverable innovation.
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6 max-w-3xl mx-auto">
            ScoutX creates a direct bridge between people who build
            innovations and companies looking for new solutions —
            powered by AI-driven evaluation and matching.
          </p>
        </motion.div>

        {/* =====================================================
            CORE PROBLEM → SOLUTION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="max-w-6xl mx-auto bg-[#151B2E] border border-purple-500/20 rounded-3xl p-8 md:p-12">

            <div className="text-center">
              <p className="text-purple-400 uppercase tracking-widest text-xs font-semibold">
                The Core Idea
              </p>

              <h3 className="text-2xl md:text-4xl font-bold mt-3">
                Instead of waiting for ideas,
                <span className="text-purple-400">
                  {" "}discover them.
                </span>
              </h3>

              <p className="text-slate-500 max-w-2xl mx-auto mt-4">
                Companies do not always need to organize another hackathon
                to find innovative solutions. ScoutX allows them to discover
                ideas and prototypes that already exist within its ecosystem.
              </p>
            </div>

            {/* Flow */}
            <div className="grid md:grid-cols-5 gap-4 mt-12 items-center">

              {/* Users */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-2xl">
                  <FaUsers />
                </div>

                <h4 className="font-semibold mt-4">
                  Innovators
                </h4>

                <p className="text-xs text-slate-500 mt-2">
                  Students, developers, researchers & public
                </p>
              </div>

              <div className="hidden md:flex justify-center text-purple-400">
                <FaArrowRight />
              </div>

              {/* AI */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center text-2xl">
                  <FaRobot />
                </div>

                <h4 className="font-semibold text-purple-300 mt-4">
                  ScoutX AI
                </h4>

                <p className="text-xs text-slate-500 mt-2">
                  Evaluate • Improve • Match
                </p>
              </div>

              <div className="hidden md:flex justify-center text-purple-400">
                <FaArrowRight />
              </div>

              {/* Company */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl">
                  <FaBuilding />
                </div>

                <h4 className="font-semibold mt-4">
                  Companies
                </h4>

                <p className="text-xs text-slate-500 mt-2">
                  Discover relevant innovation
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FOR INNOVATORS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>

              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                For Innovators
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Your idea does not need to wait for a
                <span className="text-purple-400">
                  {" "}hackathon.
                </span>
              </h3>

              <p className="text-slate-400 text-lg leading-8 mt-6">
                Anyone can bring an idea to ScoutX. Whether it is only a
                concept, a working prototype, a GitHub project, a portfolio,
                or an early-stage solution, it can become part of the
                innovation ecosystem.
              </p>

              <div className="space-y-4 mt-8">

                {[
                  "Submit an idea, prototype, project, or portfolio",
                  "Explain the problem and proposed solution",
                  "Add technologies and supporting evidence",
                  "Receive AI-generated improvement suggestions",
                  "Get evaluated for uniqueness, value, and technology relevance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-purple-400 mt-1 shrink-0" />

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* Innovation Card */}
            <div className="relative">

              <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="relative bg-[#151B2E] border border-purple-500/20 rounded-3xl p-7">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center text-xl">
                      <FaLightbulb />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">
                        Submitted Innovation
                      </p>

                      <h4 className="text-xl font-bold mt-1">
                        Smart Crop Vision
                      </h4>
                    </div>

                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    AI Analyzed
                  </span>

                </div>

                {/* Idea */}
                <div className="mt-6 p-4 rounded-xl bg-slate-800/60">

                  <div className="flex items-center gap-2 text-purple-400 text-xs uppercase tracking-widest">
                    <FaFileAlt />
                    Idea
                  </div>

                  <p className="text-sm text-slate-300 mt-3 leading-6">
                    A computer vision system that identifies crop diseases
                    using images captured through a mobile device.
                  </p>

                </div>

                {/* AI Analysis */}
                <div className="mt-4">

                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
                    AI Evaluation
                  </p>

                  <div className="grid grid-cols-2 gap-3">

                    {aiCapabilities.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="p-4 rounded-xl bg-slate-800/50 border border-slate-700"
                        >
                          <Icon className="text-purple-400" />

                          <p className="text-sm font-semibold mt-3">
                            {item.title}
                          </p>

                          <p className="text-xs text-slate-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}

                  </div>

                </div>

                {/* Improvement */}
                <div className="mt-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">

                  <div className="flex items-center gap-2">
                    <FaRobot className="text-purple-400" />

                    <span className="text-sm font-semibold text-purple-300">
                      AI Improvement Suggestion
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 leading-5">
                    Add multilingual disease explanations and offline
                    image processing to improve accessibility in
                    low-connectivity agricultural areas.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </motion.div>

        {/* =====================================================
            FOR COMPANIES
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Company Requirement Card */}
            <div className="order-2 lg:order-1">

              <div className="bg-[#151B2E] border border-cyan-500/20 rounded-3xl p-7">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl">
                    <FaBuilding />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">
                      Company Innovation Request
                    </p>

                    <h4 className="text-xl font-bold mt-1">
                      Smart Agriculture Solutions
                    </h4>
                  </div>

                </div>

                <div className="mt-6 space-y-3">

                  {companyRequirements.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs">
                        {index + 1}
                      </div>

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

                <div className="mt-5 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-400">
                      AI Shortlisting
                    </span>

                    <span className="text-purple-400 font-semibold text-sm">
                      Top Matches
                    </span>

                  </div>

                  <div className="flex gap-2 mt-4">

                    {["#01", "#02", "#03", "#04", "#05"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-xs"
                      >
                        {item}
                      </span>
                    ))}

                    <span className="px-3 py-2 rounded-lg bg-slate-800 text-slate-400 text-xs">
                      + more
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <div className="order-1 lg:order-2">

              <p className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">
                For Companies
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Need an idea?
                <span className="text-cyan-400">
                  {" "}Search for one.
                </span>
              </h3>

              <p className="text-slate-400 text-lg leading-8 mt-6">
                Instead of organizing a new hackathon every time a company
                needs innovative ideas, ScoutX allows organizations to
                describe what they are looking for and discover relevant
                innovations already submitted by users.
              </p>

              <div className="space-y-4 mt-8">

                {[
                  "Define the problem or innovation requirement",
                  "Specify preferred technologies and domain",
                  "Let AI analyze the innovation ecosystem",
                  "Receive a focused shortlist of relevant ideas",
                  "Review projects and connect directly with innovators",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-cyan-400 mt-1 shrink-0" />

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </motion.div>

        {/* =====================================================
            HACKATHON ALTERNATIVE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="bg-gradient-to-br from-purple-500/10 via-[#151B2E] to-cyan-500/5 border border-purple-500/20 rounded-3xl p-8 md:p-12">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                A Different Way To Find Innovation
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4">
                Why wait for the next hackathon?
              </h3>

              <p className="text-slate-400 text-lg leading-8 mt-5">
                Hackathons can be valuable, but they require organizing
                participants, venues, travel, time, judging, and event
                infrastructure. They also reach only the people who
                participate in those events.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-12 max-w-5xl mx-auto">

              {/* Traditional */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-7">

                <p className="text-slate-500 text-xs uppercase tracking-widest">
                  Traditional Approach
                </p>

                <h4 className="text-xl font-bold mt-3">
                  Organize → Attract → Build → Select
                </h4>

                <div className="space-y-3 mt-6">

                  {[
                    "Event planning",
                    "Participant recruitment",
                    "Venue and logistics",
                    "Travel and participation barriers",
                    "Limited event-time ideas",
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

              {/* ScoutX */}
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-7">

                <p className="text-purple-400 text-xs uppercase tracking-widest">
                  ScoutX Approach
                </p>

                <h4 className="text-xl font-bold mt-3">
                  Post → AI Match → Discover → Connect
                </h4>

                <div className="space-y-3 mt-6">

                  {[
                    "Access ideas beyond event participants",
                    "Discover existing prototypes",
                    "AI-assisted shortlisting",
                    "Reduce event and coordination overhead",
                    "Direct communication with innovators",
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

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <div className="mt-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              How ScoutX Works
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-3">
              One ecosystem.
              <span className="text-purple-400">
                {" "}Two sides.
              </span>
            </h3>

            <p className="text-slate-500 mt-5">
              Innovation flows in both directions — people submit what
              they can build, while companies communicate what they need.
            </p>

          </motion.div>

          <div className="relative mt-14">

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
                      delay: index * 0.08,
                      duration: 0.6,
                    }}
                    className="relative bg-[#151B2E] border border-slate-800 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
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

        {/* =====================================================
            FINAL VALUE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="text-center bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-cyan-500/10 border border-purple-500/20 rounded-3xl p-8 md:p-12">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl">
              <FaRocket />
            </div>

            <p className="text-purple-400 uppercase tracking-widest text-xs font-semibold mt-6">
              The ScoutX Advantage
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-3">
              Innovation should be
              <span className="text-purple-400">
                {" "}discoverable, not hidden.
              </span>
            </h3>

            <p className="text-slate-400 max-w-3xl mx-auto mt-5 text-lg leading-8">
              ScoutX connects the people who have ideas with the companies
              that need them. AI helps evaluate, improve, and match
              innovations — creating a faster path from idea to opportunity.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">

              {[
                "More discoverable ideas",
                "AI-assisted evaluation",
                "Smarter matching",
                "Lower discovery overhead",
                "Direct communication",
                "Real-world opportunities",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

            <a
              href="#features"
              className="inline-flex items-center gap-3 mt-9 px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
            >
              Explore ScoutX
              <FaArrowRight />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}