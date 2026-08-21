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

const discoverySteps = [
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
];

export default function Advantage() {
  const [active, setActive] = useState<ContentKey>("mission");

  return (
    <section
      id="advantage"
      className="relative overflow-hidden bg-[#0B0B09] text-[#F7F1E3] py-24 md:py-32 px-6"
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="absolute top-[-180px] right-[-180px] w-[500px] h-[500px] rounded-full bg-[#C9A646]/8 blur-3xl pointer-events-none" />

      <div className="absolute bottom-[-180px] left-[-180px] w-[500px] h-[500px] rounded-full bg-[#C9A646]/6 blur-3xl pointer-events-none" />

      <div className="absolute inset-0 bg-grid opacity-[0.18] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
            The ScoutX Advantage
          </p>

          <div className="gold-line mx-auto mt-4" />

          <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-[1.08] tracking-tight">
            Innovation discovery{" "}
            <span className="text-gradient">
              without depending on hackathons.
            </span>
          </h2>

          <p className="text-[#A9A293] text-base md:text-lg leading-8 mt-6 max-w-3xl mx-auto">
            Hackathons can be valuable, but they require planning,
            participants, travel, infrastructure, time, and significant
            resources. ScoutX provides another way: discover ideas that
            already exist in a continuously growing innovation ecosystem.
          </p>
        </div>

        {/* =====================================================
            ADVANTAGE CARDS
        ====================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {advantageCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-3xl bg-[#11100D] border border-[#D4AF37]/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40"
              >
                <div className="absolute top-[-60px] right-[-60px] w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center text-lg group-hover:bg-[#D4AF37]/15 transition-all duration-300">
                    <Icon />
                  </div>

                  <p className="text-[#8E8779] text-xs font-bold tracking-[0.2em] mt-5">
                    {item.number}
                  </p>

                  <h3 className="text-lg font-semibold text-[#F7F1E3] mt-2">
                    {item.title}
                  </h3>

                  <p className="text-[#8F887B] text-sm leading-6 mt-2">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            HACKATHON VS SCOUTX
        ====================================================== */}

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
              A Different Approach
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Why wait for the next{" "}
              <span className="text-gradient">hackathon?</span>
            </h3>

            <p className="text-[#A9A293] mt-5 leading-7">
              ScoutX changes innovation discovery from an event-based process
              into a continuous discovery ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 items-stretch">
            {/* Traditional */}

            <div className="bg-[#11100D] border border-white/10 rounded-3xl p-8">
              <p className="text-[#7F786B] uppercase tracking-widest text-xs">
                Traditional Discovery
              </p>

              <h4 className="text-2xl font-bold mt-4 text-[#F7F1E3]">
                Organize a Hackathon
              </h4>

              <div className="space-y-4 mt-8">
                {traditionalPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-[#918A7D] text-sm"
                  >
                    <span className="text-[#6D675D] mt-1">×</span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ScoutX */}

            <div className="relative bg-[#17150F] border border-[#D4AF37]/30 rounded-3xl p-8 text-center overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#E7C979] flex items-center justify-center text-2xl">
                <FaRocket />
              </div>

              <p className="text-[#D4AF37] uppercase tracking-widest text-xs mt-6">
                ScoutX
              </p>

              <h4 className="text-2xl font-bold mt-2 text-[#F7F1E3]">
                Continuous Innovation Discovery
              </h4>

              <div className="flex flex-wrap justify-center items-center gap-3 mt-8 text-[#D4AF37] font-semibold text-sm">
                <span>Discover</span>

                <FaArrowRight className="text-xs" />

                <span>Evaluate</span>

                <FaArrowRight className="text-xs" />

                <span>Match</span>
              </div>

              <p className="text-[#A9A293] text-sm leading-6 mt-6">
                AI continuously connects company requirements with relevant
                ideas already available on the platform.
              </p>
            </div>

            {/* Result */}

            <div className="bg-[#11100D] border border-[#D4AF37]/15 rounded-3xl p-8">
              <p className="text-[#D4AF37] uppercase tracking-widest text-xs">
                Result
              </p>

              <h4 className="text-2xl font-bold mt-4 text-[#F7F1E3]">
                Focus on the Best Ideas
              </h4>

              <div className="space-y-4 mt-8">
                {scoutXPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-[#A9A293] text-sm"
                  >
                    <FaCheckCircle className="text-[#D4AF37] text-xs shrink-0 mt-1" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            WHY SCOUTX
        ====================================================== */}

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
              Why ScoutX?
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              From scattered ideas{" "}
              <span className="text-gradient">
                to discoverable innovation.
              </span>
            </h3>

            <p className="text-[#A9A293] mt-5 leading-7">
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
                    ? "bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#AD8930] text-[#0B0B09] border-[#D4AF37] shadow-[0_8px_25px_rgba(201,166,70,0.15)]"
                    : "bg-[#11100D] text-[#918A7D] border-white/10 hover:border-[#D4AF37]/30 hover:text-[#F7F1E3]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}

          <div className="max-w-4xl mx-auto bg-[#11100D] border border-[#D4AF37]/15 rounded-3xl p-8 md:p-10 min-h-[220px] flex items-center">
            <div className="w-full text-center">
              <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
                {tabs.find((tab) => tab.key === active)?.label}
              </p>

              <p className="text-[#C0B8A9] text-lg md:text-xl leading-9 mt-5">
                {content[active]}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRADITIONAL VS SCOUTX POSITIONING
        ====================================================== */}

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
              The Differentiator
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Not another resume platform.
              <br />
              <span className="text-gradient">
                Not just another project showcase.
              </span>
            </h3>

            <p className="text-[#A9A293] mt-6 text-lg leading-8">
              ScoutX connects the person, problem, prototype, evidence, and
              organization looking for relevant innovation.
            </p>
          </div>

          <div className="bg-[#11100D] border border-[#D4AF37]/15 rounded-3xl overflow-hidden">
            {/* Table Header */}

            <div className="grid grid-cols-2 border-b border-white/10">
              <div className="p-6 md:p-8">
                <p className="text-[#7F786B] text-xs uppercase tracking-widest">
                  Traditional Platforms
                </p>

                <h4 className="text-xl md:text-2xl font-bold mt-2 text-[#F7F1E3]">
                  Search Around People
                </h4>
              </div>

              <div className="p-6 md:p-8 bg-[#D4AF37]/5 border-l border-white/10">
                <p className="text-[#D4AF37] text-xs uppercase tracking-widest">
                  ScoutX
                </p>

                <h4 className="text-xl md:text-2xl font-bold mt-2 text-[#F7F1E3]">
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
                  className="grid grid-cols-2 border-b border-white/10 last:border-b-0"
                >
                  <div className="p-5 md:p-6 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 text-[#7F786B] flex items-center justify-center shrink-0">
                      <Icon className="text-sm" />
                    </div>

                    <span className="text-[#918A7D] text-sm md:text-base">
                      {item.traditional}
                    </span>
                  </div>

                  <div className="p-5 md:p-6 flex items-center gap-4 bg-[#D4AF37]/5 border-l border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <FaCheckCircle className="text-sm" />
                    </div>

                    <span className="text-[#DDD5C6] font-medium text-sm md:text-base">
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
        ====================================================== */}

        <div className="mt-24">
          <div className="relative overflow-hidden bg-[#11100D] border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12">
            <div className="absolute top-[-120px] right-[-120px] w-72 h-72 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
                ScoutX Discovery Model
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4">
                Build{" "}
                <span className="text-[#D4AF37]">→</span> Prove{" "}
                <span className="text-[#D4AF37]">→</span> Discover{" "}
                <span className="text-[#D4AF37]">→</span> Match{" "}
                <span className="text-[#D4AF37]">→</span> Connect
              </h3>
            </div>

            <div className="relative z-10 grid md:grid-cols-5 gap-4 mt-12">
              {discoverySteps.map((item, index) => (
                <div key={item.number} className="relative">
                  <div className="bg-[#0B0B09] border border-white/10 rounded-2xl p-6 text-center h-full hover:border-[#D4AF37]/30 hover:-translate-y-1 transition-all duration-300">
                    <p className="text-[#D4AF37] text-xs font-bold tracking-widest">
                      {item.number}
                    </p>

                    <h4 className="text-lg font-semibold mt-3 text-[#F7F1E3]">
                      {item.title}
                    </h4>

                    <p className="text-[#8F887B] text-sm leading-6 mt-2">
                      {item.text}
                    </p>
                  </div>

                  {index < discoverySteps.length - 1 && (
                    <FaArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#D4AF37]/60 z-10 text-xs" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}

        <div className="text-center mt-24 max-w-4xl mx-auto">
          <FaRocket className="text-[#D4AF37] text-3xl mx-auto" />

          <h3 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Make valuable innovation{" "}
            <span className="text-gradient">discoverable.</span>
          </h3>

          <p className="text-[#A9A293] mt-6 text-lg leading-8">
            ScoutX turns scattered projects and prototypes into structured,
            discoverable innovation — creating a path from building to
            real-world opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}