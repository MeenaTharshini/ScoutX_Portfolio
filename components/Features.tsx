"use client";

import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaLightbulb,
  FaCode,
  FaCheckCircle,
  FaChartLine,
  FaSearch,
  FaBuilding,
  FaHandshake,
  FaGithub,
  FaTrophy,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
  FaRocket,
  FaUsers,
  FaBullseye,
} from "react-icons/fa";

const features = [
  {
    icon: FaUserCircle,
    number: "01",
    title: "Structured Innovation Profiles",
    description:
      "A profile designed around what an innovator has actually built, demonstrated, and achieved.",
    points: [
      "Builder identity",
      "Skills & technologies",
      "Projects & achievements",
      "Innovation interests",
    ],
  },
  {
    icon: FaLightbulb,
    number: "02",
    title: "Project & Prototype Showcase",
    description:
      "Turn projects into structured innovation records that clearly explain the problem, solution, technology, and development stage.",
    points: [
      "Problem addressed",
      "Solution overview",
      "Prototype stage",
      "Potential applications",
    ],
  },
  {
    icon: FaCheckCircle,
    number: "03",
    title: "Evidence Layer",
    description:
      "Move beyond claims by connecting innovation profiles with evidence from the actual work.",
    points: [
      "GitHub repositories",
      "Live demonstrations",
      "Documentation",
      "Awards & achievements",
    ],
  },
  {
    icon: FaChartLine,
    number: "04",
    title: "Innovation Evaluation",
    description:
      "Provide structured signals that help organizations understand the strength, maturity, and potential of an innovation.",
    points: [
      "Build quality",
      "Evidence strength",
      "Impact potential",
      "Development maturity",
    ],
  },
  {
    icon: FaSearch,
    number: "05",
    title: "Innovation Discovery",
    description:
      "Discover innovators based on what they have built, the technologies they use, and the problems they solve.",
    points: [
      "Technology",
      "Domain",
      "Project type",
      "Prototype stage",
    ],
  },
  {
    icon: FaStar,
    number: "06",
    title: "Relevant Matching",
    description:
      "Connect organizational needs with relevant capabilities, technologies, domains, and existing innovations.",
    points: [
      "Technology relevance",
      "Domain relevance",
      "Capability alignment",
      "Potential applications",
    ],
  },
  {
    icon: FaBuilding,
    number: "07",
    title: "Organization Discovery",
    description:
      "Give companies, incubators, and innovation ecosystems a structured way to discover promising builders and prototypes.",
    points: [
      "Discover talent",
      "Find prototypes",
      "Explore innovation",
      "Evaluate evidence",
    ],
  },
  {
    icon: FaHandshake,
    number: "08",
    title: "Opportunity & Connection",
    description:
      "Turn discovery into meaningful next steps such as collaboration, internships, pilots, mentorship, and incubation.",
    points: [
      "Internships",
      "Collaborations",
      "Pilot opportunities",
      "Incubation",
    ],
  },
];

const differences = [
  {
    icon: FaUsers,
    title: "People-first platforms",
    traditional: "Focus on resumes, job titles, profiles and connections.",
    scoutx: "Focuses on what people have actually built and demonstrated.",
  },
  {
    icon: FaCode,
    title: "Project repositories",
    traditional: "Show technical work, but often lack the complete context around the builder and opportunity.",
    scoutx: "Connects the project, builder, evidence, capabilities and potential applications.",
  },
  {
    icon: FaBuilding,
    title: "Job platforms",
    traditional: "Organizations primarily search for candidates against predefined roles.",
    scoutx: "Organizations can discover existing innovations and capabilities before defining the opportunity.",
  },
  {
    icon: FaSearch,
    title: "Innovation discovery",
    traditional: "Finding promising projects often requires searching across multiple disconnected sources.",
    scoutx: "Creates one structured discovery layer for projects, prototypes, builders and evidence.",
  },
];

