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
    description:
      "Technology should solve meaningful problems and create real value.",
  },
  {
    icon: FaCode,
    title: "Evidence Over Claims",
    description:
      "Real projects and outcomes should speak louder than credentials alone.",
  },
  {
    icon: FaUsers,
    title: "Connect the Ecosystem",
    description:
      "Better discovery connects innovators, organizations, and opportunities.",
  },
  {
    icon: FaRocket,
    title: "Move Ideas Forward",
    description:
      "Help promising ideas progress toward validation and real-world impact.",
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
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* =====================================================
          PREMIUM DARK GOLD BACKGROUND
      ====================================================== */}

      {/* Top gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.07] blur-[130px]"
      />

      {/* Bottom gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.05] blur-[140px]"
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.02] blur-[140px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="bg-grid-fade pointer-events-none absolute inset-0 opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            The people behind ScoutX
          </p>

          <div className="mx-auto mb-5 mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#F7F2E8] sm:text-5xl md:text-6xl">
            Small team.
            <span className="block bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Big ambition.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            We are building ScoutX around one belief:
            <span className="text-[#F7F2E8]">
              {" "}
              valuable innovation should be easier to discover.
            </span>
          </p>
        </motion.header>

        {/* =====================================================
            TEAM MEMBERS
        ====================================================== */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#D4AF37]/10
                  bg-[#11100D]
                  p-6
                  shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/25
                "
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#D4AF37]/[0.05]
                    blur-[80px]
                    transition-all
                    duration-500
                    group-hover:bg-[#D4AF37]/[0.12]
                  "
                />

                <div className="relative z-10">
                  {/* Badge + icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`
                        rounded-full
                        border
                        px-3
                        py-1
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        ${
                          founder
                            ? "border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#E7C979]"
                            : "border-[#D4AF37]/10 bg-[#D4AF37]/[0.04] text-[#8F887B]"
                        }
                      `}
                    >
                      {member.badge}
                    </span>

                    <Icon className="text-sm text-[#D4AF37]/50" />
                  </div>

                  {/* Avatar */}
                  <div className="mt-7 flex justify-center">
                    <div
                      className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/20
                        bg-gradient-to-br
                        from-[#D4AF37]/20
                        via-[#D4AF37]/[0.06]
                        to-[#0B0B09]
                        shadow-[0_0_45px_rgba(212,175,55,0.08)]
                        transition-all
                        duration-500
                        group-hover:border-[#D4AF37]/40
                        group-hover:shadow-[0_0_55px_rgba(212,175,55,0.12)]
                      "
                    >
                      <span className="bg-gradient-to-r from-[#F7E6A8] to-[#D4AF37] bg-clip-text text-3xl font-bold text-transparent">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold tracking-tight text-[#F7F2E8]">
                      {member.name}
                    </h3>

                    <p className="mt-1.5 text-sm font-medium text-[#D4AF37]">
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
                        className="
                          rounded-lg
                          border
                          border-[#D4AF37]/[0.08]
                          bg-[#0B0B09]
                          px-2.5
                          py-1.5
                          text-[10px]
                          text-[#8F887B]
                          transition
                          hover:border-[#D4AF37]/25
                          hover:text-[#E7C979]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="mt-6 flex justify-center gap-2 border-t border-[#D4AF37]/[0.08] pt-5">
                    <a
                      href="#"
                      aria-label={`${member.name} LinkedIn`}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#D4AF37]/[0.08]
                        bg-[#0B0B09]
                        text-[#8F887B]
                        transition
                        hover:border-[#D4AF37]
                        hover:bg-[#D4AF37]
                        hover:text-[#0B0B09]
                      "
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} GitHub`}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#D4AF37]/[0.08]
                        bg-[#0B0B09]
                        text-[#8F887B]
                        transition
                        hover:border-[#D4AF37]
                        hover:bg-[#D4AF37]
                        hover:text-[#0B0B09]
                      "
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            MISSION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#D4AF37]/10
              bg-[#11100D]
              p-7
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              md:p-10
            "
          >
            {/* Mission glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-72
                w-72
                rounded-full
                bg-[#D4AF37]/[0.08]
                blur-[100px]
              "
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  <FaStar />
                  Why ScoutX exists
                </div>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-[#F7F2E8] md:text-4xl">
                  Great innovation should not depend on
                  <span className="block bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
                    who happens to discover it.
                  </span>
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#A9A293]">
                  Valuable projects are created every day, but many lose
                  visibility after hackathons, competitions, and academic
                  events. ScoutX creates a continuous discovery layer between
                  builders and organizations.
                </p>
              </div>

              {/* Right */}
              <div className="space-y-2.5">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F887B]">
                  What we are solving
                </p>

                {missionPoints.map((point, index) => (
                  <div
                    key={point}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[#D4AF37]/[0.08]
                      bg-[#0B0B09]
                      p-3.5
                      transition
                      hover:border-[#D4AF37]/25
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#D4AF37]/10
                        bg-[#D4AF37]/[0.08]
                        text-[10px]
                        font-bold
                        text-[#D4AF37]
                      "
                    >
                      0{index + 1}
                    </span>

                    <span className="text-sm text-[#A9A293]">{point}</span>

                    <FaCheckCircle className="ml-auto shrink-0 text-xs text-[#D4AF37]/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our principles
          </p>

          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <h3 className="mt-4 text-3xl font-bold text-[#F7F2E8] md:text-4xl">
            What drives the team
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  whileHover={{ y: -4 }}
                  className="
                    rounded-2xl
                    border
                    border-[#D4AF37]/10
                    bg-[#11100D]
                    p-5
                    text-left
                    shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                    transition
                    hover:border-[#D4AF37]/25
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#D4AF37]/15
                      bg-[#D4AF37]/[0.08]
                      text-[#E7C979]
                    "
                  >
                    <Icon />
                  </div>

                  <h4 className="mt-4 font-bold text-[#F7F2E8]">
                    {value.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
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
          className="mt-16 text-center"
        >
          <p className="text-sm text-[#8F887B]">
            Building a better way to discover innovation.
          </p>

          <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-[#F7F2E8] md:text-4xl">
            Discover what people can{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              build.
            </span>
          </h3>

          <a
            href="#contact"
            className="
              group
              mt-6
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#C9A227]
              to-[#A67C00]
              px-6
              py-3
              text-sm
              font-semibold
              text-[#0B0B09]
              shadow-[0_12px_35px_rgba(212,175,55,0.16)]
              transition
              hover:-translate-y-0.5
              hover:shadow-[0_16px_40px_rgba(212,175,55,0.25)]
            "
          >
            Connect With ScoutX

            <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}