
"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaSearch,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

const revenueStreams = [
  {
    icon: FaSearch,
    number: "01",
    title: "ScoutX Pro",
    subtitle: "For teams that scout regularly",
    description:
      "For organizations that continuously look for technologies, projects, capabilities, and people beyond their existing networks.",
    features: [
      "Advanced innovation discovery",
      "AI-assisted problem matching",
      "Save & compare discoveries",
      "Team collaboration",
    ],
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Discovery Missions",
    subtitle: "For a specific problem",
    description:
      "When an organization has a problem and wants ScoutX to actively search the innovation network for relevant solutions.",
    features: [
      "Define the real-world problem",
      "AI-assisted discovery",
      "Relevant solution ranking",
      "Curated shortlist",
    ],
  },
  {
    icon: FaBuilding,
    number: "03",
    title: "Enterprise",
    subtitle: "For innovation at scale",
    description:
      "For larger organizations that want dedicated discovery workflows, private environments, multiple teams, and deeper innovation intelligence.",
    features: [
      "Private innovation workspaces",
      "Multiple teams & users",
      "Custom discovery workflows",
      "Innovation analytics",
    ],
  },
];

const reasons = [
  {
    title: "We reduce discovery time",
    text: "Instead of searching through disconnected networks, organizations can describe what they need and explore relevant work in one place.",
  },
  {
    title: "We reduce unnecessary rebuilding",
    text: "Before spending months developing something from scratch, organizations can first discover whether a relevant solution already exists.",
  },
  {
    title: "We expand who organizations can discover",
    text: "A useful solution may come from a student, researcher, developer, startup, or independent builder outside an organization's usual network.",
  },
];

