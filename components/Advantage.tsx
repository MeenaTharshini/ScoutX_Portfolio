"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaComments,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaRobot,
  FaSearch,
  FaUsers,
  FaCode,
} from "react-icons/fa";

const advantages = [
  [FaGlobe, "Wider Reach", "Discover ideas beyond hackathons and traditional recruitment."],
  [FaRobot, "AI Evaluation", "Analyze value, uniqueness, relevance, feasibility, and potential."],
  [FaSearch, "Smart Filtering", "Find relevant ideas from a growing innovation ecosystem."],
  [FaComments, "Direct Connection", "Move from discovery to communication, collaboration, pilots, or opportunities."],
] as const;

const content = {
  mission:
    "ScoutX aims to make valuable innovation discoverable by creating a continuous bridge between people who build solutions and organizations that need them.",
  problem:
    "Companies often depend on hackathons, innovation events, recruitment campaigns, and personal networks to discover ideas. These approaches can be expensive, time-consuming, and limited in participation.",
  solution:
    "ScoutX creates an AI-powered innovation discovery layer where innovators showcase ideas and prototypes while companies publish requirements and discover relevant solutions.",
  advantage:
    "Instead of organizing a new hackathon every time a company needs innovation, ScoutX helps organizations discover existing ideas from a larger pool and receive a focused shortlist.",
  vision:
    "Our vision is an open innovation ecosystem where promising ideas are not limited by geography, college, hackathon participation, or personal connections.",
};

type ContentKey = keyof typeof content;

const tabs: { key: ContentKey; label: string }[] = [
  { key: "mission", label: "Our Mission" },
  { key: "problem", label: "The Problem" },
  { key: "solution", label: "Our Solution" },
  { key: "advantage", label: "Our Advantage" },
  { key: "vision", label: "Our Vision" },
];

const traditional = [
  "Event planning and coordination",
  "Travel, venue, and logistics",
  "Limited participant pool",
  "High operational overhead",
  "Fixed event timeline",
];

const scoutx = [
  "Larger innovation pool",
  "AI-assisted evaluation",
  "Requirement-based matching",
  "Focused top 20 / 50 shortlist",
  "Direct communication",
];

const positioning = [
  [FaUsers, "Resume → Skills", "Builder → Capability"],
  [FaLightbulb, "Profile → Job", "Innovation → Opportunity"],
  [FaCode, "Project → Separate repository", "Project → Prototype"],
  [FaSearch, "Manual Search", "Intelligent Discovery"],
  [FaHandshake, "Application → Selection", "Discovery → Connection"],
] as const;

const flow = [
  ["01", "Build", "Create an idea, project, or prototype."],
  ["02", "Prove", "Show evidence through real work."],
  ["03", "Discover", "Make innovation visible and searchable."],
  ["04", "Match", "Identify relevant opportunities."],
  ["05", "Connect", "Create meaningful collaboration."],
];

