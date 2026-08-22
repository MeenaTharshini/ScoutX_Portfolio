"use client";

import { motion } from "framer-motion";

const validationQuestions = [
  {
    number: "01",
    title: "Will organizations search before building?",
    description:
      "The core assumption is that companies will consider searching an existing innovation database before launching a new challenge, hackathon or internal R&D effort.",
    metric: "Discovery usage",
    signal: "Searches → relevant discoveries → repeat searches",
  },
  {
    number: "02",
    title: "Will creators submit their work?",
    description:
      "ScoutX needs enough high-quality ideas, prototypes and projects to make the platform valuable to organizations.",
    metric: "Creator adoption",
    signal: "Submissions → completed profiles → returning creators",
  },
  {
    number: "03",
    title: "Can ScoutX find relevant innovation?",
    description:
      "Search quality is central to the product. Organizations should be able to describe a requirement and receive genuinely useful projects.",
    metric: "Match relevance",
    signal: "Search → shortlist → organization feedback",
  },
  {
    number: "04",
    title: "Will discovery create real outcomes?",
    description:
      "A successful search is only the beginning. ScoutX ultimately needs to create conversations, pilots, collaborations or other meaningful outcomes.",
    metric: "Connection conversion",
    signal: "Discovery → contact → discussion → opportunity",
  },
];

const experiments = [
  {
    phase: "01",
    title: "Creator Validation",
    goal: "Test whether people are willing to make their innovation discoverable.",
    actions: [
      "Invite students and independent builders",
      "Collect ideas, prototypes and research",
      "Test the innovation-profile experience",
      "Measure submission completion",
      "Interview creators about their motivations",
    ],
    success:
      "Creators consistently submit useful work and see value in being discoverable.",
  },
  {
    phase: "02",
    title: "Organization Validation",
    goal: "Test whether companies can discover useful innovation through ScoutX.",
    actions: [
      "Collect real company problems",
      "Convert requirements into search queries",
      "Return relevant innovation profiles",
      "Ask organizations to rank usefulness",
      "Track whether they want to contact creators",
    ],
    success:
      "Organizations find relevant projects they would realistically consider exploring.",
  },
  {
    phase: "03",
    title: "Matching Validation",
    goal: "Test whether AI-assisted discovery improves the search process.",
    actions: [
      "Compare keyword search with semantic discovery",
      "Generate innovation summaries",
      "Surface related technologies",
      "Explain relevance and evidence",
      "Collect human feedback on results",
    ],
    success:
      "AI-assisted discovery produces more useful results than simple keyword matching.",
  },
  {
    phase: "04",
    title: "Commercial Validation",
    goal: "Test whether organizations will pay for the value ScoutX provides.",
    actions: [
      "Offer pilot access",
      "Test organization subscriptions",
      "Test premium discovery workflows",
      "Measure willingness to pay",
      "Compare perceived value against current discovery costs",
    ],
    success:
      "Organizations demonstrate willingness to pay for repeated innovation discovery.",
  },
];

const metrics = [
  {
    value: "Supply",
    title: "Quality of innovation",
    items: [
      "Number of submitted innovations",
      "Profile completion",
      "Evidence attached",
      "Creator retention",
    ],
  },
  {
    value: "Demand",
    title: "Organization engagement",
    items: [
      "Organizations onboarded",
      "Searches performed",
      "Repeat searches",
      "Problems posted",
    ],
  },
  {
    value: "Match",
    title: "Discovery quality",
    items: [
      "Relevant results",
      "Shortlist rate",
      "Search satisfaction",
      "Creator contacts",
    ],
  },
  {
    value: "Outcome",
    title: "Real-world value",
    items: [
      "Discussions started",
      "Pilots initiated",
      "Collaborations",
      "Paid conversions",
    ],
  },
];

const risks = [
  {
    title: "Cold-start problem",
    description:
      "Too few quality innovations may make the platform unattractive to organizations, while too few organizations may reduce creator motivation.",
    response:
      "Start with a curated supply of high-quality projects and focused organization pilots.",
  },
  {
    title: "Trust and evidence",
    description:
      "Organizations may hesitate to act on ideas without knowing their maturity, authenticity or supporting evidence.",
    response:
      "Build structured evidence, verification signals and transparent project maturity.",
  },
  {
    title: "AI evaluation risk",
    description:
      "Innovation cannot be reduced to one universal score. AI-generated judgments can also be misleading.",
    response:
      "Use AI as an assistance layer that explains signals, evidence and gaps rather than declaring absolute truth.",
  },
  {
    title: "Low-intent submissions",
    description:
      "A large database is not useful if it contains mostly incomplete or low-quality ideas.",
    response:
      "Prioritize structured profiles, evidence and quality signals over raw submission volume.",
  },
  {
    title: "Organizations may continue using existing channels",
    description:
      "Companies may already have networks, consultants, R&D teams or innovation programs.",
    response:
      "Prove that ScoutX can discover relevant projects those channels would otherwise miss or discover less efficiently.",
  },
];

