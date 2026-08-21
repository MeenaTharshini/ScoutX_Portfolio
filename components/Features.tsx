"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaChartLine,
  FaCode,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaSearch,
  FaStar,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: FaUserCircle,
    title: "Innovation Profiles",
    text: "Show what an innovator has actually built, demonstrated, and achieved.",
    points: ["Skills", "Projects", "Achievements", "Interests"],
  },
  {
    icon: FaLightbulb,
    title: "Project Showcase",
    text: "Turn ideas and prototypes into structured records showing the problem, solution, progress, and potential.",
    points: ["Problem", "Solution", "Prototype", "Applications"],
  },
  {
    icon: FaCheckCircle,
    title: "Evidence Layer",
    text: "Connect innovations with evidence that demonstrates what has actually been built.",
    points: ["GitHub", "Demos", "Documentation", "Achievements"],
  },
  {
    icon: FaChartLine,
    title: "AI Evaluation",
    text: "Generate signals around innovation quality, maturity, relevance, and potential.",
    points: ["Quality", "Evidence", "Impact", "Maturity"],
  },
  {
    icon: FaSearch,
    title: "Innovation Discovery",
    text: "Discover people and projects using meaningful innovation signals.",
    points: ["Technology", "Domain", "Project Type", "Stage"],
  },
  {
    icon: FaStar,
    title: "Smart Matching",
    text: "Match organizational needs with innovations that have relevant capabilities.",
    points: ["Technology", "Domain", "Capability", "Application"],
  },
  {
    icon: FaBuilding,
    title: "Organization Discovery",
    text: "Help companies and innovation ecosystems discover promising builders and projects.",
    points: ["Talent", "Prototypes", "Innovation", "Evidence"],
  },
  {
    icon: FaHandshake,
    title: "Opportunity Connection",
    text: "Turn discovery into collaboration, internships, pilots, incubation, and mentorship.",
    points: ["Internships", "Collaboration", "Pilots", "Incubation"],
  },
];

const advantages = [
  {
    icon: FaCheckCircle,
    title: "Evidence over claims",
    text: "Understand what has actually been built instead of relying only on resumes.",
  },
  {
    icon: FaCode,
    title: "Prototype visibility",
    text: "Keep promising projects discoverable beyond hackathons and competitions.",
  },
  {
    icon: FaSearch,
    title: "Faster discovery",
    text: "Find relevant innovators through technologies, domains, problems, and capabilities.",
  },
  {
    icon: FaHandshake,
    title: "More opportunities",
    text: "Connect projects with collaboration, internships, pilots, incubation, and mentorship.",
  },
];

