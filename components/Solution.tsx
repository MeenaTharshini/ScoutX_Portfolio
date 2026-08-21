"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaComments,
  FaLightbulb,
  FaSearch,
  FaTools,
} from "react-icons/fa";

const innovatorFlow = [
  {
    icon: FaLightbulb,
    title: "Post",
    text: "Share an idea, project, or prototype with evidence.",
  },
  {
    icon: FaBrain,
    title: "Get AI Insights",
    text: "See innovation, feasibility, and related-work signals.",
  },
  {
    icon: FaSearch,
    title: "Get Discovered",
    text: "Become visible to organizations looking for relevant innovation.",
  },
];

const organizationFlow = [
  {
    icon: FaSearch,
    title: "Discover",
    text: "Search by technology, domain, and requirements.",
  },
  {
    icon: FaBuilding,
    title: "Select",
    text: "Compare relevant projects, evidence, and builders.",
  },
  {
    icon: FaTools,
    title: "Post a Problem",
    text: "Can't find the right solution? Let innovators build it.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-16 text-[#F7F2E8] md:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.05] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Solution
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            From ideas to{" "}
            <span className="text-gradient">
              discoverable innovation.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#A9A293] md:text-base">
            ScoutX connects what innovators build with organizations looking
            for relevant technology, ideas, and solutions.
          </p>
        </motion.div>

        {/* TWO SIDES */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">

          {/* INNOVATOR */}
          <FlowCard
            label="For Innovators"
            title="Make what you build discoverable."
            description="Turn your ideas, projects, and prototypes into structured innovation profiles."
            flow={innovatorFlow}
          />

          {/* ORGANIZATION */}
          <FlowCard
            label="For Organizations"
            title="Find solutions to real problems."
            description="Discover existing innovation or post a problem when the right solution does not yet exist."
            flow={organizationFlow}
          />

        </div>

        {/* CORE IDEA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Loop
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Discover.{" "}
            <span className="text-gradient">
              Build. Connect.
            </span>
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#A9A293]">
            Organizations discover existing innovation. If the right solution
            isn't available, they can post the problem — giving innovators a
            reason to build toward a real need.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <FlowPill text="Innovation" />
            <FaArrowRight className="text-[#D4AF37]/50" />
            <FlowPill text="Discovery" />
            <FaArrowRight className="text-[#D4AF37]/50" />
            <FlowPill text="Real Problems" />
            <FaArrowRight className="text-[#D4AF37]/50" />
            <FlowPill text="New Solutions" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

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
      className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition hover:border-[#D4AF37]/25 md:p-7"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
        {label}
      </p>

      <h3 className="mt-2 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#A9A293]">
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {flow.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
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

              <p className="mt-0.5 text-xs leading-5 text-[#8F887B]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function FlowPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-3 py-1.5 text-[#A9A293]">
      {text}
    </span>
  );
}