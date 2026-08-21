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
  FaHandshake,
  FaUniversity,
} from "react-icons/fa";

const userGroups = [
  {
    icon: FaUserGraduate,
    label: "01",
    title: "Innovators",
    subtitle: "Students • Developers • Researchers • Early Builders",
    description:
      "Turn projects, prototypes, and technical work into a discoverable innovation profile that goes beyond a traditional resume.",
    benefits: [
      "Create an Innovation Passport",
      "Showcase projects with real evidence",
      "Build a visible track record",
      "Get discovered for relevant opportunities",
    ],
    color: "purple",
  },
  {
    icon: FaBuilding,
    label: "02",
    title: "Organizations",
    subtitle: "Companies • Startups • Product Teams",
    description:
      "Discover emerging talent and existing prototypes based on real work, technical capabilities, and evidence instead of relying only on resumes.",
    benefits: [
      "Post real-world problems",
      "Discover relevant innovations",
      "Evaluate prototypes and evidence",
      "Connect directly with builders",
    ],
    color: "blue",
  },
  {
    icon: FaTrophy,
    label: "03",
    title: "Innovation Ecosystem",
    subtitle: "Hackathons • Colleges • Incubators • Accelerators",
    description:
      "Keep promising innovations discoverable after competitions, programs, and academic activities while connecting them with organizations that can help them grow.",
    benefits: [
      "Preserve projects beyond events",
      "Track emerging innovations",
      "Connect projects with industry",
      "Create incubation and growth pathways",
    ],
    color: "yellow",
  },
];

