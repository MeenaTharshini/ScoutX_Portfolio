"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBrain,
  FaSearch,
  FaHandshake,
  FaRocket,
  FaChartLine,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const revenueStreams = [
  {
    icon: FaSearch,
    number: "01",
    title: "ScoutX Pro",
    subtitle: "Recurring subscriptions",
    description:
      "Companies pay for continuous access to AI-powered innovation discovery and evaluation.",
    features: [
      "AI-powered problem matching",
      "Advanced innovation search",
      "Save and compare projects",
      "Contact innovators",
      "Team discovery workspace",
    ],
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Discovery Missions",
    subtitle: "Pay per problem",
    description:
      "A company gives ScoutX a specific problem. ScoutX searches its innovation network and delivers the most relevant potential solutions.",
    features: [
      "Submit a real business problem",
      "AI-powered candidate discovery",
      "Relevance-ranked innovations",
      "Innovation evaluation report",
      "Shortlist relevant innovators",
    ],
  },
  {
    icon: FaBuilding,
    number: "03",
    title: "Enterprise ScoutX",
    subtitle: "High-value contracts",
    description:
      "Large organizations get dedicated innovation discovery capabilities, private workflows, and organization-level tools.",
    features: [
      "Multiple teams and users",
      "Private problem spaces",
      "Custom discovery workflows",
      "Analytics and reporting",
      "Enterprise integrations",
    ],
  },
];

const valuePoints = [
  {
    icon: FaBrain,
    title: "AI does the first layer of discovery",
    text: "ScoutX analyzes projects against the actual problem instead of relying only on keywords.",
  },
  {
    icon: FaChartLine,
    title: "Companies save discovery time",
    text: "Instead of searching disconnected networks, organizations get a ranked set of potentially relevant innovations.",
  },
  {
    icon: FaHandshake,
    title: "Innovation becomes actionable",
    text: "ScoutX connects organizations directly with the people building the relevant ideas.",
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
            Companies bring the{" "}
            <span className="gradient-text">problems.</span>
            <br />
            Innovators bring the{" "}
            <span className="gradient-text">possibilities.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX creates value by helping organizations discover relevant
            innovation faster — while keeping the platform accessible to the
            people building those innovations.
          </p>
        </motion.div>

        {/* VALUE PROPOSITION */}
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
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Who Pays?
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
                Organizations are the{" "}
                <span className="gradient-text">
                  paying side.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#A9A293]">
                Innovators create the supply of ideas. Companies pay ScoutX
                because finding and evaluating relevant innovation can save
                significant time and resources.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Companies",
                "R&D teams",
                "Startups",
                "Manufacturers",
                "Innovation teams",
                "Technology organizations",
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

        {/* REVENUE STREAMS */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              How ScoutX Earns
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Three ways to{" "}
              <span className="gradient-text">
                monetize discovery.
              </span>
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#8F887B]">
              Start simple, prove the value, and expand toward larger
              organization contracts.
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
                  className="group rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition duration-300 hover:border-[#D4AF37]/25"
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

        {/* DISCOVERY MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09]"
        >
          <div className="grid md:grid-cols-2">

            {/* LEFT */}
            <div className="p-7 md:p-10">
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
                  Company Problem
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
                ScoutX searches the innovation network and ranks projects
                according to how closely they match the actual problem.
              </p>
            </div>

            {/* RIGHT */}
            <div className="border-t border-[#D4AF37]/10 bg-[#0E0D0A] p-7 md:border-l md:border-t-0 md:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                ScoutX Result
              </p>

              <div className="mt-5 space-y-3">
                {[
                  ["SmartPipe", "91% relevance"],
                  ["AquaSense", "84% relevance"],
                  ["PipeGuard", "76% relevance"],
                ].map(([name, score], index) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-xl border border-[#D4AF37]/10 bg-[#11100D] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#D4AF37]">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-semibold">
                        {name}
                      </span>
                    </div>

                    <span className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-semibold text-[#E7C979]">
                      {score}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.05] p-4">
                <p className="text-xs font-semibold text-[#E7C979]">
                  AI-assisted discovery
                </p>

                <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                  Problem relevance • Technology fit • Evidence • Prototype
                  maturity • Related work
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
            The Business Flywheel
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            More innovation creates{" "}
            <span className="gradient-text">
              more discovery value.
            </span>
          </h3>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <BusinessPill text="More Innovators" />
            <FaArrowRight className="text-[#D4AF37]/40" />

            <BusinessPill text="More Innovation" />
            <FaArrowRight className="text-[#D4AF37]/40" />

            <BusinessPill text="Better Matching" />
            <FaArrowRight className="text-[#D4AF37]/40" />

            <BusinessPill text="More Companies" />
            <FaArrowRight className="text-[#D4AF37]/40" />

            <BusinessPill text="More Problems" />
          </div>
        </motion.div>

        {/* FINAL POSITIONING */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#11100D] px-6 py-7 md:px-10">
            <p className="text-sm text-[#817A6E]">
              ScoutX is not charging people to have ideas.
            </p>

            <h3 className="mt-2 text-xl font-bold md:text-2xl">
              We monetize the{" "}
              <span className="gradient-text">
                discovery of valuable innovation.
              </span>
            </h3>

            <p className="mt-3 text-xs leading-5 text-[#6F6A60]">
              Pricing, conversion rates, and revenue assumptions are
              hypotheses to be validated with organizations.
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