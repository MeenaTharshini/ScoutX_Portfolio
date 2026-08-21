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

const flow = [
  [FaLightbulb, "Build", "Idea, project or prototype"],
  [FaRobot, "Evaluate", "AI analyzes the innovation"],
  [FaBullseye, "Match", "Find relevant opportunities"],
  [FaHandshake, "Connect", "Innovators ↔ Organizations"],
] as const;

const innovators = [
  [FaLightbulb, "Showcase", "Share ideas, projects and prototypes."],
  [FaCode, "Evidence", "Connect demos, GitHub and technical work."],
  [FaRobot, "Evaluate", "AI provides value and feasibility insights."],
] as const;

const organizations = [
  [FaBuilding, "Define Need", "Describe a problem, domain or technology."],
  [FaRobot, "Discover", "AI identifies relevant innovations."],
  [FaHandshake, "Connect", "Engage with promising builders."],
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#D4AF37]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#D4AF37]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            About ScoutX
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
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

        {/* Two Sides */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <AboutCard
            icon={FaUsers}
            label="For Innovators"
            title="Turn what you build into something discoverable."
            description="Students, developers, researchers and creators can showcase their work, add evidence and become visible to organizations."
            points={innovators}
          />

          <AboutCard
            icon={FaBuilding}
            label="For Organizations"
            title="Find ideas that can solve real problems."
            description="Companies and organizations can define their needs and discover relevant innovations beyond traditional hiring or hackathons."
            points={organizations}
          />
        </div>

        {/* How It Works */}
        <div className="mt-10 rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 md:p-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              How ScoutX Works
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Build <span className="text-[#D4AF37]">→</span> Evaluate{" "}
              <span className="text-[#D4AF37]">→</span> Match{" "}
              <span className="text-[#D4AF37]">→</span> Connect
            </h3>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map(([Icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-5 text-center transition hover:-translate-y-1 hover:border-[#D4AF37]/25"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                  <Icon />
                </div>

                <h4 className="mt-3 font-semibold">{title}</h4>

                <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function AboutCard({
  icon: Icon,
  label,
  title,
  description,
  points,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  points: readonly (readonly [
    React.ElementType,
    string,
    string
  ])[];
}) {
  return (
    <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 transition hover:border-[#D4AF37]/20 md:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
          <Icon />
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
            {label}
          </p>

          <h3 className="mt-1 text-2xl font-bold">{title}</h3>
        </div>
      </div>

      <p className="mt-5 leading-7 text-[#A9A293]">{description}</p>

      <div className="mt-6 space-y-3">
        {points.map(([PointIcon, title, text]) => (
          <div
            key={title}
            className="flex gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/10 bg-[#D4AF37]/10 text-[#E7C979]">
              <PointIcon className="text-sm" />
            </div>

            <div>
              <h4 className="font-semibold">{title}</h4>
              <p className="mt-1 text-sm leading-6 text-[#8F887B]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}