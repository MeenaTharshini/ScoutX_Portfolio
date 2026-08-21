"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaComments,
  FaGlobe,
  FaLightbulb,
  FaRobot,
  FaRocket,
  FaSearch,
} from "react-icons/fa";

const advantages = [
  {
    icon: FaGlobe,
    title: "Wider Reach",
    text: "Discover ideas beyond hackathons and traditional recruitment.",
  },
  {
    icon: FaRobot,
    title: "AI Evaluation",
    text: "Analyze value, uniqueness, relevance, feasibility, and potential.",
  },
  {
    icon: FaSearch,
    title: "Smart Filtering",
    text: "Find relevant ideas from a growing innovation ecosystem.",
  },
  {
    icon: FaComments,
    title: "Direct Connection",
    text: "Move from discovery to communication, collaboration, pilots, or opportunities.",
  },
];

const traditional = [
  "Limited participant pool",
  "Event planning and coordination",
  "High operational overhead",
  "Fixed event timeline",
];

const scoutx = [
  "Larger innovation pool",
  "AI-assisted evaluation",
  "Requirement-based matching",
  "Focused shortlist",
  "Direct communication",
];

export default function Advantage() {
  return (
    <section
      id="advantage"
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F1E3] md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Advantage
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Innovation discovery{" "}
            <span className="gradient-text">
              without depending on hackathons.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] md:text-lg">
            Hackathons can be valuable, but they require planning,
            participants, travel, infrastructure, time, and resources.
            ScoutX provides another way: discover ideas already existing
            in a continuously growing innovation ecosystem.
          </p>
        </motion.div>

        {/* CORE ADVANTAGES */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-6 transition hover:border-[#D4AF37]/35"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
                <Icon />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DIFFERENT APPROACH */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            A Different Approach
          </p>

          <h3 className="mt-4 text-3xl font-bold md:text-5xl">
            Why wait for the next{" "}
            <span className="gradient-text">hackathon?</span>
          </h3>

          <p className="mt-5 leading-7 text-[#A9A293]">
            ScoutX changes innovation discovery from an event-based
            process into a continuous discovery ecosystem.
          </p>
        </div>

        {/* COMPARISON */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">

          {/* Traditional */}
          <div className="rounded-3xl border border-white/10 bg-[#11100D] p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#777267]">
              Traditional Discovery
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Organize a Hackathon
            </h3>

            <div className="mt-7 space-y-4">
              {traditional.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm text-[#918A7D]"
                >
                  <span className="text-[#6D675D]">×</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ScoutX */}
          <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#17150F] p-7 md:p-8">
            <div className="flex items-center gap-3">
              <FaRocket className="text-[#E7C979]" />

              <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                ScoutX
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-bold">
              Continuous Innovation Discovery
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#A9A293]">
              AI connects company requirements with relevant ideas
              already available on the platform.
            </p>

            <div className="mt-7 space-y-4">
              {scoutx.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm text-[#C0B8A9]"
                >
                  <FaCheckCircle className="mt-0.5 shrink-0 text-[#D4AF37]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DIFFERENTIATOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Why ScoutX?
          </p>

          <h3 className="mt-4 text-3xl font-bold md:text-5xl">
            From scattered ideas to{" "}
            <span className="gradient-text">
              discoverable innovation.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-[#A9A293]">
            ScoutX creates a structured layer between builders, their
            work, and organizations looking for relevant innovation.
          </p>
        </motion.div>

        {/* FINAL MESSAGE */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <FaRocket className="mx-auto text-3xl text-[#D4AF37]" />

          <h3 className="mt-5 text-3xl font-bold md:text-4xl">
            Make valuable innovation{" "}
            <span className="gradient-text">
              discoverable.
            </span>
          </h3>

          <p className="mt-4 leading-7 text-[#A9A293]">
            ScoutX turns scattered projects and prototypes into
            structured, discoverable innovation — creating a path from
            building to real-world opportunity.
          </p>
        </div>

      </div>
    </section>
  );
}