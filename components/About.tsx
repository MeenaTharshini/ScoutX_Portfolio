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
    description: "Make your innovation visible to organizations.",
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
      className="relative overflow-hidden bg-[#0B0B09] text-[#F7F2E8] py-20 md:py-28 px-6"
    >
      {/* =====================================================
          PREMIUM DARK BACKGROUND
      ====================================================== */}

      {/* Top gold glow */}
      <div className="absolute -top-48 -left-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/7 blur-[130px] pointer-events-none" />

      {/* Bottom gold glow */}
      <div className="absolute -bottom-48 -right-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.02] blur-[140px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-fade opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#D4AF37] uppercase tracking-[0.18em] text-xs font-bold">
            About ScoutX
          </p>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4 mb-5" />

          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight leading-tight text-[#F7F2E8]">
            Where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
              Ideas Meet Opportunity
            </span>
          </h2>

          <p className="text-[#A9A293] text-base md:text-lg leading-8 mt-5 max-w-2xl mx-auto">
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

          <div
            className="
              rounded-3xl
              border border-[#D4AF37]/10
              bg-[#11100D]
              p-7 md:p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              hover:border-[#D4AF37]/20
              transition-colors
              duration-300
            "
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center">
                <FaUsers />
              </div>

              <div>
                <p className="text-[#D4AF37] text-[11px] uppercase tracking-widest font-bold">
                  Side 01
                </p>

                <h3 className="text-2xl font-bold mt-1 text-[#F7F2E8]">
                  Innovators
                </h3>
              </div>

            </div>

            <p className="text-[#A9A293] leading-7 mt-5">
              Students, developers, researchers and creators can showcase
              ideas, projects and prototypes and become discoverable.
            </p>

            <div className="mt-6 space-y-3">

              {innovatorSteps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`
                      flex gap-3 p-4 rounded-2xl border
                      transition-all duration-300
                      ${
                        item.featured
                          ? "bg-[#D4AF37]/[0.07] border-[#D4AF37]/25 shadow-[0_8px_30px_rgba(212,175,55,0.06)]"
                          : "bg-[#0B0B09] border-[#D4AF37]/8 hover:border-[#D4AF37]/20 hover:-translate-y-0.5"
                      }
                    `}
                  >

                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/10 text-[#E7C979] flex items-center justify-center shrink-0">
                      <Icon className="text-sm" />
                    </div>

                    <div>
                      <h4
                        className={`
                          font-semibold
                          ${
                            item.featured
                              ? "text-[#E7C979]"
                              : "text-[#F7F2E8]"
                          }
                        `}
                      >
                        {item.title}
                      </h4>

                      <p className="text-[#8F887B] text-sm leading-6 mt-1">
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

          <div
            className="
              rounded-3xl
              border border-[#D4AF37]/10
              bg-[#11100D]
              p-7 md:p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              hover:border-[#D4AF37]/20
              transition-colors
              duration-300
            "
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center">
                <FaBuilding />
              </div>

              <div>
                <p className="text-[#D4AF37] text-[11px] uppercase tracking-widest font-bold">
                  Side 02
                </p>

                <h3 className="text-2xl font-bold mt-1 text-[#F7F2E8]">
                  Companies
                </h3>
              </div>

            </div>

            <p className="text-[#A9A293] leading-7 mt-5">
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
                    className={`
                      flex gap-3 p-4 rounded-2xl border
                      transition-all duration-300
                      ${
                        item.featured
                          ? "bg-[#D4AF37]/[0.07] border-[#D4AF37]/25 shadow-[0_8px_30px_rgba(212,175,55,0.06)]"
                          : "bg-[#0B0B09] border-[#D4AF37]/8 hover:border-[#D4AF37]/20 hover:-translate-y-0.5"
                      }
                    `}
                  >

                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/10 text-[#E7C979] flex items-center justify-center shrink-0">
                      <Icon className="text-sm" />
                    </div>

                    <div>
                      <h4
                        className={`
                          font-semibold
                          ${
                            item.featured
                              ? "text-[#E7C979]"
                              : "text-[#F7F2E8]"
                          }
                        `}
                      >
                        {item.title}
                      </h4>

                      <p className="text-[#8F887B] text-sm leading-6 mt-1">
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

        <div
          className="
            mt-16
            rounded-3xl
            border border-[#D4AF37]/10
            bg-[#11100D]
            p-7 md:p-10
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          "
        >

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold">
              How ScoutX Works
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3 text-[#F7F2E8]">
              Idea{" "}
              <span className="text-[#D4AF37]">→</span>{" "}
              AI{" "}
              <span className="text-[#D4AF37]">→</span>{" "}
              Match{" "}
              <span className="text-[#D4AF37]">→</span>{" "}
              Opportunity
            </h3>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">

            {innovationFlow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative">

                  <div
                    className="
                      h-full
                      text-center
                      rounded-2xl
                      bg-[#0B0B09]
                      border border-[#D4AF37]/8
                      p-5
                      hover:border-[#D4AF37]/25
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >

                    <div className="w-11 h-11 mx-auto rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 text-[#E7C979] flex items-center justify-center">
                      <Icon />
                    </div>

                    <h4 className="font-semibold mt-3 text-[#F7F2E8]">
                      {item.title}
                    </h4>

                    <p className="text-[#8F887B] text-xs leading-5 mt-2">
                      {item.description}
                    </p>

                  </div>

                  {index < innovationFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-[#D4AF37] z-10">
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

          <div
            className="
              w-14 h-14 mx-auto
              rounded-2xl
              bg-[#D4AF37]/10
              border border-[#D4AF37]/20
              text-[#E7C979]
              flex items-center justify-center
              shadow-[0_8px_30px_rgba(212,175,55,0.08)]
            "
          >
            <FaRocket />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mt-5 leading-tight text-[#F7F2E8]">
            Great ideas should be{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00]">
              discoverable.
            </span>
          </h3>

          <p className="text-[#A9A293] mt-5 text-base md:text-lg leading-7">
            ScoutX gives innovators a place to showcase what they create and
            gives organizations a smarter way to discover what they need.
          </p>

        </div>

      </div>
    </section>
  );
}