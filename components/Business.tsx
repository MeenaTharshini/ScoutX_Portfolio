"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBuilding,
  FaCheck,
  FaRocket,
  FaSearch,
} from "react-icons/fa";

const valuePoints = [
  {
    title: "Save time",
    text: "Find relevant innovation faster than searching disconnected networks.",
  },
  {
    title: "Avoid rebuilding",
    text: "Discover existing solutions before investing resources from scratch.",
  },
  {
    title: "Discover beyond the network",
    text: "Reach creators, researchers, startups, and builders you may never encounter otherwise.",
  },
];

const plans = [
  {
    icon: FaSearch,
    number: "01",
    title: "ScoutX Pro",
    subtitle: "Recurring discovery",
    description:
      "For teams that regularly scout technologies, projects, talent, and solutions.",
    features: [
      "Advanced search",
      "AI-assisted matching",
      "Save & compare",
      "Team collaboration",
    ],
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Discovery Missions",
    subtitle: "Problem-specific",
    description:
      "For organizations looking for solutions to a specific real-world problem.",
    features: [
      "Define a problem",
      "AI-assisted discovery",
      "Solution ranking",
      "Curated shortlist",
    ],
    featured: true,
  },
  {
    icon: FaBuilding,
    number: "03",
    title: "Enterprise",
    subtitle: "Innovation at scale",
    description:
      "For organizations managing multiple teams, challenges, and discovery workflows.",
    features: [
      "Private workspaces",
      "Multiple teams",
      "Custom workflows",
      "Innovation analytics",
    ],
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

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
            Business Model
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Free to{" "}
            <span className="gradient-text">showcase.</span>
            <br />
            Valuable to{" "}
            <span className="gradient-text">discover.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            Creators bring innovation to ScoutX for free.
            Organizations pay for better discovery.
          </p>
        </motion.div>

        {/* =====================================================
            MODEL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8"
        >
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            The Model
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            <ModelCard
              number="01"
              title="Creators"
              text="Showcase projects, research, prototypes, products, and capabilities."
            />

            <ModelCard
              number="02"
              title="ScoutX"
              text="Makes innovation searchable, understandable, and easier to match."
              highlight
            />

            <ModelCard
              number="03"
              title="Organizations"
              text="Pay to discover relevant solutions, creators, and opportunities."
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 border-t border-[#D4AF37]/10 pt-7">
            <MiniPill text="Innovation" />

            <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />

            <MiniPill text="Discovery" highlight />

            <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />

            <MiniPill text="Business Value" />
          </div>
        </motion.div>

        {/* =====================================================
            WHY PAY
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Why Organizations Pay
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              We sell{" "}
              <span className="gradient-text">better discovery.</span>
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#817A6E]">
              The value is not access to innovation.
              It is finding the right innovation faster.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {valuePoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#E7C979]">
                  <FaCheck className="text-xs" />
                </div>

                <h4 className="mt-5 text-base font-bold">
                  {item.title}
                </h4>

                <p className="mt-2 text-xs leading-6 text-[#817A6E]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            REVENUE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Revenue
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Three ways to{" "}
              <span className="gradient-text">discover.</span>
            </h3>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map(
              (
                {
                  icon: Icon,
                  number,
                  title,
                  subtitle,
                  description,
                  features,
                  featured,
                },
                index
              ) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className={`rounded-3xl border p-6 transition-all ${
                    featured
                      ? "border-[#D4AF37]/30 bg-[#17150F]"
                      : "border-[#D4AF37]/10 bg-[#11100D]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                      <Icon className="text-sm" />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-[#D4AF37]/30">
                      {number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-xl font-bold">
                    {title}
                  </h4>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                    {subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#8F887B]">
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
                </motion.article>
              )
            )}
          </div>
        </motion.div>

        {/* =====================================================
            FLYWHEEL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              The Flywheel
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              More innovation.
              <br />
              <span className="gradient-text">
                More value.
              </span>
            </h3>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8">
            <div className="grid gap-3 md:grid-cols-5 md:items-center">
              <FlywheelStep
                number="01"
                title="Innovation"
                text="More useful work enters ScoutX."
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/30 md:rotate-0" />

              <FlywheelStep
                number="02"
                title="Discovery"
                text="Organizations find relevant work."
                highlight
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/30 md:rotate-0" />

              <FlywheelStep
                number="03"
                title="Value"
                text="Successful discoveries create demand."
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CLOSING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-sm text-[#817A6E]">
            The principle behind ScoutX:
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
            Don't charge people to{" "}
            <span className="gradient-text">be discovered.</span>
            <br />
            Charge organizations to{" "}
            <span className="gradient-text">discover better.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}

/* =============================================================
   MODEL CARD
============================================================= */

function ModelCard({
  number,
  title,
  text,
  highlight = false,
}: {
  number: string;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        highlight
          ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.07]"
          : "border-[#D4AF37]/10 bg-[#0B0B09]"
      }`}
    >
      <span className="text-[10px] font-bold tracking-widest text-[#D4AF37]/60">
        {number}
      </span>

      <h4 className="mt-3 text-base font-bold">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-6 text-[#817A6E]">
        {text}
      </p>
    </div>
  );
}

/* =============================================================
   FLYWHEEL STEP
============================================================= */

function FlywheelStep({
  number,
  title,
  text,
  highlight = false,
}: {
  number: string;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center ${
        highlight
          ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.07]"
          : "border-[#D4AF37]/10 bg-[#0B0B09]"
      }`}
    >
      <span className="text-[10px] font-bold tracking-widest text-[#D4AF37]">
        {number}
      </span>

      <h4 className="mt-3 text-sm font-bold">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-5 text-[#817A6E]">
        {text}
      </p>
    </div>
  );
}

/* =============================================================
   PILL
============================================================= */

function MiniPill({
  text,
  highlight = false,
}: {
  text: string;
  highlight?: boolean;
}) {
  return (
    <span
      className={`rounded-full border px-4 py-2 text-xs ${
        highlight
          ? "border-[#D4AF37]/20 bg-[#D4AF37]/10 font-medium text-[#E7C979]"
          : "border-[#D4AF37]/10 bg-[#0B0B09] text-[#A9A293]"
      }`}
    >
      {text}
    </span>
  );
}