const Card = ({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) => (
  <div className="rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-6 transition hover:-translate-y-1 hover:border-[#D4AF37]/40">
    <Icon className="rounded-xl bg-[#D4AF37]/10 p-3 text-4xl text-[#E7C979]" />
    <h3 className="mt-5 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-[#8F887B]">{text}</p>
  </div>
);

export default function Advantage() {
  const [active, setActive] = useState<ContentKey>("mission");

  return (
    <section
      id="advantage"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-24 text-[#F7F1E3] md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Header
          label="The ScoutX Advantage"
          title={
            <>
              Innovation discovery{" "}
              <span className="gradient-text">
                without depending on hackathons.
              </span>
            </>
          }
          text="Hackathons can be valuable, but they require planning, participants, travel, infrastructure, time, and resources. ScoutX provides another way: discover ideas already existing in a continuously growing innovation ecosystem."
        />

        {/* Advantages */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(([icon, title, text]) => (
            <Card key={title} icon={icon} title={title} text={text} />
          ))}
        </div>

        {/* Hackathon vs ScoutX */}
        <SectionTitle
          label="A Different Approach"
          title={
            <>
              Why wait for the next{" "}
              <span className="gradient-text">hackathon?</span>
            </>
          }
          text="ScoutX changes innovation discovery from an event-based process into a continuous discovery ecosystem."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <InfoPanel
            label="Traditional Discovery"
            title="Organize a Hackathon"
            items={traditional}
          />

          <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#17150F] p-8 text-center">
            <FaRocket className="mx-auto text-4xl text-[#E7C979]" />
            <p className="mt-5 text-xs uppercase tracking-widest text-[#D4AF37]">
              ScoutX
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              Continuous Innovation Discovery
            </h3>

            <div className="mt-7 flex justify-center gap-3 text-sm font-semibold text-[#D4AF37]">
              <span>Discover</span>
              <FaArrowRight />
              <span>Evaluate</span>
              <FaArrowRight />
              <span>Match</span>
            </div>

            <p className="mt-6 text-sm leading-6 text-[#A9A293]">
              AI continuously connects company requirements with relevant
              ideas already available on the platform.
            </p>
          </div>

          <InfoPanel
            label="Result"
            title="Focus on the Best Ideas"
            items={scoutx}
            checked
          />
        </div>

        {/* Why ScoutX */}
        <SectionTitle
          label="Why ScoutX?"
          title={
            <>
              From scattered ideas{" "}
              <span className="gradient-text">
                to discoverable innovation.
              </span>
            </>
          }
          text="ScoutX creates a structured layer between builders, their work, and organizations looking for relevant innovation."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              onMouseEnter={() => setActive(tab.key)}
              className={`rounded-xl border px-5 py-3 text-sm transition ${
                active === tab.key
                  ? "border-[#D4AF37] bg-[#D4AF37] font-bold text-[#0B0B09]"
                  : "border-white/10 bg-[#11100D] text-[#918A7D] hover:border-[#D4AF37]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-8 text-center md:p-10">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
            {tabs.find((t) => t.key === active)?.label}
          </p>
          <p className="mt-5 text-lg leading-8 text-[#C0B8A9]">
            {content[active]}
          </p>
        </div>

        {/* Differentiator */}
        <SectionTitle
          label="The Differentiator"
          title={
            <>
              Not another resume platform.
              <br />
              <span className="gradient-text">
                Not just another project showcase.
              </span>
            </>
          }
          text="ScoutX connects the person, problem, prototype, evidence, and organization looking for relevant innovation."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-[#11100D]">
          <div className="grid grid-cols-2 border-b border-white/10">
            <div className="p-6">
              <p className="label">Traditional Platforms</p>
              <h3 className="mt-2 text-xl font-bold">Search Around People</h3>
            </div>
            <div className="border-l border-white/10 bg-[#D4AF37]/5 p-6">
              <p className="label text-[#D4AF37]">ScoutX</p>
              <h3 className="mt-2 text-xl font-bold">Search Around Innovation</h3>
            </div>
          </div>

          {positioning.map(([Icon, old, next]) => (
            <div key={old} className="grid grid-cols-2 border-b border-white/10 last:border-0">
              <div className="flex items-center gap-3 p-5 text-sm text-[#918A7D]">
                <Icon />
                {old}
              </div>
              <div className="flex items-center gap-3 border-l border-white/10 bg-[#D4AF37]/5 p-5 text-sm font-medium">
                <FaCheckCircle className="text-[#D4AF37]" />
                {next}
              </div>
            </div>
          ))}
        </div>

        {/* Discovery Flow */}
        <div className="mt-24 rounded-3xl border border-[#D4AF37]/20 bg-[#11100D] p-8 md:p-12">
          <div className="text-center">
            <p className="label text-[#D4AF37]">ScoutX Discovery Model</p>
            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              Build <span className="text-[#D4AF37]">→</span> Prove{" "}
              <span className="text-[#D4AF37]">→</span> Discover{" "}
              <span className="text-[#D4AF37]">→</span> Match{" "}
              <span className="text-[#D4AF37]">→</span> Connect
            </h3>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {flow.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#0B0B09] p-5 text-center transition hover:-translate-y-1 hover:border-[#D4AF37]/30"
              >
                <p className="text-xs font-bold text-[#D4AF37]">{number}</p>
                <h4 className="mt-3 font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final */}
        <div className="mx-auto mt-24 max-w-4xl text-center">
          <FaRocket className="mx-auto text-3xl text-[#D4AF37]" />
          <h3 className="mt-6 text-3xl font-bold md:text-5xl">
            Make valuable innovation{" "}
            <span className="gradient-text">discoverable.</span>
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

function Header({
  label,
  title,
  text,
}: {
  label: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="label text-[#D4AF37]">{label}</p>
      <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
        {text}
      </p>
    </div>
  );
}

function SectionTitle({
  label,
  title,
  text,
}: {
  label: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <div className="mx-auto mt-24 max-w-3xl text-center">
      <p className="label text-[#D4AF37]">{label}</p>
      <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h3>
      <p className="mt-5 leading-7 text-[#A9A293]">{text}</p>
    </div>
  );
}

function InfoPanel({
  label,
  title,
  items,
  checked = false,
}: {
  label: string;
  title: string;
  items: readonly string[];
  checked?: boolean;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#11100D] p-8">
      <p className="label">{label}</p>
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm text-[#918A7D]">
            {checked ? (
              <FaCheckCircle className="mt-1 shrink-0 text-[#D4AF37]" />
            ) : (
              <span className="text-[#6D675D]">×</span>
            )}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}