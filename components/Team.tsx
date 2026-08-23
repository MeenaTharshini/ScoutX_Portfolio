"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCode,
  FaUsers,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Lithanya R",
    role: "Founder",
    description:
      "Initiated the ScoutX idea and shaped the vision for making innovation more discoverable.",
    icon: FaLightbulb,
  },
  {
    name: "Meena Tharshini I",
    role: "Team Lead & Technology",
    description:
      "Worked with Lithanya to develop the concept and leads the technical direction of ScoutX.",
    icon: FaCode,
  },
  {
    name: "Magha Sri P",
    role: "Team Member",
    description:
      "Contributes to the ScoutX team through research, presentation, and project development.",
    icon: FaUsers,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-16 text-[#F7F2E8] md:py-20"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            The Team
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The people building{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              ScoutX.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#8F887B] sm:text-base">
            ScoutX began with an idea, grew through collaboration, and is
            being turned into a real product by a small, focused team.
          </p>
        </motion.div>

        {/* TEAM CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;

            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl border border-white/[0.07] bg-[#11100D] p-6 transition-all duration-300 hover:border-[#D4AF37]/25"
              >
                {/* Number */}
                <span className="absolute right-5 top-5 font-mono text-[10px] text-[#D4AF37]/40">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.08] text-[#E7C979]">
                  <Icon className="text-base" />
                </div>

                {/* Role */}
                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  {member.role}
                </p>

                {/* Name */}
                <h3 className="mt-2 text-xl font-bold">
                  {member.name}
                </h3>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-white/[0.06]" />

                {/* Description */}
                <p className="text-sm leading-6 text-[#8F887B]">
                  {member.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* TEAM STORY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] px-6 py-7 text-center sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              How ScoutX Started
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#A9A293] sm:text-base">
              ScoutX was initiated by{" "}
              <span className="font-semibold text-[#F7F2E8]">
                Lithanya
              </span>
              . The idea was then discussed, challenged, and developed
              together with{" "}
              <span className="font-semibold text-[#F7F2E8]">
                Meena Tharshini
              </span>
              , who leads the team and technology.{" "}
              <span className="font-semibold text-[#F7F2E8]">
                Magha Sri
              </span>{" "}
              contributes as a core team member as the idea moves from
              concept toward reality.
            </p>
          </div>
        </motion.div>

        {/* CLOSING LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-center text-sm text-[#6F6A60]"
        >
          Different strengths. One idea.{" "}
          <span className="text-[#D4AF37]">One ScoutX.</span>
        </motion.p>

      </div>
    </section>
  );
}