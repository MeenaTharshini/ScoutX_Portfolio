"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaCheckCircle,
  FaCode,
  FaHandshake,
  FaLightbulb,
  FaSearch,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Audience {
  icon: IconType;
  tag: string;
  title: string;
  subtitle: string;
  points: string[];
  featured?: boolean;
}

const audiences: Audience[] = [
  {
    icon: FaLightbulb,
    tag: "SUPPLY SIDE",
    title: "Creators",
    subtitle:
      "Students • Developers • Researchers • Founders • Makers",
    points: [
      "Publish ideas, projects, prototypes, and research",
      "Build a structured innovation profile",
      "Show evidence, technology, and capabilities",
      "Become discoverable by organizations",
    ],
  },
  {
    icon: FaBuilding,
    tag: "DEMAND SIDE",
    title: "Organizations",
    subtitle:
      "Companies • R&D Teams • Startups • Product Teams",
    points: [
      "Search for existing solutions",
      "Filter by technology, domain, and requirements",
      "Evaluate projects and supporting evidence",
      "Connect directly with relevant creators",
    ],
    featured: true,
  },
  {
    icon: FaUniversity,
    tag: "ECOSYSTEM",
    title: "Innovation Partners",
    subtitle:
      "Colleges • Hackathons • Incubators • Communities",
    points: [
      "Bring projects onto ScoutX",
      "Keep promising work discoverable",
      "Give innovators industry visibility",
      "Create pathways from projects to opportunities",
    ],
  },
];

const creatorSteps = [
  {
    icon: FaLightbulb,
    title: "Create",
    text: "Someone builds an idea, project, prototype, or technology.",
  },
  {
    icon: FaBrain,
    title: "Structure",
    text: "ScoutX turns the project into a searchable innovation profile.",
  },
  {
    icon: FaSearch,
    title: "Discover",
    text: "Organizations can find it when it matches a real requirement.",
  },
];

const organizationSteps = [
  {
    icon: FaSearch,
    title: "Problem",
    text: "An organization has a technical or business problem.",
  },
  {
    icon: FaBrain,
    title: "Scout",
    text: "ScoutX searches the innovation layer for relevant work.",
  },
  {
    icon: FaHandshake,
    title: "Connect",
    text: "The organization can approach the creator and explore collaboration.",
  },
];

const ecosystemSources = [
  { icon: FaUniversity, text: "Colleges" },
  { icon: FaCode, text: "Student Projects" },
  { icon: FaUsers, text: "Hackathons" },
  { icon: FaLightbulb, text: "Incubators" },
];

