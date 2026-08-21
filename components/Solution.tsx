"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRobot,
  FaBuilding,
  FaSearch,
  FaComments,
  FaArrowRight,
  FaCheckCircle,
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

const benefits = [
  "AI-assisted evaluation",
  "Requirement-based matching",
  "Discover beyond hackathons",
  "Direct innovator connection",
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-24 text-[#F7F2E8] md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
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
            ScoutX connects people who build solutions with organizations
            searching for them.
          </p>
        </motion.div>

        {/* Flow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.3)] md:p-10"
        >
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            How ScoutX Works
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#0B0B09] text-[#E7C979] transition group-hover:-translate-y-1 group-hover:border-[#D4AF37]/60"
                  >
                    <Icon />
                  </div>

                  <span className="mt-4 block text-[10px] font-bold tracking-[0.2em] text-[#D4AF37]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-1 text-lg font-bold">{step.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Two Sides */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <AudienceCard
            icon={<FaLightbulb />}
            label="For Innovators"
            title="Make your work discoverable."
            text="Turn your ideas, projects, and prototypes into structured innovation profiles that organizations can find."
            tags={["Ideas", "Projects", "Prototypes", "GitHub"]}
          />

          <AudienceCard
            icon={<FaBuilding />}
            label="For Organizations"
            title="Find solutions to real problems."
            text="Describe a problem, domain, or technology need and discover relevant innovations from the ecosystem."
            tags={["Problems", "Technology", "Domain", "Requirements"]}
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Why ScoutX?
          </p>

          <h3 className="mt-4 text-3xl font-bold md:text-5xl">
            Innovation shouldn&apos;t wait for a{" "}
            <span className="text-gradient">hackathon.</span>
          </h3>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-4 py-2.5 text-sm text-[#A9A293]"
              >
                <FaCheckCircle className="text-xs text-[#D4AF37]" />
                {item}
              </div>
            ))}
          </div>

          <motion.a
            href="#features"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#A67C00] px-7 py-3.5 text-sm font-bold text-[#0B0B09] shadow-[0_12px_35px_rgba(212,175,55,0.15)]"
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
          <h3 className="mt-1 text-2xl font-bold">{title}</h3>
        </div>
      </div>

      <p className="mt-6 leading-7 text-[#A9A293]">{text}</p>

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