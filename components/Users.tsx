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
} from "react-icons/fa";
import type { IconType } from "react-icons";

type Accent = "purple" | "blue" | "gold";

interface UserGroup {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  accent: Accent;
}

const userGroups: UserGroup[] = [
  {
    icon: FaUserGraduate,
    title: "Innovators",
    subtitle: "Students • Developers • Researchers",
    description:
      "Turn projects, prototypes, and technical work into a discoverable innovation profile.",
    benefits: [
      "Create an Innovation Passport",
      "Showcase projects with evidence",
      "Build a visible innovation track record",
      "Get discovered for opportunities",
    ],
    accent: "purple",
  },
  {
    icon: FaBuilding,
    title: "Organizations",
    subtitle: "Companies • Startups • Product Teams",
    description:
      "Discover emerging talent, working prototypes, and technical capabilities based on what people actually build.",
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
    title: "Innovation Ecosystem",
    subtitle: "Colleges • Hackathons • Incubators",
    description:
      "Keep promising innovations visible beyond competitions, programs, and academic activities.",
    benefits: [
      "Preserve projects beyond events",
      "Track emerging innovations",
      "Connect projects with industry",
      "Create incubation pathways",
    ],
    accent: "gold",
  },
];

const marketSegments = [
  {
    icon: FaUserGraduate,
    title: "Students & Developers",
    text: "Visibility, recognition, collaboration, and opportunities.",
  },
  {
    icon: FaBuilding,
    title: "Companies & Startups",
    text: "Emerging talent, technologies, prototypes, and solutions.",
  },
  {
    icon: FaUniversity,
    title: "Colleges & Innovation Cells",
    text: "Support student innovation and preserve project outcomes.",
  },
  {
    icon: FaTrophy,
    title: "Hackathons & Incubators",
    text: "Give promising prototypes visibility beyond the event.",
  },
];

const accentStyles = {
  purple: {
    text: "text-purple-300",
    icon: "border-purple-500/20 bg-purple-500/10 text-purple-300",
    hover: "hover:border-purple-500/30",
    glow: "bg-purple-500",
  },
  blue: {
    text: "text-blue-300",
    icon: "border-blue-500/20 bg-blue-500/10 text-blue-300",
    hover: "hover:border-blue-500/30",
    glow: "bg-blue-500",
  },
  gold: {
    text: "text-amber-300",
    icon: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    hover: "hover:border-amber-500/30",
    glow: "bg-amber-500",
  },
};

