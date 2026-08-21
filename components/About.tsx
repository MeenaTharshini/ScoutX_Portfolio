"use client";

import { useState } from "react";

export default function About() {
  const [active, setActive] = useState("mission");

  const content = {
    mission:
      "ScoutX is an innovation discovery platform designed to connect real-world problems with existing student and early-stage prototypes. Instead of focusing only on resumes, ScoutX focuses on what innovators have actually built.",

    problem:
      "Valuable student innovations are often scattered across hackathons, GitHub repositories, college events, social platforms, and personal portfolios. After an event ends, many promising prototypes lose visibility and never reach organizations that could benefit from them.",

    solution:
      "ScoutX creates a structured innovation layer where projects become discoverable through their problem, domain, technology, prototype stage, evidence, and potential applications. Organizations can discover relevant solutions instead of searching only through resumes.",

    difference:
      "Unlike traditional professional networks, ScoutX is innovation-first rather than profile-first. The primary unit of discovery is the project or prototype. Organizations can post real problems and discover innovators who have already built relevant solutions.",

    vision:
      "Our long-term vision is to build an innovation ecosystem where ideas do not disappear after hackathons or college events, and where promising prototypes can move from concept to collaboration, pilot, incubation, and real-world impact.",
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
            About ScoutX
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Where{" "}
            <span className="text-purple-500">
              Problems Meet Prototypes
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            ScoutX is built to make emerging innovation discoverable,
            understandable, and connected to the organizations that can
            take it further.
          </p>
        </div>

        {/* Main Introduction */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Innovation Discovery Platform
            </div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Innovation exists everywhere.
              <span className="text-slate-400">
                {" "}
                Discovery doesn't.
              </span>
            </h3>

            <p className="text-slate-400 mt-6 text-lg leading-8">
              Students and early-stage innovators build meaningful ideas,
              prototypes, and solutions every day. But these innovations are
              often scattered across hackathons, GitHub, college events,
              portfolios, and social platforms.
            </p>

            <p className="text-slate-400 mt-4 text-lg leading-8">
              ScoutX creates a dedicated discovery layer that connects those
              innovations with real-world problems and organizations looking
              for solutions.
            </p>
          </div>

          {/* Right - Concept Card */}
          <div className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-10">

            <p className="text-slate-500 uppercase tracking-widest text-xs mb-6">
              ScoutX Ecosystem
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
                <div className="text-2xl">🏢</div>
                <div>
                  <h4 className="font-semibold">Real-World Problems</h4>
                  <p className="text-slate-500 text-sm">
                    Organizations post challenges and needs.
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-purple-400 text-xl">
                ↓
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <div className="text-2xl">🔎</div>
                <div>
                  <h4 className="font-semibold text-purple-300">
                    ScoutX Matching
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Relevant innovations are discovered and matched.
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-purple-400 text-xl">
                ↓
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
                <div className="text-2xl">💡</div>
                <div>
                  <h4 className="font-semibold">Existing Innovations</h4>
                  <p className="text-slate-500 text-sm">
                    Prototypes, projects, and their builders.
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-purple-400 text-xl">
                ↓
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
                <div className="text-2xl">🚀</div>
                <div>
                  <h4 className="font-semibold">Real-World Opportunity</h4>
                  <p className="text-slate-500 text-sm">
                    Collaboration, pilots, incubation, and growth.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Explanation */}
        <div className="mt-24">

          <div className="text-center mb-10">
            <p className="text-purple-400 uppercase tracking-widest text-sm">
              Why ScoutX?
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Built around{" "}
              <span className="text-purple-500">
                innovation, not resumes
              </span>
            </h3>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">

            {[
              ["mission", "Our Mission"],
              ["problem", "The Problem"],
              ["solution", "Our Solution"],
              ["difference", "What Makes Us Different"],
              ["vision", "Our Vision"],
            ].map(([key, label]) => (
              <button
                key={key}
                onMouseEnter={() => setActive(key)}
                onClick={() => setActive(key)}
                className={`px-5 py-3 rounded-xl border transition-all duration-300 text-sm font-medium ${
                  active === key
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-[#151B2E] text-slate-400 border-slate-700 hover:border-purple-500/40 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}

          </div>

          {/* Dynamic Content */}
          <div className="max-w-4xl mx-auto bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-10 min-h-[180px] flex items-center">

            <p className="text-slate-300 text-lg md:text-xl leading-9 text-center w-full">
              {content[active as keyof typeof content]}
            </p>

          </div>
        </div>

        {/* Core Difference */}
        <div className="mt-24">

          <div className="bg-gradient-to-br from-purple-500/10 to-slate-800/40 border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center">

            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              Our Core Difference
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Not People → Jobs
            </h3>

            <div className="text-2xl md:text-4xl text-purple-400 my-5">
              ↓
            </div>

            <h3 className="text-3xl md:text-5xl font-bold">
              <span className="text-purple-400">
                Problems ↔ Innovations
              </span>
            </h3>

            <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
              ScoutX moves beyond traditional recruitment by helping
              organizations discover existing innovations that can address
              their real-world challenges.
            </p>

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

          <div className="bg-[#151B2E] p-6 rounded-2xl border border-purple-500/10 text-center">
            <h3 className="text-3xl font-bold text-purple-400">
              01
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Problem Discovery
            </p>
          </div>

          <div className="bg-[#151B2E] p-6 rounded-2xl border border-purple-500/10 text-center">
            <h3 className="text-3xl font-bold text-purple-400">
              02
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Innovation Matching
            </p>
          </div>

          <div className="bg-[#151B2E] p-6 rounded-2xl border border-purple-500/10 text-center">
            <h3 className="text-3xl font-bold text-purple-400">
              03
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Evidence-Based Discovery
            </p>
          </div>

          <div className="bg-[#151B2E] p-6 rounded-2xl border border-purple-500/10 text-center">
            <h3 className="text-3xl font-bold text-purple-400">
              04
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Real-World Impact
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}