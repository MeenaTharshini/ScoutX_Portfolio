"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRobot,
  FaBuilding,
  FaSearch,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: FaLightbulb,
    title: "Submit",
    text: "Share an idea, project, prototype, or portfolio.",
  },
  {
    icon: FaRobot,
    title: "Evaluate",
    text: "AI evaluates value, feasibility, uniqueness, and impact.",
  },
  {
    icon: FaBuilding,
    title: "Define Need",
    text: "Organizations describe problems and requirements.",
  },
  {
    icon: FaSearch,
    title: "Match",
    text: "ScoutX finds innovations aligned with real needs.",
  },
  {
    icon: FaComments,
    title: "Connect",
    text: "The right people connect when an opportunity exists.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Solution
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            From ideas to{" "}
            <span className="text-gradient">
              discoverable innovation.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#A9A293] md:text-lg">
            ScoutX gives innovators a structured way to showcase what they
            build and gives organizations a smarter way to discover relevant
            solutions.
          </p>
        </motion.div>

        {/* HOW IT WORKS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              How ScoutX Works
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
              Submit → Evaluate → Match → Connect
            </h3>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#0B0B09] text-[#E7C979]">
                    <Icon />
                  </div>

                  <span className="mt-4 block text-[10px] font-bold tracking-[0.2em] text-[#D4AF37]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-1 text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                    {step.text}
                  </p>

                  {index < steps.length - 1 && (
                    <FaArrowRight className="absolute -right-4 top-7 hidden text-xs text-[#D4AF37]/40 lg:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* TWO SIDES */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {/* INNOVATORS */}
          <AudienceCard
            icon={<FaLightbulb />}
            label="For Innovators"
            title="Make your work discoverable."
            text="Turn ideas, projects, and prototypes into structured innovation profiles that organizations can discover."
            tags={["Ideas", "Projects", "Prototypes", "Evidence"]}
          />

          {/* ORGANIZATIONS */}
          <AudienceCard
            icon={<FaBuilding />}
            label="For Organizations"
            title="Find solutions to real problems."
            text="Describe a problem, domain, or technology need and discover relevant innovations from the ecosystem."
            tags={["Problems", "Technology", "Domain", "Requirements"]}
          />

        </div>

        {/* DIFFERENTIATOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The Difference
          </p>

          <h3 className="mt-4 text-3xl font-bold md:text-5xl">
            Not another platform to{" "}
            <span className="text-gradient">
              search people.
            </span>
          </h3>

          <p className="mt-5 text-[#A9A293] leading-7">
            ScoutX helps organizations discover what people have actually
            built — and connects promising innovation to real opportunities.
          </p>

          <motion.a
            href="#features"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#A67C00] px-7 py-3.5 text-sm font-bold text-[#0B0B09]"
          >
            Explore ScoutX
            <FaArrowRight className="text-xs" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

function AudienceCard({
  icon,
  label,
  title,
  text,
  tags,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  text: string;
  tags: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="rounded-[2rem] border border-[#D4AF37]/10 bg-[#11100D] p-7 transition hover:border-[#D4AF37]/30 md:p-9"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
          {icon}
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            {label}
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {title}
          </h3>
        </div>
      </div>

      <p className="mt-6 leading-7 text-[#A9A293]">
        {text}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#D4AF37]/15 bg-[#0B0B09] px-3.5 py-2 text-xs text-[#A9A293]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}