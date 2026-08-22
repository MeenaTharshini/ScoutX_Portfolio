"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaBuilding,
  FaLightbulb,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-16 text-[#F7F2E8] md:py-20"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#D4AF37]/[0.05] blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            About ScoutX
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            Where{" "}
            <span className="text-gradient">
              Ideas Meet Opportunity
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
  ScoutX makes hidden innovation discoverable. Innovators can showcase and
  improve their ideas with AI, while organizations can discover relevant
  solutions, post real problems, and connect with the people building them.
</p>
        </motion.div>

        {/* TWO SIDES */}
        <div className="mt-9 grid gap-4 md:grid-cols-2">

          {/* INNOVATORS */}
          <AudienceCard
            icon={FaUsers}
            label="For Innovators"
            title="Make what you build discoverable."
            description="Showcase projects, prototypes, and evidence while getting AI-assisted insights about your innovation."
            items={[
              [FaLightbulb, "Showcase", "Ideas, projects & prototypes"],
              [FaSearch, "Get Insights", "Innovation & related-work signals"],
            ]}
          />

          {/* ORGANIZATIONS */}
          <AudienceCard
            icon={FaBuilding}
            label="For Organizations"
            title="Find ideas that solve real problems."
            description="Search for relevant innovation or post a problem when the right solution does not yet exist."
            items={[
              [FaSearch, "Discover", "Search by technology & domain"],
              [FaArrowRight, "Post Problems", "Let innovators build solutions"],
            ]}
          />

        </div>

        {/* CORE STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-9 max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            The ScoutX Idea
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Discover what people{" "}
            <span className="text-gradient">
              actually build.
            </span>
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#8F887B]">
            ScoutX creates a discovery layer between real projects,
            innovators, and organizations looking for new solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function AudienceCard({
  icon: Icon,
  label,
  title,
  description,
  items,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  items: readonly (
    readonly [React.ElementType, string, string]
  )[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-5 transition hover:border-[#D4AF37]/25 md:p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.07] text-[#E7C979]">
          <Icon className="text-sm" />
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            {label}
          </p>

          <h3 className="mt-1 text-lg font-bold md:text-xl">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-6 text-[#A9A293]">
        {description}
      </p>

      {/* Key features */}
      <div className="mt-5 grid grid-cols-2 gap-2">
        {items.map(([ItemIcon, itemTitle, text]) => (
          <div
            key={itemTitle}
            className="rounded-xl border border-white/[0.05] bg-[#0B0B09] p-3"
          >
            <ItemIcon className="text-xs text-[#D4AF37]" />

            <p className="mt-2 text-xs font-semibold">
              {itemTitle}
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#777166]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}