"use client";

import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBuilding,
  FaTrophy,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

const userGroups = [
  {
    icon: FaUserGraduate,
    label: "01",
    title: "Innovators",
    subtitle: "Students • Developers • Researchers • Early Builders",
    description:
      "For people who are building ideas, prototypes, and technical solutions but struggle to get discovered beyond their immediate network.",
    color: "purple",
    benefits: [
      "Create an Innovation Passport",
      "Showcase projects with real evidence",
      "Get discovered for relevant problems",
      "Find collaboration and pilot opportunities",
    ],
  },
  {
    icon: FaBuilding,
    label: "02",
    title: "Organizations",
    subtitle: "Companies • Startups • Product Teams",
    description:
      "For organizations that have real-world challenges and want to discover existing prototypes and emerging solutions instead of searching only through traditional recruitment channels.",
    color: "blue",
    benefits: [
      "Post real-world problems",
      "Discover relevant innovations",
      "Evaluate prototypes and evidence",
      "Connect with builders for collaboration",
    ],
  },
  {
    icon: FaTrophy,
    label: "03",
    title: "Innovation Ecosystem",
    subtitle: "Hackathons • Incubators • Colleges • Accelerators",
    description:
      "For organizations that create or support innovation and want promising projects to remain discoverable even after an event, program, or competition ends.",
    color: "yellow",
    benefits: [
      "Preserve projects beyond events",
      "Track emerging innovations",
      "Connect projects with industry",
      "Create opportunities for incubation and growth",
    ],
  },
];

const colorStyles = {
  purple: {
    icon: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    border: "hover:border-purple-500/40",
    accent: "text-purple-400",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "hover:border-blue-500/40",
    accent: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  yellow: {
    icon: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    border: "hover:border-yellow-500/40",
    accent: "text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  },
};

export default function Users() {
  return (
    <section
      id="users"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-[-150px] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-[-150px] w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-3xl" />

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
            Who is ScoutX for?
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            One platform.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              Three sides of innovation.
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-8 mt-6 max-w-3xl mx-auto">
            ScoutX brings together the people who
            <span className="text-purple-400 font-medium">
              {" "}
              build solutions
            </span>
            , the organizations that
            <span className="text-purple-400 font-medium">
              {" "}
              need solutions
            </span>
            , and the ecosystem that helps
            <span className="text-purple-400 font-medium">
              {" "}
              innovations grow.
            </span>
          </p>
        </motion.div>

        {/* User Groups */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          {userGroups.map((group, index) => {
            const Icon = group.icon;
            const styles =
              colorStyles[group.color as keyof typeof colorStyles];

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                className={`group bg-[#151B2E] border border-slate-800 ${styles.border} rounded-3xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-2`}
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <div
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-xl ${styles.icon}`}
                  >
                    <Icon />
                  </div>

                  <span className="text-slate-700 font-bold text-2xl">
                    {group.label}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mt-7">
                  {group.title}
                </h3>

                <p
                  className={`text-xs uppercase tracking-wider mt-2 ${styles.accent}`}
                >
                  {group.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-400 leading-7 mt-5">
                  {group.description}
                </p>

                {/* Benefits */}
                <div className="mt-7 pt-6 border-t border-slate-800">

                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
                    What they get
                  </p>

                  <div className="space-y-3">

                    {group.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle
                          className={`mt-1 shrink-0 ${styles.accent}`}
                        />

                        <span className="text-slate-300 text-sm leading-6">
                          {benefit}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Ecosystem Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-12">

            <div className="text-center">

              <p className="text-purple-400 uppercase tracking-widest text-sm">
                The ScoutX Ecosystem
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mt-3">
                Different goals. One innovation loop.
              </h3>

            </div>

            <div className="grid md:grid-cols-5 items-center gap-4 mt-12">

              {/* Innovator */}
              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl">
                  <FaLightbulb />
                </div>

                <h4 className="font-semibold mt-4">
                  Innovator
                </h4>

                <p className="text-slate-500 text-sm mt-2">
                  Builds a solution
                </p>

              </div>

              <div className="hidden md:flex justify-center text-purple-500 text-xl">
                →
              </div>

              {/* ScoutX */}
              <div className="text-center">

                <div className="w-20 h-20 mx-auto rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/10">
                  <FaSearch />
                </div>

                <h4 className="font-bold text-purple-300 mt-4">
                  ScoutX
                </h4>

                <p className="text-slate-500 text-sm mt-2">
                  Discovers the connection
                </p>

              </div>

              <div className="hidden md:flex justify-center text-purple-500 text-xl">
                →
              </div>

              {/* Organization */}
              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl">
                  <FaBuilding />
                </div>

                <h4 className="font-semibold mt-4">
                  Organization
                </h4>

                <p className="text-slate-500 text-sm mt-2">
                  Finds a solution
                </p>

              </div>

            </div>

            {/* Ecosystem connector */}
            <div className="mt-10 text-center">

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/5 border border-purple-500/10">

                <FaTrophy className="text-yellow-400" />

                <span className="text-slate-400 text-sm">
                  Hackathons • Colleges • Incubators help innovations enter
                  the ecosystem
                </span>

              </div>

            </div>

          </div>
        </motion.div>

        {/* Target Market */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                Target Market
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Start with the
                <span className="text-purple-400">
                  {" "}
                  student innovation ecosystem.
                </span>
              </h3>

              <p className="text-slate-400 text-lg leading-8 mt-6">
                ScoutX can initially focus on students and early-stage
                innovators who already build projects through colleges,
                hackathons, internships, clubs, and innovation programs.
              </p>

              <p className="text-slate-500 leading-7 mt-4">
                As the innovation database grows, companies, startups,
                incubators, and industry partners gain access to an increasingly
                valuable pool of real prototypes and emerging capabilities.
              </p>

            </div>

            {/* Market Segments */}
            <div className="space-y-3">

              {[
                [
                  "Students & Developers",
                  "Project builders looking for visibility and opportunities",
                ],
                [
                  "Startups & Companies",
                  "Organizations looking for emerging solutions",
                ],
                [
                  "Colleges & Innovation Cells",
                  "Institutions supporting student innovation",
                ],
                [
                  "Hackathons & Incubators",
                  "Programs creating and accelerating prototypes",
                ],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="flex items-center gap-4 bg-[#151B2E] border border-slate-800 rounded-2xl p-5 hover:border-purple-500/20 transition"
                >

                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm font-bold">
                    0{index + 1}
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {title}
                    </h4>

                    <p className="text-slate-500 text-sm mt-1">
                      {description}
                    </p>
                  </div>

                  <FaArrowRight className="ml-auto text-slate-700" />

                </div>
              ))}

            </div>

          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >

          <p className="text-slate-500">
            The goal is not to create another network.
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mt-3">
            It is to create a network where
            <span className="text-purple-400">
              {" "}
              innovation can be found.
            </span>
          </h3>

        </motion.div>

      </div>
    </section>
  );
}