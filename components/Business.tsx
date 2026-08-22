"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaSearch,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaChartLine,
  FaLayerGroup,
} from "react-icons/fa";

const revenueStreams = [
  {
    icon: FaSearch,
    number: "01",
    title: "ScoutX Pro",
    subtitle: "Subscription",
    description:
      "For teams that continuously search ScoutX for technologies, projects, and innovators.",
    features: [
      "Advanced discovery",
      "AI-assisted matching",
      "Save & compare",
      "Team access",
    ],
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Discovery Missions",
    subtitle: "Pay per problem",
    description:
      "For organizations with a specific challenge that needs a targeted search across the innovation network.",
    features: [
      "Define a challenge",
      "AI-assisted search",
      "Ranked candidates",
      "Curated shortlist",
    ],
  },
  {
    icon: FaBuilding,
    number: "03",
    title: "Enterprise",
    subtitle: "Custom contracts",
    description:
      "For larger organizations that need private workflows, multiple teams, and innovation intelligence at scale.",
    features: [
      "Private workspaces",
      "Multiple teams",
      "Custom workflows",
      "Analytics",
    ],
  },
];

const reasons = [
  {
    title: "Reduce search time",
    text: "Find relevant work without relying entirely on existing networks.",
  },
  {
    title: "Lower discovery cost",
    text: "Identify existing capabilities before commissioning something from scratch.",
  },
  {
    title: "Expand the opportunity set",
    text: "Reach innovators outside familiar institutions, events, and contacts.",
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
            10 — Business Model
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Innovators bring the{" "}
            <span className="gradient-text">solutions.</span>
            <br />
            Organizations pay to{" "}
            <span className="gradient-text">discover them.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX is free on the creator side and monetizes the value of
            faster, broader innovation discovery for organizations.
          </p>
        </motion.div>

        {/* WHO PAYS / WHY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* LEFT */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                The Customer
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Organizations pay for{" "}
                <span className="gradient-text">
                  better discovery.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#A9A293]">
                Companies already spend time and money searching for
                technologies, capabilities, researchers, and potential
                partners.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#A9A293]">
                ScoutX turns that fragmented search into a structured
                discovery workflow.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-3">
              {reasons.map(({ title, text }, index) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#E7C979]">
                    <FaCheck className="text-xs" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      {title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#817A6E]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* REVENUE MODEL */}
        <div className="mt-16">

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Revenue
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Three revenue streams.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm text-[#817A6E]">
              Different levels of discovery for different organizational
              needs.
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
                  className="group rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition-all duration-300 hover:border-[#D4AF37]/25"
                >
                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                      <Icon />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-[#D4AF37]/25">
                      {number}
                    </span>

                  </div>

                  <h4 className="mt-6 text-xl font-bold">
                    {title}
                  </h4>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                    {subtitle}
                  </p>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#8F887B]">
                    {description}
                  </p>

                  <div className="mt-5 space-y-2.5 border-t border-[#D4AF37]/10 pt-5">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-[#A9A293]"
                      >
                        <FaCheck className="shrink-0 text-[9px] text-[#D4AF37]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* BUSINESS FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              How Revenue Happens
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              A simple value exchange.
            </h3>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-10">

            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">

              <BusinessNode
                icon={FaBuilding}
                title="Organization"
                text="Has a problem or needs a capability"
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/40 md:rotate-0" />

              <BusinessNode
                icon={FaSearch}
                title="ScoutX"
                text="Finds and evaluates relevant innovation"
                highlight
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/40 md:rotate-0" />

              <BusinessNode
                icon={FaRocket}
                title="Opportunity"
                text="Connection, collaboration, or adoption"
              />

            </div>

            <div className="mt-8 border-t border-[#D4AF37]/10 pt-6 text-center">
              <p className="text-xs text-[#817A6E]">
                ScoutX monetizes the discovery layer — not the creator.
              </p>
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
            Network growth strengthens{" "}
            <span className="gradient-text">
              the product.
            </span>
          </h3>

          <div className="mx-auto mt-8 max-w-5xl">

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
              <BusinessPill text="More Innovators" />
              <FaArrowRight className="text-[#D4AF37]/40" />

              <BusinessPill text="More Innovation" />
              <FaArrowRight className="text-[#D4AF37]/40" />

              <BusinessPill text="Better Discovery" />
              <FaArrowRight className="text-[#D4AF37]/40" />

              <BusinessPill text="More Organizations" />
              <FaArrowRight className="text-[#D4AF37]/40" />

              <BusinessPill text="More Revenue" />
            </div>

          </div>
        </motion.div>

        {/* CLOSING */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] px-6 py-8 md:px-10 md:py-10">

            <FaChartLine className="mx-auto text-xl text-[#D4AF37]" />

            <p className="mt-4 text-sm text-[#817A6E]">
              The model
            </p>

            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              Free to create.
              <br />
              <span className="gradient-text">
                Paid to discover.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-[#6F6A60]">
              ScoutX starts with a focused pilot and validates pricing,
              conversion, and repeat usage before expanding the model.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* BUSINESS NODE */

function BusinessNode({
  icon: Icon,
  title,
  text,
  highlight = false,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center ${
        highlight
          ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.08]"
          : "border-[#D4AF37]/10 bg-[#0B0B09]"
      }`}
    >
      <div
        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${
          highlight
            ? "bg-[#D4AF37]/15 text-[#E7C979]"
            : "bg-[#D4AF37]/10 text-[#D4AF37]"
        }`}
      >
        <Icon className="text-xs" />
      </div>

      <h4 className="mt-3 text-sm font-bold">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-5 text-[#817A6E]">
        {text}
      </p>
    </div>
  );
}

/* PILL */

function BusinessPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-4 py-2 text-[#BDB5A7]">
      {text}
    </span>
  );
}