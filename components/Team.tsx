"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaBolt,
  FaBrain,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Meena Tharshini I",
    role: "Founder & Product Lead",
    badge: "Founder",
    description:
      "Driving ScoutX from problem discovery to product vision, shaping the platform, user experience, and innovation discovery model.",
    initials: "MT",
    linkedin: "#",
    github: "#",
    skills: ["Product Strategy", "Full Stack", "AI", "UI/UX"],
    icon: FaLightbulb,
  },

  {
    name: "Lithanya R",
    role: "Technology & Engineering",
    badge: "Engineering",
    description:
      "Building the technical foundation of ScoutX and developing the systems that power its core platform experience.",
    initials: "LR",
    linkedin: "#",
    github: "#",
    skills: ["Backend", "APIs", "Database", "Cloud"],
    icon: FaCode,
  },

  {
    name: "Magha Sri P",
    role: "Innovation & Research",
    badge: "Research",
    description:
      "Exploring innovation ecosystems, user needs, market opportunities, and pathways for real-world adoption.",
    initials: "MS",
    linkedin: "#",
    github: "#",
    skills: ["Research", "Innovation", "Market", "Strategy"],
    icon: FaBrain,
  },
];

const values = [
  {
    icon: FaLightbulb,
    title: "Build with Purpose",
    description:
      "Technology should solve meaningful problems and create measurable value, not simply add another product to the internet.",
  },
  {
    icon: FaCode,
    title: "Evidence Over Claims",
    description:
      "Real projects, prototypes, technical work, and outcomes should speak louder than credentials alone.",
  },
  {
    icon: FaUsers,
    title: "Connect the Ecosystem",
    description:
      "Innovators, organizations, institutions, and opportunities become more powerful when they can discover each other.",
  },
  {
    icon: FaRocket,
    title: "Move Ideas Forward",
    description:
      "We want promising ideas to progress from experimentation toward validation, collaboration, and real-world impact.",
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
      className="
        relative
        overflow-hidden
        bg-[#080A12]
        text-white
        py-24
        md:py-32
        px-6
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-[-250px]
            left-[-200px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-purple-600/[0.07]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            right-[-200px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-violet-600/[0.06]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[800px]
            h-[800px]
            rounded-full
            bg-purple-500/[0.015]
            blur-[100px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-purple-500/[0.08]
              border
              border-purple-500/20
              text-purple-300
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
            "
          >
            <FaUsers />
            The Team Behind ScoutX
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              mt-6
              leading-[1.05]
              tracking-tight
            "
          >
            Small team.
            <br />

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-purple-300
                via-purple-500
                to-violet-500
              "
            >
              Big ambition.
            </span>
          </h2>

          <p
            className="
              text-slate-400
              text-lg
              md:text-xl
              leading-8
              mt-7
              max-w-3xl
              mx-auto
            "
          >
            We are building ScoutX around one belief:
            <span className="text-slate-200 font-medium">
              {" "}valuable innovation should be easier to discover.
            </span>
          </p>
        </motion.div>

        {/* =====================================================
            TEAM INTRO STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            max-w-5xl
            mx-auto
            mt-14
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {[
            { icon: FaBolt, text: "Builder mindset" },
            { icon: FaBrain, text: "Research driven" },
            { icon: FaCode, text: "Technology focused" },
            { icon: FaRocket, text: "Impact oriented" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-full
                  bg-white/[0.025]
                  border
                  border-slate-800
                  text-slate-400
                  text-sm
                  hover:border-purple-500/30
                  hover:text-purple-300
                  transition
                "
              >
                <Icon className="text-purple-400 text-xs" />
                {item.text}
              </div>
            );
          })}
        </motion.div>

        {/* =====================================================
            TEAM CARDS
        ====================================================== */}

        <div className="grid lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">

          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const isFounder = index === 0;

            return (
              <motion.div
                key={member.name}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-[1px]
                  ${
                    isFounder
                      ? "bg-gradient-to-b from-purple-500/40 via-purple-500/10 to-transparent"
                      : "bg-slate-800"
                  }
                `}
              >
                {/* Card */}

                <div
                  className="
                    relative
                    h-full
                    rounded-[23px]
                    bg-[#111522]
                    p-7
                    overflow-hidden
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -top-24
                      -right-24
                      w-48
                      h-48
                      rounded-full
                      bg-purple-500/[0.08]
                      blur-3xl
                      group-hover:bg-purple-500/[0.14]
                      transition
                    "
                  />

                  {/* Founder Badge */}

                  <div className="relative flex items-center justify-between">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1.5
                        rounded-full
                        text-[10px]
                        uppercase
                        tracking-widest
                        font-semibold
                        ${
                          isFounder
                            ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            : "bg-slate-800 text-slate-400 border border-slate-700"
                        }
                      `}
                    >
                      <span
                        className={`
                          w-1.5
                          h-1.5
                          rounded-full
                          ${
                            isFounder
                              ? "bg-purple-400"
                              : "bg-slate-500"
                          }
                        `}
                      />
                      {member.badge}
                    </span>

                    <Icon className="text-purple-400/50" />
                  </div>

                  {/* Avatar */}

                  <div className="flex justify-center mt-8">
                    <div className="relative">

                      <div
                        className="
                          absolute
                          inset-[-10px]
                          rounded-full
                          bg-purple-500/[0.08]
                          blur-xl
                          group-hover:bg-purple-500/[0.16]
                          transition
                        "
                      />

                      <div
                        className="
                          relative
                          w-28
                          h-28
                          rounded-full
                          bg-gradient-to-br
                          from-purple-500/20
                          via-violet-500/10
                          to-slate-900
                          border
                          border-purple-500/25
                          flex
                          items-center
                          justify-center
                          shadow-[0_0_50px_rgba(168,85,247,0.08)]
                        "
                      >
                        <span
                          className="
                            text-3xl
                            font-bold
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-purple-300
                            to-violet-400
                          "
                        >
                          {member.initials}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Name */}

                  <div className="text-center mt-7 relative">
                    <h3 className="text-xl font-bold">
                      {member.name}
                    </h3>

                    <p className="text-purple-400 text-sm font-medium mt-2">
                      {member.role}
                    </p>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      relative
                      text-slate-500
                      text-sm
                      leading-7
                      text-center
                      mt-5
                    "
                  >
                    {member.description}
                  </p>

                  {/* Skills */}

                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3
                          py-1.5
                          rounded-lg
                          bg-slate-900
                          border
                          border-slate-800
                          text-slate-400
                          text-[11px]
                          hover:text-purple-300
                          hover:border-purple-500/20
                          transition
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social */}

                  <div
                    className="
                      flex
                      justify-center
                      gap-3
                      mt-7
                      pt-6
                      border-t
                      border-slate-800
                    "
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-slate-900
                        border
                        border-slate-800
                        flex
                        items-center
                        justify-center
                        text-slate-500
                        hover:text-white
                        hover:bg-purple-600
                        hover:border-purple-500
                        transition-all
                      "
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-slate-900
                        border
                        border-slate-800
                        flex
                        items-center
                        justify-center
                        text-slate-500
                        hover:text-white
                        hover:bg-purple-600
                        hover:border-purple-500
                        transition-all
                      "
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            MISSION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div
            className="
              relative
              overflow-hidden
              max-w-6xl
              mx-auto
              rounded-[2rem]
              border
              border-purple-500/15
              bg-gradient-to-br
              from-purple-500/[0.08]
              via-[#111522]
              to-[#0B0E16]
              p-8
              md:p-12
            "
          >
            {/* Decorative glow */}

            <div
              className="
                absolute
                top-[-150px]
                right-[-100px]
                w-80
                h-80
                rounded-full
                bg-purple-500/[0.08]
                blur-3xl
              "
            />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}

              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-purple-400
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    font-semibold
                  "
                >
                  <FaStar />
                  Why ScoutX exists
                </div>

                <h3
                  className="
                    text-3xl
                    md:text-5xl
                    font-bold
                    mt-5
                    leading-tight
                  "
                >
                  Great innovation should not depend on
                  <span
                    className="
                      block
                      text-transparent
                      bg-clip-text
                      bg-gradient-to-r
                      from-purple-300
                      to-violet-500
                    "
                  >
                    who happens to discover it.
                  </span>
                </h3>

                <p
                  className="
                    text-slate-400
                    leading-8
                    mt-6
                  "
                >
                  Students, independent builders, researchers, and early-stage
                  teams create valuable solutions every day. But many of those
                  projects lose visibility once a competition, hackathon, or
                  academic event ends.
                </p>

                <p
                  className="
                    text-slate-500
                    leading-7
                    mt-4
                  "
                >
                  ScoutX is being built to create a continuous discovery layer
                  between the people building solutions and the organizations
                  that can help validate, adopt, fund, or scale them.
                </p>
              </div>

              {/* Right */}

              <div className="space-y-3">
                {missionPoints.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-2xl
                      bg-[#0B0E16]/80
                      border
                      border-slate-800
                      hover:border-purple-500/25
                      hover:bg-purple-500/[0.04]
                      transition
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-purple-500/10
                        border
                        border-purple-500/15
                        flex
                        items-center
                        justify-center
                        text-purple-400
                        text-sm
                        font-bold
                        shrink-0
                      "
                    >
                      0{index + 1}
                    </div>

                    <span className="text-slate-300 text-sm font-medium">
                      {item}
                    </span>

                    <FaCheckCircle
                      className="
                        ml-auto
                        text-purple-500/40
                        group-hover:text-purple-400
                        transition
                      "
                    />
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <div className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p
              className="
                text-purple-400
                uppercase
                tracking-[0.2em]
                text-xs
                font-semibold
              "
            >
              Our Principles
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              What drives the team
            </h3>

            <p className="text-slate-500 mt-5 leading-7">
              The principles behind how we think about technology,
              innovation, and the ecosystem we are building.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-[#111522]
                    border
                    border-slate-800
                    hover:border-purple-500/25
                    rounded-2xl
                    p-6
                    transition-all
                  "
                >
                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-24
                      h-24
                      rounded-full
                      bg-purple-500/[0.05]
                      blur-2xl
                      group-hover:bg-purple-500/[0.1]
                      transition
                    "
                  />

                  <div
                    className="
                      relative
                      w-12
                      h-12
                      rounded-xl
                      bg-purple-500/10
                      border
                      border-purple-500/10
                      text-purple-400
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon />
                  </div>

                  <h4 className="relative font-bold text-lg mt-5">
                    {value.title}
                  </h4>

                  <p
                    className="
                      relative
                      text-slate-500
                      text-sm
                      leading-6
                      mt-3
                    "
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-24"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-slate-500
              text-sm
            "
          >
            <FaLayerGroup className="text-purple-400" />
            More than a platform
          </div>

          <h3
            className="
              text-2xl
              md:text-4xl
              font-bold
              mt-4
            "
          >
            We are building a better way to
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-purple-300
                to-violet-500
              "
            >
              {" "}discover what people can build.
            </span>
          </h3>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-3
              mt-8
              px-7
              py-3.5
              rounded-xl
              bg-purple-600
              hover:bg-purple-500
              shadow-[0_10px_40px_rgba(147,51,234,0.2)]
              hover:shadow-[0_10px_50px_rgba(147,51,234,0.35)]
              transition-all
              font-medium
            "
          >
            Connect With ScoutX

            <FaArrowRight
              className="
                group-hover:translate-x-1
                transition-transform
              "
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}