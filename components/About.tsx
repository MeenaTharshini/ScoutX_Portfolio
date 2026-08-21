"use client";

import { useState } from "react";
import {
  FaLightbulb,
  FaRobot,
  FaBuilding,
  FaUsers,
  FaSearch,
  FaComments,
  FaRocket,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaCode,
  FaGlobe,
} from "react-icons/fa";

const content = {
  mission:
    "ScoutX aims to make valuable ideas discoverable. Students, developers, creators, and members of the public can submit ideas, prototypes, or portfolios, while companies can describe the innovation and technologies they are looking for.",

  problem:
    "Companies often depend on hackathons, innovation events, recruitment campaigns, and personal networks to discover new ideas. These approaches can be expensive, time-consuming, and limited in participation. At the same time, many people with valuable ideas never participate in hackathons, leaving their innovations undiscovered.",

  solution:
    "ScoutX creates a continuous AI-powered innovation discovery platform. Innovators can submit an idea, prototype, or portfolio and receive AI-powered analysis and improvement suggestions. Companies can publish their requirements, technologies, and domains, and ScoutX can identify the ideas that best match those requirements.",

  advantage:
    "ScoutX connects both sides directly. Instead of organizing a new hackathon every time a company needs innovation, companies can discover existing ideas from a much larger pool of innovators and receive a focused shortlist of highly relevant ideas.",

  vision:
    "Our vision is to create an open innovation ecosystem where great ideas are not limited by geography, college, hackathon participation, or personal connections. Every promising idea should have a chance to be discovered by the organization that can take it further.",
};