const advantages = [
  {
    icon: FaBullseye,
    title: "Evidence over claims",
    description:
      "Organizations can understand what has actually been built instead of relying only on resumes or self-described skills.",
  },
  {
    icon: FaCode,
    title: "Prototype visibility",
    description:
      "Promising prototypes can remain discoverable even after a hackathon, academic project, or competition ends.",
  },
  {
    icon: FaSearch,
    title: "Faster discovery",
    description:
      "Relevant innovators and projects can be discovered through technologies, domains, problems, and capabilities.",
  },
  {
    icon: FaHandshake,
    title: "More paths to opportunity",
    description:
      "A project can lead to collaboration, internships, pilots, incubation, mentorship, or other opportunities.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-slate-900 text-white py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute top-20 right-[-200px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="absolute bottom-20 left-[-200px] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />

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
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Platform Features
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Everything needed to make
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              innovation discoverable.
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6 max-w-3xl mx-auto">
            ScoutX connects the complete innovation story —
            <span className="text-purple-400 font-medium">
              {" "}builder, idea, prototype, evidence, evaluation, and opportunity.
            </span>
          </p>
        </motion.div>

        {/* =====================================================
            FEATURE GRID
        ====================================================== */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group bg-[#151B2E] border border-slate-800 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/10 text-purple-400 flex items-center justify-center text-lg group-hover:bg-purple-500/20 transition">
                    <Icon />
                  </div>

                  <span className="text-slate-700 text-lg font-bold">
                    {feature.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {feature.title}
                </h3>

                <p className="text-slate-500 text-sm leading-6 mt-3">
                  {feature.description}
                </p>

                <div className="mt-5 space-y-2">
                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2"
                    >
                      <FaCheckCircle className="text-purple-400 text-xs shrink-0" />

                      <span className="text-slate-400 text-xs">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            WHY SCOUTX IS DIFFERENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              Why ScoutX?
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Not another resume platform.
              <span className="block text-purple-400">
                Not just another project showcase.
              </span>
            </h3>

            <p className="text-slate-400 text-lg leading-8 mt-6">
              ScoutX creates a connection between the person, the problem,
              the prototype, the evidence, and the organization looking for
              relevant innovation.
            </p>
          </div>

          {/* Comparison */}

          <div className="grid lg:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">

            {/* Traditional */}

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                  <FaUsers />
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Traditional Platforms
                  </p>

                  <h4 className="text-xl font-bold mt-1">
                    Search around people
                  </h4>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  "Resume → Skills",
                  "Profile → Job",
                  "Application → Selection",
                  "Project → Separate repository",
                  "Evidence → Scattered across platforms",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-500"
                  >
                    <span className="text-slate-700 text-lg">
                      ×
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ScoutX */}

            <div className="bg-purple-500/5 border border-purple-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <FaRocket />
                </div>

                <div>
                  <p className="text-purple-400 text-xs uppercase tracking-widest">
                    ScoutX
                  </p>

                  <h4 className="text-xl font-bold mt-1">
                    Search around innovation
                  </h4>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  "Problem → Innovation",
                  "Project → Prototype",
                  "Builder → Capability",
                  "Prototype → Evidence",
                  "Innovation → Opportunity",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <FaCheckCircle className="text-purple-400 shrink-0" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* =====================================================
            ADVANTAGES
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              The ScoutX Advantage
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Why this approach matters
            </h3>

            <p className="text-slate-500 mt-5 text-lg">
              ScoutX is designed to reduce the gap between building something
              valuable and getting it discovered by the right people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;

              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  className="bg-[#151B2E] border border-slate-800 hover:border-purple-500/30 rounded-2xl p-7 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <Icon />
                  </div>

                  <h4 className="text-lg font-bold mt-5">
                    {advantage.title}
                  </h4>

                  <p className="text-slate-500 text-sm leading-6 mt-3">
                    {advantage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            FEATURE SPOTLIGHT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-12">

            {/* LEFT */}

            <div>
              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                Core Product
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Don't just say
                <span className="text-purple-400">
                  {" "}“I can build.”
                </span>

                <br />

                Show what you built.
              </h3>

              <p className="text-slate-400 text-lg leading-8 mt-6">
                ScoutX shifts the focus from claims to evidence. Every
                innovation can communicate what was built, how it works,
                who built it, and what supports its progress.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  "What problem does the project address?",
                  "What has actually been built?",
                  "Which technologies were used?",
                  "What evidence supports the project?",
                  "What impact or applications are possible?",
                ].map((question) => (
                  <div
                    key={question}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-purple-400 shrink-0" />

                    <span className="text-slate-300">
                      {question}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">
                      Innovation Profile
                    </p>

                    <h4 className="text-2xl font-bold mt-2">
                      HealthAssist AI
                    </h4>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <FaLightbulb />
                  </div>
                </div>

                {/* Builder */}

                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">
                    S
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      Student Innovation Team
                    </p>

                    <p className="text-xs text-slate-500">
                      AI • Healthcare • Full Stack
                    </p>
                  </div>
                </div>

                {/* Project */}

                <div className="mt-6 p-4 rounded-xl bg-slate-800/60">
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Prototype
                  </p>

                  <p className="text-sm text-slate-300 mt-2 leading-6">
                    AI-assisted healthcare information and appointment
                    support prototype.
                  </p>
                </div>

                {/* Evidence */}

                <div className="grid grid-cols-3 gap-3 mt-4">

                  <div className="p-4 rounded-xl bg-slate-800/60">
                    <FaGithub className="text-slate-300" />

                    <p className="text-xs text-slate-400 mt-3">
                      GitHub
                    </p>

                    <p className="text-xs text-green-400 mt-1">
                      Available
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60">
                    <FaExternalLinkAlt className="text-slate-300" />

                    <p className="text-xs text-slate-400 mt-3">
                      Demo
                    </p>

                    <p className="text-xs text-green-400 mt-1">
                      Available
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60">
                    <FaTrophy className="text-yellow-400" />

                    <p className="text-xs text-slate-400 mt-3">
                      Achievement
                    </p>

                    <p className="text-xs text-green-400 mt-1">
                      Verified
                    </p>
                  </div>

                </div>

                {/* Score */}

                <div className="mt-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">
                      Innovation Score
                    </span>

                    <span className="text-purple-400 font-bold">
                      87 / 100
                    </span>
                  </div>

                  <div className="h-2 bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <div className="h-full w-[87%] bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            INTELLIGENT DISCOVERY
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center">

            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              Intelligent Discovery
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Search for
              <span className="text-purple-400">
                {" "}what people have built.
              </span>
            </h3>

            <p className="text-slate-500 max-w-2xl mx-auto mt-4">
              Organizations can discover innovators and projects using
              meaningful innovation signals instead of relying only on
              conventional resumes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-10 bg-[#151B2E] border border-slate-700 rounded-3xl p-7">

            <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4">
              <FaSearch className="text-purple-400" />

              <span className="text-slate-500">
                Search innovations by technology, domain, problem...
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              {[
                "Artificial Intelligence",
                "Healthcare",
                "IoT",
                "Computer Vision",
                "Sustainability",
                "Robotics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 rounded-xl bg-purple-500/10 border border-purple-500/10 text-purple-300 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SCOUTX DIFFERENTIATOR
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-[#151B2E] to-cyan-500/5 border border-purple-500/20 rounded-3xl p-8 md:p-12">

            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs uppercase tracking-widest">
                <FaStar />
                ScoutX Differentiator
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mt-6">
                From
                <span className="text-slate-500">
                  {" "}“Who are you?”
                </span>

                <br />

                to
                <span className="text-purple-400">
                  {" "}“What have you built?”
                </span>
              </h3>

              <p className="text-slate-400 text-lg leading-8 mt-6">
                ScoutX changes the discovery model from searching only for
                people and credentials to discovering the innovations,
                capabilities, evidence, and opportunities behind them.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-10">

                <div className="px-6 py-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Traditional
                  </p>

                  <p className="font-semibold mt-2">
                    Resume → Job
                  </p>
                </div>

                <FaArrowRight className="text-purple-400 hidden md:block" />

                <div className="px-6 py-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <p className="text-xs text-purple-400 uppercase tracking-widest">
                    ScoutX
                  </p>

                  <p className="font-semibold mt-2">
                    Innovation → Opportunity
                  </p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL FLOW
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-cyan-500/10 border border-purple-500/20 rounded-3xl p-8 md:p-10 text-center">

            <p className="text-purple-400 uppercase tracking-widest text-xs font-semibold">
              ScoutX Discovery Flow
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 mt-7">

              <div>
                <div className="text-lg font-semibold">
                  Build
                </div>

                <p className="text-xs text-slate-500 mt-1">
                  Create innovation
                </p>
              </div>

              <FaArrowRight className="text-purple-400 hidden md:block" />

              <div>
                <div className="text-lg font-semibold">
                  Prove
                </div>

                <p className="text-xs text-slate-500 mt-1">
                  Show evidence
                </p>
              </div>

              <FaArrowRight className="text-purple-400 hidden md:block" />

              <div>
                <div className="text-lg font-semibold">
                  Discover
                </div>

                <p className="text-xs text-slate-500 mt-1">
                  Find relevance
                </p>
              </div>

              <FaArrowRight className="text-purple-400 hidden md:block" />

              <div>
                <div className="text-lg font-semibold">
                  Match
                </div>

                <p className="text-xs text-slate-500 mt-1">
                  Identify opportunity
                </p>
              </div>

              <FaArrowRight className="text-purple-400 hidden md:block" />

              <div>
                <div className="text-lg font-semibold text-cyan-400">
                  Connect
                </div>

                <p className="text-xs text-slate-500 mt-1">
                  Create collaboration
                </p>
              </div>

            </div>

            <p className="text-slate-400 text-sm mt-7 max-w-2xl mx-auto">
              ScoutX turns scattered projects into structured,
              discoverable innovation and creates a path from building
              to real-world opportunity.
            </p>

          </div>
        </motion.div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-slate-500">
            The goal is simple.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-3">
            Make valuable innovation
            <span className="text-purple-400">
              {" "}discoverable.
            </span>
          </h3>

          <a
            href="#users"
            className="inline-flex items-center gap-3 mt-8 px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
          >
            Explore the Ecosystem
            <FaArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}