const discoveryFlow = [
  ["Build", "Create innovation"],
  ["Prove", "Show evidence"],
  ["Discover", "Find relevance"],
  ["Match", "Identify opportunity"],
  ["Connect", "Create collaboration"],
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#11100D] px-6 py-24 text-[#F7F2E8] md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/8 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#F5F0E6] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#A67C00]">
            <FaStar />
            Platform Features
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Everything needed to make{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              innovation discoverable.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            ScoutX connects the complete innovation story —
            <span className="text-[#E7C979]">
              {" "}builder, idea, prototype, evidence, evaluation, and opportunity.
            </span>
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-[#F7F2E8]/8 bg-[#171612] p-6 transition hover:border-[#D4AF37]/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F0E6] text-[#A67C00]">
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#8F897D]">
                  {feature.text}
                </p>

                <div className="mt-5 space-y-2">
                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-xs text-[#B8B1A4]"
                    >
                      <FaCheckCircle className="text-[9px] text-[#D4AF37]" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Difference */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why ScoutX?
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              Not another resume platform.
              <span className="block text-[#D4AF37]">
                Search around innovation.
              </span>
            </h3>

            <p className="mt-5 text-[#8F897D]">
              ScoutX connects people, problems, prototypes, evidence, and
              organizations looking for relevant innovation.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">

            {/* Traditional */}
            <div className="rounded-2xl border border-[#F7F2E8]/8 bg-[#171612] p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#24221D] text-[#817A6D]">
                  <FaUsers />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#817A6D]">
                    Traditional Platforms
                  </p>
                  <h4 className="text-xl font-bold">
                    Search around people
                  </h4>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#777166]">
                {[
                  "Resume → Skills",
                  "Profile → Job",
                  "Application → Selection",
                  "Project → Separate repository",
                  "Evidence → Scattered platforms",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span>×</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ScoutX */}
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F0E6] text-[#A67C00]">
                  <FaRocket />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                    ScoutX
                  </p>
                  <h4 className="text-xl font-bold">
                    Search around innovation
                  </h4>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#D5CEC0]">
                {[
                  "Problem → Innovation",
                  "Project → Prototype",
                  "Builder → Capability",
                  "Prototype → Evidence",
                  "Innovation → Opportunity",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#D4AF37]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              The ScoutX Advantage
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              Why this approach matters.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-[#8F897D]">
              ScoutX reduces the gap between building something valuable and
              getting it discovered by the right people.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#F7F2E8]/8 bg-[#171612] p-6 hover:border-[#D4AF37]/25"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0E6] text-[#A67C00]">
                    <Icon />
                  </div>

                  <h4 className="mt-5 font-bold">{item.title}</h4>

                  <p className="mt-3 text-sm leading-6 text-[#817A6D]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Evidence + Discovery */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-6 lg:grid-cols-2"
        >
          {/* Evidence */}
          <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#171612] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Core Product
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Don't just say{" "}
              <span className="text-[#D4AF37]">"I can build."</span>
              <br />
              Show what you built.
            </h3>

            <p className="mt-5 leading-7 text-[#8F897D]">
              ScoutX shifts discovery from claims to evidence. Every
              innovation can show what was built, how it works, who built it,
              and what supports its progress.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Problem addressed",
                "What has been built",
                "Technologies used",
                "Supporting evidence",
                "Potential impact",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-[#C6BFB2]">
                  <FaCheckCircle className="mt-1 text-[#D4AF37]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Discovery */}
          <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#171612] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Intelligent Discovery
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Search for{" "}
              <span className="text-[#D4AF37]">
                what people have built.
              </span>
            </h3>

            <p className="mt-5 leading-7 text-[#8F897D]">
              Organizations discover innovators and projects using meaningful
              signals instead of relying only on conventional resumes.
            </p>

            <div className="mt-7 flex items-center gap-3 rounded-xl border border-[#F7F2E8]/8 bg-[#0B0B09] px-4 py-4">
              <FaSearch className="text-[#D4AF37]" />
              <span className="text-sm text-[#6E685D]">
                Technology, domain, problem...
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "AI",
                "Healthcare",
                "IoT",
                "Computer Vision",
                "Sustainability",
                "Robotics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D4AF37]/15 px-3 py-2 text-xs text-[#BEB7AA]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Discovery Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-[#D4AF37]/15 bg-[#171612] p-8 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            ScoutX Discovery Flow
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-6">
            {discoveryFlow.map(([title, text], index) => (
              <div
                key={title}
                className="flex items-center gap-5 md:gap-6"
              >
                <div>
                  <p
                    className={`font-semibold ${
                      index === discoveryFlow.length - 1
                        ? "text-[#E7C979]"
                        : "text-[#F7F2E8]"
                    }`}
                  >
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-[#6E685D]">
                    {text}
                  </p>
                </div>

                {index < discoveryFlow.length - 1 && (
                  <FaArrowRight className="hidden text-[#D4AF37] md:block" />
                )}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-[#817A6D]">
            ScoutX turns scattered projects into structured, discoverable
            innovation and creates a path from building to real-world
            opportunity.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-[#6E685D]">The goal is simple.</p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Make valuable innovation{" "}
            <span className="text-[#D4AF37]">discoverable.</span>
          </h3>

          <a
            href="#users"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#AD8930] px-7 py-3.5 text-sm font-bold text-[#0B0B09]"
          >
            Explore the Ecosystem
            <FaArrowRight className="text-xs" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}