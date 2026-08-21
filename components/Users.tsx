"use client";

import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBuilding,
  FaTrophy,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaSearch,
  FaRocket,
  FaUniversity,
  FaChevronRight,
} from "react-icons/fa";

const userGroups = [
  {
    icon: FaUserGraduate,
    number: "01",
    title: "Innovators",
    subtitle: "Students • Developers • Researchers",
    description:
      "Turn projects, prototypes, and technical work into a discoverable innovation profile that goes beyond a traditional resume.",
    benefits: [
      "Create an Innovation Passport",
      "Showcase projects with real evidence",
      "Build a visible innovation track record",
      "Get discovered for relevant opportunities",
    ],
    accent: "purple",
  },
  {
    icon: FaBuilding,
    number: "02",
    title: "Organizations",
    subtitle: "Companies • Startups • Product Teams",
    description:
      "Discover emerging talent, working prototypes, and technical capabilities based on what people have actually built.",
    benefits: [
      "Post real-world problems",
      "Discover relevant innovations",
      "Evaluate projects and evidence",
      "Connect directly with builders",
    ],
    accent: "blue",
  },
  {
    icon: FaTrophy,
    number: "03",
    title: "Innovation Ecosystem",
    subtitle: "Colleges • Hackathons • Incubators",
    description:
      "Keep promising innovations visible after competitions, programs, and academic activities while creating pathways toward real-world adoption.",
    benefits: [
      "Preserve projects beyond events",
      "Track emerging innovations",
      "Connect projects with industry",
      "Create growth and incubation pathways",
    ],
    accent: "gold",
  },
];

const marketSegments = [
  {
    title: "Students & Developers",
    description:
      "Builders looking for visibility, recognition, collaboration, and opportunities.",
    icon: FaUserGraduate,
  },
  {
    title: "Companies & Startups",
    description:
      "Organizations searching for emerging talent, technologies, prototypes, and solutions.",
    icon: FaBuilding,
  },
  {
    title: "Colleges & Innovation Cells",
    description:
      "Institutions supporting student innovation and preserving project outcomes.",
    icon: FaUniversity,
  },
  {
    title: "Hackathons & Incubators",
    description:
      "Programs creating prototypes that need visibility beyond the event.",
    icon: FaTrophy,
  },
];

