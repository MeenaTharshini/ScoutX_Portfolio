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
  FaStar,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Submit",
    description:
      "Share an idea, project, prototype, or portfolio and turn your work into a discoverable innovation.",
  },
  {
    number: "02",
    icon: FaRobot,
    title: "Evaluate",
    description:
      "AI analyzes value, uniqueness, feasibility, technology, and potential impact.",
  },
  {
    number: "03",
    icon: FaBuilding,
    title: "Define Need",
    description:
      "Organizations describe the problems, domains, and technologies they are looking for.",
  },
  {
    number: "04",
    icon: FaSearch,
    title: "Match",
    description:
      "ScoutX intelligently identifies innovations that align with organizational needs.",
  },
  {
    number: "05",
    icon: FaComments,
    title: "Connect",
    description:
      "Organizations and innovators connect directly when there is a strong opportunity.",
  },
];

const innovatorBenefits = [
  "Ideas",
  "Projects",
  "Prototypes",
  "GitHub",
  "Portfolio",
];

const organizationBenefits = [
  "Problems",
  "Technology",
  "Domain",
  "Capabilities",
  "Requirements",
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
      className="relative overflow-hidden bg-[#F5F0E6] text-[#11100D] py-24 md:py-32 px-6"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] rounded-full bg-[#B08A28]/8 blur-3xl pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#11100D] text-[#E7C979] border border-[#D4AF37]/20 text-xs font-semibold uppercase tracking-[0.2em]">
            <FaStar className="text-[10px]" />
            The ScoutX Solution
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-[1.08] tracking-tight">
            From scattered ideas to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6815] via-[#D4AF37] to-[#A67C00]">
              discoverable innovation.
            </span>
          </h2>

          <p className="text-[#6F685B] text-base md:text-lg leading-8 mt-6 max-w-3xl mx-auto">
            ScoutX creates a continuous discovery layer where innovators can
            showcase what they build and organizations can discover solutions
            that match their real-world needs.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN FLOW
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="relative rounded-[2rem] bg-[#11100D] border border-[#D4AF37]/20 p-7 md:p-10 lg:p-12 shadow-[0_25px_80px_rgba(50,40,20,0.12)]">

            {/* Top label */}

            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="w-8 h-px bg-[#D4AF37]/50" />

              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
                How ScoutX Works
              </p>

              <span className="w-8 h-px bg-[#D4AF37]/50" />
            </div>

            {/* Connecting line */}

            <div className="hidden lg:block absolute top-[132px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="relative group text-center"
                  >
                    {/* Icon */}

                    <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-[#F5F0E6] border border-[#D4AF37]/30 text-[#A67C00] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.18)] group-hover:-translate-y-1 group-hover:border-[#D4AF37]/70 transition-all duration-300">
                      <Icon className="text-xl" />
                    </div>

                    {/* Number */}

                    <div className="mt-5">
                      <span className="text-[10px] tracking-[0.25em] font-bold text-[#D4AF37]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F7F1E3] mt-2">
                      {step.title}
                    </h3>

                    <p className="text-[#A9A293] text-sm leading-6 mt-2">
                      {step.description}
                    </p>

                    {/* Arrow */}

                    {index < steps.length - 1 && (
                      <FaArrowRight className="hidden lg:block absolute top-7 -right-3 text-[#D4AF37]/60 text-xs" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TWO SIDES
        ====================================================== */}

        <div className="grid lg:grid-cols-2 gap-6 mt-7">

          {/* INNOVATORS */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2rem] bg-[#FFFDF7] border border-[#D4AF37]/20 p-7 md:p-9 shadow-[0_15px_50px_rgba(50,40,20,0.07)] hover:-translate-y-1 hover:border-[#D4AF37]/40 transition-all duration-300"
          >
            <div className="absolute top-[-80px] right-[-80px] w-40 h-40 rounded-full bg-[#D4AF37]/8 blur-3xl pointer-events-none" />

            <div className="relative z-10">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-[#11100D] text-[#E7C979] flex items-center justify-center shadow-lg">
                  <FaLightbulb className="text-lg" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#A67C00] font-semibold">
                    For Innovators
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold mt-1 text-[#11100D]">
                    Your idea deserves to be found.
                  </h3>
                </div>

              </div>

              <p className="text-[#6F685B] leading-7 mt-6">
                Turn your idea, project, or prototype into a structured
                innovation profile and make your work discoverable to
                organizations searching for relevant solutions.
              </p>

              <div className="flex flex-wrap gap-2 mt-7">
                {innovatorBenefits.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-2 rounded-full bg-[#F5F0E6] border border-[#D4AF37]/20 text-[#625A4C] text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

          {/* ORGANIZATIONS */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2rem] bg-[#11100D] border border-[#D4AF37]/20 p-7 md:p-9 shadow-[0_15px_50px_rgba(50,40,20,0.12)] hover:-translate-y-1 hover:border-[#D4AF37]/40 transition-all duration-300"
          >
            <div className="absolute bottom-[-80px] right-[-80px] w-48 h-48 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-[#F5F0E6] text-[#A67C00] flex items-center justify-center shadow-lg">
                  <FaBuilding className="text-lg" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                    For Organizations
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold mt-1 text-[#F7F1E3]">
                    Need an idea? Search for one.
                  </h3>
                </div>

              </div>

              <p className="text-[#A9A293] leading-7 mt-6">
                Describe a problem, domain, or technology requirement and let
                ScoutX identify relevant innovations from its growing
                ecosystem.
              </p>

              <div className="flex flex-wrap gap-2 mt-7">
                {organizationBenefits.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-2 rounded-full bg-[#F5F0E6]/5 border border-[#D4AF37]/20 text-[#BEB6A7] text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

        {/* =====================================================
            WHY SCOUTX
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >

          <p className="text-[#A67C00] uppercase tracking-[0.25em] text-xs font-semibold">
            Why ScoutX?
          </p>

          <h3 className="text-3xl md:text-5xl font-bold mt-4 text-[#11100D]">
            Why wait for the next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6815] via-[#D4AF37] to-[#A67C00]">
              hackathon?
            </span>
          </h3>

          <p className="text-[#6F685B] max-w-2xl mx-auto mt-5 leading-7">
            ScoutX creates a continuous discovery layer where innovation can
            be evaluated, matched, and connected beyond traditional events.
          </p>

          {/* Benefits */}

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FFFDF7] border border-[#D4AF37]/20 text-[#5F594E] text-sm shadow-sm"
              >
                <FaCheckCircle className="text-[#C49A22] text-xs" />
                {benefit}
              </motion.div>
            ))}
          </div>

          {/* CTA */}

          <motion.a
            href="#features"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 mt-9 px-7 py-3.5 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#AD8930] text-[#0B0B09] font-bold text-sm shadow-[0_12px_35px_rgba(201,166,70,0.20)] hover:shadow-[0_15px_45px_rgba(201,166,70,0.30)] transition-all duration-300"
          >
            Explore ScoutX
            <FaArrowRight className="text-xs" />
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}