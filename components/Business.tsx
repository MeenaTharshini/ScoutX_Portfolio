"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBrain,
  FaSearch,
  FaHandshake,
  FaRocket,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const revenueStreams = [
  {
    icon: FaSearch,
    number: "01",
    title: "ScoutX Pro",
    subtitle: "Subscription",
    description:
      "Organizations pay for continuous access to ScoutX's innovation discovery and matching tools.",
    features: [
      "AI-powered discovery",
      "Advanced search",
      "Save & compare innovations",
      "Contact innovators",
    ],
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Discovery Missions",
    subtitle: "Pay per problem",
    description:
      "Organizations pay ScoutX to find potential solutions for a specific real-world problem.",
    features: [
      "Submit a problem",
      "AI-assisted matching",
      "Ranked solutions",
      "Shortlisted innovators",
    ],
  },
  {
    icon: FaBuilding,
    number: "03",
    title: "Enterprise",
    subtitle: "Custom contracts",
    description:
      "Large organizations receive private discovery workflows, team access and analytics.",
    features: [
      "Multiple teams",
      "Private workspaces",
      "Custom workflows",
      "Analytics & reporting",
    ],
  },
];

const valuePoints = [
  {
    icon: FaBrain,
    title: "Find faster",
    text: "AI helps organizations discover relevant innovations beyond simple keyword search.",
  },
  {
    icon: FaSearch,
    title: "Evaluate better",
    text: "Structured profiles and evidence help teams compare potential solutions.",
  },
  {
    icon: FaHandshake,
    title: "Connect directly",
    text: "Organizations can move from discovery to meaningful conversations with creators.",
  },
];

export default function Business() {
  return (
    <section
      id="business"
      className="relative overflow-hidden bg-[#080806] px-5 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.05] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            Business Model
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Innovators bring the{" "}
            <span className="gradient-text">solutions.</span>
            <br />
            Organizations pay to{" "}
            <span className="gradient-text">discover them.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX keeps innovation discovery accessible to creators and
            monetizes the value it creates for organizations.
          </p>
        </motion.div>

        {/* VALUE */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {valuePoints.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                <Icon className="text-sm" />
              </div>

              <h3 className="mt-4 text-sm font-bold">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#8F887B]">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WHO PAYS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-9"
        >
          <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Who Pays?
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Organizations are the{" "}
                <span className="gradient-text">
                  paying customers.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#A9A293]">
                Companies pay because finding relevant technology, ideas and
                innovators can be expensive and time-consuming.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Companies",
                "R&D Teams",
                "Manufacturers",
                "Innovation Teams",
                "Technology Firms",
                "Startups",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-3"
                >
                  <FaBuilding className="text-xs text-[#D4AF37]" />

                  <span className="text-xs font-medium text-[#BDB5A7]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* REVENUE */}
        <div className="mt-16">

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Revenue Model
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Three ways ScoutX{" "}
              <span className="gradient-text">
                makes money.
              </span>
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#8F887B]">
              Start with simple paid discovery and grow into recurring
              organization revenue.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {revenueStreams.map(
              (
                {
                  icon: Icon,
                  number,
                  title,
                  subtitle,
                  description,
                  features,
                },
                index
              ) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition duration-300 hover:border-[#D4AF37]/25"
                >
                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                      <Icon />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-[#D4AF37]/30">
                      {number}
                    </span>

                  </div>

                  <h4 className="mt-5 text-xl font-bold">
                    {title}
                  </h4>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                    {subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#8F887B]">
                    {description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-xs text-[#A9A293]"
                      >
                        <FaCheck className="mt-0.5 shrink-0 text-[9px] text-[#D4AF37]" />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* HOW MONEY IS MADE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09]"
        >
          <div className="grid md:grid-cols-2">

            {/* PROBLEM */}
            <div className="p-7 md:p-9">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Example
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                A company has a{" "}
                <span className="gradient-text">
                  problem.
                </span>
              </h3>

              <div className="mt-6 rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-5">

                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A60]">
                  Problem
                </p>

                <p className="mt-2 text-sm leading-6 text-[#D8D1C4]">
                  "We need a low-cost technology to detect water leakage in
                  underground pipelines."
                </p>

              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#D4AF37]/15" />

                <FaArrowRight className="text-[#D4AF37]" />

                <div className="h-px flex-1 bg-[#D4AF37]/15" />
              </div>

              <p className="mt-5 text-sm leading-6 text-[#A9A293]">
                ScoutX searches its innovation network and identifies
                potentially relevant solutions.
              </p>

            </div>

            {/* RESULT */}
            <div className="border-t border-[#D4AF37]/10 bg-[#0E0D0A] p-7 md:border-l md:border-t-0 md:p-9">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                What the company gets
              </p>

              <div className="mt-5 space-y-3">

                {[
                  "Relevant innovations",
                  "Evidence & project details",
                  "Shortlisted creators",
                  "Direct connections",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-[#11100D] p-4"
                  >
                    <span className="text-[10px] font-bold text-[#D4AF37]">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-5 rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.05] p-4">

                <p className="text-xs font-semibold text-[#E7C979]">
                  ScoutX earns
                </p>

                <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                  Subscription fees, discovery fees or enterprise contracts.
                </p>

              </div>

            </div>

          </div>
        </motion.div>

        {/* FLYWHEEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Growth Flywheel
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            More innovation →{" "}
            <span className="gradient-text">
              more value.
            </span>
          </h3>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">

            <BusinessPill text="More Innovators" />

            <FaArrowRight className="text-[#D4AF37]/40" />

            <BusinessPill text="More Solutions" />

            <FaArrowRight className="text-[#D4AF37]/40" />

            <BusinessPill text="Better Matching" />

            <FaArrowRight className="text-[#D4AF37]/40" />

            <BusinessPill text="More Companies" />

            <FaArrowRight className="text-[#D4AF37]/40" />

            <BusinessPill text="More Revenue" />

          </div>
        </motion.div>

        {/* FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#11100D] px-6 py-7 md:px-10">

            <p className="text-sm text-[#817A6E]">
              The simple model:
            </p>

            <h3 className="mt-2 text-xl font-bold md:text-2xl">
              Free access for{" "}
              <span className="gradient-text">
                innovators.
              </span>
              <br />
              Paid discovery for{" "}
              <span className="gradient-text">
                organizations.
              </span>
            </h3>

            <p className="mt-3 text-xs leading-5 text-[#6F6A60]">
              Pricing will be validated through the first ScoutX pilot.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

function BusinessPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-4 py-2 text-[#BDB5A7]">
      {text}
    </span>
  );
}