export default function Users() {
  return (
    <section
      id="users"
      aria-labelledby="users-heading"
      className="relative overflow-hidden bg-[#080A0F] px-6 py-24 text-white md:py-32"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/[0.07] blur-[120px]" />
        <div className="absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/[0.05] blur-[120px]" />

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
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Who is ScoutX for?
          </div>

          <h2
            id="users-heading"
            className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            One platform.
            <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Three sides of innovation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            ScoutX connects the people who{" "}
            <span className="text-slate-200">build solutions</span>,
            the organizations that{" "}
            <span className="text-slate-200">need solutions</span>,
            and the ecosystem that{" "}
            <span className="text-purple-300">helps innovation grow.</span>
          </p>
        </motion.header>

        {/* User Groups */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {userGroups.map((group, index) => {
            const Icon = group.icon;
            const accent = accentStyles[group.accent];

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 ${accent.hover}`}
              >
                <div
                  className={`absolute -right-20 -top-20 h-48 w-48 rounded-full ${accent.glow} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-15`}
                />

                <div className="relative">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-xl ${accent.icon}`}
                  >
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">{group.title}</h3>

                  <p
                    className={`mt-2 text-xs font-medium uppercase tracking-[0.14em] ${accent.text}`}
                  >
                    {group.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>

                  <div className="my-6 h-px bg-white/[0.06]" />

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    What they get
                  </p>

                  <ul className="space-y-3">
                    {group.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle
                          className={`mt-1 shrink-0 text-xs ${accent.text}`}
                        />
                        <span className="text-sm leading-6 text-slate-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Discovery Layer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              The Discovery Layer
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              Innovation already exists.
              <span className="block bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                Discovery is the missing link.
              </span>
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Great projects can remain hidden inside college folders,
              repositories, hackathons, portfolios, and personal networks.
              ScoutX makes innovation easier to discover and connect.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            <FlowCard
              icon={FaLightbulb}
              label="Input"
              title="Innovation"
              text="Ideas, projects, prototypes, and technical work."
              iconClass="border-purple-500/20 bg-purple-500/10 text-purple-300"
            />

            <FlowCard
              icon={FaSearch}
              label="Discovery Layer"
              title="ScoutX"
              text="Structures and makes promising innovation discoverable."
              iconClass="border-purple-400/30 bg-purple-500/10 text-purple-300"
              featured
            />

            <FlowCard
              icon={FaRocket}
              label="Outcome"
              title="Opportunity"
              text="Collaboration, pilots, internships, investment, and incubation."
              iconClass="border-blue-500/20 bg-blue-500/10 text-blue-300"
            />
          </div>
        </motion.div>

        {/* Ecosystem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 overflow-hidden rounded-[32px] border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-purple-500/[0.04] p-8 md:p-12"
        >
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              The ScoutX Ecosystem
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Different goals.
              <span className="text-purple-400"> One innovation loop.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Builders create. ScoutX makes their work discoverable.
              Organizations find and connect with relevant solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: FaLightbulb,
                title: "Innovator",
                text: "Builds and documents a solution.",
              },
              {
                icon: FaSearch,
                title: "ScoutX",
                text: "Makes innovation structured and discoverable.",
              },
              {
                icon: FaBuilding,
                title: "Organization",
                text: "Finds and connects with relevant solutions.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-xl text-purple-300">
                    <Icon />
                  </div>

                  <h4 className="mt-5 font-bold">{item.title}</h4>

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

          <div className="mx-auto mt-12 flex w-fit flex-wrap justify-center gap-3 rounded-2xl border border-white/[0.06] bg-black/20 px-5 py-3 text-xs text-slate-500">
            <span>Hackathons</span>
            <span>•</span>
            <span>Colleges</span>
            <span>•</span>
            <span>Incubators</span>
            <span>•</span>
            <span>Accelerators</span>
          </div>
        </motion.div>

        {/* Target Market */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Initial Target Market
            </p>

            <h3 className="mt-5 text-3xl font-bold md:text-5xl">
              Start where innovation is
              <span className="block bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                already happening.
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-400">
              ScoutX can initially focus on the student and early-stage
              innovation ecosystem across colleges, hackathons, clubs,
              internships, and innovation programs.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-5 py-3 text-sm text-purple-300">
              <FaRocket />
              Build the innovation database first
            </div>
          </div>

          <div className="space-y-3">
            {marketSegments.map((segment, index) => {
              const Icon = segment.icon;

              return (
                <motion.div
                  key={segment.title}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 transition-all hover:border-purple-500/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/10 bg-purple-500/[0.07] text-purple-300">
                    <Icon />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-slate-700">
                        0{index + 1}
                      </span>
                      <h4 className="font-semibold">{segment.title}</h4>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {segment.text}
                    </p>
                  </div>

                  <FaArrowRight className="ml-auto hidden text-xs text-slate-700 transition-transform group-hover:translate-x-1 group-hover:text-purple-400 sm:block" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-sm text-slate-600">
            Not another professional network.
          </p>

          <h3 className="mt-4 text-3xl font-bold md:text-5xl">
            A place where{" "}
            <span className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
              innovation can actually be found.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            ScoutX brings builders, organizations, and the innovation
            ecosystem together through one discoverable layer.
          </p>

          <a
            href="#features"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-7 py-3.5 text-sm font-semibold shadow-[0_15px_40px_rgba(124,58,237,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
          >
            Explore ScoutX
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   Reusable flow card
--------------------------------------------------------- */

function FlowCard({
  icon: Icon,
  label,
  title,
  text,
  iconClass,
  featured = false,
}: {
  icon: IconType;
  label: string;
  title: string;
  text: string;
  iconClass: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`rounded-3xl border p-7 text-center backdrop-blur-xl ${
        featured
          ? "border-purple-500/30 bg-purple-500/[0.08] shadow-[0_20px_70px_rgba(124,58,237,0.12)]"
          : "border-white/[0.07] bg-white/[0.025]"
      }`}
    >
      <div
        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border text-xl ${iconClass}`}
      >
        <Icon />
      </div>

      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
        {label}
      </p>

      <h4 className="mt-2 text-xl font-bold">{title}</h4>

      <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
    </motion.div>
  );
}