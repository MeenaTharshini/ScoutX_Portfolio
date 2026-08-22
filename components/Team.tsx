"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCode,
  FaBrain,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Lithanya R",
    role: "Founder & CEO",
    icon: FaLightbulb,
  },
  {
    name: "Meena Tharshini I",
    role: "Technology & CTO",
    icon: FaCode,
  },
  {
    name: "Magha Sri P",
    role: "Research & COO",
    icon: FaBrain,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-14 text-[#F7F2E8] md:py-16"
    >
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The Team
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            The people behind{" "}
            <span className="text-gradient">
              ScoutX.
            </span>
          </h2>

          <p className="mt-3 text-sm text-[#A9A293]">
            A small team building a new way to discover innovation.
          </p>
        </motion.div>

        {/* TEAM */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-5 transition hover:border-[#D4AF37]/25"
              >
                {/* ICON */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#0B0B09] text-[#D4AF37]">
                  <Icon className="text-sm" />
                </div>

                {/* INFO */}
                <div>
                  <h3 className="text-sm font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#D4AF37]">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}