"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaCheckCircle,
  FaLightbulb,
  FaSearch,
  FaTools,
  FaUser,
} from "react-icons/fa";

const innovatorFlow = [
  {
    icon: FaLightbulb,
    title: "Share Your Innovation",
    text: "Post an idea, prototype, research project, or portfolio — even if you never had access to a hackathon or innovation program.",
  },
  {
    icon: FaBrain,
    title: "Get AI Analysis",
    text: "ScoutX analyzes the technology, problem addressed, related work, feasibility, evidence, and improvement opportunities.",
  },
  {
    icon: FaSearch,
    title: "Become Discoverable",
    text: "Your innovation becomes structured and searchable by organizations looking for relevant solutions.",
  },
];

const organizationFlow = [
  {
    icon: FaSearch,
    title: "Describe the Problem",
    text: "Search using a real problem, requirement, technology, domain, or capability you need.",
  },
  {
    icon: FaBrain,
    title: "AI Finds the Closest Matches",
    text: "ScoutX compares the problem with innovations and ranks them by relevance, explaining why each result matches.",
  },
  {
    icon: FaBuilding,
    title: "Connect With the Creator",
    text: "Explore the project, evidence, and AI insights — then contact the actual person who built it.",
  },
];

const aiSignals = [
  "Problem fit",
  "Technology match",
  "Related work",
  "Feasibility",
  "Evidence",
  "Improvement opportunities",
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.055] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-[#D4AF37]/[0.035] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            The ScoutX Solution
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Make hidden innovation{" "}
            <span className="text-gradient">
              discoverable.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#A9A293] md:text-lg">
            ScoutX gives people a place to make their ideas visible and gives
            organizations an AI-powered way to find the innovations that are
            closest to the problems they need to solve.
          </p>
        </motion.div>

        {/* =========================================================
            THE CORE TRANSFORMATION
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 max-w-6xl"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-10">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">

              {/* BEFORE */}
              <div className="text-center md:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#817A6E]">
                  Today
                </p>

                <h3 className="mt-3 text-xl font-bold md:text-2xl">
                  Good ideas remain invisible.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#8F887B]">
                  A student, developer, researcher, or independent builder
                  may have a valuable solution but never gets discovered
                  because they did not enter the right hackathon, network, or
                  institution.
                </p>
              </div>

              {/* ARROW */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaArrowRight className="text-sm" />
              </div>

              {/* AFTER */}
              <div className="text-center md:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  With ScoutX
                </p>

                <h3 className="mt-3 text-xl font-bold md:text-2xl">
                  Ideas become discoverable.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#8F887B]">
                  The innovation is structured, analyzed, indexed, and matched
                  against real organizational problems — regardless of where
                  or how it was created.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* =========================================================
            TWO SIDES
        ========================================================= */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* =======================================================
              INNOVATOR
          ======================================================= */}
          <FlowCard
            label="For Innovators"
            title="Your idea shouldn't need a hackathon to be discovered."
            description="Post what you have built. ScoutX helps turn it into a structured innovation profile that organizations can actually discover."
            flow={innovatorFlow}
          />

          {/* =======================================================
              ORGANIZATION
          ======================================================= */}
          <FlowCard
            label="For Organizations"
            title="Find the closest existing solution before building from scratch."
            description="Describe the problem you are trying to solve. ScoutX searches across innovations and identifies the projects that are most relevant."
            flow={organizationFlow}
          />

        </div>

        {/* =========================================================
            AI MATCHING — THIS SHOULD BE THE HERO OF THE SOLUTION
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09]"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <div className="p-7 md:p-10">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaBrain />
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                The Intelligence Layer
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
                ScoutX doesn't just{" "}
                <span className="text-gradient">
                  search keywords.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#A9A293] md:text-base">
                When an organization describes a problem, ScoutX analyzes the
                problem against the innovation database and estimates how
                closely each project fits the actual requirement.
              </p>

              <div className="mt-6 rounded-2xl border border-[#D4AF37]/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <FaSearch className="text-[#D4AF37]" />

                  <span className="text-sm font-medium text-[#C9C1B3]">
                    Company problem
                  </span>
                </div>

                <div className="my-4 h-px bg-[#D4AF37]/10" />

                <div className="flex items-center gap-3">
                  <FaBrain className="text-[#D4AF37]" />

                  <span className="text-sm font-medium text-[#C9C1B3]">
                    AI relevance analysis
                  </span>
                </div>

                <div className="my-4 h-px bg-[#D4AF37]/10" />

                <div className="flex items-center gap-3">
                  <FaLightbulb className="text-[#D4AF37]" />

                  <span className="text-sm font-medium text-[#C9C1B3]">
                    Closest innovations
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="border-t border-[#D4AF37]/10 bg-[#0D0C0A] p-7 md:p-10 lg:border-l lg:border-t-0">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                What AI looks at
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {aiSignals.map((signal, index) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-[#11100D] px-4 py-3"
                  >
                    <FaCheckCircle className="shrink-0 text-xs text-[#D4AF37]" />

                    <span className="text-sm text-[#C9C1B3]">
                      {signal}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.06] p-5">

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  AI-assisted insight
                </p>

                <p className="mt-3 text-sm leading-6 text-[#A9A293]">
                  Instead of simply returning a list of projects, ScoutX can
                  explain why an innovation appears relevant, what related work
                  already exists, what evidence supports it, and where the
                  project may need improvement.
                </p>

              </div>
            </div>

          </div>
        </motion.div>

        {/* =========================================================
            PROBLEM → MATCH → CONNECTION
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Connection
          </p>

          <h3 className="mt-3 text-3xl font-bold md:text-5xl">
            Problem meets{" "}
            <span className="text-gradient">
              innovation.
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX is not the final decision-maker. It creates the discovery
            layer that helps the right organization find the right creator,
            understand the work, and decide what happens next.
          </p>
        </motion.div>

        {/* MATCH FLOW */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-center gap-3 md:flex-row">

          <ConnectionCard
            icon={FaBuilding}
            label="Organization"
            text="Real problem"
          />

          <FaArrowRight className="rotate-90 text-[#D4AF37]/40 md:rotate-0" />

          <ConnectionCard
            icon={FaBrain}
            label="ScoutX AI"
            text="Find & explain relevance"
            highlight
          />

          <FaArrowRight className="rotate-90 text-[#D4AF37]/40 md:rotate-0" />

          <ConnectionCard
            icon={FaLightbulb}
            label="Innovation"
            text="Closest existing solution"
          />

          <FaArrowRight className="rotate-90 text-[#D4AF37]/40 md:rotate-0" />

          <ConnectionCard
            icon={FaUser}
            label="Creator"
            text="Direct collaboration"
          />

        </div>

        {/* =========================================================
            IF NOTHING EXISTS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 text-center md:p-10"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
            <FaTools />
          </div>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            And when the solution doesn't exist
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Don't stop at discovery.
            <br />
            <span className="text-gradient">
              Create the opportunity.
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A9A293]">
            If ScoutX cannot surface a sufficiently relevant existing
            innovation, the organization can post the problem itself. That
            problem becomes an opportunity for innovators to build toward a
            real-world need.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <FlowPill text="Existing Innovation" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="No Strong Match" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Post Problem" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="New Solutions" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ===============================================================
   FLOW CARD
================================================================ */

function FlowCard({
  label,
  title,
  description,
  flow,
}: {
  label: string;
  title: string;
  description: string;
  flow: readonly {
    icon: React.ElementType;
    title: string;
    text: string;
  }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition hover:border-[#D4AF37]/25 md:p-8"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
        {label}
      </p>

      <h3 className="mt-3 text-xl font-bold leading-tight md:text-2xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#A9A293]">
        {description}
      </p>

      <div className="mt-7 space-y-3">
        {flow.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className="flex gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
              <Icon className="text-sm" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold text-[#D4AF37]">
                  0{index + 1}
                </span>

                <h4 className="text-sm font-semibold">
                  {title}
                </h4>
              </div>

              <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ===============================================================
   CONNECTION CARD
================================================================ */

function ConnectionCard({
  icon: Icon,
  label,
  text,
  highlight = false,
}: {
  icon: React.ElementType;
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`w-full rounded-2xl border p-5 text-center md:w-48 ${
        highlight
          ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.08]"
          : "border-[#D4AF37]/10 bg-[#11100D]"
      }`}
    >
      <div
        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${
          highlight
            ? "bg-[#D4AF37]/15 text-[#E7C979]"
            : "bg-[#D4AF37]/10 text-[#D4AF37]"
        }`}
      >
        <Icon className="text-sm" />
      </div>

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
        {label}
      </p>

      <p className="mt-1 text-xs text-[#A9A293]">
        {text}
      </p>
    </div>
  );
}

/* ===============================================================
   PILL
================================================================ */

function FlowPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-3 py-1.5 text-[#A9A293]">
      {text}
    </span>
  );
}