export default function Users() {
  return (
    <section
      id="users"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-20 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.04] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Ecosystem
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Who uses{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              ScoutX?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            ScoutX connects the people who build innovation with the
            organizations that need it — while innovation ecosystems help
            supply the projects that make discovery possible.
          </p>
        </motion.div>

        {/* ECOSYSTEM MAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-10"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              How the ecosystem works
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              A two-sided marketplace{" "}
              <span className="text-[#8F887B]">
                powered by an innovation ecosystem.
              </span>
            </h3>
          </div>

          {/* FLOW */}
          <div className="mt-10 grid items-center gap-4 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">

            {/* SOURCES */}
            <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Innovation Sources
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {ecosystemSources.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 rounded-xl border border-[#D4AF37]/10 bg-white/[0.02] p-3"
                  >
                    <Icon className="shrink-0 text-sm text-[#E7C979]" />
                    <span className="text-xs text-[#A9A293]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <FaArrowRight className="mx-auto hidden text-[#D4AF37]/50 lg:block" />

            {/* SCOUTX */}
            <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#17150F] to-[#0F0E0B] p-7 text-center shadow-[0_0_50px_rgba(212,175,55,0.06)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaSearch />
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                ScoutX
              </p>

              <h4 className="mt-2 text-2xl font-bold">
                Discovery Layer
              </h4>

              <p className="mt-3 text-xs leading-6 text-[#8F887B]">
                Structure • Search • AI Insights • Match • Connect
              </p>
            </div>

            <FaArrowRight className="mx-auto hidden text-[#D4AF37]/50 lg:block" />

            {/* ORGANIZATIONS */}
            <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Demand
              </p>

              <div className="mt-4 rounded-xl border border-[#D4AF37]/10 bg-white/[0.02] p-4">
                <FaBuilding className="text-[#E7C979]" />

                <h4 className="mt-3 text-sm font-bold">
                  Organizations
                </h4>

                <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                  Companies, R&D teams, startups, manufacturers and
                  problem owners looking for solutions.
                </p>
              </div>
            </div>
          </div>

          {/* SIMPLE MESSAGE */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[#817A6E]">
              Innovation enters from one side.
            </p>

            <p className="mt-1 text-base font-semibold text-[#E7C979]">
              Real-world problems create demand from the other.
            </p>
          </div>
        </motion.div>

        {/* THREE USER TYPES */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Users
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Three groups. Different jobs. One network.
            </h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {audiences.map((user, index) => {
              const Icon = user.icon;

              return (
                <motion.article
                  key={user.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className={`rounded-3xl border p-7 transition ${
                    user.featured
                      ? "border-[#D4AF37]/30 bg-gradient-to-br from-[#17150F] to-[#11100D]"
                      : "border-[#D4AF37]/10 bg-[#11100D]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                      <Icon />
                    </div>

                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#D4AF37]/50">
                      {user.tag}
                    </span>
                  </div>

                  <h4 className="mt-6 text-2xl font-bold">
                    {user.title}
                  </h4>

                  <p className="mt-2 text-xs font-medium uppercase leading-5 tracking-[0.08em] text-[#D4AF37]">
                    {user.subtitle}
                  </p>

                  <div className="mt-6 space-y-3">
                    {user.points.map((point) => (
                      <div
                        key={point}
                        className="flex gap-3 text-sm text-[#A9A293]"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-xs text-[#D4AF37]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* TWO SIDED VALUE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              The Value Exchange
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Why would each side use ScoutX?
            </h3>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">

            {/* CREATOR */}
            <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
                  <FaLightbulb />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    Creator
                  </p>

                  <h4 className="text-xl font-bold">
                    “I built something. Who needs it?”
                  </h4>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {creatorSteps.map(({ icon: Icon, title, text }, index) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] text-[#E7C979]">
                      <Icon className="text-sm" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[#D4AF37]/50">
                          0{index + 1}
                        </span>

                        <h5 className="text-sm font-semibold">
                          {title}
                        </h5>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ORGANIZATION */}
            <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
                  <FaBuilding />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    Organization
                  </p>

                  <h4 className="text-xl font-bold">
                    “Who has already solved this?”
                  </h4>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {organizationSteps.map(
                  ({ icon: Icon, title, text }, index) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] text-[#E7C979]">
                        <Icon className="text-sm" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[#D4AF37]/50">
                            0{index + 1}
                          </span>

                          <h5 className="text-sm font-semibold">
                            {title}
                          </h5>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                          {text}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* USE CASE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] p-8 text-center md:p-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Example
          </p>

          <h3 className="mt-4 text-2xl font-bold md:text-4xl">
            A company has a problem.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A9A293]">
            Instead of immediately spending months on R&D, the company
            searches ScoutX and discovers that a student team, researcher,
            startup, or independent builder has already developed something
            relevant.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <span className="rounded-full border border-[#D4AF37]/10 bg-[#11100D] px-4 py-2 text-[#A9A293]">
              Real Problem
            </span>

            <FaArrowRight className="text-[#D4AF37]/50" />

            <span className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-4 py-2 text-[#E7C979]">
              ScoutX
            </span>

            <FaArrowRight className="text-[#D4AF37]/50" />

            <span className="rounded-full border border-[#D4AF37]/10 bg-[#11100D] px-4 py-2 text-[#A9A293]">
              Relevant Innovation
            </span>

            <FaArrowRight className="text-[#D4AF37]/50" />

            <span className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-4 py-2 text-[#E7C979]">
              Connection
            </span>
          </div>
        </motion.div>

        {/* FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-[#817A6E]">
            ScoutX is not just a platform for people.
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            It is a network connecting{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              innovation with demand.
            </span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}