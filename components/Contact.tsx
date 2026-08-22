"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

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
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/6 blur-[130px]" />
        <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Connect with ScoutX
          </p>

          <div className="gold-line mx-auto mt-4" />

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Let&apos;s find the{" "}
            <span className="text-gradient">next opportunity.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#A9A293] md:text-lg">
            Have a problem worth solving, a prototype worth discovering, or
            an opportunity to explore?
          </p>
        </motion.header>

        {/* Contact Panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-[#D4AF37]/15 bg-[#11100D] shadow-[0_25px_100px_rgba(0,0,0,.4)]"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#E7C979]">
                <FaPaperPlane />
              </div>

              <h3 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                Great ideas deserve{" "}
                <span className="block text-gradient">
                  the right connection.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#A9A293]">
                ScoutX connects people building solutions with organizations
                that can discover, validate, adopt, or support them.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6D675D]">
                  Prefer email?
                </p>

                <a
                  href="mailto:meenatharshiniiyappan@gmail.com"
                  className="mt-2 inline-flex items-center gap-2 text-sm text-[#C0B8A9] transition hover:text-[#D4AF37]"
                >
                  <FaEnvelope className="text-[#D4AF37]" />
                  meenatharshiniiyappan@gmail.com
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
                    <div className="mb-7">
                      <h3 className="font-bold text-[#F7F1E3]">
                        Tell us about it
                      </h3>

                      <p className="mt-1 text-xs text-[#6D675D]">
                        A few details are enough to get started.
                      </p>
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

                      {/* Role */}
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

                          <option value="partner">
                            Partner / Other
                          </option>
                        </select>
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
                          rows={5}
                          required
                          placeholder="Tell us about your idea, project, problem, or opportunity..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          group flex w-full items-center justify-center gap-3
                          rounded-xl
                          bg-gradient-to-br
                          from-[#E7C979] via-[#D4AF37] to-[#AD8930]
                          px-6 py-3.5
                          text-sm font-semibold text-[#0B0B09]
                          shadow-[0_15px_40px_rgba(201,166,70,0.18)]
                          transition
                          hover:-translate-y-0.5
                          hover:shadow-[0_20px_50px_rgba(201,166,70,0.25)]
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
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
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[430px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-3xl text-[#D4AF37]">
                      <FaCheckCircle />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                      Message received
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">
                      Thanks for reaching out.
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-[#8F887B]">
                      We&apos;ll connect your message with the right ScoutX
                      conversation.
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
      </div>
    </section>
  );
}