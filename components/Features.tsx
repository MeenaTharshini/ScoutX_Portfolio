"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRobot,
  FaSearch,
  FaChartLine,
  FaBuilding,
  FaBullhorn,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const innovatorFeatures = [
  {
    icon: FaLightbulb,
    title: "Post Your Idea",
    text: "Share an idea, project, prototype, or solution with supporting evidence.",
  },
  {
    icon: FaRobot,
    title: "AI Innovation Review",
    text: "Get an AI-assisted assessment of innovation, relevance, feasibility, and potential.",
  },
  {
    icon: FaSearch,
    title: "Discover Related Work",
    text: "Explore similar ideas, existing approaches, and related innovations.",
  },
  {
    icon: FaChartLine,
    title: "Know Your Potential",
    text: "Understand your project's strengths and areas that could be improved.",
  },
];

const organizationFeatures = [
  {
    icon: FaSearch,
    title: "Search Innovation",
    text: "Search by technology, domain, capability, or keywords.",
  },
  {
    icon: FaRobot,
    title: "Smart Matching",
    text: "ScoutX surfaces projects and innovators relevant to your requirements.",
  },
  {
    icon: FaUsers,
    title: "Shortlist & Connect",
    text: "Select promising projects and connect directly with their builders.",
  },
  {
    icon: FaBullhorn,
    title: "Post a Problem",
    text: "Can't find the right solution? Publish your problem for innovators to solve.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-16 text-[#F7F2E8] md:py-20"
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
            ScoutX Features
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Two sides.{" "}
            <span className="text-gradient">
              One innovation ecosystem.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#A9A293] md:text-base">
            Innovators bring ideas to ScoutX. Organizations discover them,
            connect with builders, or publish problems when the right solution
            doesn't exist yet.
          </p>
        </motion.div>

        {/* TWO SIDES */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">

          {/* INNOVATOR */}
          <FeaturePanel
            eyebrow="For Innovators"
            title="Build. Prove. Get discovered."
            description="Turn your work into an evidence-backed innovation profile."
            features={innovatorFeatures}
          />

          {/* ORGANIZATION */}
          <FeaturePanel
            eyebrow="For Organizations"
            title="Search. Match. Solve."
            description="Find relevant innovation without waiting for the next hackathon."
            features={organizationFeatures}
          />

        </div>

        {/* TWO-WAY LOOP */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-6 text-center md:p-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Loop
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Find a solution — or create one.
          </h3>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm">
            <LoopItem text="Organization Need" />
            <FaArrowRight className="text-[#D4AF37]/50" />
            <LoopItem text="ScoutX Matching" />
            <FaArrowRight className="text-[#D4AF37]/50" />
            <LoopItem text="Existing Innovation" />
            <span className="mx-1 text-[#8F887B]">or</span>
            <LoopItem text="Open Problem" />
            <FaArrowRight className="text-[#D4AF37]/50" />
            <LoopItem text="New Innovation" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function FeaturePanel({
  eyebrow,
  title,
  description,
  features,
}: {
  eyebrow: string;
  title: string;
  description: string;
  features: {
    icon: any;
    title: string;
    text: string;
  }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition hover:border-[#D4AF37]/25 md:p-7"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
        {eyebrow}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#A9A293]">
        {description}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="flex gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/15 bg-[#0B0B09] text-[#E7C979]">
                <Icon className="text-xs" />
              </div>

              <div>
                <h4 className="text-sm font-semibold">
                  {feature.title}
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                  {feature.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function LoopItem({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#0B0B09] px-3 py-2 text-[#A9A293]">
      {text}
    </span>
  );
}