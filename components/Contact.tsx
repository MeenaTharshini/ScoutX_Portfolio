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
      "Looking for emerging talent, prototypes, or solutions?",
    action: "Partner with ScoutX",
  },
  {
    icon: FaLightbulb,
    number: "02",
    title: "Innovators",
    description:
      "Have a project or idea that deserves visibility?",
    action: "Showcase your work",
  },
  {
    icon: FaUniversity,
    number: "03",
    title: "Institutions",
    description:
      "Help students turn academic projects into innovation.",
    action: "Explore collaboration",
  },
  {
    icon: FaTrophy,
    number: "04",
    title: "Programs",
    description:
      "Keep promising projects visible after your program.",
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
  "w-full rounded-xl border border-white/10 bg-[#0B0B09] px-4 py-3 text-sm text-[#F7F1E3] outline-none placeholder:text-[#625D53] transition focus:border-[#D4AF37]/60 focus:ring-4 focus:ring-[#D4AF37]/10";

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
      className="relative overflow-hidden bg-[#0B0B09] px-6 py-20 text-[#F7F1E3] md:py-28"
    >
      {/* =====================================================
          PREMIUM GOLD BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-280px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#C9A646]/8 blur-[140px]" />

        <div className="absolute bottom-[-180px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#C9A646]/6 blur-[120px]" />

        <div className="absolute right-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        <div className="absolute inset-0 bg-grid opacity-[0.18]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
            Connect with ScoutX
          </p>

          <div className="gold-line mx-auto mt-4" />

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Let&apos;s find the{" "}
            <span className="block text-gradient">
              next opportunity.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#A9A293] md:text-lg">
            Have a problem worth solving, a prototype worth discovering,
            or an ecosystem worth connecting?
            <span className="text-[#DDD5C6]">
              {" "}
              Start a conversation.
            </span>
          </p>
        </motion.header>

        {/* =====================================================
            CONTACT TYPES
        ====================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href="#contact-form"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-[#11100D] p-6 transition-all duration-300 hover:border-[#D4AF37]/40"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#D4AF37]/8 blur-3xl transition group-hover:bg-[#D4AF37]/15" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#E7C979] transition group-hover:scale-105 group-hover:bg-[#D4AF37]/15">
                      <Icon />
                    </div>

                    <span className="font-mono text-xs text-[#625D53]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#F7F1E3]">
                    {item.title}
                  </h3>

                  <p className="mt-2 min-h-[60px] text-sm leading-6 text-[#8F887B]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#D4AF37] transition-all group-hover:gap-3">
                    {item.action}
                    <FaArrowRight className="text-[9px]" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* =====================================================
            MAIN CONTACT PANEL
        ====================================================== */}

        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] shadow-[0_25px_100px_rgba(0,0,0,.45)]"
        >
          {/* Gold glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D4AF37]/7 blur-[100px]" />

          <div className="relative grid lg:grid-cols-[.85fr_1.15fr]">
            {/* =================================================
                LEFT PANEL
            ================================================== */}

            <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
                  <FaRocket />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                    Start here
                  </p>

                  <p className="text-xs text-[#6D675D]">
                    Tell us what&apos;s on your mind
                  </p>
                </div>
              </div>

              <h3 className="mt-7 text-3xl font-bold leading-tight md:text-4xl">
                Great ideas deserve
                <span className="block text-gradient">
                  the right connection.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#A9A293]">
                ScoutX connects people building solutions with
                organizations that can validate, adopt, fund, or scale them.
              </p>

              {/* Reasons */}

              <div className="mt-7 space-y-3">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                      <FaCheckCircle className="text-xs" />
                    </div>

                    <span className="text-sm text-[#C0B8A9]">
                      {reason}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Listening */}

              <div className="mt-8 rounded-2xl border border-white/10 bg-[#0B0B09] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                    <FaClock className="text-sm" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#C0B8A9]">
                      We&apos;re listening
                    </p>

                    <p className="text-xs text-[#6D675D]">
                      Send your idea and we&apos;ll take it from there.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6D675D]">
                  Prefer email?
                </p>

                <a
                  href="mailto:hello@scoutx.in"
                  className="mt-2 inline-flex items-center gap-2 text-sm text-[#C0B8A9] transition hover:text-[#D4AF37]"
                >
                  <FaEnvelope className="text-[#D4AF37]" />
                  hello@scoutx.in
                </a>
              </div>

              {/* Social */}

              <div className="mt-5 flex gap-2">
                <a
                  href="#"
                  aria-label="ScoutX LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-[#6D675D] transition hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  aria-label="ScoutX GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-[#6D675D] transition hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <div className="p-7 md:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                  >
                    <div className="mb-7 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
                        <FaPaperPlane />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#F7F1E3]">
                          Tell us about it
                        </h3>

                        <p className="text-xs text-[#6D675D]">
                          A few details are enough to get started.
                        </p>
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Name + Email */}

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm text-[#A9A293]"
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
                            className="mb-2 block text-sm text-[#A9A293]"
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

                      {/* Type */}

                      <div>
                        <label
                          htmlFor="type"
                          className="mb-2 block text-sm text-[#A9A293]"
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
                          className="mb-2 block text-sm text-[#A9A293]"
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

                      {/* Message */}

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm text-[#A9A293]"
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

                      {/* Submit */}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-[#E7C979] via-[#D4AF37] to-[#AD8930] px-6 py-3.5 text-sm font-semibold text-[#0B0B09] shadow-[0_15px_40px_rgba(201,166,70,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(201,166,70,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0B0B09]/30 border-t-[#0B0B09]" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Start the Conversation
                            <FaArrowRight className="transition group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[10px] text-[#625D53]">
                        Your information is only used to respond to your
                        inquiry.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  /* =================================================
                     SUCCESS STATE
                  ================================================== */

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
                    className="flex min-h-[460px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-3xl text-[#D4AF37]">
                      <FaCheckCircle />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                      Message received
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-[#F7F1E3]">
                      Thanks for reaching out.
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-[#8F887B]">
                      Your message has been captured. We&apos;ll connect
                      your idea with the right ScoutX conversation.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-3 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37]/15"
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

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/15 bg-[#11100D] px-5 py-2.5">
            <FaBolt className="text-xs text-[#D4AF37]" />

            <span className="text-xs text-[#8F887B]">
              ScoutX is building the discovery layer for innovation.
            </span>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#625D53]">
            <FaCircle className="text-[4px] text-[#D4AF37]" />
            Build

            <FaCircle className="text-[4px] text-[#D4AF37]" />
            Discover

            <FaCircle className="text-[4px] text-[#D4AF37]" />
            Connect

            <FaCircle className="text-[4px] text-[#D4AF37]" />
            Scale
          </div>
        </motion.div>
      </div>
    </section>
  );
}