"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Meena Tharshini I",
    role: "Founder & Product Lead",
    description:
      "Leading the product vision, problem research, platform architecture, and development of ScoutX.",
    initials: "MT",
    linkedin: "#",
    github: "#",
    skills: ["Product Strategy", "Full Stack", "AI", "UI/UX"],
  },

  // Add your other team members here:
  {
    name: "Lithanya R",
    role: "Technology & Engineering",
    description:
      "Building the technical infrastructure and developing the core platform experience.",
    initials: "TM",
    linkedin: "#",
    github: "#",
    skills: ["Backend", "APIs", "Database", "Cloud"],
  },

  {
    name: "Magha Sri P",
    role: "Innovation & Research",
    description:
      "Researching user needs, innovation ecosystems, and opportunities for real-world adoption.",
    initials: "TM",
    linkedin: "#",
    github: "#",
    skills: ["Research", "Innovation", "Market", "Strategy"],
  },
];

const values = [
  {
    icon: FaLightbulb,
    title: "Build with Purpose",
    description:
      "We believe technology should solve meaningful problems rather than simply add another product to the internet.",
  },
  {
    icon: FaCode,
    title: "Show, Don't Just Tell",
    description:
      "Real projects, prototypes, evidence, and outcomes should speak louder than claims on a resume.",
  },
  {
    icon: FaUsers,
    title: "Connect the Ecosystem",
    description:
      "Great innovations become more valuable when the right builders and organizations can discover each other.",
  },
  {
    icon: FaRocket,
    title: "Move Ideas Forward",
    description:
      "Our goal is to help promising ideas move from prototypes toward validation, collaboration, and real-world impact.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />

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
            The Team Behind ScoutX
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Building the future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              innovation discovery
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6 max-w-3xl mx-auto">
            We are a team of builders who believe that promising ideas should
            not disappear simply because they are difficult to discover.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">

          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              className="group bg-[#151B2E] border border-slate-800 hover:border-purple-500/30 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2"
            >

              {/* Avatar */}
              <div className="flex justify-center">

                <div className="relative">

                  <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full" />

                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-600/10 border border-purple-500/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-purple-300">
                      {member.initials}
                    </span>
                  </div>

                </div>

              </div>

              {/* Name */}
              <div className="text-center mt-6">

                <h3 className="text-xl font-bold">
                  {member.name}
                </h3>

                <p className="text-purple-400 text-sm font-medium mt-2">
                  {member.role}
                </p>

              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-6 text-center mt-5">
                {member.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">

                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Social */}
              <div className="flex justify-center gap-4 mt-7 pt-6 border-t border-slate-800">

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 hover:text-purple-400 hover:bg-purple-500/10 transition"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FaLinkedin />
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 hover:text-purple-400 hover:bg-purple-500/10 transition"
                  aria-label={`${member.name} GitHub`}
                >
                  <FaGithub />
                </a>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <div className="max-w-5xl mx-auto bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-12">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left */}
              <div>

                <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                  Why We Are Building ScoutX
                </p>

                <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                  Great innovation should not depend on
                  <span className="text-purple-400">
                    {" "}
                    who happens to discover it.
                  </span>
                </h3>

                <p className="text-slate-400 leading-8 mt-6">
                  Every year, students and early-stage builders create
                  solutions that could potentially solve real problems.
                  Many of those projects receive attention during a
                  competition and then disappear.
                </p>

                <p className="text-slate-500 leading-7 mt-4">
                  ScoutX is being built to create a continuous bridge between
                  those innovations and the organizations that could help
                  validate, adopt, or scale them.
                </p>

              </div>

              {/* Right */}
              <div className="space-y-4">

                {[
                  "Discover overlooked innovators",
                  "Make real projects easier to evaluate",
                  "Connect prototypes with real problems",
                  "Turn innovation into collaboration",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-slate-900/70 border border-slate-800 rounded-xl p-4"
                  >

                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm font-bold">
                      0{index + 1}
                    </div>

                    <span className="text-slate-300 text-sm">
                      {item}
                    </span>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

        {/* Values */}
        <div className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <p className="text-purple-400 uppercase tracking-widest text-sm">
              Our Principles
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              What drives us
            </h3>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="bg-[#151B2E] border border-slate-800 rounded-2xl p-6"
                >

                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <Icon />
                  </div>

                  <h4 className="font-bold text-lg mt-5">
                    {value.title}
                  </h4>

                  <p className="text-slate-500 text-sm leading-6 mt-3">
                    {value.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >

          <p className="text-slate-500">
            We are not just building a platform.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-3">
            We are building a better way to
            <span className="text-purple-400">
              {" "}
              discover what people can build.
            </span>
          </h3>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 mt-8 px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
          >
            Connect With ScoutX
            <FaArrowRight />
          </a>

        </motion.div>

      </div>
    </section>
  );
}