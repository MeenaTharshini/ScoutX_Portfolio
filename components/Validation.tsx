
"use client";

import { motion } from "framer-motion";
import {
  FaFlask,
  FaLightbulb,
  FaBuilding,
  FaBrain,
  FaHandshake,
  FaChartLine,
  FaExclamationTriangle,
  FaArrowRight,
  FaCheckCircle,
  FaBullseye,
  FaUsers,
  FaSearch,
  FaRocket,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface ValidationTest {
  number: string;
  icon: IconType;
  title: string;
  question: string;
  test: string;
  signals: string[];
}

const validationTests: ValidationTest[] = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Can we make hidden innovation discoverable?",
    question:
      "Will people share things they have already built even when they are not part of a hackathon, incubator, or established innovation network?",
    test:
      "We will bring in students, developers, researchers, and independent builders who already have real work and see whether ScoutX can turn that work into useful, discoverable profiles.",
    signals: [
      "Projects submitted",
      "Profile completion",
      "Evidence quality",
      "Creator retention",
    ],
  },
  {
    number: "02",
    icon: FaBuilding,
    title: "Do organizations actually have this problem?",
    question:
      "When an organization needs a solution, will it look beyond the people and vendors it already knows?",
    test:
      "We will work with organizations that bring real technical or business problems and observe whether they use ScoutX to search for alternatives.",
    signals: [
      "Problems submitted",
      "Search activity",
      "Shortlists created",
      "Repeat usage",
    ],
  },
  {
    number: "03",
    icon: FaBrain,
    title: "Can AI make discovery meaningfully better?",
    question:
      "Can ScoutX understand what an innovation does well enough to find useful matches beyond keywords?",
    test:
      "We will compare ScoutX recommendations against conventional search and collect feedback from the organizations evaluating the results.",
    signals: [
      "Relevant matches",
      "Match quality",
      "Search satisfaction",
      "Time saved",
    ],
  },
  {
    number: "04",
    icon: FaHandshake,
    title: "Does a match lead to a real opportunity?",
    question:
      "Finding a project is not enough. Will organizations actually want to talk to the people behind it?",
    test:
      "We will follow every meaningful match and track whether it turns into a creator contact, meeting, technical evaluation, pilot, or collaboration.",
    signals: [
      "Creator contacts",
      "Meetings",
      "Evaluations",
      "Pilot discussions",
    ],
  },
  {
    number: "05",
    icon: FaChartLine,
    title: "Will organizations pay for the value we create?",
    question:
      "If ScoutX saves discovery time or surfaces valuable solutions, is that value strong enough to become a paid service?",
    test:
      "After proving useful discovery, we will introduce paid discovery missions and test whether organizations are willing to pay for the outcome.",
    signals: [
      "Paid pilots",
      "Conversion",
      "Repeat usage",
      "Willingness to pay",
    ],
  },
];

const pilotSteps = [
  {
    number: "01",
    icon: FaLightbulb,
    title: "Build the first innovation layer",
    description:
      "We will start with a curated set of genuine projects from students, developers, researchers, and builders.",
    metric: "50–100 innovations",
  },
  {
    number: "02",
    icon: FaBuilding,
    title: "Bring real problems",
    description:
      "We will work with a small number of organizations that are willing to bring problems they genuinely want to solve.",
    metric: "5–10 organizations",
  },
  {
    number: "03",
    icon: FaSearch,
    title: "Let them scout",
    description:
      "Organizations will describe their needs, search ScoutX, review recommendations, and compare what they find with their normal discovery process.",
    metric: "Measure relevance",
  },
  {
    number: "04",
    icon: FaHandshake,
    title: "Follow what happens next",
    description:
      "A match only matters if something happens after it. We will track conversations, evaluations, pilots, and collaboration.",
    metric: "Track outcomes",
  },
  {
    number: "05",
    icon: FaRocket,
    title: "Test whether it is worth paying for",
    description:
      "Once we can demonstrate repeated value, we will test paid discovery with organizations that want ScoutX to solve specific problems.",
    metric: "Paid pilot",
  },
];

