"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaLightbulb,
  FaCode,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Meena Tharshini I",
    role: "Founder & Product Lead",
    badge: "Founder",
    initials: "MT",
    description:
      "Driving ScoutX's product vision, user experience, and innovation discovery model.",
    skills: ["Product Strategy", "Full Stack", "AI", "UI/UX"],
    icon: FaLightbulb,
  },
  {
    name: "Lithanya R",
    role: "Technology & Engineering",
    badge: "Engineering",
    initials: "LR",
    description:
      "Building the technical foundation and systems behind the ScoutX platform.",
    skills: ["Backend", "APIs", "Database", "Cloud"],
    icon: FaCode,
  },
  {
    name: "Magha Sri P",
    role: "Innovation & Research",
    badge: "Research",
    initials: "MS",
    description:
      "Exploring innovation ecosystems, user needs, market opportunities, and adoption.",
    skills: ["Research", "Innovation", "Market", "Strategy"],
    icon: FaBrain,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#D4AF37]/[0.06] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            The people behind ScoutX
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Small team.{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Big ambition.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            We are building ScoutX around one belief:{" "}
            <span className="text-[#F7F2E8]">
              valuable innovation should be easier to discover.
            </span>
          </p>
        </motion.header>

        {/* Team */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;

            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition-all duration-300 hover:border-[#D4AF37]/25"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#D4AF37]/[0.06] blur-3xl transition group-hover:bg-[#D4AF37]/[0.1]"
                />

                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.06] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                      {member.badge}
                    </span>

                    <Icon className="text-sm text-[#D4AF37]/50" />
                  </div>

                  {/* Avatar */}
                  <div className="mt-7 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06]">
                      <span className="bg-gradient-to-r from-[#F7E6A8] to-[#D4AF37] bg-clip-text text-2xl font-bold text-transparent">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-5 text-center">
                    <h3 className="text-xl font-bold text-[#F7F2E8]">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#D4AF37]">
                      {member.role}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#8F887B]">
                      {member.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.06] bg-[#0B0B09] px-2.5 py-1.5 text-[10px] text-[#8F887B]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="mt-5 flex justify-center gap-2 border-t border-white/[0.06] pt-5">
                    <a
                      href="#"
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-[#0B0B09] text-[#8F887B] transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B09]"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-[#0B0B09] text-[#8F887B] transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B09]"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Why ScoutX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Why ScoutX exists
          </p>

          <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            Great innovation should not depend on{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              who happens to discover it.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#A9A293] md:text-base">
            Valuable projects are created every day, but many lose visibility
            after hackathons, competitions, and academic events. ScoutX creates
            a continuous discovery layer between builders and organizations.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C9A227] to-[#A67C00] px-6 py-3 text-sm font-semibold text-[#0B0B09] transition hover:-translate-y-0.5"
          >
            Connect With ScoutX
            <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}