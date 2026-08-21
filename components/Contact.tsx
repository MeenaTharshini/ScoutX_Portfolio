"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaClock,
  FaCircle,
} from "react-icons/fa";

const contactTypes = [
  {
    icon: FaBuilding,
    number: "01",
    title: "Organizations",
    description:
      "Looking for emerging talent, prototypes, or solutions to a real-world problem?",
    action: "Partner with ScoutX",
  },
  {
    icon: FaLightbulb,
    number: "02",
    title: "Innovators",
    description:
      "Have a project, prototype, or technical idea that deserves visibility?",
    action: "Showcase your work",
  },
  {
    icon: FaUniversity,
    number: "03",
    title: "Institutions",
    description:
      "Help your students turn academic projects into discoverable innovation.",
    action: "Explore collaboration",
  },
  {
    icon: FaTrophy,
    number: "04",
    title: "Programs",
    description:
      "Keep promising projects visible after your hackathon, accelerator, or program.",
    action: "Join the ecosystem",
  },
];

const reasons = [
  "Share a real-world problem",
  "Showcase an existing prototype",
  "Explore a partnership",
  "Discuss innovation opportunities",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-[#090D16] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-700 transition-all duration-200 focus:border-purple-500/60 focus:bg-[#0B0F1A] focus:ring-4 focus:ring-purple-500/[0.08]";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    /*
      Replace this section with your API call / Formspree / Resend /
      backend endpoint when the form is connected.
    */

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070910] px-6 py-24 text-white md:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-1/2 top-[-280px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-[140px]" />

        {/* Left glow */}
        <div className="absolute bottom-[-200px] left-[-220px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.06] blur-[120px]" />

        {/* Right glow */}
        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.035] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070910] to-transparent" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-purple-400" />
            </span>

            Connect with ScoutX
          </div>

          <h2 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Let&apos;s find the
            <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              next opportunity.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            Have a problem worth solving, a prototype worth discovering, or
            an ecosystem worth connecting?
            <span className="text-slate-200">
              {" "}Start a conversation with ScoutX.
            </span>
          </p>
        </motion.div>

        {/* =========================================================
            CONTACT TYPES
        ========================================================== */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href="#contact-form"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/[0.04]"
              >
                {/* Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-purple-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-purple-500/[0.18]" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/[0.14]">
                      <Icon />
                    </div>

                    <span className="font-mono text-xs font-bold tracking-widest text-slate-700">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-purple-400 transition-all group-hover:gap-3 group-hover:text-purple-300">
                    {item.action}

                    <FaArrowRight className="text-[10px]" />
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
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0D111B]/90 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        >
          {/* Panel glows */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-purple-600/[0.09] blur-[100px]" />

          <div className="pointer-events-none absolute bottom-[-180px] left-[-100px] h-[300px] w-[300px] rounded-full bg-violet-600/[0.05] blur-[100px]" />

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* =====================================================
                LEFT SIDE
            ====================================================== */}

            <div className="border-b border-white/[0.06] p-8 md:p-12 lg:border-b-0 lg:border-r lg:p-14">

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] text-purple-400">
                  <FaRocket />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
                    Start here
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Tell us what&apos;s on your mind
                  </p>
                </div>
              </div>

              <h3 className="mt-9 text-3xl font-bold leading-tight md:text-4xl">
                Great ideas deserve
                <span className="block bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                  the right connection.
                </span>
              </h3>

              <p className="mt-6 text-sm leading-7 text-slate-400 md:text-base">
                ScoutX is building a discovery layer between people who build
                solutions and organizations that can help validate, adopt,
                fund, or scale them.
              </p>

              {/* Reasons */}

              <div className="mt-9 space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-500/[0.08] text-purple-400">
                      <FaCheckCircle className="text-xs" />
                    </div>

                    <span className="text-sm text-slate-300">
                      {reason}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Response information */}

              <div className="mt-10 rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/[0.08] text-purple-400">
                    <FaClock className="text-sm" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-300">
                      We&apos;re listening
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      Send us your idea and we&apos;ll take it from there.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}

              <div className="mt-8 border-t border-white/[0.06] pt-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Prefer email?
                </p>

                <a
                  href="mailto:hello@scoutx.in"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-purple-400"
                >
                  <FaEnvelope className="text-purple-400" />
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025] text-slate-600 transition hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-purple-400"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ScoutX GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025] text-slate-600 transition hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-purple-400"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* =====================================================
                FORM SIDE
            ====================================================== */}

            <div className="p-8 md:p-12 lg:p-14">

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {/* Form header */}

                    <div className="mb-8 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] text-purple-400">
                        <FaPaperPlane />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">
                          Tell us about it
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                          A few details are enough to get started.
                        </p>
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Name / Email */}

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-slate-400"
                          >
                            Name
                          </label>

                          <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            autoComplete="name"
                            className={inputClass}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-slate-400"
                          >
                            Email
                          </label>

                          <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            autoComplete="email"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      {/* Role */}

                      <div>
                        <label
                          htmlFor="type"
                          className="mb-2 block text-sm font-medium text-slate-400"
                        >
                          I am a...
                        </label>

                        <select
                          id="type"
                          name="type"
                          required
                          defaultValue=""
                          className={`${inputClass} cursor-pointer`}
                        >
                          <option value="" disabled>
                            Select your role
                          </option>

                          <option value="innovator">
                            Innovator / Student
                          </option>

                          <option value="developer">
                            Developer / Researcher
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
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-sm font-medium text-slate-400"
                        >
                          What would you like to discuss?
                        </label>

                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          placeholder="Partnership, prototype, problem statement..."
                          className={inputClass}
                        />
                      </div>

                      {/* Message */}

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium text-slate-400"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell us about your problem, idea, project, or opportunity..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {/* Submit */}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-4 text-sm font-semibold shadow-[0_15px_40px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Start the Conversation

                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[11px] leading-5 text-slate-700">
                        Your information is only used to respond to your
                        inquiry.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  /* =====================================================
                     SUCCESS STATE
                  ====================================================== */

                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="flex min-h-[500px] flex-col items-center justify-center text-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-[-20px] rounded-full bg-purple-500/10 blur-2xl" />

                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-3xl text-purple-400">
                        <FaCheckCircle />
                      </div>
                    </div>

                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      Message received
                    </p>

                    <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                      Thanks for reaching out.
                    </h3>

                    <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
                      Your message has been captured. The next step is
                      connecting your idea with the right ScoutX
                      conversation.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/[0.06] px-5 py-3 text-sm font-medium text-purple-300 transition hover:bg-purple-500/[0.1]"
                    >
                      Send another message
                      <FaArrowRight className="text-xs" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-5 py-3 backdrop-blur-xl">
            <FaBolt className="text-xs text-purple-400" />

            <span className="text-sm text-slate-500">
              ScoutX is building the discovery layer for innovation.
            </span>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-700">
            <FaCircle className="text-[5px] text-purple-500" />
            Build
            <FaCircle className="text-[5px] text-purple-500" />
            Discover
            <FaCircle className="text-[5px] text-purple-500" />
            Connect
            <FaCircle className="text-[5px] text-purple-500" />
            Scale
          </div>
        </motion.div>
      </div>
    </section>
  );
}