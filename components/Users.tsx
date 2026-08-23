"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaLightbulb,
  FaUniversity,
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
    tag: "CREATORS",
    title: "Creators",
    subtitle: "Students • Developers • Researchers • Founders • Makers",
    points: [
      "Showcase what you build",
      "Build a discoverable innovation profile",
      "Get discovered by organizations",
    ],
  },
  {
    icon: FaBuilding,
    tag: "ORGANIZATIONS",
    title: "Organizations",
    subtitle: "Companies • R&D Teams • Startups • Product Teams",
    points: [
      "Search for existing solutions",
      "Explore relevant innovations",
      "Connect with potential creators",
    ],
    featured: true,
  },
  {
    icon: FaUniversity,
    tag: "ECOSYSTEM",
    title: "Innovation Partners",
    subtitle: "Colleges • Hackathons • Incubators • Communities",
    points: [
      "Bring promising projects to ScoutX",
      "Keep innovation discoverable",
      "Create pathways to opportunities",
    ],
  },
];

export default function Users() {
  return (
    <section
      id="users"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-16 text-[#F7F2E8] md:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Ecosystem
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Who uses{" "}
            <span className="text-gradient">
              ScoutX?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX brings together the people building innovation, the
            organizations looking for it, and the ecosystems that help
            promising work reach the world.
          </p>
        </motion.div>

        {/* =====================================================
            THREE USER GROUPS
        ====================================================== */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {audiences.map((user, index) => {
            const Icon = user.icon;

            return (
              <motion.article
                key={user.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -3 }}
                className={`rounded-2xl border p-6 transition ${
                  user.featured
                    ? "border-[#D4AF37]/30 bg-gradient-to-br from-[#17150F] to-[#11100D]"
                    : "border-[#D4AF37]/10 bg-[#11100D]"
                }`}
              >
                {/* Icon + Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon className="text-sm" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#D4AF37]/60">
                    {user.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold">
                  {user.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.08em] text-[#D4AF37]">
                  {user.subtitle}
                </p>

                {/* Points */}
                <div className="mt-5 space-y-2.5">
                  {user.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5 text-xs text-[#A9A293]"
                    >
                      <FaCheckCircle className="mt-0.5 shrink-0 text-[10px] text-[#D4AF37]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            SIMPLE ECOSYSTEM FLOW
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] px-5 py-6 md:px-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="rounded-full border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-2 text-[#A9A293]">
              Innovation
            </span>

            <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />

            <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 font-medium text-[#E7C979]">
              ScoutX
            </span>

            <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />

            <span className="rounded-full border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-2 text-[#A9A293]">
              Discovery
            </span>

            <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />

            <span className="rounded-full border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-2 text-[#A9A293]">
              Opportunity
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p className="text-sm text-[#817A6E]">
            Different roles. One connected ecosystem.
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            ScoutX connects{" "}
            <span className="text-gradient">
              people, innovation, and opportunity.
            </span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}