export default function Users() {
  return (
    <section
      id="users"
      className="relative overflow-hidden bg-[#080A0F] px-6 py-28 text-white md:py-36"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Purple glow */}
        <div className="absolute -left-48 top-20 h-[520px] w-[520px] rounded-full bg-purple-600/[0.07] blur-[120px]" />

        {/* Blue glow */}
        <div className="absolute -right-48 top-[35%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.05] blur-[120px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.05] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
            Who is ScoutX for?
          </div>

          <h2 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            One platform.
            <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Three sides of innovation.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            ScoutX connects the people who{" "}
            <span className="text-slate-200">build solutions</span>, the
            organizations that{" "}
            <span className="text-slate-200">need solutions</span>, and the
            ecosystem that helps{" "}
            <span className="text-purple-300">innovation grow.</span>
          </p>
        </motion.div>

        {/* =========================================================
            USER GROUP CARDS
        ========================================================== */}

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {userGroups.map((group, index) => {
            const Icon = group.icon;

            const accent =
              group.accent === "purple"
                ? {
                    text: "text-purple-300",
                    icon: "bg-purple-500/10 text-purple-300 border-purple-500/20",
                    border: "hover:border-purple-500/40",
                    glow: "bg-purple-500",
                  }
                : group.accent === "blue"
                ? {
                    text: "text-blue-300",
                    icon: "bg-blue-500/10 text-blue-300 border-blue-500/20",
                    border: "hover:border-blue-500/40",
                    glow: "bg-blue-500",
                  }
                : {
                    text: "text-amber-300",
                    icon: "bg-amber-500/10 text-amber-300 border-amber-500/20",
                    border: "hover:border-amber-500/40",
                    glow: "bg-amber-500",
                  };

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] md:p-8 ${accent.border}`}
              >
                {/* Hover glow */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full ${accent.glow} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Top line */}

                <div
                  className={`absolute left-8 right-8 top-0 h-px opacity-40 ${accent.glow}`}
                />

                <div className="relative z-10">

                  {/* Header */}

                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${accent.icon}`}
                    >
                      <Icon />
                    </div>

                    <span className="font-mono text-4xl font-bold text-white/[0.06]">
                      {group.number}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-7 text-2xl font-bold tracking-tight">
                    {group.title}
                  </h3>

                  <p
                    className={`mt-2 text-xs font-medium uppercase tracking-[0.15em] ${accent.text}`}
                  >
                    {group.subtitle}
                  </p>

                  {/* Description */}

                  <p className="mt-6 text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>

                  {/* Divider */}

                  <div className="my-7 h-px bg-white/[0.06]" />

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    What they get
                  </p>

                  {/* Benefits */}

                  <div className="space-y-3.5">
                    {group.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle
                          className={`mt-1 shrink-0 text-xs ${accent.text}`}
                        />

                        <span className="text-sm leading-6 text-slate-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom indicator */}

                  <div className="mt-8 flex items-center gap-2 text-xs text-slate-600 transition-colors group-hover:text-slate-400">
                    <span>Explore this side of ScoutX</span>
                    <FaChevronRight className="text-[9px]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            DISCOVERY GAP
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              <span className="h-px w-8 bg-purple-500/40" />
              The Discovery Layer
              <span className="h-px w-8 bg-purple-500/40" />
            </div>

            <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Innovation already exists.
              <span className="block bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                Discovery is the missing link.
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-500 md:text-lg">
              Great projects can remain hidden inside college folders,
              GitHub repositories, hackathons, portfolios, and personal
              networks. ScoutX creates a structured layer where innovation
              can become easier to discover and connect.
            </p>
          </div>

          {/* =====================================================
              FLOW
          ====================================================== */}

          <div className="relative mx-auto mt-14 max-w-5xl">

            {/* Desktop connecting line */}

            <div className="absolute left-[17%] right-[17%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-blue-500/0 md:block" />

            <div className="relative grid gap-5 md:grid-cols-3">

              {/* Innovation */}

              <motion.div
                whileHover={{ y: -6 }}
                className="relative rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 text-center backdrop-blur-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-xl text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.08)]">
                  <FaLightbulb />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
                  Input
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  Innovation
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Ideas, projects, prototypes and technical work created by
                  real builders.
                </p>
              </motion.div>

              {/* ScoutX */}

              <motion.div
                whileHover={{ y: -8, scale: 1.015 }}
                className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-500/[0.10] to-white/[0.02] p-8 text-center shadow-[0_20px_70px_rgba(124,58,237,0.12)]"
              >
                <div className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-2xl text-purple-300 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                  <FaSearch />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                  Discovery Layer
                </p>

                <h4 className="mt-2 text-2xl font-bold text-white">
                  ScoutX
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Structures, evaluates and makes promising innovation
                  discoverable.
                </p>
              </motion.div>

              {/* Opportunity */}

              <motion.div
                whileHover={{ y: -6 }}
                className="relative rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 text-center backdrop-blur-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-300">
                  <FaRocket />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Outcome
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  Opportunity
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Collaboration, pilots, internships, investment and
                  incubation.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            ECOSYSTEM LOOP
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-gradient-to-br from-white/[0.045] via-white/[0.02] to-purple-500/[0.04] p-8 md:p-12">

            {/* Decorative glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-400">
                The ScoutX Ecosystem
              </p>

              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Different goals.
                <span className="text-purple-400">
                  {" "}One innovation loop.
                </span>
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                Every side of the ecosystem contributes something different,
                creating a continuous flow from building to discovery to
                opportunity.
              </p>
            </div>

            {/* Loop */}

            <div className="relative z-10 mt-14 grid gap-8 md:grid-cols-3">

              {[
                {
                  icon: FaLightbulb,
                  title: "Innovator",
                  text: "Builds and documents a solution.",
                  color: "purple",
                },
                {
                  icon: FaSearch,
                  title: "ScoutX",
                  text: "Makes the innovation structured and discoverable.",
                  color: "violet",
                },
                {
                  icon: FaBuilding,
                  title: "Organization",
                  text: "Finds and connects with relevant solutions.",
                  color: "blue",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative text-center"
                  >
                    <div
                      className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border ${
                        item.color === "blue"
                          ? "border-blue-500/20 bg-blue-500/10 text-blue-300"
                          : "border-purple-500/20 bg-purple-500/10 text-purple-300"
                      } text-xl`}
                    >
                      <Icon />
                    </div>

                    <h4 className="mt-5 font-bold">
                      {item.title}
                    </h4>

                    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                    {index < 2 && (
                      <FaArrowRight className="absolute -right-4 top-8 hidden text-purple-500/30 md:block" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Ecosystem partners */}

            <div className="relative z-10 mt-14 flex justify-center">
              <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/[0.06] bg-black/20 px-5 py-3">
                <FaTrophy className="text-amber-400" />

                <span className="text-xs text-slate-500">
                  Hackathons
                </span>

                <span className="text-slate-700">•</span>

                <span className="text-xs text-slate-500">
                  Colleges
                </span>

                <span className="text-slate-700">•</span>

                <span className="text-xs text-slate-500">
                  Incubators
                </span>

                <span className="text-slate-700">•</span>

                <span className="text-xs text-slate-500">
                  Accelerators
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            TARGET MARKET
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left */}

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Initial Target Market
              </div>

              <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Start where innovation is
                <span className="block bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                  already happening.
                </span>
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
                ScoutX can initially focus on the student and early-stage
                innovation ecosystem, where thousands of projects emerge
                through colleges, hackathons, clubs, internships and
                innovation programs.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                As the platform grows, the resulting innovation database
                becomes increasingly valuable to companies, startups,
                incubators, accelerators and industry partners.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-5 py-3 text-sm text-purple-300">
                <FaRocket />
                Build the innovation database first
              </div>
            </div>

            {/* Right */}

            <div className="space-y-3">
              {marketSegments.map((segment, index) => {
                const Icon = segment.icon;

                return (
                  <motion.div
                    key={segment.title}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/10 bg-purple-500/[0.07] text-purple-300">
                      <Icon />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-slate-700">
                          0{index + 1}
                        </span>

                        <h4 className="font-semibold">
                          {segment.title}
                        </h4>
                      </div>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {segment.description}
                      </p>
                    </div>

                    <FaArrowRight className="ml-auto shrink-0 text-xs text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-400" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28 text-center"
        >
          <div className="mx-auto max-w-4xl">

            <p className="text-sm text-slate-600">
              Not another professional network.
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              A place where
              <span className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                {" "}innovation can actually be found.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              ScoutX brings builders, organizations and the innovation
              ecosystem together through one discoverable layer of projects,
              prototypes, evidence and opportunities.
            </p>

            <a
              href="#features"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-7 py-3.5 text-sm font-semibold shadow-[0_15px_40px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
            >
              Explore ScoutX

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}