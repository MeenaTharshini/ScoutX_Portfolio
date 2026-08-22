"use client";

import { motion } from "framer-motion";

const revenueModels = [
  {
    number: "01",
    title: "Organization Subscriptions",
    label: "PRIMARY REVENUE",
    description:
      "Companies, R&D teams, product teams, startups, and innovation teams pay for advanced access to ScoutX's innovation discovery capabilities.",
    features: [
      "Advanced innovation search",
      "AI-assisted evaluation",
      "Saved requirements",
      "Team workspaces",
      "Shortlists and comparisons",
      "Discovery analytics",
    ],
  },
  {
    number: "02",
    title: "Enterprise Innovation Workspace",
    label: "ENTERPRISE",
    description:
      "Larger organizations can use ScoutX as a private innovation discovery and problem-solving workspace for their internal teams.",
    features: [
      "Private innovation programs",
      "Internal problem posting",
      "Curated innovation pipelines",
      "Team collaboration",
      "Enterprise analytics",
      "Custom workflows",
    ],
  },
  {
    number: "03",
    title: "Innovation Discovery Services",
    label: "PREMIUM",
    description:
      "Organizations that need deeper discovery can use ScoutX for curated searches, domain-specific innovation mapping, and targeted creator discovery.",
    features: [
      "Curated innovation discovery",
      "Domain-specific searches",
      "Creator identification",
      "Technology landscape mapping",
      "Expert-assisted shortlisting",
      "Pilot discovery support",
    ],
  },
];

const valuePoints = [
  {
    title: "Reduce discovery time",
    description:
      "Find relevant projects and innovators without depending entirely on networks, events, or manual research.",
  },
  {
    title: "Discover beyond events",
    description:
      "Reach people who never participated in a company's hackathon, challenge, or innovation program.",
  },
  {
    title: "Evaluate before engaging",
    description:
      "Use structured project information, evidence, and AI-assisted insights before deciding what deserves attention.",
  },
  {
    title: "Turn problems into opportunities",
    description:
      "When an existing solution cannot be found, organizations can publish the problem and attract innovators toward it.",
  },
];

export default function Business() {
  return (
    <section
      id="business"
      className="relative overflow-hidden border-t border-white/10 bg-[#080806] px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-400/[0.04] blur-[140px]" />

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
            08 · Business Model
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            A discovery business powered by a growing innovation network.
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
            ScoutX creates value for organizations by reducing the difficulty
            of discovering relevant innovation while giving creators a
            persistent path to visibility and opportunity.
          </p>
        </motion.div>

        {/* Who pays / who supplies */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Organizations",
              subtitle: "PAYING SIDE",
              text:
                "Companies, R&D teams, startups, product teams and innovation teams searching for solutions to real problems.",
            },
            {
              title: "Creators",
              subtitle: "INNOVATION SUPPLY",
              text:
                "Students, developers, researchers, engineers, founders, makers and independent builders contributing ideas and solutions.",
            },
            {
              title: "Ecosystem",
              subtitle: "NETWORK GROWTH",
              text:
                "Colleges, incubators, hackathons, innovation programs and communities that can continuously bring valuable projects into ScoutX.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
            >
              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300/70">
                {item.subtitle}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why companies pay */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="max-w-3xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/35">
              Why would an organization pay?
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              ScoutX sells faster access to relevant innovation.
            </h3>

            <p className="mt-5 text-base leading-8 text-white/55">
              The value is not simply a database of ideas. The value is helping
              an organization discover, understand, compare, and connect with
              potentially useful innovation before investing heavily in
              another discovery process.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {valuePoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 p-6"
              >
                <div className="flex gap-4">
                  <span className="mt-1 text-sm text-amber-300/80">
                    0{index + 1}
                  </span>

                  <div>
                    <h4 className="text-lg font-medium text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue model */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="max-w-3xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/35">
              Revenue Model
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start with B2B subscriptions. Expand with enterprise value.
            </h3>

            <p className="mt-5 text-base leading-8 text-white/55">
              The initial business model focuses on organizations as the
              primary paying customer. Additional revenue opportunities can
              be introduced as ScoutX proves that its discovery layer creates
              measurable value.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {revenueModels.map((model, index) => (
              <motion.div
                key={model.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-colors hover:border-amber-300/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/25">
                    {model.number}
                  </span>

                  <span className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1 text-[9px] font-semibold tracking-[0.18em] text-amber-300/80">
                    {model.label}
                  </span>
                </div>

                <h4 className="mt-8 text-2xl font-semibold text-white">
                  {model.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {model.description}
                </p>

                <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  {model.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/60"
                    >
                      <span className="mt-1 text-amber-300/70">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business flywheel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-12"
        >
          <div className="max-w-3xl">
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300/70">
              The Network Effect
            </div>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Every useful connection can make the network more valuable.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
              ScoutX becomes more useful as the supply of quality innovation
              and the number of organizational problems increase.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-4 text-center sm:grid-cols-5">
            <div className="rounded-xl border border-white/10 p-5">
              <div className="text-lg font-semibold text-white">
                More creators
              </div>
              <div className="mt-2 text-xs text-white/40">
                More innovation
              </div>
            </div>

            <div className="text-2xl text-amber-300/60">→</div>

            <div className="rounded-xl border border-white/10 p-5">
              <div className="text-lg font-semibold text-white">
                Better discovery
              </div>
              <div className="mt-2 text-xs text-white/40">
                More relevant matches
              </div>
            </div>

            <div className="text-2xl text-amber-300/60">→</div>

            <div className="rounded-xl border border-white/10 p-5">
              <div className="text-lg font-semibold text-white">
                More organizations
              </div>
              <div className="mt-2 text-xs text-white/40">
                More problems & opportunities
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
            <div className="h-8 w-px bg-white/10" />

            <div className="rounded-full border border-amber-300/20 bg-amber-300/[0.05] px-6 py-3 text-sm text-amber-200/80">
              More problems → More opportunities to build → More creators
            </div>
          </div>
        </motion.div>

        {/* Revenue scenario */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-7 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300/70">
                  Illustrative Revenue Scenario
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                  Revenue scales with paying organizations, not with every
                  creator.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  For example, if ScoutX eventually had 1,000 organizations
                  paying an average of ₹5,000 per month, that would represent
                  approximately ₹50 lakh in monthly recurring revenue, or
                  ₹6 crore annually.
                </p>
              </div>

              <div className="shrink-0">
                <div className="text-4xl font-semibold tracking-tight text-amber-200 sm:text-5xl">
                  ₹6 Cr
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/35">
                  Illustrative annual revenue
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-xs leading-6 text-white/35">
                This is a hypothetical scenario, not a forecast or current
                revenue claim. Pricing, willingness to pay, customer count,
                retention, and conversion would need to be validated through
                pilots.
              </p>
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
          <div className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
            The Business Thesis
          </div>

          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Don't make every company start discovery from zero.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            ScoutX aims to become the layer where organizations discover what
            people have already built — and where creators discover the
            problems worth solving.
          </p>

          <div className="mt-8 text-sm font-medium tracking-wide text-amber-200/80">
            Build · Prove · Discover · Connect
          </div>
        </motion.div>
      </div>
    </section>
  );
}