const colorStyles = {
  purple: {
    icon: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    border: "hover:border-purple-500/40",
    accent: "text-purple-400",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "hover:border-blue-500/40",
    accent: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  yellow: {
    icon: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    border: "hover:border-yellow-500/40",
    accent: "text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  },
};

const marketSegments = [
  {
    title: "Students & Developers",
    description:
      "Project builders looking for visibility, recognition, collaboration, and opportunities.",
    icon: FaUserGraduate,
  },
  {
    title: "Companies & Startups",
    description:
      "Organizations looking for emerging talent, prototypes, technologies, and potential solutions.",
    icon: FaBuilding,
  },
  {
    title: "Colleges & Innovation Cells",
    description:
      "Institutions supporting student innovation and wanting to preserve project outcomes.",
    icon: FaUniversity,
  },
  {
    title: "Hackathons & Incubators",
    description:
      "Programs creating prototypes that need visibility and pathways beyond the event.",
    icon: FaTrophy,
  },
];

export default function Users() {
  return (
    <section
      id="users"
      className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white md:py-32"
    >
      {/* Background */}
      <div className="absolute right-[-180px] top-0 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-3xl" />
      <div className="absolute bottom-0 left-[-180px] h-[500px] w-[500px] rounded-full bg-violet-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Who is ScoutX for?
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            One platform.
            <span className="block bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              Three sides of innovation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
            ScoutX connects the people who
            <span className="font-medium text-purple-400">
              {" "}build solutions
            </span>
            , the organizations that
            <span className="font-medium text-purple-400">
              {" "}need solutions
            </span>
            , and the ecosystem that helps
            <span className="font-medium text-purple-400">
              {" "}innovations grow.
            </span>
          </p>
        </motion.div>

        {/* =====================================================
            THREE USER GROUPS
        ====================================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {userGroups.map((group, index) => {
            const Icon = group.icon;

            const styles =
              colorStyles[group.color as keyof typeof colorStyles];

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                className={`group rounded-3xl border border-slate-800 bg-[#151B2E] p-7 transition-all duration-300 hover:-translate-y-2 md:p-8 ${styles.border}`}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-xl ${styles.icon}`}
                  >
                    <Icon />
                  </div>

                  <span className="text-2xl font-bold text-slate-700">
                    {group.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-bold">
                  {group.title}
                </h3>

                <p
                  className={`mt-2 text-xs uppercase tracking-wider ${styles.accent}`}
                >
                  {group.subtitle}
                </p>

                {/* Description */}
                <p className="mt-5 leading-7 text-slate-400">
                  {group.description}
                </p>

                {/* Benefits */}
                <div className="mt-7 border-t border-slate-800 pt-6">
                  <p className="mb-4 text-xs uppercase tracking-widest text-slate-500">
                    What they get
                  </p>

                  <div className="space-y-3">
                    {group.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle
                          className={`mt-1 shrink-0 ${styles.accent}`}
                        />

                        <span className="text-sm leading-6 text-slate-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            WHY THE THREE SIDES MATTER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
              The Problem ScoutX Solves
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-5xl">
              Innovation often exists.
              <span className="block text-purple-400">
                Discovery is the missing link.
              </span>
            </h3>

            <p className="mt-5 leading-7 text-slate-500">
              Great projects can remain hidden inside college folders,
              GitHub repositories, hackathons, portfolios, and personal
              networks. ScoutX creates a common layer where these
              innovations can be structured, evaluated, discovered, and
              connected.
            </p>
          </div>

          {/* Problem → ScoutX → Outcome */}
          <div className="mt-12 grid items-center gap-5 md:grid-cols-5">

            {/* Innovator */}
            <div className="rounded-2xl border border-slate-800 bg-[#151B2E] p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <FaLightbulb />
              </div>

              <h4 className="mt-4 font-semibold">
                Innovation
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Ideas, projects, prototypes and technical work
              </p>
            </div>

            <div className="hidden justify-center text-purple-400 md:flex">
              <FaArrowRight />
            </div>

            {/* ScoutX */}
            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/5 p-7 text-center shadow-lg shadow-purple-500/5">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-2xl text-purple-400">
                <FaSearch />
              </div>

              <h4 className="mt-4 text-xl font-bold text-purple-300">
                ScoutX
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Structures, evaluates and discovers innovation
              </p>
            </div>

            <div className="hidden justify-center text-purple-400 md:flex">
              <FaArrowRight />
            </div>

            {/* Opportunity */}
            <div className="rounded-2xl border border-slate-800 bg-[#151B2E] p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FaRocket />
              </div>

              <h4 className="mt-4 font-semibold">
                Opportunity
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Collaboration, pilots, internships and incubation
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            ECOSYSTEM LOOP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-[#151B2E] p-8 md:p-12">

            <div className="text-center">
              <p className="text-sm uppercase tracking-widest text-purple-400">
                The ScoutX Ecosystem
              </p>

              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                Different goals.
                <span className="text-purple-400">
                  {" "}One innovation loop.
                </span>
              </h3>
            </div>

            {/* Flow */}
            <div className="mt-12 grid gap-8 md:grid-cols-3">

              {/* Innovator */}
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-xl text-purple-400">
                  <FaLightbulb />
                </div>

                <h4 className="mt-4 font-semibold">
                  Innovator
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Builds and documents a solution
                </p>
              </div>

              {/* ScoutX */}
              <div className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-2xl text-purple-400 shadow-lg shadow-purple-500/10">
                  <FaSearch />
                </div>

                <h4 className="mt-4 font-bold text-purple-300">
                  ScoutX
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Makes the innovation structured and discoverable
                </p>
              </div>

              {/* Organization */}
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-xl text-blue-400">
                  <FaBuilding />
                </div>

                <h4 className="mt-4 font-semibold">
                  Organization
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Finds and connects with relevant solutions
                </p>
              </div>
            </div>

            {/* Ecosystem support */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-purple-500/10 bg-purple-500/5 px-6 py-3">
                <FaTrophy className="text-yellow-400" />

                <span className="text-sm text-slate-400">
                  Hackathons • Colleges • Incubators • Accelerators
                </span>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-slate-500">
              These ecosystem partners continuously introduce new
              innovators, projects, prototypes, and opportunities into
              the ScoutX network.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            TARGET MARKET
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                Initial Target Market
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Start where innovation is
                <span className="text-purple-400">
                  {" "}already happening.
                </span>
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                ScoutX can initially focus on the student and early-stage
                innovation ecosystem where thousands of projects are
                created through colleges, hackathons, clubs, internships,
                and innovation programs.
              </p>

              <p className="mt-4 leading-7 text-slate-500">
                As the platform grows, the resulting innovation database
                becomes increasingly valuable to companies, startups,
                incubators, accelerators, and industry partners looking
                for emerging solutions.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-5 py-3 text-sm text-purple-300">
                <FaRocket />
                Build the innovation database first
              </div>
            </div>

            {/* Right */}
            <div className="space-y-3">
              {marketSegments.map((segment, index) => {
                const Icon = segment.icon;

                return (
                  <div
                    key={segment.title}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-[#151B2E] p-5 transition hover:border-purple-500/20"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                      <Icon />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {segment.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {segment.description}
                      </p>
                    </div>

                    <FaArrowRight className="ml-auto shrink-0 text-slate-700 transition group-hover:text-purple-400" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL MESSAGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-slate-500">
              The goal is not to create another professional network.
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Create a network where
              <span className="text-purple-400">
                {" "}innovation can actually be found.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
              ScoutX connects builders, organizations, and the innovation
              ecosystem through one discoverable layer of projects,
              prototypes, evidence, and opportunities.
            </p>

            <a
              href="#features"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-purple-600 px-7 py-3 font-medium transition hover:bg-purple-700"
            >
              Explore ScoutX
              <FaArrowRight />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}