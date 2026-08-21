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
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface UserGroup {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
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
      "Showcase work with evidence",
      "Build a visible track record",
      "Get discovered for opportunities",
    ],
  },
  {
    icon: FaBuilding,
    title: "Organizations",
    subtitle: "Companies • Startups • Product Teams",
    description:
      "Discover emerging talent, prototypes, and capabilities based on what people actually build.",
    benefits: [
      "Post real-world problems",
      "Discover relevant innovations",
      "Evaluate projects and evidence",
      "Connect with builders",
    ],
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
  },
];

const marketSegments = [
  ["Students & Developers", "Visibility, recognition, collaboration, and opportunities."],
  ["Companies & Startups", "Emerging talent, technologies, prototypes, and solutions."],
  ["Colleges & Innovation Cells", "Support student innovation and preserve project outcomes."],
  ["Hackathons & Incubators", "Give promising prototypes visibility beyond the event."],
];

export default function Users() {
  return (
    <section
      id="users"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            Who is ScoutX for?
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            One platform.
            <span className="block bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Three sides of innovation.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293]">
            ScoutX connects the people who build solutions, the organizations
            that need them, and the ecosystem that helps innovation grow.
          </p>
        </motion.div>

        {/* THREE SIDES */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {userGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 transition hover:-translate-y-1 hover:border-[#D4AF37]/25"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                  <Icon />
                </div>

                <h3 className="mt-5 text-2xl font-bold">{group.title}</h3>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#D4AF37]">
                  {group.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#A9A293]">
                  {group.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {group.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex gap-2 text-sm text-[#A9A293]"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-xs text-[#D4AF37]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* ECOSYSTEM LOOP */}
        <div className="mt-16 rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-8 md:p-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              The ScoutX Ecosystem
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Build{" "}
              <span className="text-[#D4AF37]">→</span> Discover{" "}
              <span className="text-[#D4AF37]">→</span> Connect
            </h3>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              [FaLightbulb, "Innovator", "Builds and documents a solution."],
              [FaSearch, "ScoutX", "Makes innovation structured and discoverable."],
              [FaBuilding, "Organization", "Finds and connects with relevant solutions."],
            ].map(([Icon, title, text], index) => {
              const ItemIcon = Icon as IconType;

              return (
                <div key={title as string} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    <ItemIcon />
                  </div>

                  <h4 className="mt-4 font-bold">{title as string}</h4>

                  <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                    {text as string}
                  </p>

                  {index < 2 && (
                    <FaArrowRight className="absolute -right-3 top-7 hidden text-[#D4AF37]/40 md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* INITIAL TARGET MARKET */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Initial Target Market
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              Start where innovation is
              <span className="block bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
                already happening.
              </span>
            </h3>

            <p className="mt-5 leading-7 text-[#A9A293]">
              ScoutX can initially focus on students and early-stage
              innovation across colleges, hackathons, clubs, internships,
              and innovation programs.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] px-4 py-2 text-sm text-[#E7C979]">
              <FaRocket />
              Build the innovation database first
            </div>
          </div>

          <div className="space-y-3">
            {marketSegments.map(([title, text], index) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-4"
              >
                <span className="text-xs font-mono text-[#D4AF37]/50">
                  0{index + 1}
                </span>

                <div>
                  <h4 className="font-semibold">{title}</h4>
                  <p className="mt-1 text-sm text-[#8F887B]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}