"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaChartLine,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaSearch,
  FaStar,
  FaTrophy,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: FaUserCircle,
    number: "01",
    title: "Innovation Profiles",
    description:
      "Create a structured identity around what an innovator has actually built, demonstrated, and achieved.",
    points: [
      "Builder identity",
      "Skills & technologies",
      "Projects & achievements",
      "Innovation interests",
    ],
  },
  {
    icon: FaLightbulb,
    number: "02",
    title: "Project Showcase",
    description:
      "Turn projects and prototypes into clear innovation records that communicate the problem, solution, progress, and potential.",
    points: [
      "Problem addressed",
      "Solution overview",
      "Prototype stage",
      "Potential applications",
    ],
  },
  {
    icon: FaCheckCircle,
    number: "03",
    title: "Evidence Layer",
    description:
      "Connect innovations with evidence that helps others understand what has actually been built.",
    points: [
      "GitHub repositories",
      "Live demonstrations",
      "Documentation",
      "Awards & achievements",
    ],
  },
  {
    icon: FaChartLine,
    number: "04",
    title: "AI Evaluation",
    description:
      "Generate structured signals that help organizations understand innovation quality, maturity, relevance, and potential.",
    points: [
      "Build quality",
      "Evidence strength",
      "Impact potential",
      "Development maturity",
    ],
  },
  {
    icon: FaSearch,
    number: "05",
    title: "Innovation Discovery",
    description:
      "Discover people and projects using meaningful innovation signals rather than relying only on conventional profiles.",
    points: [
      "Technology",
      "Domain",
      "Project type",
      "Prototype stage",
    ],
  },
  {
    icon: FaStar,
    number: "06",
    title: "Smart Matching",
    description:
      "Connect organizational requirements with innovations that have relevant capabilities and potential applications.",
    points: [
      "Technology relevance",
      "Domain relevance",
      "Capability alignment",
      "Application potential",
    ],
  },
  {
    icon: FaBuilding,
    number: "07",
    title: "Organization Discovery",
    description:
      "Give companies, incubators, and innovation ecosystems a structured way to discover promising builders and projects.",
    points: [
      "Discover talent",
      "Find prototypes",
      "Explore innovation",
      "Evaluate evidence",
    ],
  },
  {
    icon: FaHandshake,
    number: "08",
    title: "Opportunity Connection",
    description:
      "Turn discovery into meaningful opportunities such as collaboration, internships, pilots, incubation, and mentorship.",
    points: [
      "Internships",
      "Collaborations",
      "Pilot opportunities",
      "Incubation",
    ],
  },
];

const advantages = [
  {
    icon: FaCheckCircle,
    title: "Evidence over claims",
    description:
      "Understand what has actually been built instead of relying only on resumes or self-described skills.",
  },
  {
    icon: FaCode,
    title: "Prototype visibility",
    description:
      "Keep promising projects discoverable even after hackathons, academic projects, or competitions end.",
  },
  {
    icon: FaSearch,
    title: "Faster discovery",
    description:
      "Find relevant innovators and projects through technologies, domains, problems, and capabilities.",
  },
  {
    icon: FaHandshake,
    title: "More paths to opportunity",
    description:
      "A project can lead to collaboration, internships, pilots, incubation, mentorship, and more.",
  },
];

const traditionalPoints = [
  "Resume → Skills",
  "Profile → Job",
  "Application → Selection",
  "Project → Separate repository",
  "Evidence → Scattered across platforms",
];

const scoutxPoints = [
  "Problem → Innovation",
  "Project → Prototype",
  "Builder → Capability",
  "Prototype → Evidence",
  "Innovation → Opportunity",
];

const discoveryTags = [
  "Artificial Intelligence",
  "Healthcare",
  "IoT",
  "Computer Vision",
  "Sustainability",
  "Robotics",
];

