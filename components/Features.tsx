"use client";

import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaLightbulb,
  FaCode,
  FaCheckCircle,
  FaChartLine,
  FaSearch,
  FaBuilding,
  FaHandshake,
  FaGithub,
  FaTrophy,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
  FaRocket,
  FaUsers,
  FaBullseye,
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
      "Transform projects and prototypes into clear innovation records that communicate their real value.",
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
      "Connect every innovation with evidence that demonstrates what has actually been built.",
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
      "Generate structured signals that help organizations understand innovation quality, maturity, and potential.",
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
      "Discover people and projects based on technologies, domains, problems, and capabilities.",
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
      "Give companies, incubators, and innovation ecosystems a structured way to discover promising builders.",
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
      "Turn discovery into meaningful opportunities such as collaboration, internships, pilots, and incubation.",
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
    icon: FaBullseye,
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

export default function Features() {
  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        bg-[#11100D]
        text-[#F7F2E8]
        py-24
        md:py-32
        px-6
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute top-[-180px] right-[-180px] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/8 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-[-180px] left-[-180px] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/6 blur-[120px] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#D4AF37]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[#F5F0E6]
              text-[#A67C00]
              border
              border-[#D4AF37]/20
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
            "
          >
            <FaStar className="text-[9px]" />
            Platform Features
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              mt-6
              leading-[1.08]
              tracking-tight
            "
          >
            Everything needed to make{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#E7C979]
                via-[#D4AF37]
                to-[#A67C00]
              "
            >
              innovation discoverable.
            </span>
          </h2>

          <p className="text-[#A9A293] text-base md:text-lg leading-8 mt-6 max-w-3xl mx-auto">
            ScoutX connects the complete innovation story —
            <span className="text-[#E7C979] font-medium">
              {" "}builder, idea, prototype, evidence, evaluation, and opportunity.
            </span>
          </p>
        </motion.div>

        {/* =====================================================
            FEATURE GRID
        ====================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-[#171612]
                  border
                  border-[#F7F2E8]/8
                  hover:border-[#D4AF37]/30
                  p-6
                  transition-all
                  duration-300
                "
              >
                {/* Card glow */}

                <div
                  className="
                    absolute
                    top-[-80px]
                    right-[-80px]
                    w-40
                    h-40
                    rounded-full
                    bg-[#D4AF37]/8
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                <div className="relative z-10">

                  {/* Icon + number */}

                  <div className="flex items-center justify-between">
                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-[#F5F0E6]
                        text-[#A67C00]
                        flex
                        items-center
                        justify-center
                        border
                        border-[#D4AF37]/20
                        group-hover:-translate-y-1
                        transition-transform
                        duration-300
                      "
                    >
                      <Icon />
                    </div>

                    <span className="text-[#514D44] text-sm font-bold tracking-widest">
                      {feature.number}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="text-lg font-bold mt-6 text-[#F7F2E8]">
                    {feature.title}
                  </h3>

                  {/* Description */}

                  <p className="text-[#8F897D] text-sm leading-6 mt-3">
                    {feature.description}
                  </p>

                  {/* Points */}

                  <div className="mt-5 space-y-2.5">
                    {feature.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle className="text-[#D4AF37] text-[10px] shrink-0" />

                        <span className="text-[#B8B1A4] text-xs">
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
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="text-center max-w-3xl mx-auto">

            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold">
              Why ScoutX?
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Not another resume platform.
              <span className="block text-[#D4AF37] mt-1">
                Not just another project showcase.
              </span>
            </h3>

            <p className="text-[#8F897D] text-base md:text-lg leading-8 mt-6">
              ScoutX connects the person, the problem, the prototype,
              the evidence, and the organization looking for relevant
              innovation.
            </p>

          </div>

          {/* Comparison */}

          <div className="grid lg:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">

            {/* Traditional */}

            <motion.div
              whileHover={{ y: -3 }}
              className="
                rounded-[2rem]
                bg-[#171612]
                border
                border-[#F7F2E8]/8
                p-7
                md:p-8
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#24221D]
                    text-[#817A6D]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaUsers />
                </div>

                <div>
                  <p className="text-[10px] text-[#817A6D] uppercase tracking-[0.2em] font-bold">
                    Traditional Platforms
                  </p>

                  <h4 className="text-xl font-bold mt-1">
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
                    <span className="w-6 h-6 rounded-full bg-[#24221D] flex items-center justify-center text-xs">
                      ×
                    </span>

                    <span className="text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ScoutX */}

            <motion.div
              whileHover={{ y: -3 }}
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-gradient-to-br
                from-[#D4AF37]/10
                via-[#171612]
                to-[#11100D]
                border
                border-[#D4AF37]/25
                p-7
                md:p-8
              "
            >
              <div className="absolute top-[-100px] right-[-100px] w-56 h-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-[#F5F0E6]
                      text-[#A67C00]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaRocket />
                  </div>

                  <div>
                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.2em] font-bold">
                      ScoutX
                    </p>

                    <h4 className="text-xl font-bold mt-1">
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
                      <FaCheckCircle className="text-[#D4AF37] shrink-0 text-sm" />

                      <span className="text-sm">
                        {item}
                      </span>
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
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center max-w-3xl mx-auto">

            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold">
              The ScoutX Advantage
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Why this approach matters.
            </h3>

            <p className="text-[#8F897D] text-base md:text-lg mt-5 leading-7">
              ScoutX is designed to reduce the gap between building
              something valuable and getting it discovered by the right people.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

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
                    duration: 0.55,
                  }}
                  whileHover={{ y: -4 }}
                  className="
                    rounded-[1.5rem]
                    bg-[#171612]
                    border
                    border-[#F7F2E8]/8
                    hover:border-[#D4AF37]/25
                    p-7
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-[#F5F0E6]
                      text-[#A67C00]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon />
                  </div>

                  <h4 className="text-lg font-bold mt-5">
                    {advantage.title}
                  </h4>

                  <p className="text-[#817A6D] text-sm leading-6 mt-3">
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >

          <div
            className="
              grid
              lg:grid-cols-2
              gap-10
              items-center
              rounded-[2rem]
              bg-[#171612]
              border
              border-[#D4AF37]/15
              p-7
              md:p-10
              lg:p-12
            "
          >

            {/* LEFT */}

            <div>

              <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold">
                Core Product
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Don't just say
                <span className="text-[#D4AF37]">
                  {" "}“I can build.”
                </span>

                <br />

                Show what you built.
              </h3>

              <p className="text-[#8F897D] text-base md:text-lg leading-8 mt-6">
                ScoutX shifts the focus from claims to evidence.
                Every innovation can communicate what was built,
                how it works, who built it, and what supports its progress.
              </p>

              <div className="space-y-4 mt-8">

                {[
                  "What problem does the project address?",
                  "What has actually been built?",
                  "Which technologies were used?",
                  "What evidence supports the project?",
                  "What impact or applications are possible?",
                ].map((question) => (
                  <div
                    key={question}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-[#D4AF37] shrink-0" />

                    <span className="text-[#C6BFB2] text-sm md:text-base">
                      {question}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT — INNOVATION PROFILE */}

            <div className="relative">

              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[80px] rounded-full" />

              <div
                className="
                  relative
                  rounded-[1.75rem]
                  bg-[#0B0B09]
                  border
                  border-[#D4AF37]/20
                  p-5
                  md:p-6
                  shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                "
              >

                {/* Header */}

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[#6E685D] text-[10px] uppercase tracking-[0.2em]">
                      Innovation Profile
                    </p>

                    <h4 className="text-xl md:text-2xl font-bold mt-2">
                      HealthAssist AI
                    </h4>
                  </div>

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-[#F5F0E6]
                      text-[#A67C00]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaLightbulb />
                  </div>

                </div>

                {/* Builder */}

                <div className="mt-6 flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-[#D4AF37]/10
                      border
                      border-[#D4AF37]/20
                      flex
                      items-center
                      justify-center
                      text-[#D4AF37]
                      font-bold
                    "
                  >
                    S
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      Student Innovation Team
                    </p>

                    <p className="text-xs text-[#6E685D] mt-0.5">
                      AI • Healthcare • Full Stack
                    </p>
                  </div>

                </div>

                {/* Prototype */}

                <div
                  className="
                    mt-6
                    p-4
                    rounded-xl
                    bg-[#171612]
                    border
                    border-[#F7F2E8]/6
                  "
                >
                  <p className="text-[10px] text-[#6E685D] uppercase tracking-[0.2em]">
                    Prototype
                  </p>

                  <p className="text-sm text-[#BEB7AA] mt-2 leading-6">
                    AI-assisted healthcare information and appointment
                    support prototype.
                  </p>
                </div>

                {/* Evidence */}

                <div className="grid grid-cols-3 gap-2.5 mt-3">

                  <div className="p-3 rounded-xl bg-[#171612]">
                    <FaGithub className="text-[#D5CEC0]" />

                    <p className="text-[10px] text-[#817A6D] mt-3">
                      GitHub
                    </p>

                    <p className="text-[10px] text-[#D4AF37] mt-1">
                      Available
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#171612]">
                    <FaExternalLinkAlt className="text-[#D5CEC0]" />

                    <p className="text-[10px] text-[#817A6D] mt-3">
                      Demo
                    </p>

                    <p className="text-[10px] text-[#D4AF37] mt-1">
                      Available
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#171612]">
                    <FaTrophy className="text-[#D4AF37]" />

                    <p className="text-[10px] text-[#817A6D] mt-3">
                      Achievement
                    </p>

                    <p className="text-[10px] text-[#D4AF37] mt-1">
                      Verified
                    </p>
                  </div>

                </div>

                {/* Score */}

                <div
                  className="
                    mt-3
                    p-4
                    rounded-xl
                    bg-[#D4AF37]/5
                    border
                    border-[#D4AF37]/15
                  "
                >

                  <div className="flex justify-between items-center">

                    <span className="text-xs text-[#817A6D]">
                      Innovation Score
                    </span>

                    <span className="text-[#E7C979] font-bold">
                      87 / 100
                    </span>

                  </div>

                  <div className="h-1.5 bg-[#24221D] rounded-full mt-3 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3,
                      }}
                      className="
                        h-full
                        bg-gradient-to-r
                        from-[#AD8930]
                        via-[#D4AF37]
                        to-[#E7C979]
                        rounded-full
                      "
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
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <div className="text-center">

            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold">
              Intelligent Discovery
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Search for{" "}
              <span className="text-[#D4AF37]">
                what people have built.
              </span>
            </h3>

            <p className="text-[#817A6D] max-w-2xl mx-auto mt-5 leading-7">
              Organizations can discover innovators and projects using
              meaningful innovation signals instead of relying only on
              conventional resumes.
            </p>

          </div>

          {/* Search UI */}

          <div
            className="
              max-w-4xl
              mx-auto
              mt-10
              rounded-[1.75rem]
              bg-[#171612]
              border
              border-[#D4AF37]/15
              p-5
              md:p-7
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
                bg-[#0B0B09]
                border
                border-[#F7F2E8]/8
                rounded-xl
                px-5
                py-4
              "
            >
              <FaSearch className="text-[#D4AF37]" />

              <span className="text-[#6E685D] text-sm">
                Search innovations by technology, domain, problem...
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-5">

              {discoveryTags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-3.5
                    py-2
                    rounded-full
                    bg-[#F5F0E6]/5
                    border
                    border-[#D4AF37]/15
                    text-[#BEB7AA]
                    text-xs
                    hover:border-[#D4AF37]/40
                    hover:text-[#E7C979]
                    transition-colors
                  "
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-gradient-to-br
              from-[#D4AF37]/10
              via-[#171612]
              to-[#11100D]
              border
              border-[#D4AF37]/20
              p-8
              md:p-12
            "
          >

            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#D4AF37]/8 blur-[100px]" />

            <div className="relative text-center max-w-4xl mx-auto">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-[#F5F0E6]/5
                  border
                  border-[#D4AF37]/20
                  text-[#D4AF37]
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                "
              >
                <FaStar />
                ScoutX Differentiator
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">

                From{" "}
                <span className="text-[#777166]">
                  “Who are you?”
                </span>

                <br />

                to{" "}

                <span className="text-[#E7C979]">
                  “What have you built?”
                </span>

              </h3>

              <p className="text-[#8F897D] text-base md:text-lg leading-8 mt-6">
                ScoutX changes the discovery model from searching only
                for people and credentials to discovering the innovations,
                capabilities, evidence, and opportunities behind them.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-10">

                <div
                  className="
                    w-full
                    md:w-auto
                    px-7
                    py-4
                    rounded-2xl
                    bg-[#0B0B09]/70
                    border
                    border-[#F7F2E8]/8
                  "
                >
                  <p className="text-[10px] text-[#6E685D] uppercase tracking-[0.2em]">
                    Traditional
                  </p>

                  <p className="font-semibold mt-2">
                    Resume → Job
                  </p>
                </div>

                <FaArrowRight className="text-[#D4AF37] rotate-90 md:rotate-0" />

                <div
                  className="
                    w-full
                    md:w-auto
                    px-7
                    py-4
                    rounded-2xl
                    bg-[#D4AF37]/10
                    border
                    border-[#D4AF37]/20
                  "
                >
                  <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.2em]">
                    ScoutX
                  </p>

                  <p className="font-semibold mt-2">
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

          <div
            className="
              rounded-[2rem]
              bg-[#171612]
              border
              border-[#D4AF37]/15
              p-8
              md:p-10
              text-center
            "
          >

            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-[10px] font-bold">
              ScoutX Discovery Flow
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7 mt-8">

              {[
                ["Build", "Create innovation"],
                ["Prove", "Show evidence"],
                ["Discover", "Find relevance"],
                ["Match", "Identify opportunity"],
                ["Connect", "Create collaboration"],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="flex items-center gap-5 md:gap-7"
                >

                  <div>
                    <div
                      className={`text-lg font-semibold ${
                        index === 4
                          ? "text-[#E7C979]"
                          : "text-[#F7F2E8]"
                      }`}
                    >
                      {title}
                    </div>

                    <p className="text-xs text-[#6E685D] mt-1">
                      {description}
                    </p>
                  </div>

                  {index < 4 && (
                    <FaArrowRight className="text-[#D4AF37] hidden md:block text-xs" />
                  )}

                </div>
              ))}

            </div>

            <p className="text-[#817A6D] text-sm mt-8 max-w-2xl mx-auto leading-6">
              ScoutX turns scattered projects into structured,
              discoverable innovation and creates a path from building
              to real-world opportunity.
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
          className="text-center mt-20"
        >

          <p className="text-[#6E685D] text-sm">
            The goal is simple.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-3">
            Make valuable innovation{" "}
            <span className="text-[#D4AF37]">
              discoverable.
            </span>
          </h3>

          <motion.a
            href="#users"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex
              items-center
              gap-3
              mt-8
              px-7
              py-3.5
              rounded-xl
              bg-gradient-to-br
              from-[#E7C979]
              via-[#D4AF37]
              to-[#AD8930]
              text-[#0B0B09]
              font-bold
              text-sm
              shadow-[0_12px_35px_rgba(201,166,70,0.20)]
              hover:shadow-[0_15px_45px_rgba(201,166,70,0.30)]
              transition-all
              duration-300
            "
          >
            Explore the Ecosystem
            <FaArrowRight className="text-xs" />
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}