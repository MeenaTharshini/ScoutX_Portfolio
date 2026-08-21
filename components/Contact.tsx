"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaBuilding,
  FaLightbulb,
  FaUniversity,
  FaTrophy,
  FaArrowRight,
  FaRocket,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
  FaBolt,
} from "react-icons/fa";

const contactTypes = [
  {
    icon: FaBuilding,
    number: "01",
    title: "Organizations",
    description:
      "Looking for emerging talent, prototypes, or solutions to real-world problems?",
    action: "Partner with ScoutX",
  },
  {
    icon: FaLightbulb,
    number: "02",
    title: "Innovators",
    description:
      "Have a project or prototype that deserves visibility beyond your classroom or competition?",
    action: "Showcase your work",
  },
  {
    icon: FaUniversity,
    number: "03",
    title: "Institutions",
    description:
      "Help your students turn academic projects into discoverable innovation and opportunities.",
    action: "Explore collaboration",
  },
  {
    icon: FaTrophy,
    number: "04",
    title: "Programs & Incubators",
    description:
      "Keep promising projects visible even after your hackathon, accelerator, or program ends.",
    action: "Join the ecosystem",
  },
];

const reasons = [
  "Share a real-world problem",
  "Showcase an existing prototype",
  "Explore a partnership",
  "Discuss innovation opportunities",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080B14] px-6 py-24 text-white md:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-[120px]" />

        {/* Side glows */}
        <div className="absolute bottom-[-180px] left-[-180px] h-[450px] w-[450px] rounded-full bg-violet-600/[0.06] blur-[100px]" />

        <div className="absolute right-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-fuchsia-600/[0.04] blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            <FaBolt className="text-purple-400" />
            Connect with ScoutX
          </div>

          <h2 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            Have a problem?
            <span className="mt-2 block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Someone may have built the answer.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 md:text-xl">
            ScoutX connects innovators, organizations, institutions, and
            innovation programs through a single discovery layer for
            projects, prototypes, capabilities, and opportunities.
          </p>
        </motion.div>

        {/* =========================================================
            CONTACT AUDIENCE CARDS
        ========================================================== */}

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                href="#contact-form"
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  p-6
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-purple-500/30
                  hover:bg-purple-500/[0.04]
                "
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-purple-500/[0.16]" />

                <div className="relative">

                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-xl
                        border border-purple-500/20
                        bg-purple-500/[0.08]
                        text-purple-400
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:bg-purple-500/[0.14]
                      "
                    >
                      <Icon />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-slate-700">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-purple-400 transition-all group-hover:gap-3 group-hover:text-purple-300">
                    {item.action}
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* =========================================================
            MAIN CONTACT PANEL
        ========================================================== */}

        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative mt-20 overflow-hidden
            rounded-[2rem]
            border border-white/[0.08]
            bg-[#101522]/90
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
          "
        >
          {/* Panel glow */}
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/[0.08] blur-[90px]" />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* =====================================================
                LEFT INFORMATION
            ====================================================== */}

            <div className="border-b border-white/[0.06] p-8 md:p-12 lg:border-b-0 lg:border-r lg:p-14">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] text-purple-400">
                <FaRocket />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-purple-400">
                Start a conversation
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Let's discover what we can
                <span className="block bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                  build together.
                </span>
              </h3>

              <p className="mt-6 leading-7 text-slate-400">
                Whether you have a problem worth solving, a prototype worth
                discovering, or an ecosystem worth connecting, we'd love to
                hear from you.
              </p>

              {/* Reasons */}
              <div className="mt-9 space-y-3">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <FaCheckCircle className="shrink-0 text-purple-400" />
                    {reason}
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="mt-10 border-t border-white/[0.06] pt-7">
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Email us
                </p>

                <a
                  href="mailto:hello@scoutx.in"
                  className="mt-2 inline-flex items-center gap-2 text-slate-300 transition hover:text-purple-400"
                >
                  <FaEnvelope className="text-sm text-purple-400" />
                  hello@scoutx.in
                </a>
              </div>

              {/* Social */}
              <div className="mt-7 flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ScoutX LinkedIn"
                  className="
                    flex h-10 w-10 items-center justify-center rounded-xl
                    border border-white/[0.06]
                    bg-white/[0.03]
                    text-slate-500
                    transition
                    hover:border-purple-500/30
                    hover:bg-purple-500/[0.08]
                    hover:text-purple-400
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ScoutX GitHub"
                  className="
                    flex h-10 w-10 items-center justify-center rounded-xl
                    border border-white/[0.06]
                    bg-white/[0.03]
                    text-slate-500
                    transition
                    hover:border-purple-500/30
                    hover:bg-purple-500/[0.08]
                    hover:text-purple-400
                  "
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* =====================================================
                FORM
            ====================================================== */}

            <div className="p-8 md:p-12 lg:p-14">

              <div className="mb-8 flex items-center gap-4">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    border border-purple-500/20
                    bg-purple-500/[0.08]
                    text-purple-400
                  "
                >
                  <FaPaperPlane />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Tell us what you're building
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    We'll help you find the right next step.
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  alert(
                    "Thank you for reaching out to ScoutX! We will get back to you soon."
                  );
                }}
                className="space-y-5"
              >
                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-400">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="
                        w-full rounded-xl
                        border border-white/[0.08]
                        bg-[#090D16]
                        px-4 py-3.5
                        text-white
                        outline-none
                        placeholder:text-slate-700
                        transition
                        focus:border-purple-500/60
                        focus:ring-2
                        focus:ring-purple-500/10
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-400">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="
                        w-full rounded-xl
                        border border-white/[0.08]
                        bg-[#090D16]
                        px-4 py-3.5
                        text-white
                        outline-none
                        placeholder:text-slate-700
                        transition
                        focus:border-purple-500/60
                        focus:ring-2
                        focus:ring-purple-500/10
                      "
                    />
                  </div>

                </div>

                {/* User Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-400">
                    I am a...
                  </label>

                  <select
                    name="type"
                    required
                    defaultValue=""
                    className="
                      w-full appearance-none rounded-xl
                      border border-white/[0.08]
                      bg-[#090D16]
                      px-4 py-3.5
                      text-slate-300
                      outline-none
                      transition
                      focus:border-purple-500/60
                      focus:ring-2
                      focus:ring-purple-500/10
                    "
                  >
                    <option value="" disabled>
                      Select your role
                    </option>

                    <option value="innovator">
                      Innovator / Student
                    </option>

                    <option value="company">
                      Company / Startup
                    </option>

                    <option value="institution">
                      College / Institution
                    </option>

                    <option value="program">
                      Hackathon / Incubator
                    </option>

                    <option value="investor">
                      Investor / Partner
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-400">
                    What would you like to discuss?
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Partnership, prototype, problem statement..."
                    className="
                      w-full rounded-xl
                      border border-white/[0.08]
                      bg-[#090D16]
                      px-4 py-3.5
                      text-white
                      outline-none
                      placeholder:text-slate-700
                      transition
                      focus:border-purple-500/60
                      focus:ring-2
                      focus:ring-purple-500/10
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-400">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your problem, idea, project, or opportunity..."
                    className="
                      w-full resize-none rounded-xl
                      border border-white/[0.08]
                      bg-[#090D16]
                      px-4 py-3.5
                      text-white
                      outline-none
                      placeholder:text-slate-700
                      transition
                      focus:border-purple-500/60
                      focus:ring-2
                      focus:ring-purple-500/10
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group flex w-full items-center justify-center gap-3
                    rounded-xl
                    bg-gradient-to-r from-purple-600 to-violet-600
                    px-6 py-4
                    font-semibold
                    shadow-[0_10px_30px_rgba(124,58,237,0.2)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:from-purple-500
                    hover:to-violet-500
                    hover:shadow-[0_15px_40px_rgba(124,58,237,0.3)]
                  "
                >
                  Start the Conversation

                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-center text-xs text-slate-700">
                  Your information is only used to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div
            className="
              mx-auto inline-flex items-center gap-3
              rounded-full
              border border-purple-500/15
              bg-purple-500/[0.04]
              px-5 py-3
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
            </span>

            <span className="text-sm text-slate-400">
              ScoutX — Discover what people can build.
            </span>
          </div>

          <p className="mt-5 text-sm text-slate-700">
            The next great innovation might already exist.
          </p>
        </motion.div>

      </div>
    </section>
  );
}