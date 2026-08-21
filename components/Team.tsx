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
  FaQuoteLeft,
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
    number: "01",
    icon: FaLightbulb,
    title: "Build with Purpose",
    description:
      "Technology should solve meaningful problems and create measurable value, not simply add another product to the internet.",
  },
  {
    number: "02",
    icon: FaCode,
    title: "Evidence Over Claims",
    description:
      "Real projects, prototypes, technical work, and outcomes should speak louder than credentials alone.",
  },
  {
    number: "03",
    icon: FaUsers,
    title: "Connect the Ecosystem",
    description:
      "Innovators, organizations, institutions, and opportunities become more powerful when they can discover each other.",
  },
  {
    number: "04",
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

const teamSignals = [
  {
    icon: FaBolt,
    title: "Builder mindset",
  },
  {
    icon: FaBrain,
    title: "Research driven",
  },
  {
    icon: FaCode,
    title: "Technology focused",
  },
  {
    icon: FaRocket,
    title: "Impact oriented",
  },
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
        {/* Ambient glows */}

        <div
          className="
            absolute
            -top-[220px]
            left-1/2
            -translate-x-1/2
            w-[650px]
            h-[650px]
            rounded-full
            bg-purple-600/[0.07]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            right-[-180px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-violet-600/[0.06]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            top-1/3
            left-[-250px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-fuchsia-500/[0.025]
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />

        {/* Top fade */}

        <div
          className="
            absolute
            top-0
            left-0
            right-0
            h-40
            bg-gradient-to-b
            from-[#080A12]
            to-transparent
          "
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-purple-500/[0.07]
              border
              border-purple-500/20
              text-purple-300
              text-[10px]
              md:text-xs
              font-bold
              uppercase
              tracking-[0.22em]
            "
          >
            <FaUsers className="text-[10px]" />
            The people behind ScoutX
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              mt-7
              leading-[0.98]
              tracking-[-0.04em]
            "
          >
            Small team.
            <br />

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-purple-200
                via-purple-400
                to-violet-500
              "
            >
              Big ambition.
            </span>
          </h2>

          <p
            className="
              text-slate-400
              text-base
              md:text-lg
              lg:text-xl
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
            TEAM SIGNALS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            flex
            flex-wrap
            justify-center
            gap-2.5
            md:gap-3
            mt-12
            md:mt-14
          "
        >
          {teamSignals.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  px-4
                  py-2.5
                  rounded-full
                  bg-white/[0.025]
                  border
                  border-white/[0.07]
                  hover:border-purple-500/30
                  hover:bg-purple-500/[0.05]
                  transition-all
                  duration-300
                "
              >
                <Icon
                  className="
                    text-purple-400
                    text-xs
                    group-hover:text-purple-300
                    transition-colors
                  "
                />

                <span className="text-slate-400 text-xs md:text-sm">
                  {item.title}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* =====================================================
            TEAM SECTION LABEL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mt-20 md:mt-24"
        >
          <div className="h-px flex-1 bg-white/[0.06]" />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-slate-600
              font-bold
            "
          >
            Meet the team
          </span>

          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        {/* =====================================================
            TEAM CARDS
        ====================================================== */}

        <div className="grid lg:grid-cols-3 gap-5 md:gap-6 mt-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const isFounder = index === 0;

            return (
              <motion.div
                key={member.name}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative"
              >
                {/* Gradient border */}

                <div
                  className={`
                    absolute
                    -inset-[1px]
                    rounded-[26px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    ${
                      isFounder
                        ? "bg-gradient-to-b from-purple-400/50 via-purple-500/15 to-transparent"
                        : "bg-gradient-to-b from-purple-500/30 via-transparent to-transparent"
                    }
                  `}
                />

                {/* Card */}

                <div
                  className="
                    relative
                    h-full
                    rounded-[25px]
                    bg-[#10131F]
                    border
                    border-white/[0.07]
                    group-hover:border-transparent
                    overflow-hidden
                    transition-colors
                    duration-500
                  "
                >
                  {/* Card glow */}

                  <div
                    className="
                      absolute
                      -top-28
                      -right-24
                      w-64
                      h-64
                      rounded-full
                      bg-purple-500/[0.06]
                      blur-3xl
                      group-hover:bg-purple-500/[0.13]
                      transition-all
                      duration-700
                    "
                  />

                  {/* Card top */}

                  <div className="relative p-6 md:p-7">

                    <div className="flex items-center justify-between">
                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          px-3
                          py-1.5
                          rounded-full
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          font-bold
                          ${
                            isFounder
                              ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                              : "bg-white/[0.035] text-slate-500 border border-white/[0.07]"
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
                                ? "bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                                : "bg-slate-600"
                            }
                          `}
                        />

                        {member.badge}
                      </span>

                      <Icon className="text-purple-400/40 text-sm" />
                    </div>

                    {/* Avatar */}

                    <div className="flex justify-center mt-8">
                      <div className="relative">

                        <div
                          className="
                            absolute
                            -inset-4
                            rounded-full
                            bg-purple-500/[0.07]
                            blur-2xl
                            group-hover:bg-purple-500/[0.14]
                            transition-all
                            duration-500
                          "
                        />

                        <div
                          className="
                            relative
                            w-28
                            h-28
                            md:w-32
                            md:h-32
                            rounded-full
                            bg-gradient-to-br
                            from-purple-500/20
                            via-violet-500/10
                            to-[#0B0E16]
                            border
                            border-purple-400/20
                            flex
                            items-center
                            justify-center
                            shadow-[0_0_60px_rgba(168,85,247,0.07)]
                            group-hover:border-purple-400/35
                            transition-all
                            duration-500
                          "
                        >
                          <span
                            className="
                              text-3xl
                              md:text-4xl
                              font-bold
                              tracking-tight
                              text-transparent
                              bg-clip-text
                              bg-gradient-to-r
                              from-purple-200
                              to-violet-400
                            "
                          >
                            {member.initials}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Identity */}

                    <div className="text-center mt-7">
                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          font-bold
                          tracking-tight
                        "
                      >
                        {member.name}
                      </h3>

                      <p className="text-purple-400 text-sm font-medium mt-2">
                        {member.role}
                      </p>
                    </div>

                    {/* Description */}

                    <p
                      className="
                        text-slate-500
                        text-sm
                        leading-7
                        text-center
                        mt-5
                        min-h-[98px]
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
                            bg-[#0B0E16]
                            border
                            border-white/[0.06]
                            text-slate-500
                            text-[10px]
                            font-medium
                            hover:text-purple-300
                            hover:border-purple-500/20
                            transition-all
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
                        gap-2.5
                        mt-7
                        pt-6
                        border-t
                        border-white/[0.06]
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
                          bg-[#0B0E16]
                          border
                          border-white/[0.06]
                          flex
                          items-center
                          justify-center
                          text-slate-600
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
                          bg-[#0B0E16]
                          border
                          border-white/[0.06]
                          flex
                          items-center
                          justify-center
                          text-slate-600
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
          className="mt-24 md:mt-28"
        >
          <div
            className="
              relative
              max-w-6xl
              mx-auto
              overflow-hidden
              rounded-[2rem]
              border
              border-purple-500/15
              bg-[#10131F]
            "
          >
            {/* Background glow */}

            <div
              className="
                absolute
                -top-40
                -right-32
                w-[500px]
                h-[500px]
                rounded-full
                bg-purple-500/[0.07]
                blur-[110px]
              "
            />

            <div
              className="
                absolute
                bottom-[-200px]
                left-[-150px]
                w-[400px]
                h-[400px]
                rounded-full
                bg-violet-500/[0.04]
                blur-[100px]
              "
            />

            <div
              className="
                relative
                grid
                lg:grid-cols-[1.1fr_0.9fr]
                gap-10
                lg:gap-16
                p-8
                md:p-12
                lg:p-14
              "
            >
              {/* LEFT */}

              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-purple-400
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    font-bold
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
                    leading-[1.08]
                    tracking-tight
                  "
                >
                  Great innovation should not depend on

                  <span
                    className="
                      block
                      mt-1
                      text-transparent
                      bg-clip-text
                      bg-gradient-to-r
                      from-purple-200
                      via-purple-400
                      to-violet-500
                    "
                  >
                    who happens to discover it.
                  </span>
                </h3>

                <p
                  className="
                    text-slate-400
                    text-sm
                    md:text-base
                    leading-8
                    mt-6
                    max-w-2xl
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
                    text-sm
                    md:text-base
                    leading-7
                    mt-4
                    max-w-2xl
                  "
                >
                  ScoutX is being built to create a continuous discovery layer
                  between the people building solutions and the organizations
                  that can help validate, adopt, fund, or scale them.
                </p>

                {/* Quote */}

                <div
                  className="
                    flex
                    gap-3
                    mt-7
                    pt-6
                    border-t
                    border-white/[0.06]
                  "
                >
                  <FaQuoteLeft className="text-purple-400/50 mt-1 shrink-0" />

                  <p className="text-slate-300 text-sm italic leading-6">
                    Valuable innovation deserves a path from being built to
                    being discovered.
                  </p>
                </div>
              </div>

              {/* RIGHT */}

              <div className="flex flex-col justify-center">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    font-bold
                    text-slate-600
                    mb-4
                  "
                >
                  What we are solving
                </p>

                <div className="space-y-2.5">
                  {missionPoints.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.45,
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
                        border-white/[0.06]
                        hover:border-purple-500/25
                        hover:bg-purple-500/[0.04]
                        transition-all
                        duration-300
                      "
                    >
                      <div
                        className="
                          w-10
                          h-10
                          rounded-xl
                          bg-purple-500/[0.08]
                          border
                          border-purple-500/15
                          flex
                          items-center
                          justify-center
                          text-purple-400
                          text-[10px]
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
                          text-purple-500/30
                          group-hover:text-purple-400
                          transition-colors
                          shrink-0
                        "
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <div className="mt-24 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p
              className="
                text-purple-400
                uppercase
                tracking-[0.22em]
                text-[10px]
                font-bold
              "
            >
              Our principles
            </p>

            <h3
              className="
                text-3xl
                md:text-5xl
                font-bold
                mt-4
                tracking-tight
              "
            >
              What drives the team
            </h3>

            <p className="text-slate-500 text-sm md:text-base mt-5 leading-7">
              The principles behind how we think about technology,
              innovation, and the ecosystem we are building.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-10 md:mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    bg-[#10131F]
                    border
                    border-white/[0.07]
                    hover:border-purple-500/25
                    p-6
                    transition-all
                    duration-300
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      absolute
                      top-5
                      right-5
                      text-[10px]
                      font-bold
                      tracking-widest
                      text-slate-700
                      group-hover:text-purple-500/50
                      transition-colors
                    "
                  >
                    {value.number}
                  </span>

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -top-10
                      -right-10
                      w-28
                      h-28
                      rounded-full
                      bg-purple-500/[0.05]
                      blur-2xl
                      group-hover:bg-purple-500/[0.1]
                      transition
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      w-11
                      h-11
                      rounded-xl
                      bg-purple-500/[0.08]
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
          className="text-center mt-24 md:mt-28"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-slate-500
              text-xs
              md:text-sm
            "
          >
            <FaLayerGroup className="text-purple-400" />
            More than a platform
          </div>

          <h3
            className="
              text-2xl
              md:text-4xl
              lg:text-5xl
              font-bold
              mt-4
              tracking-tight
            "
          >
            We are building a better way to

            <span
              className="
                block
                mt-1
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-purple-200
                via-purple-400
                to-violet-500
              "
            >
              discover what people can build.
            </span>
          </h3>

          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              inline-flex
              items-center
              gap-3
              mt-8
              px-7
              py-3.5
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-violet-600
              hover:from-purple-500
              hover:to-violet-500
              shadow-[0_10px_40px_rgba(147,51,234,0.18)]
              hover:shadow-[0_15px_55px_rgba(147,51,234,0.3)]
              transition-all
              duration-300
              font-semibold
              text-sm
            "
          >
            Connect With ScoutX

            <FaArrowRight
              className="
                text-xs
                group-hover:translate-x-1
                transition-transform
              "
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}