"use client";

import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBuilding,
  FaTrophy,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaSearch,
  FaRocket,
  FaUniversity,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface UserGroup {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const userGroups: UserGroup[] = [
  {
    icon: FaUserGraduate,
    title: "Innovators",
    subtitle: "Students • Developers • Researchers",
    description:
      "Turn projects, prototypes, and technical work into a discoverable innovation profile.",
    benefits: [
      "Create an Innovation Passport",
      "Showcase projects with evidence",
      "Build a visible innovation track record",
      "Get discovered for opportunities",
    ],
  },
  {
    icon: FaBuilding,
    title: "Organizations",
    subtitle: "Companies • Startups • Product Teams",
    description:
      "Discover emerging talent, working prototypes, and technical capabilities based on what people actually build.",
    benefits: [
      "Post real-world problems",
      "Discover relevant innovations",
      "Evaluate projects and evidence",
      "Connect directly with builders",
    ],
  },
  {
    icon: FaTrophy,
    title: "Innovation Ecosystem",
    subtitle: "Colleges • Hackathons • Incubators",
    description:
      "Keep promising innovations visible beyond competitions, programs, and academic activities.",
    benefits: [
      "Preserve projects beyond events",
      "Track emerging innovations",
      "Connect projects with industry",
      "Create incubation pathways",
    ],
  },
];

const marketSegments = [
  {
    icon: FaUserGraduate,
    title: "Students & Developers",
    text: "Visibility, recognition, collaboration, and opportunities.",
  },
  {
    icon: FaBuilding,
    title: "Companies & Startups",
    text: "Emerging talent, technologies, prototypes, and solutions.",
  },
  {
    icon: FaUniversity,
    title: "Colleges & Innovation Cells",
    text: "Support student innovation and preserve project outcomes.",
  },
  {
    icon: FaTrophy,
    title: "Hackathons & Incubators",
    text: "Give promising prototypes visibility beyond the event.",
  },
];

export default function Users() {
  return (
    <section
      id="users"
      aria-labelledby="users-heading"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-24 text-[#F7F2E8] md:py-32"
    >
      {/* =====================================================
          PREMIUM DARK GOLD BACKGROUND
      ====================================================== */}

      {/* Top-left gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.07] blur-[120px]"
      />

      {/* Right gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.05] blur-[120px]"
      />

      {/* Bottom glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.03] blur-[140px]"
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            Who is ScoutX for?
          </p>

          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <h2
            id="users-heading"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#F7F2E8] sm:text-5xl md:text-6xl"
          >
            One platform.
            <span className="block bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              Three sides of innovation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            ScoutX connects the people who{" "}
            <span className="text-[#F7F2E8]">build solutions</span>, the
            organizations that{" "}
            <span className="text-[#F7F2E8]">need solutions</span>, and the
            ecosystem that{" "}
            <span className="text-[#E7C979]">helps innovation grow.</span>
          </p>
        </motion.header>

        {/* =====================================================
            USER GROUPS
        ====================================================== */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {userGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                  p-7
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
                    blur-[90px]
                    transition-all
                    duration-500
                    group-hover:bg-[#D4AF37]/[0.12]
                  "
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#D4AF37]/15
                      bg-[#D4AF37]/[0.08]
                      text-xl
                      text-[#E7C979]
                      transition-all
                      duration-300
                      group-hover:border-[#D4AF37]/30
                      group-hover:bg-[#D4AF37]/[0.12]
                    "
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-bold text-[#F7F2E8]">
                    {group.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-[#D4AF37]">
                    {group.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-7 text-[#A9A293]">
                    {group.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-[#D4AF37]/[0.08]" />

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F887B]">
                    What they get
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {group.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-xs text-[#D4AF37]" />

                        <span className="text-sm leading-6 text-[#A9A293]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className="mt-7 h-px w-0 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            DISCOVERY LAYER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              The Discovery Layer
            </p>

            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <h3 className="mt-5 text-3xl font-bold text-[#F7F2E8] md:text-5xl">
              Innovation already exists.
              <span className="block bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
                Discovery is the missing link.
              </span>
            </h3>

            <p className="mt-5 text-base leading-8 text-[#A9A293]">
              Great projects can remain hidden inside college folders,
              repositories, hackathons, portfolios, and personal networks.
              ScoutX makes innovation easier to discover and connect.
            </p>
          </div>

          {/* Flow */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            <FlowCard
              icon={FaLightbulb}
              label="Input"
              title="Innovation"
              text="Ideas, projects, prototypes, and technical work."
            />

            <FlowCard
              icon={FaSearch}
              label="Discovery Layer"
              title="ScoutX"
              text="Structures and makes promising innovation discoverable."
              featured
            />

            <FlowCard
              icon={FaRocket}
              label="Outcome"
              title="Opportunity"
              text="Collaboration, pilots, internships, investment, and incubation."
            />
          </div>
        </motion.div>

        {/* =====================================================
            ECOSYSTEM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-24
            overflow-hidden
            rounded-3xl
            border
            border-[#D4AF37]/10
            bg-[#11100D]
            p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            md:p-12
          "
        >
          {/* Glow */}
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
              bg-[#D4AF37]/[0.05]
              blur-[100px]
            "
          />

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              The ScoutX Ecosystem
            </p>

            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <h3 className="mt-5 text-3xl font-bold text-[#F7F2E8] md:text-4xl">
              Different goals.
              <span className="text-[#D4AF37]"> One innovation loop.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#8F887B]">
              Builders create. ScoutX makes their work discoverable.
              Organizations find and connect with relevant solutions.
            </p>
          </div>

          {/* Ecosystem flow */}
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: FaLightbulb,
                title: "Innovator",
                text: "Builds and documents a solution.",
              },
              {
                icon: FaSearch,
                title: "ScoutX",
                text: "Makes innovation structured and discoverable.",
              },
              {
                icon: FaBuilding,
                title: "Organization",
                text: "Finds and connects with relevant solutions.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative text-center"
                >
                  <div
                    className="
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#D4AF37]/15
                      bg-[#D4AF37]/[0.08]
                      text-xl
                      text-[#E7C979]
                    "
                  >
                    <Icon />
                  </div>

                  <h4 className="mt-5 font-bold text-[#F7F2E8]">
                    {item.title}
                  </h4>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#8F887B]">
                    {item.text}
                  </p>

                  {index < 2 && (
                    <FaArrowRight
                      className="
                        absolute
                        -right-4
                        top-8
                        hidden
                        text-[#D4AF37]/40
                        md:block
                      "
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Ecosystem tags */}
          <div
            className="
              mx-auto
              mt-12
              flex
              w-fit
              flex-wrap
              justify-center
              gap-3
              rounded-2xl
              border
              border-[#D4AF37]/[0.08]
              bg-[#0B0B09]
              px-5
              py-3
              text-xs
              text-[#8F887B]
            "
          >
            <span>Hackathons</span>
            <span className="text-[#D4AF37]/40">•</span>
            <span>Colleges</span>
            <span className="text-[#D4AF37]/40">•</span>
            <span>Incubators</span>
            <span className="text-[#D4AF37]/40">•</span>
            <span>Accelerators</span>
          </div>
        </motion.div>

        {/* =====================================================
            TARGET MARKET
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Initial Target Market
            </p>

            <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <h3 className="mt-5 text-3xl font-bold text-[#F7F2E8] md:text-5xl">
              Start where innovation is
              <span className="block bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
                already happening.
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-[#A9A293]">
              ScoutX can initially focus on the student and early-stage
              innovation ecosystem across colleges, hackathons, clubs,
              internships, and innovation programs.
            </p>

            {/* Highlight */}
            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#D4AF37]/20
                bg-[#D4AF37]/[0.06]
                px-5
                py-3
                text-sm
                text-[#E7C979]
              "
            >
              <FaRocket />
              Build the innovation database first
            </div>
          </div>

          {/* Market segments */}
          <div className="space-y-3">
            {marketSegments.map((segment, index) => {
              const Icon = segment.icon;

              return (
                <motion.div
                  key={segment.title}
                  whileHover={{ x: 5 }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-[#D4AF37]/[0.08]
                    bg-[#11100D]
                    p-5
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/25
                    hover:bg-[#15130F]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#D4AF37]/10
                      bg-[#D4AF37]/[0.07]
                      text-[#E7C979]
                    "
                  >
                    <Icon />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-[#D4AF37]/40">
                        0{index + 1}
                      </span>

                      <h4 className="font-semibold text-[#F7F2E8]">
                        {segment.title}
                      </h4>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-[#8F887B]">
                      {segment.text}
                    </p>
                  </div>

                  <FaArrowRight
                    className="
                      ml-auto
                      hidden
                      text-xs
                      text-[#D4AF37]/20
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:text-[#D4AF37]
                      sm:block
                    "
                  />
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
          className="mt-24 text-center"
        >
          <p className="text-sm text-[#8F887B]">
            Not another professional network.
          </p>

          <h3 className="mt-4 text-3xl font-bold text-[#F7F2E8] md:text-5xl">
            A place where{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              innovation can actually be found.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8F887B]">
            ScoutX brings builders, organizations, and the innovation
            ecosystem together through one discoverable layer.
          </p>

          <a
            href="#features"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#C9A227]
              to-[#A67C00]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-[#0B0B09]
              shadow-[0_15px_40px_rgba(212,175,55,0.16)]
              transition-all
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)]
            "
          >
            Explore ScoutX

            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE FLOW CARD
========================================================= */

function FlowCard({
  icon: Icon,
  label,
  title,
  text,
  featured = false,
}: {
  icon: IconType;
  label: string;
  title: string;
  text: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`
        rounded-3xl
        border
        p-7
        text-center
        transition-all
        duration-300
        ${
          featured
            ? "border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] shadow-[0_20px_70px_rgba(212,175,55,0.08)]"
            : "border-[#D4AF37]/10 bg-[#11100D] shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-[#D4AF37]/15
          bg-[#D4AF37]/[0.08]
          text-xl
          text-[#E7C979]
        "
      >
        <Icon />
      </div>

      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
        {label}
      </p>

      <h4 className="mt-2 text-xl font-bold text-[#F7F2E8]">{title}</h4>

      <p className="mt-3 text-sm leading-6 text-[#8F887B]">{text}</p>
    </motion.div>
  );
}