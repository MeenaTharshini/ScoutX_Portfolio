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
    text: "Share a project, prototype, or idea with evidence.",
  },
  {
    icon: FaRobot,
    title: "Evaluate",
    text: "ScoutX analyzes the innovation and its supporting signals.",
  },
  {
    icon: FaBuilding,
    title: "Define Need",
    text: "Organizations describe problems, domains, and requirements.",
  },
  {
    icon: FaSearch,
    title: "Match",
    text: "Relevant innovations are identified against those needs.",
  },
  {
    icon: FaComments,
    title: "Connect",
    text: "Organizations connect with promising builders.",
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
            ScoutX turns projects, prototypes, builders, and evidence into
            structured innovation that organizations can discover and connect with.
          </p>
        </motion.div>

        {/* HOW IT WORKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] px-5 py-7 md:px-8"
        >
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              How ScoutX Works
            </p>

            <h3 className="mt-2 text-xl font-bold md:text-2xl">
              Submit → Evaluate → Match → Connect
            </h3>
          </div>

          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#0B0B09] text-[#E7C979]">
                    <Icon className="text-sm" />
                  </div>

                  <span className="mt-2 block text-[9px] font-bold tracking-[0.2em] text-[#D4AF37]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-1 text-base font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                    {step.text}
                  </p>

                  {index < steps.length - 1 && (
                    <FaArrowRight className="absolute -right-3 top-5 hidden text-[10px] text-[#D4AF37]/35 lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* TWO SIDES */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <AudienceCard
            label="For Innovators"
            title="Make your work discoverable."
            text="Showcase what you have actually built through structured projects and evidence."
            tags={["Ideas", "Projects", "Prototypes", "Evidence"]}
          />

          <AudienceCard
            label="For Organizations"
            title="Discover solutions to real problems."
            text="Define a need and find relevant innovations, capabilities, and builders."
            tags={["Problems", "Technology", "Domain", "Requirements"]}
          />
        </div>

        {/* DIFFERENTIATOR */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The Difference
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Discover{" "}
            <span className="text-gradient">
              what people build.
            </span>
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#A9A293]">
            ScoutX goes beyond traditional profiles by connecting real
            projects and evidence with real organizational needs.
          </p>

          <motion.a
            href="#advantage"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#A67C00] px-5 py-2.5 text-xs font-bold text-[#0B0B09]"
          >
            Why ScoutX
            <FaArrowRight className="text-[10px]" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

function AudienceCard({
  label,
  title,
  text,
  tags,
}: {
  label: string;
  title: string;
  text: string;
  tags: string[];
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
        {text}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#D4AF37]/15 bg-[#0B0B09] px-3 py-1.5 text-[11px] text-[#A9A293]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}