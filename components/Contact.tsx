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
    description: "Looking for emerging talent, prototypes, or solutions?",
    action: "Partner with ScoutX",
  },
  {
    icon: FaLightbulb,
    number: "02",
    title: "Innovators",
    description: "Have a project or idea that deserves visibility?",
    action: "Showcase your work",
  },
  {
    icon: FaUniversity,
    number: "03",
    title: "Institutions",
    description: "Help students turn academic projects into innovation.",
    action: "Explore collaboration",
  },
  {
    icon: FaTrophy,
    number: "04",
    title: "Programs",
    description: "Keep promising projects visible after your program.",
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
  "w-full rounded-xl border border-white/[0.08] bg-[#090D16] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/[0.08]";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070910] px-6 py-20 text-white md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-280px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-[140px]" />
        <div className="absolute bottom-[-180px] left-[-180px] h-[450px] w-[450px] rounded-full bg-violet-600/[0.06] blur-[120px]" />
        <div className="absolute right-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-fuchsia-600/[0.035] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,.8)]" />
            Connect with ScoutX
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Let&apos;s find the
            <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              next opportunity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-lg">
            Have a problem worth solving, a prototype worth discovering, or
            an ecosystem worth connecting?
            <span className="text-slate-200"> Start a conversation.</span>
          </p>
        </motion.header>

        {/* Contact Types */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href="#contact-form"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-purple-500/[0.04]"
              >
                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-purple-500/[0.08] blur-3xl transition group-hover:bg-purple-500/[0.16]" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] text-purple-400 transition group-hover:scale-105">
                      <Icon />
                    </div>

                    <span className="font-mono text-xs text-slate-700">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-bold">{item.title}</h3>

                  <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-purple-400 transition-all group-hover:gap-3">
                    {item.action}
                    <FaArrowRight className="text-[9px]" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Main Contact Panel */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0D111B]/90 shadow-[0_25px_100px_rgba(0,0,0,.4)] backdrop-blur-xl"
        >
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-600/[0.08] blur-[100px]" />

          <div className="relative grid lg:grid-cols-[.85fr_1.15fr]">
            {/* Left */}
            <div className="border-b border-white/[0.06] p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] text-purple-400">
                  <FaRocket />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
                    Start here
                  </p>
                  <p className="text-xs text-slate-600">
                    Tell us what&apos;s on your mind
                  </p>
                </div>
              </div>

              <h3 className="mt-7 text-3xl font-bold leading-tight md:text-4xl">
                Great ideas deserve
                <span className="block bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                  the right connection.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                ScoutX connects people building solutions with organizations
                that can validate, adopt, fund, or scale them.
              </p>

              <div className="mt-7 space-y-3">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-500/[0.08] text-purple-400">
                      <FaCheckCircle className="text-xs" />
                    </div>
                    <span className="text-sm text-slate-300">{reason}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.06] bg-black/20 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/[0.08] text-purple-400">
                    <FaClock className="text-sm" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-300">
                      We&apos;re listening
                    </p>
                    <p className="text-xs text-slate-600">
                      Send your idea and we&apos;ll take it from there.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-white/[0.06] pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Prefer email?
                </p>

                <a
                  href="mailto:hello@scoutx.in"
                  className="mt-2 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-purple-400"
                >
                  <FaEnvelope className="text-purple-400" />
                  hello@scoutx.in
                </a>
              </div>

              <div className="mt-5 flex gap-2">
                <a
                  href="#"
                  aria-label="ScoutX LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-slate-600 transition hover:border-purple-500/30 hover:text-purple-400"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  aria-label="ScoutX GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-slate-600 transition hover:border-purple-500/30 hover:text-purple-400"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="p-7 md:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="mb-7 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08] text-purple-400">
                        <FaPaperPlane />
                      </div>

                      <div>
                        <h3 className="font-bold">Tell us about it</h3>
                        <p className="text-xs text-slate-600">
                          A few details are enough to get started.
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm text-slate-400"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                            className={inputClass}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm text-slate-400"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="type"
                          className="mb-2 block text-sm text-slate-400"
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
                          <option value="innovator">Innovator / Student</option>
                          <option value="developer">
                            Developer / Researcher
                          </option>
                          <option value="company">Company / Startup</option>
                          <option value="institution">
                            College / Institution
                          </option>
                          <option value="program">
                            Hackathon / Incubator
                          </option>
                          <option value="investor">Investor / Partner</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-sm text-slate-400"
                        >
                          What would you like to discuss?
                        </label>

                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Partnership, prototype, problem..."
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm text-slate-400"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder="Tell us about your idea, project, or opportunity..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3.5 text-sm font-semibold shadow-[0_15px_40px_rgba(124,58,237,.2)] transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Start the Conversation
                            <FaArrowRight className="transition group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[10px] text-slate-700">
                        Your information is only used to respond to your
                        inquiry.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[460px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-3xl text-purple-400">
                      <FaCheckCircle />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      Message received
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">
                      Thanks for reaching out.
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                      Your message has been captured. We&apos;ll connect your
                      idea with the right ScoutX conversation.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 inline-flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/[0.06] px-5 py-3 text-sm font-medium text-purple-300 transition hover:bg-purple-500/[0.1]"
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-5 py-2.5">
            <FaBolt className="text-xs text-purple-400" />
            <span className="text-xs text-slate-500">
              ScoutX is building the discovery layer for innovation.
            </span>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-700">
            <FaCircle className="text-[4px] text-purple-500" />
            Build
            <FaCircle className="text-[4px] text-purple-500" />
            Discover
            <FaCircle className="text-[4px] text-purple-500" />
            Connect
            <FaCircle className="text-[4px] text-purple-500" />
            Scale
          </div>
        </motion.div>
      </div>
    </section>
  );
}