export default function Business() {
  return (
    <section
      id="business"
      className="relative overflow-hidden bg-[#080806] px-5 py-20 text-[#F7F2E8] md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.05] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ========================================================= */}
        {/* FOUNDER INTRO */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            Our Business Model
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            We keep innovation{" "}
            <span className="gradient-text">open.</span>
            <br />
            We charge for{" "}
            <span className="gradient-text">discovery.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A9A293] md:text-base">
            We want anyone to be able to put their work on ScoutX — whether
            they are a student, developer, researcher, founder, or independent
            builder. Our business model is built around the organizations that
            gain value from discovering those innovations.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* OUR BELIEF */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-7 md:p-10"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* LEFT */}
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
                <FaLightbulb />
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                What We Believe
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
                The people creating innovation{" "}
                <span className="gradient-text">
                  shouldn't be the ones paying to be discovered.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#A9A293]">
                Our goal is to make the innovation layer as large and diverse
                as possible. That means reducing the barrier for creators to
                showcase what they have built.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#A9A293]">
                The value on the other side is different. Organizations save
                time, discover capabilities they did not know existed, and
                potentially avoid rebuilding solutions that already exist.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-3">
              {reasons.map(({ title, text }) => (
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

        {/* ========================================================= */}
        {/* VALUE EXCHANGE */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              The Value Exchange
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              We monetize the{" "}
              <span className="gradient-text">
                discovery problem.
              </span>
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#817A6E]">
              Creators bring the supply. Organizations bring the problems.
              ScoutX sits between them and makes the connection easier.
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-10">

            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">

              <BusinessNode
                icon={FaRocket}
                title="Innovator"
                text="Shares a project, prototype, research, or capability."
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/40 md:rotate-0" />

              <BusinessNode
                icon={FaSearch}
                title="ScoutX"
                text="Understands the innovation and connects it with relevant needs."
                highlight
              />

              <FaArrowRight className="mx-auto rotate-90 text-[#D4AF37]/40 md:rotate-0" />

              <BusinessNode
                icon={FaBuilding}
                title="Organization"
                text="Discovers, evaluates, and connects with relevant creators."
              />

            </div>

            <div className="mt-8 border-t border-[#D4AF37]/10 pt-6 text-center">
              <p className="text-xs leading-6 text-[#817A6E]">
                Our revenue comes from helping organizations discover
                innovation — not from putting a price on someone's ability
                to showcase what they have built.
              </p>
            </div>

          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* REVENUE STREAMS */}
        {/* ========================================================= */}

        <div className="mt-16">

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              How We Can Monetize
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Three ways organizations can use ScoutX.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#817A6E]">
              We are starting with a focused pilot and will validate which
              model creates the strongest recurring value.
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

                  <p className="mt-4 min-h-[88px] text-sm leading-6 text-[#8F887B]">
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

        {/* ========================================================= */}
        {/* OUR BUSINESS LOGIC */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Our Business Logic
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              The more useful discoveries we create,
              <br />
              <span className="gradient-text">
                the more valuable ScoutX becomes.
              </span>
            </h3>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-10">

            <div className="grid gap-5 md:grid-cols-5">

              <LogicStep
                number="01"
                title="More creators"
                text="More people bring their work onto ScoutX."
              />

              <LogicStep
                number="02"
                title="More innovation"
                text="The platform develops a richer innovation layer."
              />

              <LogicStep
                number="03"
                title="Better discovery"
                text="Organizations have more relevant things to discover."
              />

              <LogicStep
                number="04"
                title="More value"
                text="Useful matches create conversations and opportunities."
              />

              <LogicStep
                number="05"
                title="More organizations"
                text="Successful discoveries attract more demand."
              />

            </div>

          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* REVERSE MARKETPLACE */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                The Bigger Opportunity
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
                We don't want ScoutX to only answer:
                <br />
                <span className="gradient-text">
                  “Who built this?”
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#A9A293]">
                We also want organizations to be able to ask:
                “Who can solve this?”
              </p>

              <p className="mt-3 text-sm leading-7 text-[#A9A293]">
                If an organization cannot find an existing solution, it can
                publish the problem itself. Innovators can discover that
                opportunity and build toward a real need.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] p-6 md:p-8">

              <div className="space-y-3">

                <FlowItem text="Organization publishes a real problem" />
                <FlowArrow />
                <FlowItem text="Innovators discover the opportunity" />
                <FlowArrow />
                <FlowItem text="New solutions are developed" />
                <FlowArrow />
                <FlowItem text="ScoutX connects both sides" />

              </div>

            </div>

          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* VALIDATION */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] via-[#11100D] to-[#0B0B09] px-6 py-9 text-center md:px-10 md:py-12">

            <FaChartLine className="mx-auto text-xl text-[#D4AF37]" />

            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Where We Are Today
            </p>

            <h3 className="mt-3 text-2xl font-bold md:text-4xl">
              We are not assuming the business model.
              <br />
              <span className="gradient-text">
                We are going to prove it.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#817A6E]">
              Our first goal is not to maximize revenue. It is to prove that
              ScoutX can repeatedly help organizations discover useful
              innovation that they would otherwise struggle to find.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-4">

              <ValidationItem number="01" text="Discover" />
              <ValidationItem number="02" text="Match" />
              <ValidationItem number="03" text="Connect" />
              <ValidationItem number="04" text="Measure value" />

            </div>

            <p className="mx-auto mt-8 max-w-xl text-xs leading-6 text-[#6F6A60]">
              Once organizations repeatedly see measurable value from
              discovery, we can turn that value into a sustainable business.
            </p>

          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* CLOSING */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm leading-7 text-[#817A6E]">
            Our vision is simple:
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
            Make it free for people to{" "}
            <span className="gradient-text">create and showcase.</span>
            <br />
            Make it valuable for organizations to{" "}
            <span className="gradient-text">discover.</span>
          </h3>

        </motion.div>

      </div>
    </section>
  );
}

/* ============================================================= */
/* BUSINESS NODE */
/* ============================================================= */

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

/* ============================================================= */
/* LOGIC STEP */
/* ============================================================= */

function LogicStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-5">
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
/* FLOW ITEM */
/* ============================================================= */

function FlowItem({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-[#D4AF37]/10 bg-[#0B0B09] px-4 py-3 text-center text-xs font-medium text-[#BDB5A7]">
      {text}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center text-[#D4AF37]/40">
      <FaArrowRight className="rotate-90 text-xs" />
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
