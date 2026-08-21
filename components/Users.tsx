"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaBuilding,
  FaUniversity,
  FaSearch,
  FaBrain,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
  FaUser,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface UserGroup {
  icon: IconType;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const userGroups: UserGroup[] = [
  {
    icon: FaLightbulb,
    label: "SIDE 01",
    title: "Creators",
    subtitle:
      "Students • Developers • Researchers • Founders • Independent Builders • Anyone with an Idea",
    description:
      "ScoutX is open to anyone who has a meaningful idea, prototype, research outcome, or technical solution — with or without a degree.",
    benefits: [
      "Submit an idea or working solution",
      "Build an Innovation Passport",
      "Add evidence, prototypes, and technical details",
      "Get AI-assisted innovation insights",
    ],
  },
  {
    icon: FaBuilding,
    label: "SIDE 02",
    title: "Organizations",
    subtitle:
      "Companies • Startups • R&D Teams • Product Teams • Problem Owners",
    description:
      "Organizations use ScoutX to search for existing innovations that could solve real problems instead of starting every search from scratch.",
    benefits: [
      "Search by problem, domain, and technology",
      "Discover relevant innovations",
      "Compare evidence and AI insights",
      "Connect directly with creators",
    ],
  },
  {
    icon: FaUniversity,
    label: "ECOSYSTEM",
    title: "Innovation Sources",
    subtitle:
      "Colleges • Hackathons • Incubators • Innovation Programs • Communities",
    description:
      "Innovation ecosystems can help valuable projects enter ScoutX and remain discoverable long after a competition, program, or academic project ends.",
    benefits: [
      "Preserve promising projects",
      "Give innovations longer visibility",
      "Create industry discovery pathways",
      "Reduce the loss of post-event innovation",
    ],
  },
];

const creatorFlow = [
  {
    icon: FaLightbulb,
    title: "Submit",
    text: "Share an idea, prototype, research work, or technical solution.",
  },
  {
    icon: FaBrain,
    title: "Understand",
    text: "ScoutX analyzes the idea, technology, domain, and innovation signals.",
  },
  {
    icon: FaDatabase,
    title: "Become Discoverable",
    text: "Your innovation becomes part of a structured discovery layer.",
  },
];

const organizationFlow = [
  {
    icon: FaSearch,
    title: "Search",
    text: "Describe a problem using keywords, technologies, or domains.",
  },
  {
    icon: FaDatabase,
    title: "Discover",
    text: "ScoutX surfaces innovations with the strongest relevance.",
  },
  {
    icon: FaHandshake,
    title: "Connect",
    text: "Contact the creator and explore what can happen next.",
  },
];

export default function Users() {
  return (
    <section
      id="users"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Who is ScoutX for?
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            One platform.
            <span className="block bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Two sides. One discovery layer.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            ScoutX connects people who create solutions with organizations
            looking for them — while giving innovation ecosystems a way to
            keep valuable work discoverable.
          </p>
        </motion.div>

        {/* USER GROUPS */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {userGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={`rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  index === 1
                    ? "border-[#D4AF37]/25 bg-gradient-to-br from-[#17150F] to-[#11100D]"
                    : "border-[#D4AF37]/10 bg-[#11100D]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon />
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37]/50">
                    {group.label}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold">{group.title}</h3>

                <p className="mt-2 text-xs font-medium uppercase leading-5 tracking-[0.08em] text-[#D4AF37]">
                  {group.subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-[#A9A293]">
                  {group.description}
                </p>

                <div className="mt-6 border-t border-[#D4AF37]/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#817A6E]">
                    What they can do
                  </p>

                  <ul className="mt-4 space-y-3">
                    {group.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 text-sm text-[#A9A293]"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-xs text-[#D4AF37]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CREATOR VS ORGANIZATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              How ScoutX Connects Them
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              From an idea to an opportunity.
            </h3>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* CREATOR */}
            <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 md:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                  <FaUser />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                    For Creators
                  </p>

                  <h4 className="mt-1 text-xl font-bold">
                    Make your idea discoverable.
                  </h4>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {creatorFlow.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="relative flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/10 bg-white/[0.03] text-sm text-[#E7C979]">
                        <Icon />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-[#D4AF37]/50">
                            0{index + 1}
                          </span>
                          <h5 className="font-semibold">{step.title}</h5>
                        </div>

                        <p className="mt-1 text-sm leading-6 text-[#8F887B]">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ORGANIZATION */}
            <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 md:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                  <FaBuilding />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                    For Organizations
                  </p>

                  <h4 className="mt-1 text-xl font-bold">
                    Find solutions before building from scratch.
                  </h4>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {organizationFlow.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="relative flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/10 bg-white/[0.03] text-sm text-[#E7C979]">
                        <Icon />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-[#D4AF37]/50">
                            0{index + 1}
                          </span>
                          <h5 className="font-semibold">{step.title}</h5>
                        </div>

                        <p className="mt-1 text-sm leading-6 text-[#8F887B]">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* MATCHING VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-[#D4AF37]/15 bg-gradient-to-r from-[#17150F] via-[#11100D] to-[#17150F] p-7 md:p-10"
        >
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                The Match
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Problem meets innovation.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#8F887B]">
                An organization searches for a problem domain, technology, or
                requirement. ScoutX finds innovations with the strongest
                relevance — regardless of who created them.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-5 py-4 text-center">
                <FaBuilding className="mx-auto text-[#E7C979]" />
                <p className="mt-2 text-xs font-semibold text-[#C9C1B3]">
                  Problem
                </p>
              </div>

              <FaArrowRight className="text-[#D4AF37]" />

              <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/15 px-5 py-4 text-center">
                <FaSearch className="mx-auto text-[#E7C979]" />
                <p className="mt-2 text-xs font-semibold text-[#C9C1B3]">
                  ScoutX
                </p>
              </div>

              <FaArrowRight className="text-[#D4AF37]" />

              <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-5 py-4 text-center">
                <FaLightbulb className="mx-auto text-[#E7C979]" />
                <p className="mt-2 text-xs font-semibold text-[#C9C1B3]">
                  Innovation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ECOSYSTEM ROLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Where ScoutX Starts
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Start where ideas are already being created.
            </h3>

            <p className="mt-4 text-base leading-7 text-[#A9A293]">
              The initial focus can be on building a strong innovation
              database through student projects, independent creators,
              hackathons, colleges, incubators, and early-stage builders.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Student Projects",
              "Independent Builders",
              "Hackathons",
              "Incubators & Innovation Programs",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-4"
              >
                <span className="font-mono text-xs text-[#D4AF37]/50">
                  0{index + 1}
                </span>

                <span className="text-sm font-medium text-[#C9C1B3]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FINAL STATEMENT */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#817A6E]">
            ScoutX doesn't decide what an innovation becomes.
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            It makes the right{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              connection possible.
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#8F887B]">
            After discovery, creators and organizations decide whether to
            collaborate, license, develop, invest, acquire, or pursue another
            opportunity together.
          </p>
        </div>
      </div>
    </section>
  );
}