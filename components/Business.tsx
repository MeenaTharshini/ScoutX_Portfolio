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
      "Continuous access to ScoutX's innovation discovery and matching tools.",
    features: [
      "AI-powered discovery",
      "Advanced search",
      "Save & compare",
      "Contact innovators",
    ],
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Discovery Missions",
    subtitle: "Pay per problem",
    description:
      "ScoutX finds potential solutions for a company's specific real-world problem.",
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
      "Private discovery workflows, team access and analytics for larger organizations.",
    features: [
      "Multiple teams",
      "Private workspaces",
      "Custom workflows",
      "Analytics",
    ],
  },
];

const valuePoints = [
  {
    icon: FaBrain,
    title: "Find faster",
    text: "AI discovers relevant innovations beyond simple keyword search.",
  },
  {
    icon: FaSearch,
    title: "Evaluate better",
    text: "Structured profiles and evidence help teams compare solutions.",
  },
  {
    icon: FaHandshake,
    title: "Connect directly",
    text: "Organizations can connect with the creators behind relevant innovations.",
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
        <div className="mt-10 grid gap-4 md:grid-cols-3">
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

              <h3 className="mt-4 text-sm font-bold">{title}</h3>

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
          className="mt-10 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-9"
        >
          <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Who Pays?
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Organizations are the{" "}
                <span className="gradient-text">paying customers.</span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#A9A293]">
                Companies pay because discovering relevant technology and
                innovators can save significant time and resources.
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
        <div className="mt-14">

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Revenue Model
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Three ways ScoutX{" "}
              <span className="gradient-text">makes money.</span>
            </h3>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
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

                  <h4 className="mt-5 text-xl font-bold">{title}</h4>

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

        {/* SIMPLE EXAMPLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] p-7 md:p-9"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Example
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                A company has a{" "}
                <span className="gradient-text">problem.</span>
              </h3>

              <div className="mt-5 rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-5">
                <p className="text-sm leading-6 text-[#D8D1C4]">
                  "We need a low-cost technology to detect water leakage in
                  underground pipelines."
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                ScoutX
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Relevant innovations",
                  "Evidence & project details",
                  "Shortlisted creators",
                  "Direct connections",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/10 bg-[#11100D] p-3.5"
                  >
                    <span className="text-[10px] font-bold text-[#D4AF37]">
                      0{index + 1}
                    </span>

                    <span className="text-xs font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#8F887B]">
                ScoutX earns through a subscription, discovery fee, or
                enterprise contract.
              </p>
            </div>

          </div>
        </motion.div>

        {/* FLYWHEEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Growth Flywheel
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            More innovation →{" "}
            <span className="gradient-text">more value.</span>
          </h3>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
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
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#11100D] px-6 py-6">
            <p className="text-sm text-[#817A6E]">
              The ScoutX business model
            </p>

            <h3 className="mt-2 text-xl font-bold md:text-2xl">
              Free for{" "}
              <span className="gradient-text">innovators.</span>{" "}
              Paid by{" "}
              <span className="gradient-text">organizations.</span>
            </h3>

            <p className="mt-2 text-xs text-[#6F6A60]">
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