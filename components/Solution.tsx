"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaBuilding,
  FaCheck,
  FaComments,
  FaLightbulb,
  FaSearch,
  FaTools,
  FaUser,
} from "react-icons/fa";

const creatorSteps = [
  {
    icon: FaLightbulb,
    title: "Publish",
    text: "Share what you built.",
  },
  {
    icon: FaBrain,
    title: "Understand",
    text: "ScoutX structures the innovation.",
  },
  {
    icon: FaSearch,
    title: "Get discovered",
    text: "Become visible when someone needs it.",
  },
];

const organizationSteps = [
  {
    icon: FaSearch,
    title: "Describe",
    text: "Tell ScoutX what you need.",
  },
  {
    icon: FaBrain,
    title: "Discover",
    text: "ScoutX surfaces relevant innovation.",
  },
  {
    icon: FaComments,
    title: "Connect",
    text: "Explore the people behind it.",
  },
];

const aiSignals = [
  "What problem does it solve?",
  "What does it actually do?",
  "Where could it be useful?",
  "What related work exists?",
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#0B0B09] px-5 py-24 text-[#F7F2E8] md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.05] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
            The Solution
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Don't just store innovation.
            <br />
            <span className="gradient-text">
              Make it discoverable.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            ScoutX turns projects into understandable, searchable
            innovation — so the right people can find each other.
          </p>
        </motion.div>

        {/* CORE DIFFERENCE */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#11100D] p-6 md:p-10">

            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">

              <div className="rounded-2xl border border-white/[0.06] bg-[#0B0B09] p-6 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#817A6E]">
                  Traditional Portfolio
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Stores information.
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#817A6E]">
                  A project exists, but its usefulness may remain hidden.
                </p>
              </div>

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/40 md:rotate-0" />

              <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] p-6 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
                  ScoutX
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Understands & connects.
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#A9A293]">
                  Innovation becomes easier to understand, search, and match
                  with real needs.
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* HOW IT WORKS */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              How ScoutX Works
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              One simple loop.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#817A6E]">
              Innovation enters ScoutX. ScoutX makes sense of it.
              Organizations find it.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-5 md:items-center">

            <SimpleNode
              icon={FaLightbulb}
              label="CREATOR"
              title="Build"
              text="A project, prototype, research, or product."
            />

            <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/30 md:rotate-0" />

            <SimpleNode
              icon={FaBrain}
              label="SCOUTX"
              title="Understand"
              text="Structure the innovation and surface useful signals."
              highlight
            />

            <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/30 md:rotate-0" />

            <SimpleNode
              icon={FaBuilding}
              label="ORGANIZATION"
              title="Discover"
              text="Find relevant innovation and the people behind it."
            />

          </div>
        </motion.div>

        {/* AI — MUCH SIMPLER */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-9"
        >
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">

            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
                <FaBrain />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                ScoutX AI
              </p>

              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Make innovation
                <br />
                easier to understand.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#8F887B]">
                AI helps structure projects and surface the information
                people need to decide whether something is worth exploring.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {aiSignals.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#0B0B09] p-4"
                >
                  <FaCheck className="shrink-0 text-xs text-[#D4AF37]" />

                  <span className="text-xs text-[#C9C1B3]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* TWO SIDES */}

        <div className="mt-16 grid gap-5 lg:grid-cols-2">

          <FlowCard
            eyebrow="FOR INNOVATORS"
            title="Give your work a path to discovery."
            steps={creatorSteps}
          />

          <FlowCard
            eyebrow="FOR ORGANIZATIONS"
            title="Start with the problem."
            steps={organizationSteps}
          />

        </div>

        {/* SEARCH BY NEED */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              The Key Difference
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-5xl">
              Search by{" "}
              <span className="gradient-text">
                need.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#8F887B]">
              Organizations don't need to know who built the answer.
              They only need to describe the problem.
            </p>

          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8">

            <div className="grid gap-3 md:grid-cols-3 md:items-center">

              <SearchBox
                label="THE NEED"
                icon={FaBuilding}
                text="Find a low-cost way to detect pipeline leaks."
              />

              <div className="flex justify-center">
                <FaArrowRight className="rotate-90 text-[#D4AF37]/40 md:rotate-0" />
              </div>

              <SearchBox
                label="SCOUTX"
                icon={FaBrain}
                text="Understands the need and finds relevant innovation."
                highlight
              />

            </div>

            <div className="mt-4 flex justify-center">
              <FaArrowRight className="rotate-90 text-[#D4AF37]/40" />
            </div>

            <div className="mt-4">
              <SearchBox
                label="THE MATCH"
                icon={FaLightbulb}
                text="Explore the solution, evidence, and creator."
              />
            </div>

          </div>
        </motion.div>

        {/* NO MATCH */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 rounded-[2rem] border border-[#D4AF37]/20 bg-[#15130E] p-7 text-center md:p-9"
        >
          <FaTools className="mx-auto text-xl text-[#D4AF37]" />

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
            Nothing Matches?
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Turn the problem into an{" "}
            <span className="gradient-text">
              opportunity.
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A9A293]">
            If ScoutX cannot find an existing solution, the organization
            can publish the problem and invite innovation toward it.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <MiniPill text="Problem" />
            <FaArrowRight className="text-xs text-[#D4AF37]/40" />
            <MiniPill text="Opportunity" />
            <FaArrowRight className="text-xs text-[#D4AF37]/40" />
            <MiniPill text="Innovation" />
            <FaArrowRight className="text-xs text-[#D4AF37]/40" />
            <MiniPill text="Connection" />
          </div>
        </motion.div>

        {/* FINAL */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <h3 className="text-3xl font-bold leading-tight md:text-5xl">
            The internet made information searchable.
            <br />
            <span className="gradient-text">
              ScoutX makes innovation discoverable.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#817A6E]">
            Built ideas should not disappear simply because the right person
            never found them.
          </p>
        </motion.div>

      </div>
    </section>
  );
}


/* ============================================================= */
/* SIMPLE NODE */
/* ============================================================= */

function SimpleNode({
  icon: Icon,
  label,
  title,
  text,
  highlight = false,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 text-center ${
        highlight
          ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.07]"
          : "border-[#D4AF37]/10 bg-[#11100D]"
      }`}
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
        <Icon />
      </div>

      <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
        {label}
      </p>

      <h4 className="mt-2 text-lg font-bold">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-5 text-[#817A6E]">
        {text}
      </p>
    </div>
  );
}


/* ============================================================= */
/* FLOW CARD */
/* ============================================================= */

function FlowCard({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: {
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
      className="rounded-[2rem] border border-[#D4AF37]/10 bg-[#11100D] p-6 md:p-7"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
        {eyebrow}
      </p>

      <h3 className="mt-3 text-xl font-bold md:text-2xl">
        {title}
      </h3>

      <div className="mt-6 space-y-2">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className="flex gap-4 rounded-xl border border-white/[0.05] bg-[#0D0C0A] p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#E7C979]">
              <Icon className="text-xs" />
            </div>

            <div>
              <h4 className="text-sm font-bold">
                {title}
              </h4>

              <p className="mt-1 text-xs leading-5 text-[#817A6E]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}


/* ============================================================= */
/* SEARCH BOX */
/* ============================================================= */

function SearchBox({
  icon: Icon,
  label,
  text,
  highlight = false,
}: {
  icon: React.ElementType;
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center ${
        highlight
          ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.07]"
          : "border-white/[0.06] bg-[#0D0C0A]"
      }`}
    >
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
        <Icon className="text-xs" />
      </div>

      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
        {label}
      </p>

      <p className="mt-2 text-xs leading-5 text-[#A9A293]">
        {text}
      </p>
    </div>
  );
}


/* ============================================================= */
/* PILL */
/* ============================================================= */

function MiniPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-3 py-1.5 text-xs font-medium text-[#A9A293]">
      {text}
    </span>
  );
}