export default function About() {
  const [active, setActive] = useState("mission");

  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-[-180px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-[-180px] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="text-center max-w-4xl mx-auto">

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
            About ScoutX
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              Ideas Meet Opportunity
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6 max-w-3xl mx-auto">
            ScoutX is an AI-powered innovation discovery platform that
            connects people who create ideas with companies looking for
            new ideas, technologies, and solutions.
          </p>

        </div>


        {/* ===================================================== */}
        {/* TWO SIDES OF SCOUTX */}
        {/* ===================================================== */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* ---------------- INNOVATOR ---------------- */}

          <div className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-10">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl">
                <FaUsers />
              </div>

              <div>

                <p className="text-purple-400 text-xs uppercase tracking-widest">
                  Side 01
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mt-1">
                  Innovators
                </h3>

              </div>

            </div>

            <p className="text-slate-400 leading-7 mt-6">
              ScoutX is open to students, developers, creators,
              early-stage innovators, and the public. Anyone with a
              promising idea or project can showcase it.
            </p>


            {/* Innovator Flow */}

            <div className="mt-8 space-y-4">

              {/* Idea */}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">

                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <FaLightbulb />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Submit Your Idea
                  </h4>

                  <p className="text-slate-500 text-sm mt-1">
                    Share an idea through text, concept, or description.
                  </p>

                </div>

              </div>


              {/* Prototype */}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">

                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <FaCode />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Showcase Your Work
                  </h4>

                  <p className="text-slate-500 text-sm mt-1">
                    Add prototypes, GitHub projects, demos, or portfolio links.
                  </p>

                </div>

              </div>


              {/* AI */}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">

                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                  <FaRobot />
                </div>

                <div>

                  <h4 className="font-semibold text-purple-300">
                    AI Evaluation & Improvement
                  </h4>

                  <p className="text-slate-400 text-sm mt-1">
                    Get AI insights about value, uniqueness, technology
                    relevance, and possible improvements.
                  </p>

                </div>

              </div>


              {/* Discover */}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">

                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
                  <FaGlobe />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Become Discoverable
                  </h4>

                  <p className="text-slate-500 text-sm mt-1">
                    Make your innovation visible to organizations looking
                    for relevant ideas.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ---------------- COMPANY ---------------- */}

          <div className="bg-[#151B2E] border border-blue-500/10 rounded-3xl p-8 md:p-10">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl">
                <FaBuilding />
              </div>

              <div>

                <p className="text-blue-400 text-xs uppercase tracking-widest">
                  Side 02
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mt-1">
                  Companies
                </h3>

              </div>

            </div>

            <p className="text-slate-400 leading-7 mt-6">
              Companies can tell ScoutX exactly what kind of innovation
              they need instead of depending only on hackathons,
              recruitment drives, or traditional searches.
            </p>


            {/* Company Flow */}

            <div className="mt-8 space-y-4">

              {/* Requirement */}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">

                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <FaBuilding />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Post Innovation Requirement
                  </h4>

                  <p className="text-slate-500 text-sm mt-1">
                    Define the idea, domain, problem, and technologies required.
                  </p>

                </div>

              </div>


              {/* AI Matching */}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">

                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                  <FaRobot />
                </div>

                <div>

                  <h4 className="font-semibold text-purple-300">
                    AI-Powered Matching
                  </h4>

                  <p className="text-slate-400 text-sm mt-1">
                    AI analyzes available ideas against the company's
                    requirements and technologies.
                  </p>

                </div>

              </div>


              {/* Top 20 / 50 */}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">

                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
                  <FaChartLine />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Focused Shortlist
                  </h4>

                  <p className="text-slate-500 text-sm mt-1">
                    Receive highly relevant ideas such as the top 20 or
                    top 50 matches.
                  </p>

                </div>

              </div>


              {/* Connection */}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700">

                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
                  <FaComments />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Direct Communication
                  </h4>

                  <p className="text-slate-500 text-sm mt-1">
                    Connect directly with promising innovators and explore
                    collaboration.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================== */}
        {/* MAIN VALUE PROPOSITION */}
        {/* ===================================================== */}

        <div className="mt-20">

          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-purple-500/20 rounded-3xl p-8 md:p-12">

            <div className="text-center">

              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                The ScoutX Advantage
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Innovation discovery
                <span className="text-purple-400">
                  {" "}without depending on hackathons
                </span>
              </h3>

              <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
                Hackathons can be valuable, but they require planning,
                participants, travel, infrastructure, time, and significant
                resources. ScoutX provides another way: discover ideas that
                already exist in a continuously growing innovation ecosystem.
              </p>

            </div>


            {/* Advantage Cards */}

            <div className="grid md:grid-cols-4 gap-4 mt-10">

              {[
                {
                  icon: FaGlobe,
                  number: "01",
                  title: "Wider Reach",
                  text: "Discover ideas beyond hackathon participants.",
                },
                {
                  icon: FaRobot,
                  number: "02",
                  title: "AI Evaluation",
                  text: "Analyze and improve ideas before they are discovered.",
                },
                {
                  icon: FaSearch,
                  number: "03",
                  title: "Smart Filtering",
                  text: "Find the most relevant ideas from a larger pool.",
                },
                {
                  icon: FaComments,
                  number: "04",
                  title: "Direct Connection",
                  text: "Move directly from discovery to communication.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6"
                  >

                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <Icon />
                    </div>

                    <p className="text-slate-600 text-xs font-bold mt-4">
                      {item.number}
                    </p>

                    <h4 className="font-semibold mt-2">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm leading-6 mt-2">
                      {item.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </div>


        {/* ===================================================== */}
        {/* WHY SCOUTX */}
        {/* ===================================================== */}

        <div className="mt-24">

          <div className="text-center mb-10">

            <p className="text-purple-400 uppercase tracking-widest text-sm">
              Why ScoutX?
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-3">
              From scattered ideas
              <span className="text-purple-400">
                {" "}to discoverable innovation
              </span>
            </h3>

          </div>


          {/* Tabs */}

          <div className="flex flex-wrap justify-center gap-3 mb-8">

            {[
              ["mission", "Our Mission"],
              ["problem", "The Problem"],
              ["solution", "Our Solution"],
              ["advantage", "Our Advantage"],
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


          {/* Content */}

          <div className="max-w-4xl mx-auto bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-10 min-h-[200px] flex items-center">

            <p className="text-slate-300 text-lg md:text-xl leading-9 text-center w-full">
              {content[active as keyof typeof content]}
            </p>

          </div>

        </div>


        {/* ===================================================== */}
        {/* HACKATHON VS SCOUTX */}
        {/* ===================================================== */}

        <div className="mt-24">

          <div className="text-center mb-12">

            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              A Different Approach
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Why wait for the next
              <span className="text-purple-400">
                {" "}hackathon?
              </span>
            </h3>

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

              <div className="space-y-3 mt-7">

                {[
                  "Event planning",
                  "Travel and logistics",
                  "Limited participant pool",
                  "High operational cost",
                  "Fixed event timeline",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-400 text-sm"
                  >
                    <span className="text-slate-600">•</span>
                    {item}
                  </div>

                ))}

              </div>

            </div>


            {/* ScoutX */}

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-3xl p-8 text-center">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl">
                <FaRocket />
              </div>

              <p className="text-purple-400 uppercase tracking-widest text-xs mt-6">
                ScoutX
              </p>

              <h4 className="text-2xl font-bold mt-2">
                Continuous Innovation Discovery
              </h4>

              <div className="flex justify-center items-center gap-3 mt-7 text-purple-400 font-semibold">

                <span>Discover</span>
                <FaArrowRight className="text-xs" />
                <span>Evaluate</span>
                <FaArrowRight className="text-xs" />
                <span>Match</span>

              </div>

              <p className="text-slate-400 text-sm leading-6 mt-6">
                AI continuously connects company requirements with
                relevant ideas already available on the platform.
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

              <div className="space-y-3 mt-7">

                {[
                  "Larger innovation pool",
                  "AI-assisted evaluation",
                  "Requirement-based matching",
                  "Top 20 / 50 shortlist",
                  "Direct communication",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-slate-400 text-sm"
                  >
                    <FaCheckCircle className="text-green-400 text-xs" />
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================== */}
        {/* CORE FLOW */}
        {/* ===================================================== */}

        <div className="mt-24">

          <div className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-12">

            <div className="text-center">

              <p className="text-purple-400 uppercase tracking-widest text-sm">
                How ScoutX Connects Both Sides
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4">
                Idea
                <span className="text-purple-400"> → </span>
                AI
                <span className="text-purple-400"> → </span>
                Match
                <span className="text-purple-400"> → </span>
                Opportunity
              </h3>

            </div>


            <div className="grid md:grid-cols-5 gap-4 items-center mt-12">

              {[
                ["💡", "Submit", "Idea / Prototype / Portfolio"],
                ["🤖", "Analyze", "AI evaluates the innovation"],
                ["🎯", "Match", "Compare with company requirements"],
                ["🏆", "Shortlist", "Top relevant ideas"],
                ["🤝", "Connect", "Company ↔ Innovator"],
              ].map(([icon, title, description], index) => (

                <div key={title} className="relative">

                  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 text-center h-full">

                    <div className="text-2xl">
                      {icon}
                    </div>

                    <h4 className="font-semibold mt-3">
                      {title}
                    </h4>

                    <p className="text-slate-500 text-xs leading-5 mt-2">
                      {description}
                    </p>

                  </div>

                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 text-purple-400 z-10">
                      →
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* ===================================================== */}
        {/* FINAL STATEMENT */}
        {/* ===================================================== */}

        <div className="text-center mt-24">

          <FaRocket className="text-purple-400 text-3xl mx-auto" />

          <h3 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">

            Great ideas should not depend on
            <span className="text-purple-400">
              {" "}who attends a hackathon.
            </span>

          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-8">

            ScoutX gives innovators a place to showcase what they create
            and gives companies an AI-powered way to discover the ideas
            they actually need.

          </p>

        </div>

      </div>
    </section>
  );
}