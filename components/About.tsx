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
    description: "Idea, prototype or portfolio",
  },
  {
    icon: FaRobot,
    title: "Analyze",
    description: "AI evaluates the innovation",
  },
  {
    icon: FaBullseye,
    title: "Match",
    description: "Compare with company needs",
  },
  {
    icon: FaListOl,
    title: "Shortlist",
    description: "Find relevant innovations",
  },
  {
    icon: FaHandshake,
    title: "Connect",
    description: "Innovator ↔ Company",
  },
];

const innovatorSteps = [
  {
    icon: FaLightbulb,
    title: "Submit Your Idea",
    description: "Share an idea, concept or problem statement.",
  },
  {
    icon: FaCode,
    title: "Showcase Your Work",
    description: "Add prototypes, projects, demos or portfolio links.",
  },
  {
    icon: FaRobot,
    title: "AI Evaluation",
    description:
      "Get insights on value, uniqueness, feasibility and improvement.",
    featured: true,
  },
  {
    icon: FaGlobe,
    title: "Become Discoverable",
    description:
      "Make your innovation visible to organizations.",
  },
];

const companySteps = [
  {
    icon: FaBuilding,
    title: "Post a Requirement",
    description:
      "Define the problem, domain and technologies needed.",
  },
  {
    icon: FaRobot,
    title: "AI Matching",
    description:
      "AI compares requirements with available innovations.",
    featured: true,
  },
  {
    icon: FaChartLine,
    title: "Get a Shortlist",
    description:
      "Discover the most relevant ideas and prototypes.",
  },
  {
    icon: FaComments,
    title: "Connect",
    description:
      "Talk directly with promising innovators.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F3E8] text-[#171611] py-20 md:py-28 px-6"
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="absolute top-[-180px] left-[-180px] w-[480px] h-[480px] rounded-full bg-[#C9A646]/10 blur-3xl pointer-events-none" />

      <div className="absolute bottom-[-180px] right-[-180px] w-[480px] h-[480px] rounded-full bg-[#C9A646]/8 blur-3xl pointer-events-none" />

      <div className="absolute inset-0 bg-grid-fade opacity-[0.12] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="eyebrow text-[#A67C1F]">
            About ScoutX
          </p>

          <div className="gold-line mx-auto mb-5" />

          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight leading-tight text-[#171611]">
            Where{" "}
            <span className="text-gradient">
              Ideas Meet Opportunity
            </span>
          </h2>

          <p className="text-[#625D52] text-base md:text-lg leading-8 mt-5 max-w-2xl mx-auto">
            ScoutX is an AI-powered innovation discovery platform connecting
            people who build ideas with companies searching for new solutions.
          </p>
        </div>

        {/* =====================================================
            TWO SIDES
        ====================================================== */}

        <div className="grid lg:grid-cols-2 gap-6 mt-14">

          {/* =================================================
              INNOVATORS
          ================================================== */}

          <div className="rounded-3xl border border-[#B58A24]/20 bg-[#FFFDF8] p-7 md:p-8 shadow-[0_20px_60px_rgba(60,45,15,0.08)]">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-[#C9A646]/10 border border-[#C9A646]/20 text-[#A67C1F] flex items-center justify-center">
                <FaUsers />
              </div>

              <div>
                <p className="text-[#A67C1F] text-[11px] uppercase tracking-widest font-bold">
                  Side 01
                </p>

                <h3 className="text-2xl font-bold mt-1 text-[#171611]">
                  Innovators
                </h3>
              </div>

            </div>

            <p className="text-[#625D52] leading-7 mt-5">
              Students, developers, researchers and creators can showcase
              ideas, projects and prototypes and become discoverable.
            </p>

            <div className="mt-6 space-y-3">

              {innovatorSteps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex gap-3 p-4 rounded-2xl border transition-all duration-300 ${
                      item.featured
                        ? "bg-[#C9A646]/10 border-[#B58A24]/30 shadow-[0_8px_30px_rgba(181,138,36,0.08)]"
                        : "bg-[#F8F3E8] border-[#171611]/8 hover:border-[#B58A24]/25 hover:-translate-y-0.5"
                    }`}
                  >

                    <div className="w-9 h-9 rounded-lg bg-[#C9A646]/10 text-[#A67C1F] flex items-center justify-center shrink-0">
                      <Icon className="text-sm" />
                    </div>

                    <div>

                      <h4
                        className={`font-semibold ${
                          item.featured
                            ? "text-[#A67C1F]"
                            : "text-[#171611]"
                        }`}
                      >
                        {item.title}
                      </h4>

                      <p className="text-[#746E62] text-sm leading-6 mt-1">
                        {item.description}
                      </p>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* =================================================
              COMPANIES
          ================================================== */}

          <div className="rounded-3xl border border-[#B58A24]/20 bg-[#FFFDF8] p-7 md:p-8 shadow-[0_20px_60px_rgba(60,45,15,0.08)]">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-[#C9A646]/10 border border-[#C9A646]/20 text-[#A67C1F] flex items-center justify-center">
                <FaBuilding />
              </div>

              <div>
                <p className="text-[#A67C1F] text-[11px] uppercase tracking-widest font-bold">
                  Side 02
                </p>

                <h3 className="text-2xl font-bold mt-1 text-[#171611]">
                  Companies
                </h3>
              </div>

            </div>

            <p className="text-[#625D52] leading-7 mt-5">
              Organizations can describe what they need and discover relevant
              innovations without relying only on hackathons or traditional
              searches.
            </p>

            <div className="mt-6 space-y-3">

              {companySteps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex gap-3 p-4 rounded-2xl border transition-all duration-300 ${
                      item.featured
                        ? "bg-[#C9A646]/10 border-[#B58A24]/30 shadow-[0_8px_30px_rgba(181,138,36,0.08)]"
                        : "bg-[#F8F3E8] border-[#171611]/8 hover:border-[#B58A24]/25 hover:-translate-y-0.5"
                    }`}
                  >

                    <div className="w-9 h-9 rounded-lg bg-[#C9A646]/10 text-[#A67C1F] flex items-center justify-center shrink-0">
                      <Icon className="text-sm" />
                    </div>

                    <div>

                      <h4
                        className={`font-semibold ${
                          item.featured
                            ? "text-[#A67C1F]"
                            : "text-[#171611]"
                        }`}
                      >
                        {item.title}
                      </h4>

                      <p className="text-[#746E62] text-sm leading-6 mt-1">
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
            FLOW
        ====================================================== */}

        <div className="mt-16 rounded-3xl border border-[#B58A24]/20 bg-[#FFFDF8] p-7 md:p-10 shadow-[0_20px_60px_rgba(60,45,15,0.08)]">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#A67C1F] uppercase tracking-widest text-xs font-bold">
              How ScoutX Works
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3 text-[#171611]">
              Idea{" "}
              <span className="text-[#B58A24]">→</span>{" "}
              AI{" "}
              <span className="text-[#B58A24]">→</span>{" "}
              Match{" "}
              <span className="text-[#B58A24]">→</span>{" "}
              Opportunity
            </h3>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">

            {innovationFlow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative">

                  <div className="h-full text-center rounded-2xl bg-[#F8F3E8] border border-[#171611]/8 p-5 hover:border-[#B58A24]/35 hover:-translate-y-1 transition-all duration-300">

                    <div className="w-11 h-11 mx-auto rounded-xl bg-[#C9A646]/10 border border-[#C9A646]/15 text-[#A67C1F] flex items-center justify-center">
                      <Icon />
                    </div>

                    <h4 className="font-semibold mt-3 text-[#171611]">
                      {item.title}
                    </h4>

                    <p className="text-[#746E62] text-xs leading-5 mt-2">
                      {item.description}
                    </p>

                  </div>

                  {index < innovationFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-[#B58A24] z-10">
                      <FaArrowRight className="text-xs" />
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            MISSION
        ====================================================== */}

        <div className="text-center mt-16 max-w-3xl mx-auto">

          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#C9A646]/10 border border-[#C9A646]/20 text-[#A67C1F] flex items-center justify-center shadow-[0_8px_30px_rgba(181,138,36,0.10)]">
            <FaRocket />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mt-5 leading-tight text-[#171611]">
            Great ideas should be{" "}
            <span className="text-gradient">
              discoverable.
            </span>
          </h3>

          <p className="text-[#625D52] mt-5 text-base md:text-lg leading-7">
            ScoutX gives innovators a place to showcase what they create and
            gives organizations a smarter way to discover what they need.
          </p>

        </div>

      </div>
    </section>
  );
}