const discoveryFlow = [
  ["Build", "Create innovation"],
  ["Prove", "Show evidence"],
  ["Discover", "Find relevance"],
  ["Match", "Identify opportunity"],
  ["Connect", "Create collaboration"],
] as const;

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#11100D] px-6 py-24 text-[#F7F2E8] md:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/8 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/6 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/3 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#F5F0E6] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#A67C00]">
            <FaStar className="text-[8px]" />
            Platform Features
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Everything needed to make{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              innovation discoverable.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            ScoutX connects the complete innovation story —
            <span className="font-medium text-[#E7C979]">
              {" "}
              builder, idea, prototype, evidence, evaluation, and opportunity.
            </span>
          </p>
        </motion.div>

        {/* =====================================================
            FEATURE GRID
        ====================================================== */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#F7F2E8]/8 bg-[#171612] p-6 transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#F5F0E6] text-[#A67C00] transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-[#514D44]">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#F7F2E8]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#8F897D]">
                    {feature.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {feature.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2.5"
                      >
                        <FaCheckCircle className="shrink-0 text-[10px] text-[#D4AF37]" />

                        <span className="text-xs text-[#B8B1A4]">
                          {point}
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
            DIFFERENCE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why ScoutX?
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Not another resume platform.
              <span className="mt-2 block text-[#D4AF37]">
                Not just another project showcase.
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-[#8F897D] md:text-lg">
              ScoutX connects the person, the problem, the prototype, the
              evidence, and the organization looking for relevant innovation.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            {/* Traditional */}

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-[#F7F2E8]/8 bg-[#171612] p-7 md:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#24221D] text-[#817A6D]">
                  <FaUsers />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#817A6D]">
                    Traditional Platforms
                  </p>

                  <h4 className="mt-1 text-xl font-bold">
                    Search around people
                  </h4>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {traditionalPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[#777166]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#24221D] text-xs">
                      ×
                    </span>

                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ScoutX */}

            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/10 via-[#171612] to-[#11100D] p-7 md:p-8"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F0E6] text-[#A67C00]">
                    <FaRocket />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                      ScoutX
                    </p>

                    <h4 className="mt-1 text-xl font-bold">
                      Search around innovation
                    </h4>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {scoutxPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[#D5CEC0]"
                    >
                      <FaCheckCircle className="shrink-0 text-sm text-[#D4AF37]" />

                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =====================================================
            ADVANTAGES
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              The ScoutX Advantage
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              Why this approach matters.
            </h3>

            <p className="mt-5 text-base leading-7 text-[#8F897D] md:text-lg">
              ScoutX is designed to reduce the gap between building something
              valuable and getting it discovered by the right people.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;

              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-[1.5rem] border border-[#F7F2E8]/8 bg-[#171612] p-7 transition-all duration-300 hover:border-[#D4AF37]/25"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#F5F0E6] text-[#A67C00]">
                    <Icon />
                  </div>

                  <h4 className="mt-5 text-lg font-bold">
                    {advantage.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#817A6D]">
                    {advantage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            FEATURE SPOTLIGHT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="grid items-center gap-10 rounded-[2rem] border border-[#D4AF37]/15 bg-[#171612] p-7 md:p-10 lg:grid-cols-2 lg:p-12">
            {/* LEFT */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Core Product
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Don't just say
                <span className="text-[#D4AF37]"> "I can build."</span>
                <br />
                Show what you built.
              </h3>

              <p className="mt-6 text-base leading-8 text-[#8F897D] md:text-lg">
                ScoutX shifts the focus from claims to evidence. Every
                innovation can communicate what was built, how it works, who
                built it, and what supports its progress.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "What problem does the project address?",
                  "What has actually been built?",
                  "Which technologies were used?",
                  "What evidence supports the project?",
                  "What impact or applications are possible?",
                ].map((question) => (
                  <div key={question} className="flex items-center gap-3">
                    <FaCheckCircle className="shrink-0 text-[#D4AF37]" />

                    <span className="text-sm text-[#C6BFB2] md:text-base">
                      {question}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — INNOVATION PROFILE */}

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

              <div className="relative rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#0B0B09] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:p-6">
                {/* Profile Header */}

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#6E685D]">
                      Innovation Profile
                    </p>

                    <h4 className="mt-2 text-xl font-bold md:text-2xl">
                      HealthAssist AI
                    </h4>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F0E6] text-[#A67C00]">
                    <FaLightbulb />
                  </div>
                </div>

                {/* Builder */}

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 font-bold text-[#D4AF37]">
                    S
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      Student Innovation Team
                    </p>

                    <p className="mt-0.5 text-xs text-[#6E685D]">
                      AI • Healthcare • Full Stack
                    </p>
                  </div>
                </div>

                {/* Prototype */}

                <div className="mt-6 rounded-xl border border-[#F7F2E8]/6 bg-[#171612] p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#6E685D]">
                    Prototype
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#BEB7AA]">
                    AI-assisted healthcare information and appointment support
                    prototype.
                  </p>
                </div>

                {/* Evidence */}

                <div className="mt-3 grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl bg-[#171612] p-3">
                    <FaGithub className="text-[#D5CEC0]" />

                    <p className="mt-3 text-[10px] text-[#817A6D]">GitHub</p>

                    <p className="mt-1 text-[10px] text-[#D4AF37]">
                      Available
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#171612] p-3">
                    <FaExternalLinkAlt className="text-[#D5CEC0]" />

                    <p className="mt-3 text-[10px] text-[#817A6D]">Demo</p>

                    <p className="mt-1 text-[10px] text-[#D4AF37]">
                      Available
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#171612] p-3">
                    <FaTrophy className="text-[#D4AF37]" />

                    <p className="mt-3 text-[10px] text-[#817A6D]">
                      Achievement
                    </p>

                    <p className="mt-1 text-[10px] text-[#D4AF37]">
                      Verified
                    </p>
                  </div>
                </div>

                {/* Score */}

                <div className="mt-3 rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#817A6D]">
                      Innovation Score
                    </span>

                    <span className="font-bold text-[#E7C979]">
                      87 / 100
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#24221D]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#AD8930] via-[#D4AF37] to-[#E7C979]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            INTELLIGENT DISCOVERY
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Intelligent Discovery
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              Search for{" "}
              <span className="text-[#D4AF37]">what people have built.</span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#817A6D]">
              Organizations can discover innovators and projects using
              meaningful innovation signals instead of relying only on
              conventional resumes.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#171612] p-5 md:p-7">
            {/* Search bar */}

            <div className="flex items-center gap-3 rounded-xl border border-[#F7F2E8]/8 bg-[#0B0B09] px-5 py-4">
              <FaSearch className="shrink-0 text-[#D4AF37]" />

              <span className="text-sm text-[#6E685D]">
                Search innovations by technology, domain, problem...
              </span>
            </div>

            {/* Tags */}

            <div className="mt-5 flex flex-wrap gap-2.5">
              {discoveryTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D4AF37]/15 bg-[#F5F0E6]/5 px-3.5 py-2 text-xs text-[#BEB7AA] transition-colors hover:border-[#D4AF37]/40 hover:text-[#E7C979]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DIFFERENTIATOR
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-[#171612] to-[#11100D] p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D4AF37]/8 blur-[100px]" />

            <div className="relative mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#F5F0E6]/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                <FaStar />
                ScoutX Differentiator
              </div>

              <h3 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
                From{" "}
                <span className="text-[#777166]">“Who are you?”</span>
                <br />
                to{" "}
                <span className="text-[#E7C979]">
                  “What have you built?”
                </span>
              </h3>

              <p className="mt-6 text-base leading-8 text-[#8F897D] md:text-lg">
                ScoutX changes the discovery model from searching only for
                people and credentials to discovering the innovations,
                capabilities, evidence, and opportunities behind them.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
                <div className="w-full rounded-2xl border border-[#F7F2E8]/8 bg-[#0B0B09]/70 px-7 py-4 md:w-auto">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#6E685D]">
                    Traditional
                  </p>

                  <p className="mt-2 font-semibold">Resume → Job</p>
                </div>

                <FaArrowRight className="rotate-90 text-[#D4AF37] md:rotate-0" />

                <div className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-7 py-4 md:w-auto">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                    ScoutX
                  </p>

                  <p className="mt-2 font-semibold">
                    Innovation → Opportunity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL FLOW
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/15 bg-[#171612] p-8 text-center md:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              ScoutX Discovery Flow
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-7">
              {discoveryFlow.map(([title, description], index) => (
                <div
                  key={title}
                  className="flex items-center gap-5 md:gap-7"
                >
                  <div>
                    <div
                      className={`text-lg font-semibold ${
                        index === discoveryFlow.length - 1
                          ? "text-[#E7C979]"
                          : "text-[#F7F2E8]"
                      }`}
                    >
                      {title}
                    </div>

                    <p className="mt-1 text-xs text-[#6E685D]">
                      {description}
                    </p>
                  </div>

                  {index < discoveryFlow.length - 1 && (
                    <FaArrowRight className="hidden text-xs text-[#D4AF37] md:block" />
                  )}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-[#817A6D]">
              ScoutX turns scattered projects into structured, discoverable
              innovation and creates a path from building to real-world
              opportunity.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-[#6E685D]">The goal is simple.</p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Make valuable innovation{" "}
            <span className="text-[#D4AF37]">discoverable.</span>
          </h3>

          <motion.a
            href="#users"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#AD8930] px-7 py-3.5 text-sm font-bold text-[#0B0B09] shadow-[0_12px_35px_rgba(201,166,70,0.20)] transition-all duration-300 hover:shadow-[0_15px_45px_rgba(201,166,70,0.30)]"
          >
            Explore the Ecosystem
            <FaArrowRight className="text-xs" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}