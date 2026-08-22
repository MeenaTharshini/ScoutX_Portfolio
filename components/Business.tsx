"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaUsers,
  FaGlobeAsia,
  FaChartLine,
} from "react-icons/fa";

const businessPoints = [
  {
    icon: FaBuilding,
    title: "Paying Customers",
    text: "Companies, R&D teams, startups, manufacturers, and organizations looking for solutions.",
  },
  {
    icon: FaUsers,
    title: "Innovation Supply",
    text: "Students, developers, researchers, engineers, founders, makers, and independent innovators.",
  },
  {
    icon: FaGlobeAsia,
    title: "Market Entry",
    text: "Start with focused domains and innovation ecosystems, then expand across India.",
  },
  {
    icon: FaChartLine,
    title: "Scalable Model",
    text: "Recurring organization subscriptions, premium discovery services, and future enterprise offerings.",
  },
];

export default function Business() {
  return (
    <section
      id="business"
      className="relative overflow-hidden bg-[#080806] px-5 py-16 text-[#F7F2E8] md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Business & Market
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            A discovery platform with{" "}
            <span className="gradient-text">
              two-sided value.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#A9A293] md:text-base">
            Organizations pay to discover relevant innovation faster, while
            creators gain visibility and opportunities for their work.
          </p>
        </motion.div>

        {/* BUSINESS MODEL */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessPoints.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/10 bg-[#D4AF37]/[0.07] text-[#E7C979]">
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

        {/* REVENUE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 rounded-2xl border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-7"
        >
          <div className="grid gap-6 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                Revenue Model
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Organizations are the{" "}
                <span className="gradient-text">
                  primary paying side.
                </span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#A9A293]">
                ScoutX can monetize the business side while keeping
                innovation discovery accessible to creators.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <RevenueItem
                title="Organization Subscriptions"
                text="Advanced search, AI-assisted evaluation, saved requirements, team workspaces and analytics."
              />

              <RevenueItem
                title="Premium Discovery"
                text="Curated innovation searches, enterprise discovery pipelines and specialized innovation programs."
              />

              <RevenueItem
                title="Future Enterprise Services"
                text="Private innovation networks, integrations and organization-specific discovery solutions."
              />
            </div>

          </div>
        </motion.div>

        {/* MARKET PATH */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 rounded-2xl border border-white/[0.06] bg-[#0E0E0C] p-6 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Expansion Path
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            <MarketStep text="Initial Innovation Ecosystems" />
            <span className="text-[#D4AF37]/50">→</span>

            <MarketStep text="Focused Industry Domains" />
            <span className="text-[#D4AF37]/50">→</span>

            <MarketStep text="Organizations Across India" />
            <span className="text-[#D4AF37]/50">→</span>

            <MarketStep text="Enterprise Innovation Network" />
          </div>
        </motion.div>

        {/* NOTE */}
        <p className="mt-4 text-center text-[10px] text-[#6F6A60]">
          Revenue streams and pricing are business-model hypotheses and
          require market validation.
        </p>

      </div>
    </section>
  );
}

function RevenueItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] p-4">
      <h4 className="text-sm font-semibold">
        {title}
      </h4>

      <p className="mt-1 text-xs leading-5 text-[#8F887B]">
        {text}
      </p>
    </div>
  );
}

function MarketStep({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-4 py-2 text-[#BDB5A7]">
      {text}
    </span>
  );
}