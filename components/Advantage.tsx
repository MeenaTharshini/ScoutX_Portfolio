"use client";

import { useState } from "react";
import {
  FaGlobe,
  FaRobot,
  FaSearch,
  FaComments,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaBullseye,
  FaUsers,
  FaCode,
  FaHandshake,
} from "react-icons/fa";

const advantageCards = [
  {
    icon: FaGlobe,
    number: "01",
    title: "Wider Reach",
    text: "Discover ideas beyond hackathon participants and traditional recruitment channels.",
  },
  {
    icon: FaRobot,
    number: "02",
    title: "AI Evaluation",
    text: "Analyze innovation for value, uniqueness, technology relevance, feasibility, and potential.",
  },
  {
    icon: FaSearch,
    number: "03",
    title: "Smart Filtering",
    text: "Find the most relevant ideas from a continuously growing innovation ecosystem.",
  },
  {
    icon: FaComments,
    number: "04",
    title: "Direct Connection",
    text: "Move directly from discovery to communication, collaboration, pilots, or opportunities.",
  },
];

const content = {
  mission:
    "ScoutX aims to make valuable innovation discoverable by creating a continuous bridge between people who build solutions and organizations that need them.",

  problem:
    "Companies often depend on hackathons, innovation events, recruitment campaigns, and personal networks to discover new ideas. These approaches can be expensive, time-consuming, and limited in participation.",

  solution:
    "ScoutX creates an AI-powered innovation discovery layer where innovators can showcase ideas and prototypes while companies can publish requirements and discover relevant solutions.",

  advantage:
    "Instead of organizing a new hackathon every time a company needs innovation, ScoutX enables organizations to discover existing ideas from a much larger pool and receive a focused shortlist of relevant innovations.",

  vision:
    "Our vision is to create an open innovation ecosystem where promising ideas are not limited by geography, college, hackathon participation, or personal connections.",
};

type ContentKey = keyof typeof content;

const tabs: { key: ContentKey; label: string }[] = [
  { key: "mission", label: "Our Mission" },
  { key: "problem", label: "The Problem" },
  { key: "solution", label: "Our Solution" },
  { key: "advantage", label: "Our Advantage" },
  { key: "vision", label: "Our Vision" },
];

const traditionalPoints = [
  "Event planning and coordination",
  "Travel, venue, and logistics",
  "Limited participant pool",
  "High operational overhead",
  "Fixed event timeline",
];

const scoutXPoints = [
  "Larger innovation pool",
  "AI-assisted evaluation",
  "Requirement-based matching",
  "Focused top 20 / 50 shortlist",
  "Direct communication",
];

const positioning = [
  {
    icon: FaUsers,
    traditional: "Resume → Skills",
    scoutx: "Builder → Capability",
  },
  {
    icon: FaLightbulb,
    traditional: "Profile → Job",
    scoutx: "Innovation → Opportunity",
  },
  {
    icon: FaCode,
    traditional: "Project → Separate repository",
    scoutx: "Project → Prototype",
  },
  {
    icon: FaSearch,
    traditional: "Manual Search",
    scoutx: "Intelligent Discovery",
  },
  {
    icon: FaHandshake,
    traditional: "Application → Selection",
    scoutx: "Discovery → Connection",
  },
];

