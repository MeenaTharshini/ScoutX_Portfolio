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
} from "react-icons/fa";

const contactTypes = [
  {
    icon: FaBuilding,
    title: "For Organizations",
    description:
      "Have a real-world problem or looking for emerging solutions?",
    action: "Partner with ScoutX",
  },
  {
    icon: FaLightbulb,
    title: "For Innovators",
    description:
      "Have a prototype that deserves more visibility and real-world opportunities?",
    action: "Showcase Your Innovation",
  },
  {
    icon: FaUniversity,
    title: "For Institutions",
    description:
      "Want to help your students take their projects beyond the classroom?",
    action: "Explore Collaboration",
  },
  {
    icon: FaTrophy,
    title: "For Hackathons & Incubators",
    description:
      "Want promising projects to remain discoverable after your program ends?",
    action: "Join the Ecosystem",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-[-200px] w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Connect With ScoutX
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Have a problem?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              There may already be a solution.
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6 max-w-3xl mx-auto">
            Whether you are an innovator, organization, institution, or
            innovation partner, ScoutX is built to help you find the right
            connection.
          </p>
        </motion.div>

        {/* Contact Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

          {contactTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                className="group bg-[#151B2E] border border-slate-800 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >

                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/10 text-purple-400 flex items-center justify-center text-lg">
                  <Icon />
                </div>

                <h3 className="text-lg font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-6 mt-3 min-h-[72px]">
                  {item.description}
                </p>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium mt-5 group-hover:text-purple-300 transition"
                >
                  {item.action}
                  <FaArrowRight className="text-xs" />
                </a>

              </motion.div>
            );
          })}

        </div>

        {/* Main Contact Area */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-10 mt-20"
        >

          {/* Left */}
          <div className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-10">

            <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
              Start a Conversation
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-4">
              Let's discover what we can
              <span className="text-purple-400">
                {" "}
                build together.
              </span>
            </h3>

            <p className="text-slate-400 leading-7 mt-6">
              ScoutX is currently being developed as a platform for
              discovering, evaluating, and connecting emerging innovations
              with real-world opportunities.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Email
                  </p>

                  <a
                    href="mailto:hello@scoutx.in"
                    className="text-slate-300 hover:text-purple-400 transition"
                  >
                    hello@scoutx.in
                  </a>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <FaRocket />
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Product
                  </p>

                  <p className="text-slate-300">
                    ScoutX Innovation Platform
                  </p>
                </div>

              </div>

            </div>

            {/* Social */}
            <div className="flex gap-3 mt-10 pt-7 border-t border-slate-800">

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 transition"
                aria-label="ScoutX LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 transition"
                aria-label="ScoutX GitHub"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Right - Form */}
          <div className="bg-[#151B2E] border border-slate-800 rounded-3xl p-8 md:p-10">

            <div className="flex items-center gap-3 mb-7">

              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <FaPaperPlane />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Tell us about your idea
                </h3>

                <p className="text-slate-500 text-sm">
                  We would love to hear from you.
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

              {/* Name */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* User Type */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  I am a...
                </label>

                <select
                  required
                  defaultValue=""
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-purple-500 transition"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="innovator">
                    Innovator / Student
                  </option>
                  <option value="company">
                    Company / Startup
                  </option>
                  <option value="college">
                    College / Institution
                  </option>
                  <option value="hackathon">
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

              {/* Message */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us what you are looking for..."
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl px-6 py-3.5 flex items-center justify-center gap-3 font-medium transition"
              >
                Start the Conversation
                <FaArrowRight />
              </button>

            </form>

          </div>

        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-purple-500/5 border border-purple-500/10">

            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

            <span className="text-slate-400 text-sm">
              ScoutX — Discover what people can build.
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}