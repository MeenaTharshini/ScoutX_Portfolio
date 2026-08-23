"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaSearch,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";

const plans = [
  {
    icon: FaSearch,
    number: "01",
    title: "ScoutX Pro",
    subtitle: "For teams that scout regularly",
    description:
      "A recurring workspace for organizations that continuously search for technologies, projects, talent, and solutions.",
    features: [
      "Advanced innovation search",
      "AI-assisted matching",
      "Save & compare discoveries",
      "Team collaboration",
    ],
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Discovery Missions",
    subtitle: "For a specific challenge",
    description:
      "Organizations submit a real problem and ScoutX helps identify relevant innovations, creators, and potential solutions.",
    features: [
      "Define a specific problem",
      "AI-assisted discovery",
      "Relevant solution ranking",
      "Curated shortlist",
    ],
    featured: true,
  },
  {
    icon: FaBuilding,
    number: "03",
    title: "Enterprise",
    subtitle: "For innovation at scale",
    description:
      "Dedicated discovery infrastructure for organizations managing multiple teams, challenges, and innovation workflows.",
    features: [
      "Private workspaces",
      "Multiple teams & users",
      "Custom workflows",
      "Innovation analytics",
    ],
  },
];

const valuePoints = [
  {
    title: "Save time",
    text: "Find relevant innovation faster than searching through disconnected networks.",
  },
  {
    title: "Avoid rebuilding",
    text: "Discover existing solutions before investing resources into building from scratch.",
  },
  {
    title: "Find outside the network",
    text: "Reach creators, researchers, startups, and builders an organization may never encounter otherwise.",
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

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            ScoutX keeps innovation open for creators and monetizes the
            discovery tools that help organizations find useful innovation.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* CORE MODEL */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-3">
            <ValueCard
              number="01"
              title="Creators"
              text="Bring projects, research, prototypes, products, and capabilities onto ScoutX."
            />

            <ValueCard
              number="02"
              title="ScoutX"
              text="Makes that innovation searchable, understandable, and easier to match."
              highlight
            />

            <ValueCard
              number="03"
              title="Organizations"
              text="Pay for powerful discovery tools that help them find relevant innovation."
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 border-t border-[#D4AF37]/10 pt-7 text-xs">
            <span className="rounded-full border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-2 text-[#A9A293]">
              Innovation
            </span>

            <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />

            <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 font-medium text-[#E7C979]">
              ScoutX
            </span>

            <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />

            <span className="rounded-full border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-2 text-[#A9A293]">
              Discovery
            </span>

            <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />

            <span className="rounded-full border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-2 text-[#A9A293]">
              Business Value
            </span>
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* WHY ORGANIZATIONS PAY */}
        {/* ===================================================== */}

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
              <span className="gradient-text">discovery.</span>
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#817A6E]">
              The value is not access to innovation itself. The value is
              finding the right innovation faster.
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

        {/* ===================================================== */}
        {/* REVENUE STREAMS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Revenue Streams
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Three ways to{" "}
              <span className="gradient-text">pay for discovery.</span>
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
                  className={`rounded-3xl border p-6 transition-all duration-300 ${
                    featured
                      ? "border-[#D4AF37]/30 bg-gradient-to-br from-[#17150F] to-[#11100D]"
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

        {/* ===================================================== */}
        {/* FLYWHEEL */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Business Flywheel
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              More innovation.
              <br />
              <span className="gradient-text">
                Better discovery. More value.
              </span>
            </h3>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8">
            <div className="grid gap-3 md:grid-cols-5 md:items-center">
              <FlywheelStep
                number="01"
                title="Creators"
                text="More innovation enters ScoutX."
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/30 md:rotate-0" />

              <FlywheelStep
                number="02"
                title="Discovery"
                text="Organizations find more relevant work."
                highlight
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/30 md:rotate-0" />

              <FlywheelStep
                number="03"
                title="Value"
                text="Successful discoveries drive demand."
              />
            </div>

            <div className="mt-7 border-t border-[#D4AF37]/10 pt-6 text-center">
              <p className="text-xs leading-6 text-[#817A6E]">
                As the innovation network grows, ScoutX becomes more useful to
                organizations — creating the foundation for recurring revenue.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* VALIDATION */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] px-6 py-9 text-center md:px-10 md:py-11">
            <FaChartLine className="mx-auto text-xl text-[#D4AF37]" />

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Our Approach
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Prove the value.
              <br />
              <span className="gradient-text">
                Then scale the model.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#817A6E]">
              We are starting by proving that organizations will repeatedly
              use ScoutX to discover useful innovation. Pricing, packaging,
              and expansion will follow demonstrated value.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <ValidationItem number="01" text="Discover" />
              <ValidationItem number="02" text="Prove value" />
              <ValidationItem number="03" text="Scale" />
            </div>
          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* CLOSING */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm text-[#817A6E]">
            The principle behind the model:
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
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

/* ============================================================= */
/* VALUE CARD */
/* ============================================================= */

function ValueCard({
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

/* ============================================================= */
/* FLYWHEEL STEP */
/* ============================================================= */

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

/* ============================================================= */
/* VALIDATION ITEM */
/* ============================================================= */

function ValidationItem({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-3">
      <p className="text-[9px] font-bold tracking-widest text-[#D4AF37]/60">
        {number}
      </p>

      <p className="mt-1 text-xs font-semibold text-[#BDB5A7]">
        {text}
      </p>
    </div>
  );
}