export default function Advantage() {
  const [active, setActive] = useState<ContentKey>("mission");

  return (
    <section
      id="advantage"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
            The ScoutX Advantage
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Innovation discovery{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              without depending on hackathons
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6">
            Hackathons can be valuable, but they require planning,
            participants, travel, infrastructure, time, and significant
            resources. ScoutX provides another way: discover ideas that
            already exist in a continuously growing innovation ecosystem.
          </p>
        </div>

        {/* =====================================================
            ADVANTAGE CARDS
        ===================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {advantageCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group bg-[#151B2E] border border-slate-700 hover:border-purple-500/30 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg group-hover:bg-purple-500/20 transition">
                  <Icon />
                </div>

                <p className="text-slate-600 text-xs font-bold mt-5">
                  {item.number}
                </p>

                <h3 className="text-lg font-semibold mt-2">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-6 mt-2">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            HACKATHON VS SCOUTX
        ===================================================== */}

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              A Different Approach
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Why wait for the next{" "}
              <span className="text-purple-400">hackathon?</span>
            </h3>

            <p className="text-slate-400 mt-5 leading-7">
              ScoutX changes innovation discovery from an event-based process
              into a continuous discovery ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 items-stretch">
            {/* Traditional */}
            <div className="bg-[#151B2E] border border-slate-800 rounded-3xl p-8">
              <p className="text-slate-500 uppercase tracking-widest text-xs">
                Traditional Discovery
              </p>

              <h4 className="text-2xl font-bold mt-4">
                Organize a Hackathon
              </h4>

              <div className="space-y-4 mt-8">
                {traditionalPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-slate-400 text-sm"
                  >
                    <span className="text-slate-600 mt-1">×</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ScoutX */}
            <div className="relative bg-purple-500/10 border border-purple-500/30 rounded-3xl p-8 text-center overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl">
                <FaRocket />
              </div>

              <p className="text-purple-400 uppercase tracking-widest text-xs mt-6">
                ScoutX
              </p>

              <h4 className="text-2xl font-bold mt-2">
                Continuous Innovation Discovery
              </h4>

              <div className="flex flex-wrap justify-center items-center gap-3 mt-8 text-purple-400 font-semibold text-sm">
                <span>Discover</span>

                <FaArrowRight className="text-xs" />

                <span>Evaluate</span>

                <FaArrowRight className="text-xs" />

                <span>Match</span>
              </div>

              <p className="text-slate-400 text-sm leading-6 mt-6">
                AI continuously connects company requirements with relevant
                ideas already available on the platform.
              </p>
            </div>

            {/* Result */}
            <div className="bg-[#151B2E] border border-green-500/10 rounded-3xl p-8">
              <p className="text-green-400 uppercase tracking-widest text-xs">
                Result
              </p>

              <h4 className="text-2xl font-bold mt-4">
                Focus on the Best Ideas
              </h4>

              <div className="space-y-4 mt-8">
                {scoutXPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-slate-400 text-sm"
                  >
                    <FaCheckCircle className="text-green-400 text-xs shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            WHY SCOUTX
        ===================================================== */}

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              Why ScoutX?
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              From scattered ideas{" "}
              <span className="text-purple-400">
                to discoverable innovation
              </span>
            </h3>

            <p className="text-slate-400 mt-5 leading-7">
              ScoutX creates a structured layer between builders, their work,
              and organizations looking for relevant innovation.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onMouseEnter={() => setActive(tab.key)}
                onClick={() => setActive(tab.key)}
                className={`px-5 py-3 rounded-xl border transition-all duration-300 text-sm font-medium ${
                  active === tab.key
                    ? "bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/10"
                    : "bg-[#151B2E] text-slate-400 border-slate-700 hover:border-purple-500/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-10 min-h-[220px] flex items-center">
            <div className="w-full text-center">
              <p className="text-purple-400 text-xs uppercase tracking-widest font-semibold">
                {tabs.find((tab) => tab.key === active)?.label}
              </p>

              <p className="text-slate-300 text-lg md:text-xl leading-9 mt-5">
                {content[active]}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRADITIONAL VS SCOUTX POSITIONING
        ===================================================== */}

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              The Differentiator
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Not another resume platform.
              <br />
              <span className="text-purple-400">
                Not just another project showcase.
              </span>
            </h3>

            <p className="text-slate-400 mt-6 text-lg leading-8">
              ScoutX connects the person, problem, prototype, evidence, and
              organization looking for relevant innovation.
            </p>
          </div>

          <div className="bg-[#151B2E] border border-purple-500/10 rounded-3xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2 border-b border-slate-800">
              <div className="p-6 md:p-8">
                <p className="text-slate-500 text-xs uppercase tracking-widest">
                  Traditional Platforms
                </p>

                <h4 className="text-xl md:text-2xl font-bold mt-2">
                  Search Around People
                </h4>
              </div>

              <div className="p-6 md:p-8 bg-purple-500/5 border-l border-slate-800">
                <p className="text-purple-400 text-xs uppercase tracking-widest">
                  ScoutX
                </p>

                <h4 className="text-xl md:text-2xl font-bold mt-2">
                  Search Around Innovation
                </h4>
              </div>
            </div>

            {/* Comparison Rows */}
            {positioning.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.traditional}
                  className="grid grid-cols-2 border-b border-slate-800 last:border-b-0"
                >
                  <div className="p-5 md:p-6 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-500 flex items-center justify-center shrink-0">
                      <Icon className="text-sm" />
                    </div>

                    <span className="text-slate-400 text-sm md:text-base">
                      {item.traditional}
                    </span>
                  </div>

                  <div className="p-5 md:p-6 flex items-center gap-4 bg-purple-500/5 border-l border-slate-800">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                      <FaCheckCircle className="text-sm" />
                    </div>

                    <span className="text-slate-200 font-medium text-sm md:text-base">
                      {item.scoutx}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DISCOVERY FLOW
        ===================================================== */}

        <div className="mt-24">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-purple-500/20 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                ScoutX Discovery Model
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4">
                Build{" "}
                <span className="text-purple-400">→</span> Prove{" "}
                <span className="text-purple-400">→</span> Discover{" "}
                <span className="text-purple-400">→</span> Match{" "}
                <span className="text-purple-400">→</span> Connect
              </h3>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mt-12">
              {[
                {
                  number: "01",
                  title: "Build",
                  text: "Create an idea, project, or prototype.",
                },
                {
                  number: "02",
                  title: "Prove",
                  text: "Show evidence through real work.",
                },
                {
                  number: "03",
                  title: "Discover",
                  text: "Make innovation visible and searchable.",
                },
                {
                  number: "04",
                  title: "Match",
                  text: "Identify relevant opportunities.",
                },
                {
                  number: "05",
                  title: "Connect",
                  text: "Create meaningful collaboration.",
                },
              ].map((item, index, array) => (
                <div key={item.number} className="relative">
                  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center h-full">
                    <p className="text-purple-400 text-xs font-bold tracking-widest">
                      {item.number}
                    </p>

                    <h4 className="text-lg font-semibold mt-3">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm leading-6 mt-2">
                      {item.text}
                    </p>
                  </div>

                  {index < array.length - 1 && (
                    <FaArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-purple-400 z-10 text-xs" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <div className="text-center mt-24 max-w-4xl mx-auto">
          <FaRocket className="text-purple-400 text-3xl mx-auto" />

          <h3 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Make valuable innovation{" "}
            <span className="text-purple-400">discoverable.</span>
          </h3>

          <p className="text-slate-400 mt-6 text-lg leading-8">
            ScoutX turns scattered projects and prototypes into structured,
            discoverable innovation — creating a path from building to
            real-world opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}