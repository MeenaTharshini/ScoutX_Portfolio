"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaCheckCircle,
  FaComments,
  FaLightbulb,
  FaSearch,
  FaTools,
  FaUser,
} from "react-icons/fa";

const aiInsights = [
  "Problem & solution fit",
  "Related innovations",
  "Existing research",
  "Technical feasibility",
  "Innovation potential",
  "Differentiation",
  "Improvement opportunities",
  "Evidence & validation",
];

const innovatorSteps = [
  {
    icon: FaLightbulb,
    title: "Share",
    text: "Post an idea, prototype, research project, solution, or portfolio.",
  },
  {
    icon: FaBrain,
    title: "Understand",
    text: "ScoutX AI analyzes the idea, related work, feasibility, and innovation potential.",
  },
  {
    icon: FaTools,
    title: "Improve",
    text: "Get AI-assisted insights that help identify gaps, strengthen the idea, and make it more valuable.",
  },
  {
    icon: FaSearch,
    title: "Get Discovered",
    text: "Your innovation becomes searchable by organizations looking for relevant solutions.",
  },
];

const organizationSteps = [
  {
    icon: FaSearch,
    title: "Search",
    text: "Describe a problem, requirement, technology, or capability you need.",
  },
  {
    icon: FaBrain,
    title: "Match",
    text: "ScoutX AI finds and ranks existing innovations based on meaningful relevance.",
  },
  {
    icon: FaUser,
    title: "Discover",
    text: "Explore the innovation, evidence, capabilities, and creator behind it.",
  },
  {
    icon: FaComments,
    title: "Connect",
    text: "Contact the creator and explore collaboration, validation, adoption, or further development.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            The ScoutX Solution
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Make innovation{" "}
            <span className="text-gradient">discoverable.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX gives innovators a place to make their ideas visible,
            understand and improve them with AI, and connect with organizations
            that need solutions.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-6 text-[#C9C1B3]">
            Great ideas shouldn't need a hackathon to be discovered.
          </p>
        </motion.div>

        {/* DISCOVERY GAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8"
        >
          <div className="grid items-center gap-7 md:grid-cols-[1fr_auto_1fr]">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#817A6E]">
                Today
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Innovation depends on access.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                Many people have ideas and projects but never get the time,
                opportunity, network, or access to participate in hackathons,
                competitions, incubators, or innovation programs.
              </p>
            </div>

            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
              <FaArrowRight />
            </div>

            <div className="text-center md:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                With ScoutX
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Innovation becomes continuously discoverable.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                Anyone can publish their innovation and become visible to
                organizations searching for solutions — without waiting for
                the next hackathon or opportunity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CORE IDEA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            One continuous layer
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            From <span className="text-gradient">idea</span> to{" "}
            <span className="text-gradient">opportunity.</span>
          </h3>

          <div className="mx-auto mt-7 flex max-w-5xl flex-wrap items-center justify-center gap-2">
            <FlowPill text="Create" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Understand" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Improve" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Discover" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Match" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Connect" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Collaborate" />
          </div>
        </motion.div>

        {/* TWO SIDES */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <FlowCard
            label="For Innovators"
            title="Build once. Improve continuously. Stay discoverable."
            steps={innovatorSteps}
          />

          <FlowCard
            label="For Organizations"
            title="Find solutions, discover creators, solve problems."
            steps={organizationSteps}
          />
        </div>

        {/* AI INTELLIGENCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#11100D]"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-7 md:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaBrain />
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                AI Innovation Intelligence
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                More than matching.
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#A9A293]">
                ScoutX AI helps innovators understand and strengthen their
                ideas while helping organizations understand which innovations
                are actually relevant to their problems.
              </p>

              <div className="mt-6 space-y-3">
                <AIFlow
                  icon={FaLightbulb}
                  label="Innovation"
                  text="Idea, project, prototype, or research"
                />

                <AIFlow
                  icon={FaBrain}
                  label="AI Analysis"
                  text="Understand, compare, evaluate, and improve"
                />

                <AIFlow
                  icon={FaBuilding}
                  label="Organization"
                  text="Find relevant solutions and creators"
                />
              </div>
            </div>

            <div className="border-t border-[#D4AF37]/10 bg-[#0D0C0A] p-7 md:border-l md:border-t-0 md:p-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                What ScoutX AI can consider
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {aiInsights.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-2 rounded-xl border border-[#D4AF37]/10 bg-[#11100D] px-3 py-2.5 text-xs text-[#C9C1B3]"
                  >
                    <FaCheckCircle className="shrink-0 text-[10px] text-[#D4AF37]" />
                    {signal}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#D4AF37]/10 bg-[#11100D] p-4">
                <p className="text-xs font-semibold text-[#E7C979]">
                  AI doesn't replace the innovator.
                </p>

                <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                  It gives the creator better insight into what they have
                  built, where it can improve, and where it may create value.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ORGANIZATION SEARCH */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              For Organizations
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              Search for{" "}
              <span className="text-gradient">solutions, not just people.</span>
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#A9A293]">
              Instead of relying only on hackathon winners, known networks,
              institutions, or existing contacts, organizations can search
              the wider ScoutX innovation layer.
            </p>
          </div>

          <div className="mt-7 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              <SearchCard
                icon={FaBuilding}
                title="Organization"
                text="We need a low-cost pipeline leak detection solution."
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/40 md:rotate-0" />

              <SearchCard
                icon={FaBrain}
                title="ScoutX AI"
                text="Analyzes the problem and finds relevant innovations."
                highlight
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/40 md:rotate-0" />

              <SearchCard
                icon={FaLightbulb}
                title="Relevant Innovation"
                text="Explore the project, evidence, technology, and creator."
              />
            </div>
          </div>
        </motion.div>

        {/* PROBLEM POSTING */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-[2rem] border border-[#D4AF37]/20 bg-[#11100D] p-7 text-center md:p-9"
        >
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
            <FaTools />
          </div>

          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            No existing solution?
          </p>

          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            Turn the problem into an{" "}
            <span className="text-gradient">open opportunity.</span>
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#A9A293]">
            Organizations can post real, unsolved problems. Innovators can
            discover those problems, develop solutions, and submit their ideas
            directly to the organization.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <FlowPill text="Organization Problem" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Post on ScoutX" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Innovators Discover" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="New Solutions" />
            <FaArrowRight className="text-[#D4AF37]/40" />
            <FlowPill text="Collaboration" />
          </div>
        </motion.div>

        {/* TWO-WAY NETWORK */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The ScoutX Network
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Innovation flows in{" "}
            <span className="text-gradient">both directions.</span>
          </h3>

          <div className="mx-auto mt-7 grid max-w-5xl gap-4 md:grid-cols-2">
            <NetworkCard
              title="Innovator → Organization"
              description="An innovator publishes an idea. ScoutX makes it understandable and discoverable. An organization finds it and starts a conversation."
              icon={FaLightbulb}
            />

            <NetworkCard
              title="Organization → Innovator"
              description="An organization posts a real problem. Innovators discover the need, develop solutions, and connect with the organization."
              icon={FaBuilding}
            />
          </div>
        </motion.div>

        {/* FINAL MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-4xl text-center"
        >
          <p className="text-lg font-semibold leading-8 text-[#F7F2E8] md:text-2xl">
            ScoutX doesn't just help organizations find innovation.
          </p>

          <p className="mt-2 text-lg font-semibold leading-8 text-[#D4AF37] md:text-2xl">
            It helps innovation find the right opportunity.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#8F887B]">
            From idea to insight. From discovery to connection. From real
            problems to new solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* FLOW CARD */

function FlowCard({
  label,
  title,
  steps,
}: {
  label: string;
  title: string;
  steps: readonly {
    icon: React.ElementType;
    title: string;
    text: string;
  }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 transition hover:border-[#D4AF37]/25 md:p-7"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
        {label}
      </p>

      <h3 className="mt-3 text-xl font-bold">{title}</h3>

      <div className="mt-6 space-y-3">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className="flex gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
              <Icon className="text-xs" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold text-[#D4AF37]">
                  0{index + 1}
                </span>

                <h4 className="text-sm font-semibold">{title}</h4>
              </div>

              <p className="mt-1 text-xs leading-5 text-[#8F887B]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* AI FLOW */

function AIFlow({
  icon: Icon,
  label,
  text,
}: {
  icon: React.ElementType;
  label: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#D4AF37]/10 bg-[#0D0C0A] p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
        <Icon className="text-xs" />
      </div>

      <div>
        <p className="text-xs font-semibold text-[#F7F2E8]">{label}</p>
        <p className="mt-0.5 text-[11px] text-[#8F887B]">{text}</p>
      </div>
    </div>
  );
}

/* SEARCH CARD */

function SearchCard({
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
          : "border-[#D4AF37]/10 bg-[#0D0C0A]"
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

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
        {title}
      </p>

      <p className="mt-2 text-xs leading-5 text-[#A9A293]">{text}</p>
    </div>
  );
}

/* NETWORK CARD */

function NetworkCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-6 text-left transition hover:border-[#D4AF37]/25">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
        <Icon className="text-sm" />
      </div>

      <h4 className="mt-4 text-base font-bold">{title}</h4>

      <p className="mt-2 text-sm leading-6 text-[#8F887B]">
        {description}
      </p>
    </div>
  );
}

/* PILL */

function FlowPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-3 py-1.5 text-xs text-[#A9A293]">
      {text}
    </span>
  );
}