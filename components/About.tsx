"use client";

import {
  FaLightbulb,
  FaRobot,
  FaBuilding,
  FaUsers,
  FaCode,
  FaGlobe,
  FaChartLine,
  FaComments,
  FaBullseye,
  FaListOl,
  FaHandshake,
  FaArrowRight,
  FaRocket,
} from "react-icons/fa";

const innovationFlow = [
  {
    icon: FaLightbulb,
    title: "Submit",
    description: "Idea / Prototype / Portfolio",
  },
  {
    icon: FaRobot,
    title: "Analyze",
    description: "AI evaluates the innovation",
  },
  {
    icon: FaBullseye,
    title: "Match",
    description: "Compare with company requirements",
  },
  {
    icon: FaListOl,
    title: "Shortlist",
    description: "Top relevant ideas",
  },
  {
    icon: FaHandshake,
    title: "Connect",
    description: "Company ↔ Innovator",
  },
];

const innovatorSteps = [
  {
    icon: FaLightbulb,
    title: "Submit Your Idea",
    description:
      "Share an idea through text, concept, problem statement, or description.",
    iconStyle: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: FaCode,
    title: "Showcase Your Work",
    description:
      "Add prototypes, GitHub projects, demos, documentation, or portfolio links.",
    iconStyle: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: FaRobot,
    title: "AI Evaluation & Improvement",
    description:
      "Get AI insights about value, uniqueness, technology relevance, feasibility, and possible improvements.",
    iconStyle: "bg-purple-500/20 text-purple-300",
    featured: true,
  },
  {
    icon: FaGlobe,
    title: "Become Discoverable",
    description:
      "Make your innovation visible to organizations searching for relevant ideas and capabilities.",
    iconStyle: "bg-green-500/10 text-green-400",
  },
];

const companySteps = [
  {
    icon: FaBuilding,
    title: "Post Innovation Requirement",
    description:
      "Define the problem, innovation area, industry, domain, and technologies required.",
    iconStyle: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: FaRobot,
    title: "AI-Powered Matching",
    description:
      "AI analyzes available innovations against the company's requirements, technologies, and capabilities.",
    iconStyle: "bg-purple-500/20 text-purple-300",
    featured: true,
  },
  {
    icon: FaChartLine,
    title: "Focused Shortlist",
    description:
      "Receive a focused shortlist of highly relevant ideas, prototypes, and innovators.",
    iconStyle: "bg-yellow-500/10 text-yellow-400",
  },
  {
    icon: FaComments,
    title: "Direct Communication",
    description:
      "Connect directly with promising innovators to explore collaboration, pilots, or opportunities.",
    iconStyle: "bg-green-500/10 text-green-400",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-[-180px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-180px] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

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
            connects people who create ideas with companies looking for new
            ideas, technologies, and solutions.
          </p>
        </div>

        {/* =====================================================
            TWO SIDES OF SCOUTX
        ===================================================== */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* ==================== INNOVATORS ==================== */}

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
              ScoutX is open to students, developers, creators, researchers,
              early-stage innovators, and the public. Anyone with a promising
              idea or project can showcase what they are building.
            </p>

            <div className="mt-8 space-y-4">
              {innovatorSteps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 p-4 rounded-2xl border ${
                      item.featured
                        ? "bg-purple-500/10 border-purple-500/20"
                        : "bg-slate-800/60 border-slate-700"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconStyle}`}
                    >
                      <Icon />
                    </div>

                    <div>
                      <h4
                        className={`font-semibold ${
                          item.featured ? "text-purple-300" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h4>

                      <p className="text-slate-400 text-sm leading-6 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==================== COMPANIES ==================== */}

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
              Companies can tell ScoutX exactly what kind of innovation they
              need instead of depending only on hackathons, recruitment
              campaigns, or traditional searches.
            </p>

            <div className="mt-8 space-y-4">
              {companySteps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 p-4 rounded-2xl border ${
                      item.featured
                        ? "bg-purple-500/10 border-purple-500/20"
                        : "bg-slate-800/60 border-slate-700"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconStyle}`}
                    >
                      <Icon />
                    </div>

                    <div>
                      <h4
                        className={`font-semibold ${
                          item.featured ? "text-purple-300" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h4>

                      <p className="text-slate-400 text-sm leading-6 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            HOW SCOUTX CONNECTS BOTH SIDES
        ===================================================== */}

        <div className="mt-24">
          <div className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                How ScoutX Connects Both Sides
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Idea{" "}
                <span className="text-purple-400">→</span> AI{" "}
                <span className="text-purple-400">→</span> Match{" "}
                <span className="text-purple-400">→</span> Opportunity
              </h3>

              <p className="text-slate-400 mt-5 leading-7">
                Innovation flows in both directions. Innovators showcase what
                they can build, while organizations communicate what they need.
              </p>
            </div>

            {/* Flow */}
            <div className="grid md:grid-cols-5 gap-4 items-center mt-12">
              {innovationFlow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="relative">
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 text-center h-full">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl">
                        <Icon />
                      </div>

                      <h4 className="font-semibold mt-3">{item.title}</h4>

                      <p className="text-slate-500 text-xs leading-5 mt-2">
                        {item.description}
                      </p>
                    </div>

                    {index < innovationFlow.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 text-purple-400 z-10">
                        <FaArrowRight />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            SIMPLE MISSION STATEMENT
        ===================================================== */}

        <div className="text-center mt-24 max-w-4xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl">
            <FaRocket />
          </div>

          <h3 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Great ideas should not depend on{" "}
            <span className="text-purple-400">
              who attends a hackathon.
            </span>
          </h3>

          <p className="text-slate-400 mt-6 text-lg leading-8">
            ScoutX gives innovators a place to showcase what they create and
            gives organizations an AI-powered way to discover the ideas they
            actually need.
          </p>
        </div>
      </div>
    </section>
  );
}