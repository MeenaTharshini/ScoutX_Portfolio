"use client";

import { motion } from "framer-motion";
import {
  FaIdCard,
  FaBullseye,
  FaProjectDiagram,
  FaChartLine,
  FaShieldAlt,
  FaSearch,
  FaHandshake,
  FaRocket,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: FaIdCard,
    number: "01",
    title: "Innovation Passport",
    description:
      "A structured identity for what an innovator has actually built — beyond a traditional resume.",
    points: [
      "Problem solved",
      "Technology used",
      "Prototype stage",
      "Impact and applications",
    ],
  },
  {
    icon: FaBullseye,
    number: "02",
    title: "Problem Board",
    description:
      "Organizations can publish real-world challenges and describe the capabilities or solutions they are looking for.",
    points: [
      "Real-world challenges",
      "Domain requirements",
      "Technical requirements",
      "Expected outcomes",
    ],
  },
  {
    icon: FaProjectDiagram,
    number: "03",
    title: "Problem ↔ Innovation Matching",
    description:
      "ScoutX connects organizational problems with relevant existing prototypes and capabilities.",
    points: [
      "Technology matching",
      "Domain relevance",
      "Capability matching",
      "Potential use cases",
    ],
  },
  {
    icon: FaChartLine,
    number: "04",
    title: "Innovation Readiness",
    description:
      "A structured view of how mature and usable an innovation is, from concept to validated prototype.",
    points: [
      "Development stage",
      "Prototype status",
      "Validation signals",
      "Deployment potential",
    ],
  },
  {
    icon: FaShieldAlt,
    number: "05",
    title: "Evidence-Based Profiles",
    description:
      "Projects are supported by evidence so organizations can evaluate what has actually been built.",
    points: [
      "GitHub repositories",
      "Live demonstrations",
      "Documentation",
      "Project outcomes",
    ],
  },
  {
    icon: FaSearch,
    number: "06",
    title: "Innovation Discovery",
    description:
      "Search beyond resumes and job titles to discover people based on the solutions they have created.",
    points: [
      "Search by technology",
      "Search by domain",
      "Search by problem",
      "Search by prototype stage",
    ],
  },
  {
    icon: FaHandshake,
    number: "07",
    title: "Opportunity Matching",
    description:
      "Relevant innovators can be connected to internships, pilots, collaborations, incubation, and other opportunities.",
    points: [
      "Internships",
      "Pilot projects",
      "Collaborations",
      "Incubation opportunities",
    ],
  },
  {
    icon: FaRocket,
    number: "08",
    title: "Innovation Growth Pipeline",
    description:
      "Help promising projects move from a college prototype toward real-world validation and adoption.",
    points: [
      "Discover",
      "Evaluate",
      "Connect",
      "Collaborate",
    ],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-[-200px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[-200px] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />

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
            Platform Features
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Built around
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              innovation discovery
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6 max-w-3xl mx-auto">
            ScoutX focuses on the things that traditional professional
            networks don't prioritize:
            <span className="text-purple-400 font-medium">
              {" "}
              problems, prototypes, evidence, readiness, and potential impact.
            </span>
          </p>
        </motion.div>

        {/* Feature Grid */}
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
                  delay: index * 0.07,
                }}
                className="group bg-[#151B2E] border border-slate-800 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >

                {/* Icon + Number */}
                <div className="flex items-center justify-between">

                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/10 text-purple-400 flex items-center justify-center text-lg group-hover:bg-purple-500/20 transition">
                    <Icon />
                  </div>

                  <span className="text-slate-700 text-lg font-bold">
                    {feature.number}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mt-6">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-6 mt-3">
                  {feature.description}
                </p>

                {/* Points */}
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

        {/* Feature Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-12">

            {/* Left */}
            <div>

              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                Core Product
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Don't just say
                <span className="text-purple-400">
                  {" "}
                  "I can build."
                </span>
                <br />
                Show what you built.
              </h3>

              <p className="text-slate-400 text-lg leading-8 mt-6">
                ScoutX transforms a conventional profile into an
                evidence-backed Innovation Passport that helps organizations
                understand the actual capability behind a project.
              </p>

              <div className="space-y-4 mt-8">

                {[
                  "What problem was solved?",
                  "What technology was used?",
                  "How far has the prototype progressed?",
                  "What evidence supports the work?",
                  "Where could the solution be applied?",
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

            {/* Innovation Passport Preview */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">
                      Innovation Passport
                    </p>

                    <h4 className="text-2xl font-bold mt-2">
                      HealthAssist AI
                    </h4>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <FaRocket />
                  </div>

                </div>

                {/* Builder */}
                <div className="mt-6 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">
                    A
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

                {/* Problem */}
                <div className="mt-6 p-4 rounded-xl bg-slate-800/60">

                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Problem Solved
                  </p>

                  <p className="text-sm text-slate-300 mt-2 leading-6">
                    Helps patients navigate healthcare information and
                    appointment workflows through an AI-assisted interface.
                  </p>

                </div>

                {/* Evidence */}
                <div className="grid grid-cols-2 gap-3 mt-4">

                  <div className="p-4 rounded-xl bg-slate-800/60">
                    <FaGithub className="text-slate-300" />

                    <p className="text-xs text-slate-400 mt-3">
                      GitHub
                    </p>

                    <p className="text-xs text-green-400 mt-1">
                      Verified
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

                </div>

                {/* Readiness */}
                <div className="mt-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">

                  <div className="flex justify-between items-center">

                    <span className="text-xs text-slate-400">
                      Innovation Readiness
                    </span>

                    <span className="text-purple-400 font-bold">
                      87%
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

        {/* Matching Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <div className="text-center">

            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              Intelligent Discovery
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              From searching people
              <span className="text-slate-500">
                {" "}
                to discovering solutions.
              </span>
            </h3>

          </div>

          {/* Matching visualization */}
          <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 items-center gap-5">

            {/* Problem */}
            <div className="bg-[#151B2E] border border-blue-500/10 rounded-2xl p-6">

              <p className="text-blue-400 text-xs uppercase tracking-widest">
                Organization Problem
              </p>

              <h4 className="text-xl font-bold mt-4">
                Smart Agriculture
              </h4>

              <p className="text-slate-500 text-sm leading-6 mt-3">
                Need a low-cost system for detecting crop diseases using
                computer vision.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">

                {["AI", "Computer Vision", "Agriculture"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-300 text-xs"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

            {/* Matching */}
            <div className="text-center">

              <div className="w-20 h-20 mx-auto rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center text-2xl">
                <FaProjectDiagram />
              </div>

              <h4 className="font-bold text-purple-300 mt-5">
                ScoutX Match
              </h4>

              <p className="text-slate-500 text-sm mt-2">
                Problem ↔ Prototype
              </p>

              <div className="flex justify-center items-center gap-2 mt-5 text-purple-400">
                <span>←</span>
                <span className="text-xs">
                  Relevant capability
                </span>
                <span>→</span>
              </div>

            </div>

            {/* Innovation */}
            <div className="bg-[#151B2E] border border-purple-500/10 rounded-2xl p-6">

              <p className="text-purple-400 text-xs uppercase tracking-widest">
                Matching Innovation
              </p>

              <h4 className="text-xl font-bold mt-4">
                CropVision AI
              </h4>

              <p className="text-slate-500 text-sm leading-6 mt-3">
                Existing student prototype that identifies crop diseases
                using image classification.
              </p>

              <div className="flex items-center justify-between mt-5">

                <div className="flex flex-wrap gap-2">

                  {["AI", "CV", "Agriculture"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-lg bg-purple-500/10 text-purple-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <span className="text-green-400 text-sm font-bold">
                  91%
                </span>

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
            Every feature serves one purpose.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-3">
            Make valuable innovation
            <span className="text-purple-400">
              {" "}
              discoverable.
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