export default function Validation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden border-t border-white/10 bg-[#080806] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-[-200px] top-[400px] h-[500px] w-[500px] rounded-full bg-amber-300/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-amber-300/80">
            <span className="h-px w-8 bg-amber-300/60" />
            10 · Validation
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The idea is promising.
            <br />
            <span className="text-white/40">Now prove the assumptions.</span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
            ScoutX should not assume that creators, organizations or AI
            matching will automatically behave as expected. The startup
            becomes stronger by testing the most important assumptions with
            real users, real problems and measurable outcomes.
          </p>
        </motion.div>

        {/* Validation principle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-amber-300/15 bg-amber-300/[0.035] p-8 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/30">
                Before
              </div>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Assumptions
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                “Companies will use ScoutX.”
              </p>

              <p className="text-sm leading-6 text-white/45">
                “Creators will submit.”
              </p>

              <p className="text-sm leading-6 text-white/45">
                “AI can improve discovery.”
              </p>
            </div>

            <div className="text-3xl text-amber-300/50">→</div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-amber-300/60">
                After testing
              </div>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Evidence
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                User behavior
              </p>

              <p className="text-sm leading-6 text-white/45">
                Search relevance
              </p>

              <p className="text-sm leading-6 text-white/45">
                Connections & outcomes
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core questions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-white/30">
              Core Validation Questions
            </div>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Four questions determine whether ScoutX works.
            </h3>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {validationQuestions.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-amber-300/20"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-sm text-amber-300/70">
                    {item.number}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/35">
                    {item.metric}
                  </span>
                </div>

                <h4 className="mt-7 text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                    What to measure
                  </div>

                  <div className="mt-2 text-sm text-white/60">
                    {item.signal}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experiment roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-white/30">
              Validation Roadmap
            </div>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Prove the product one layer at a time.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
              The validation process should move from willingness to
              participate, to usefulness, to measurable business value.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {experiments.map((experiment, index) => (
              <motion.div
                key={experiment.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 lg:grid-cols-[80px_1fr_1fr]"
              >
                <div>
                  <span className="text-sm text-amber-300/70">
                    {experiment.phase}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {experiment.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {experiment.goal}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experiment.actions.map((action) => (
                      <span
                        key={action}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/40"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-amber-300/10 bg-amber-300/[0.025] p-5">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300/60">
                    Success Signal
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {experiment.success}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-white/30">
              Evidence Dashboard
            </div>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Measure the entire marketplace, not vanity numbers.
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-2xl border border-white/10 p-6"
              >
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/60">
                  {metric.value}
                </div>

                <h4 className="mt-4 text-lg font-semibold text-white">
                  {metric.title}
                </h4>

                <div className="mt-5 space-y-3">
                  {metric.items.map((item) => (
                    <div
                      key={item}
                      className="flex gap-2 text-xs leading-5 text-white/40"
                    >
                      <span className="text-amber-300/50">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/30">
                What Could Go Wrong?
              </div>

              <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Strong startups validate their weaknesses too.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                The biggest risk is not that ScoutX cannot collect ideas. It
                is whether the platform can consistently create enough trust,
                relevance and business value for organizations to return.
              </p>
            </div>

            <div className="space-y-3">
              {risks.map((risk) => (
                <div
                  key={risk.title}
                  className="rounded-xl border border-white/10 p-5"
                >
                  <h4 className="font-medium text-white">{risk.title}</h4>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {risk.description}
                  </p>

                  <div className="mt-4 border-l border-amber-300/30 pl-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300/60">
                      Validation response
                    </div>

                    <p className="mt-1 text-xs leading-5 text-white/40">
                      {risk.response}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pilot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-amber-300/70">
                  First Pilot
                </div>

                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Start with one domain, real problems and real projects.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  Instead of trying to launch a massive marketplace
                  immediately, ScoutX can run a focused pilot where a small
                  set of organizations submit real requirements and a curated
                  set of innovators provide real projects.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  ["Organizations", "5–10 pilot organizations"],
                  ["Innovations", "Curated project database"],
                  ["Problems", "Real organizational requirements"],
                  ["Search", "AI-assisted discovery"],
                  ["Outcome", "Shortlists + creator connections"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-white/10 px-5 py-4"
                  >
                    <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                      {label}
                    </span>

                    <span className="text-sm text-white/65">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-24 max-w-4xl text-center"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-amber-300/60">
            The Goal
          </div>

          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Don't prove that ScoutX is a good idea.
            <br />
            <span className="text-white/40">
              Prove that people need it.
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            The strongest evidence will come from organizations discovering
            useful innovation, creators receiving meaningful opportunities,
            and both sides returning because ScoutX creates value.
          </p>

          <div className="mt-8 text-sm font-medium tracking-wide text-amber-200/80">
            Test · Measure · Learn · Improve
          </div>
        </motion.div>
      </div>
    </section>
  );
}