const risks = [
  {
    title: "The innovation layer may not have enough quality",
    response:
      "We will not open the platform to everything on day one. We will curate the first supply, require meaningful evidence, and improve quality standards as we learn.",
  },
  {
    title: "Organizations may not search",
    response:
      "We will not rely on surveys to answer this. We will put real problems in front of organizations and watch what they actually do.",
  },
  {
    title: "AI may produce impressive but useless matches",
    response:
      "Human feedback stays in the loop. We will measure whether organizations consider recommendations genuinely relevant before trusting automated ranking.",
  },
  {
    title: "Creators may not get meaningful value",
    response:
      "We care about qualified visibility, conversations, pilots, and opportunities — not vanity metrics like profile views alone.",
  },
  {
    title: "The marketplace may become too broad too early",
    response:
      "Our first version will stay focused. We would rather dominate one discovery problem than build a huge marketplace that nobody uses.",
  },
];

export default function Validation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-[#080806] px-6 py-24 text-[#F7F2E8] sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-250px] top-[200px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-250px] top-[1250px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.03] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================== */}
        {/* FOUNDER INTRO */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            <FaFlask className="text-[10px]" />
            How We Will Validate ScoutX
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            We have the{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              vision.
            </span>
            <br />
            Now we need the{" "}
            <span className="bg-gradient-to-r from-[#E7C979] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              evidence.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A9A293] sm:text-lg">
            We are not assuming that ScoutX will work simply because the idea
            makes sense. We want to put it in front of real innovators, real
            organizations, and real problems — and let the results decide what
            we build next.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* OUR CORE HYPOTHESIS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-7 sm:p-10">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  What We Believe
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  “I built something.{" "}
                  <span className="text-[#D4AF37]">
                    Can anyone find it?
                  </span>
                  ”
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#8F887B]">
                  There is already a huge amount of innovation being created
                  by people who never get the right opportunity to showcase it.
                  We believe that work deserves to remain discoverable.
                </p>
              </div>

              <div className="hidden lg:block">
                <FaArrowRight className="text-xl text-[#D4AF37]/50" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  What We Need to Prove
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  “Who has already{" "}
                  <span className="text-[#D4AF37]">
                    solved this?
                  </span>
                  ”
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#8F887B]">
                  Organizations should be able to describe a real problem and
                  discover relevant work without already knowing who created
                  it.
                </p>
              </div>

            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-6 text-center">
              <p className="text-sm font-medium leading-6 text-[#C9C1B3]">
                Our first job is to prove that these two people can actually
                find each other through ScoutX.
              </p>
            </div>

          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* FIVE QUESTIONS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            What We Need to Learn
          </p>

          <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
            Before we scale, we need answers to five questions.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#817A6E]">
            Each question represents an assumption behind ScoutX. Instead of
            defending those assumptions, we want to test them.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* VALIDATION TESTS */}
        {/* ===================================================== */}

        <div className="mt-10 grid gap-5 lg:grid-cols-2">

          {validationTests.map((test, index) => {
            const Icon = test.icon;

            return (
              <motion.article
                key={test.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className={`group rounded-3xl border border-[#D4AF37]/10 bg-[#11100D] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25 ${
                  index === 4 ? "lg:col-span-2 lg:max-w-3xl lg:mx-auto" : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon />
                  </div>

                  <span className="font-mono text-xs text-[#D4AF37]/50">
                    {test.number}
                  </span>

                </div>

                <h4 className="mt-6 text-xl font-bold leading-7">
                  {test.title}
                </h4>

                <p className="mt-3 text-sm font-medium leading-6 text-[#D4AF37]">
                  {test.question}
                </p>

                <div className="mt-6">

                  <div className="rounded-2xl border border-white/[0.06] bg-[#0B0B09] p-5">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817A6E]">
                      How We'll Test It
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#A9A293]">
                      {test.test}
                    </p>

                  </div>

                  <div className="mt-5">

                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817A6E]">
                      What We'll Watch
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {test.signals.map((signal) => (
                        <span
                          key={signal}
                          className="flex items-center gap-2 rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/[0.04] px-3 py-1.5 text-[11px] text-[#A9A293]"
                        >
                          <FaCheckCircle className="text-[9px] text-[#D4AF37]" />
                          {signal}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* ===================================================== */}
        {/* FIRST PILOT */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Our First Pilot
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Start small.
              <br />
              <span className="text-[#A9A293]">
                Learn from reality.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#8F887B] sm:text-base">
              We don't want to build a massive marketplace first and then
              search for a reason to use it. We want to start with a focused
              network, real problems, and measurable outcomes.
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-5xl">

            {pilotSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="group grid gap-5 border-b border-white/[0.07] py-7 md:grid-cols-[55px_45px_1fr_auto] md:items-center"
                >

                  <span className="font-mono text-xs text-[#D4AF37]/60">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#E7C979]">
                    <Icon className="text-xs" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold">
                      {step.title}
                    </h4>

                    <p className="mt-1 max-w-3xl text-sm leading-6 text-[#8F887B]">
                      {step.description}
                    </p>
                  </div>

                  <div className="w-fit rounded-full border border-[#D4AF37]/10 bg-[#11100D] px-4 py-2 text-[11px] font-medium text-[#C9C1B3]">
                    {step.metric}
                  </div>

                </motion.div>
              );
            })}

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* PILOT LOOP */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl"
        >

          <div className="rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-7 sm:p-10">

            <div className="text-center">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                What We Want to See
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                A real discovery loop.
              </h3>

            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">

              {[
                "Real problem",
                "ScoutX search",
                "Relevant innovation",
                "Creator connection",
                "Real opportunity",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >

                  <span className="rounded-full border border-[#D4AF37]/15 bg-[#0B0B09] px-4 py-2.5 text-xs font-medium text-[#BDB5A7]">
                    {item}
                  </span>

                  {index < 4 && (
                    <FaArrowRight className="text-[10px] text-[#D4AF37]/40" />
                  )}

                </div>
              ))}

            </div>

            <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-[#6F6A60]">
              If this loop happens repeatedly, we have evidence that ScoutX is
              solving a real discovery problem — not simply creating another
              place to upload projects.
            </p>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* RISKS */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                <FaExclamationTriangle />
                What We Could Get Wrong
              </div>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                We know where
                <br />
                <span className="text-[#A9A293]">
                  this could fail.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#8F887B]">
                We would rather identify a weakness early than hide it behind
                a polished product. These are some of the assumptions we are
                actively testing.
              </p>

            </div>

            <div className="space-y-3">

              {risks.map((risk, index) => (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/[0.07] bg-[#11100D] p-5"
                >

                  <div className="flex gap-4">

                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                      <FaBullseye className="text-[10px]" />
                    </div>

                    <div>

                      <h4 className="font-semibold">
                        {risk.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-[#8F887B]">
                        {risk.response}
                      </p>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* WHAT SUCCESS LOOKS LIKE */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-5xl"
        >

          <div className="rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#17150F] to-[#0E0E0C] p-8 text-center sm:p-12">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
              <FaChartLine />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Our Definition of Success
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-5xl">
              Prove the connection.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8F887B] sm:text-base">
              For us, success is not having thousands of profiles or generating
              impressive AI reports. It is much simpler:
            </p>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#D4AF37]/10 bg-[#0B0B09] p-6">

              <p className="text-base font-medium leading-7 text-[#C9C1B3] sm:text-lg">
                A creator who was previously difficult to discover becomes
                visible to an organization with a real problem — and that
                discovery creates a meaningful conversation, opportunity, or
                collaboration.
              </p>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">

              {[
                "Discover",
                "Match",
                "Connect",
                "Validate",
                "Repeat",
              ].map((item, index) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-4 py-2 text-xs font-semibold text-[#C9C1B3]"
                >
                  <span className="mr-2 text-[#D4AF37]">
                    0{index + 1}
                  </span>
                  {item}
                </span>
              ))}

            </div>

          </div>

        </motion.div>

        {/* ===================================================== */}
        {/* FOUNDER CLOSING */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >

          <p className="text-sm leading-7 text-[#817A6E]">
            We don't want to build ScoutX because we believe the world needs
            another platform.
          </p>

          <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
            We want to build it because
            <br />
            <span className="gradient-text">
              too many useful ideas are still waiting to be found.
            </span>
          </h3>

        </motion.div>

      </div>
    </section>
  );
}
