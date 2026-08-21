"use client";

import {
  FaLightbulb,
  FaRobot,
  FaBuilding,
  FaUsers,
  FaCode,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";

const innovationFlow = [
  {
    icon: FaLightbulb,
    title: "Build",
    description: "Idea, project or prototype",
  },
  {
    icon: FaRobot,
    title: "Evaluate",
    description: "AI analyzes the innovation",
  },
  {
    icon: FaBullseye,
    title: "Match",
    description: "Find relevant opportunities",
  },
  {
    icon: FaHandshake,
    title: "Connect",
    description: "Innovators ↔ Organizations",
  },
];

const innovatorPoints = [
  {
    icon: FaLightbulb,
    title: "Showcase",
    description: "Share ideas, projects and prototypes.",
  },
  {
    icon: FaCode,
    title: "Add Evidence",
    description: "Connect demos, GitHub and technical work.",
  },
  {
    icon: FaRobot,
    title: "Get Evaluated",
    description: "AI provides insights on value and feasibility.",
  },
];

const companyPoints = [
  {
    icon: FaBuilding,
    title: "Define a Need",
    description: "Describe a problem, domain or technology.",
  },
  {
    icon: FaRobot,
    title: "Discover Matches",
    description: "AI identifies relevant innovations.",
  },
  {
    icon: FaHandshake,
    title: "Connect",
    description: "Engage directly with promising builders.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 -top-48 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/7 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            About ScoutX
          </p>

          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Where{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Ideas Meet Opportunity
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#A9A293] md:text-lg">
            ScoutX is an AI-powered innovation discovery platform connecting
            people who build ideas with organizations looking for relevant
            solutions.
          </p>
        </div>

        {/* INNOVATORS / ORGANIZATIONS */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <AboutCard
            eyebrow="For Innovators"
            title="Turn what you build into something discoverable."
            icon={FaUsers}
            description="Students, developers, researchers and creators can showcase their work, add evidence and become visible to organizations."
            points={innovatorPoints}
          />

          <AboutCard
            eyebrow="For Organizations"
            title="Find ideas that can solve real problems."
            icon={FaBuilding}
            description="Companies and organizations can define their needs and discover relevant innovations beyond traditional hiring or hackathons."
            points={companyPoints}
          />
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-10 rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              How ScoutX Works
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Build{" "}
              <span className="text-[#D4AF37]">→</span> Evaluate{" "}
              <span className="text-[#D4AF37]">→</span> Match{" "}
              <span className="text-[#D4AF37]">→</span> Connect
            </h3>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {innovationFlow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative">
                  <div className="h-full rounded-2xl border border-[#D4AF37]/8 bg-[#0B0B09] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25">
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                      <Icon />
                    </div>

                    <h4 className="mt-3 font-semibold">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                      {item.description}
                    </p>
                  </div>

                  {index < innovationFlow.length - 1 && (
                    <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xs text-[#D4AF37] lg:block">
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT CARD
========================================================= */

function AboutCard({
  eyebrow,
  title,
  description,
  icon: Icon,
  points,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ElementType;
  points: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:border-[#D4AF37]/20 md:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
          <Icon />
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
            {eyebrow}
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {title}
          </h3>
        </div>
      </div>

      <p className="mt-5 leading-7 text-[#A9A293]">
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {points.map((item) => {
          const PointIcon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-3 rounded-2xl border border-[#D4AF37]/8 bg-[#0B0B09] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/20"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/10 bg-[#D4AF37]/10 text-[#E7C979]">
                <PointIcon className="text-sm" />
              </div>

              <div>
                <h4 className="font-semibold">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#8F887B]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}