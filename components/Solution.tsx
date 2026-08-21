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
    number: "01",
    icon: FaLightbulb,
    title: "Submit",
    description: "Share an idea, project, prototype, or portfolio.",
  },
  {
    number: "02",
    icon: FaRobot,
    title: "Evaluate",
    description: "AI analyzes value, uniqueness, feasibility, and technology fit.",
  },
  {
    number: "03",
    icon: FaBuilding,
    title: "Define Need",
    description: "Companies describe the problems and technologies they need.",
  },
  {
    number: "04",
    icon: FaSearch,
    title: "Match",
    description: "ScoutX finds the most relevant innovations automatically.",
  },
  {
    number: "05",
    icon: FaComments,
    title: "Connect",
    description: "Organizations connect directly with promising innovators.",
  },
];

const benefits = [
  "Discover ideas beyond hackathons",
  "AI-assisted evaluation",
  "Requirement-based matching",
  "Direct innovator connection",
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="section relative overflow-hidden bg-[var(--background)]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--gold)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-app relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="eyebrow">The ScoutX Solution</span>

          <h2 className="section-heading mx-auto mt-3">
            From scattered ideas to{" "}
            <span className="text-gradient">discoverable innovation.</span>
          </h2>

          <p className="section-description mx-auto mt-6">
            ScoutX uses AI to evaluate innovations, understand company needs,
            and connect the right ideas with the right opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            CORE FLOW
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="surface-card p-6 md:p-10">

            <div className="grid md:grid-cols-5 gap-6 md:gap-4 relative">

              {/* Connecting line */}
              <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    className="relative text-center"
                  >
                    {/* Icon */}
                    <div className="relative z-10 mx-auto w-14 h-14 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] shadow-[0_0_25px_rgba(212,175,55,0.08)]">
                      <Icon className="text-lg" />
                    </div>

                    {/* Number */}
                    <span className="block mt-4 text-[10px] font-bold tracking-[0.2em] text-[var(--gold)]/60">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TWO SIDES
        ====================================================== */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          {/* Innovators */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="surface-card p-7 md:p-8"
          >
            <div className="flex items-center gap-4">

              <div className="icon-box">
                <FaLightbulb />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)]">
                  For Innovators
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-1">
                  Your idea deserves to be found.
                </h3>
              </div>

            </div>

            <p className="text-[var(--muted)] mt-5 leading-7">
              Turn your idea, project, or prototype into a structured
              innovation profile and get discovered by organizations
              looking for relevant solutions.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Ideas",
                "Projects",
                "Prototypes",
                "GitHub",
                "Portfolio",
              ].map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Companies */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="surface-card p-7 md:p-8"
          >
            <div className="flex items-center gap-4">

              <div className="icon-box">
                <FaBuilding />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)]">
                  For Organizations
                </p>

                <h3 className="text-xl md:text-2xl font-bold mt-1">
                  Need an idea? Search for one.
                </h3>
              </div>

            </div>

            <p className="text-[var(--muted)] mt-5 leading-7">
              Describe a problem, domain, or technology requirement and
              let ScoutX identify relevant innovations from its ecosystem.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Problem",
                "Technology",
                "Domain",
                "Capabilities",
                "Requirements",
              ].map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* =====================================================
            ADVANTAGE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="eyebrow">Why ScoutX?</p>

          <h3 className="text-2xl md:text-4xl font-bold mt-2">
            Why wait for the next{" "}
            <span className="text-gradient">hackathon?</span>
          </h3>

          <p className="section-description mx-auto mt-4">
            ScoutX creates a continuous discovery layer where existing
            innovations can be evaluated, matched, and connected.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-7">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--surface-border)] text-sm text-[var(--muted)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                {benefit}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#features"
            className="btn-primary mt-8"
          >
            Explore ScoutX
            <FaArrowRight className="text-xs" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}