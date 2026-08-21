"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaLightbulb,
  FaCode,
  FaBrain,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
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

const values = [
  {
    icon: FaLightbulb,
    title: "Build with Purpose",
    description: "Technology should solve meaningful problems and create real value.",
  },
  {
    icon: FaCode,
    title: "Evidence Over Claims",
    description: "Real projects and outcomes should speak louder than credentials alone.",
  },
  {
    icon: FaUsers,
    title: "Connect the Ecosystem",
    description: "Better discovery connects innovators, organizations, and opportunities.",
  },
  {
    icon: FaRocket,
    title: "Move Ideas Forward",
    description: "Help promising ideas progress toward validation and real-world impact.",
  },
];

const missionPoints = [
  "Discover overlooked innovators",
  "Make real projects easier to evaluate",
  "Connect prototypes with real problems",
  "Create pathways beyond competitions",
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#080A0F] px-6 py-20 text-white md:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/[0.07] blur-[130px]" />
        <div className="absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full bg-violet-600/[0.06] blur-[120px]" />
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-300">
            <FaUsers />
            The people behind ScoutX
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Small team.
            <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Big ambition.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            We are building ScoutX around one belief:
            <span className="text-slate-200">
              {" "}
              valuable innovation should be easier to discover.
            </span>
          </p>
        </motion.header>

        {/* Team */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const founder = index === 0;

            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/[0.07] blur-[80px] transition-opacity duration-500 group-hover:bg-purple-500/[0.14]"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full border px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${
                        founder
                          ? "border-purple-500/20 bg-purple-500/10 text-purple-300"
                          : "border-white/[0.07] bg-white/[0.03] text-slate-500"
                      }`}
                    >
                      {member.badge}
                    </span>

                    <Icon className="text-sm text-purple-400/50" />
                  </div>

                  {/* Avatar */}
                  <div className="mt-7 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-purple-400/20 bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-[#080A0F] shadow-[0_0_45px_rgba(168,85,247,0.08)] transition-all duration-500 group-hover:border-purple-400/35">
                      <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-200 to-violet-400 bg-clip-text">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold tracking-tight">
                      {member.name}
                    </h3>

                    <p className="mt-1.5 text-sm font-medium text-purple-400">
                      {member.role}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {member.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.06] bg-[#0B0E16] px-2.5 py-1.5 text-[10px] text-slate-500 transition hover:border-purple-500/20 hover:text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="mt-6 flex justify-center gap-2 border-t border-white/[0.06] pt-5">
                    <a
                      href="#"
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-[#0B0E16] text-slate-600 transition hover:border-purple-500 hover:bg-purple-600 hover:text-white"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-[#0B0E16] text-slate-600 transition hover:border-purple-500 hover:bg-purple-600 hover:text-white"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-[30px] border border-purple-500/15 bg-gradient-to-br from-white/[0.04] to-purple-500/[0.04] p-7 md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
                  <FaStar />
                  Why ScoutX exists
                </div>

                <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  Great innovation should not depend on
                  <span className="block bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                    who happens to discover it.
                  </span>
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                  Valuable projects are created every day, but many lose
                  visibility after hackathons, competitions, and academic
                  events. ScoutX creates a continuous discovery layer between
                  builders and organizations.
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  What we are solving
                </p>

                {missionPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#0B0E16]/70 p-3.5 transition hover:border-purple-500/20"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/[0.08] text-[10px] font-bold text-purple-400">
                      0{index + 1}
                    </span>

                    <span className="text-sm text-slate-300">{point}</span>

                    <FaCheckCircle className="ml-auto shrink-0 text-xs text-purple-500/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
            Our principles
          </p>

          <h3 className="mt-3 text-3xl font-bold md:text-4xl">
            What drives the team
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-left transition hover:border-purple-500/25"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/10 bg-purple-500/[0.08] text-purple-400">
                    <Icon />
                  </div>

                  <h4 className="mt-4 font-bold">{value.title}</h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
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
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-600">
            Building a better way to discover innovation.
          </p>

          <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-bold md:text-4xl">
            Discover what people can
            <span className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
              {" "}
              build.
            </span>
          </h3>

          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 text-sm font-semibold shadow-[0_12px_35px_rgba(124,58,237,0.2)] transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-500"
          >
            Connect With ScoutX
            <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}