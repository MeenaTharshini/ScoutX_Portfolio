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
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-24 text-[#F7F1E3] md:py-32"
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.07] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.05] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] md:text-sm">
            The ScoutX Advantage
          </p>

          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Innovation discovery{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#AD8930] bg-clip-text text-transparent">
              without depending on hackathons.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            Hackathons can be valuable, but they require planning,
            participants, travel, infrastructure, time, and significant
            resources. ScoutX provides another way: discover ideas that
            already exist in a continuously growing innovation ecosystem.
          </p>
        </div>

        {/* =====================================================
            ADVANTAGE CARDS
        ====================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantageCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/[0.15] bg-[#11100D] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-[-60px] top-[-60px] h-32 w-32 rounded-full bg-[#D4AF37]/[0.06] blur-3xl"
                />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/[0.15] bg-[#D4AF37]/[0.10] text-lg text-[#E7C979] transition-all duration-300 group-hover:bg-[#D4AF37]/[0.15]">
                    <Icon />
                  </div>

                  <p className="mt-5 text-xs font-bold tracking-[0.2em] text-[#8E8779]">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-[#F7F1E3]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#8F887B]">
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
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] md:text-sm">
              A Different Approach
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Why wait for the next{" "}
              <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#AD8930] bg-clip-text text-transparent">
                hackathon?
              </span>
            </h3>

            <p className="mt-5 leading-7 text-[#A9A293]">
              ScoutX changes innovation discovery from an event-based process
              into a continuous discovery ecosystem.
            </p>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {/* Traditional */}

            <div className="rounded-3xl border border-white/[0.08] bg-[#11100D] p-8">
              <p className="text-xs uppercase tracking-widest text-[#7F786B]">
                Traditional Discovery
              </p>

              <h4 className="mt-4 text-2xl font-bold text-[#F7F1E3]">
                Organize a Hackathon
              </h4>

              <div className="mt-8 space-y-4">
                {traditionalPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#918A7D]"
                  >
                    <span className="mt-1 text-[#6D675D]">×</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ScoutX */}

            <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#17150F] p-8 text-center">
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-2xl text-[#E7C979]">
                <FaRocket />
              </div>

              <p className="mt-6 text-xs uppercase tracking-widest text-[#D4AF37]">
                ScoutX
              </p>

              <h4 className="mt-2 text-2xl font-bold text-[#F7F1E3]">
                Continuous Innovation Discovery
              </h4>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-[#D4AF37]">
                <span>Discover</span>
                <FaArrowRight className="text-xs" />
                <span>Evaluate</span>
                <FaArrowRight className="text-xs" />
                <span>Match</span>
              </div>

              <p className="mt-6 text-sm leading-6 text-[#A9A293]">
                AI continuously connects company requirements with relevant
                ideas already available on the platform.
              </p>
            </div>

            {/* Result */}

            <div className="rounded-3xl border border-[#D4AF37]/[0.15] bg-[#11100D] p-8">
              <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
                Result
              </p>

              <h4 className="mt-4 text-2xl font-bold text-[#F7F1E3]">
                Focus on the Best Ideas
              </h4>

              <div className="mt-8 space-y-4">
                {scoutXPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#A9A293]"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-xs text-[#D4AF37]" />
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] md:text-sm">
              Why ScoutX?
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              From scattered ideas{" "}
              <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#AD8930] bg-clip-text text-transparent">
                to discoverable innovation.
              </span>
            </h3>

            <p className="mt-5 leading-7 text-[#A9A293]">
              ScoutX creates a structured layer between builders, their work,
              and organizations looking for relevant innovation.
            </p>
          </div>

          {/* Tabs */}

          <div className="mb-8 mt-10 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onMouseEnter={() => setActive(tab.key)}
                onClick={() => setActive(tab.key)}
                className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  active === tab.key
                    ? "border-[#D4AF37] bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#AD8930] text-[#0B0B09] shadow-[0_8px_25px_rgba(201,166,70,0.15)]"
                    : "border-white/[0.08] bg-[#11100D] text-[#918A7D] hover:border-[#D4AF37]/30 hover:text-[#F7F1E3]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}

          <div className="mx-auto flex min-h-[220px] max-w-4xl items-center rounded-3xl border border-[#D4AF37]/[0.15] bg-[#11100D] p-8 md:p-10">
            <div className="w-full text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                {tabs.find((tab) => tab.key === active)?.label}
              </p>

              <p className="mt-5 text-lg leading-9 text-[#C0B8A9] md:text-xl">
                {content[active]}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRADITIONAL VS SCOUTX POSITIONING
        ====================================================== */}

        <div className="mt-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] md:text-sm">
              The Differentiator
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Not another resume platform.
              <br />
              <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#AD8930] bg-clip-text text-transparent">
                Not just another project showcase.
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#A9A293]">
              ScoutX connects the person, problem, prototype, evidence, and
              organization looking for relevant innovation.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/[0.15] bg-[#11100D]">
            {/* Table Header */}

            <div className="grid grid-cols-2 border-b border-white/[0.08]">
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest text-[#7F786B]">
                  Traditional Platforms
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#F7F1E3] md:text-2xl">
                  Search Around People
                </h4>
              </div>

              <div className="border-l border-white/[0.08] bg-[#D4AF37]/[0.05] p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
                  ScoutX
                </p>

                <h4 className="mt-2 text-xl font-bold text-[#F7F1E3] md:text-2xl">
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
                  className="grid grid-cols-2 border-b border-white/[0.08] last:border-b-0"
                >
                  <div className="flex items-center gap-4 p-5 md:p-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.04] text-[#7F786B]">
                      <Icon className="text-sm" />
                    </div>

                    <span className="text-sm text-[#918A7D] md:text-base">
                      {item.traditional}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 border-l border-white/[0.08] bg-[#D4AF37]/[0.05] p-5 md:p-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                      <FaCheckCircle className="text-sm" />
                    </div>

                    <span className="text-sm font-medium text-[#DDD5C6] md:text-base">
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
          <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-[#11100D] p-8 md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#D4AF37]/[0.06] blur-3xl"
            />

            <div className="relative z-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] md:text-sm">
                ScoutX Discovery Model
              </p>

              <h3 className="mt-4 text-3xl font-bold md:text-5xl">
                Build{" "}
                <span className="text-[#D4AF37]">→</span> Prove{" "}
                <span className="text-[#D4AF37]">→</span> Discover{" "}
                <span className="text-[#D4AF37]">→</span> Match{" "}
                <span className="text-[#D4AF37]">→</span> Connect
              </h3>
            </div>

            <div className="relative z-10 mt-12 grid gap-4 md:grid-cols-5">
              {discoverySteps.map((item, index) => (
                <div key={item.number} className="relative">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0B0B09] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30">
                    <p className="text-xs font-bold tracking-widest text-[#D4AF37]">
                      {item.number}
                    </p>

                    <h4 className="mt-3 text-lg font-semibold text-[#F7F1E3]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                      {item.text}
                    </p>
                  </div>

                  {index < discoverySteps.length - 1 && (
                    <FaArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xs text-[#D4AF37]/60 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}

        <div className="mx-auto mt-24 max-w-4xl text-center">
          <FaRocket className="mx-auto text-3xl text-[#D4AF37]" />

          <h3 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
            Make valuable innovation{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#AD8930] bg-clip-text text-transparent">
              discoverable.
            </span>
          </h3>

          <p className="mt-6 text-lg leading-8 text-[#A9A293]">
            ScoutX turns scattered projects and prototypes into structured,
            discoverable innovation — creating a path from building to
            real-world opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}