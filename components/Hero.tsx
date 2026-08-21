"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaSearch,
  FaLightbulb,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaBuilding,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-900 text-white flex items-center pt-28 md:pt-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-[-150px] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/[0.025] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="text-center max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

            Innovation Discovery &amp; Talent Visibility Platform
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            Innovation Exists.

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600">
              Discovery Doesn't.
            </span>
          </motion.h1>

          {/* Animated Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-slate-300"
          >
            <TypeAnimation
              sequence={[
                "Discover what innovators have actually built.",
                2500,

                "Turn scattered projects into discoverable innovation.",
                2500,

                "Evaluate talent through real project evidence.",
                2500,

                "Connect promising innovators with organizations.",
                2500,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </motion.div>

          {/* Correct Project Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-slate-400 text-lg md:text-xl leading-8 max-w-4xl mx-auto"
          >
            <span className="text-white font-semibold">ScoutX</span> is an
            innovation discovery platform that brings together
            <span className="text-purple-400 font-medium">
              {" "}
              student and early-stage innovators,
            </span>{" "}
            their
            <span className="text-purple-400 font-medium">
              {" "}
              ideas, prototypes, builders, and evidence
            </span>{" "}
            in one structured profile — helping companies, hackathon
            organizers, and incubators
            <span className="text-purple-400 font-medium">
              {" "}
              discover, evaluate, and connect
            </span>{" "}
            with promising innovation.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <a
              href="#solution"
              className="group bg-purple-600 hover:bg-purple-700 px-7 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 shadow-lg shadow-purple-600/20"
            >
              Explore ScoutX

              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#problem"
              className="px-7 py-4 rounded-xl border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300"
            >
              See the Discovery Gap
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            DISCOVERY GAP VISUAL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-20"
        >
          <div className="max-w-6xl mx-auto">

            {/* Scattered Sources */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {/* LinkedIn */}
              <div className="bg-[#151B2E] border border-slate-700 hover:border-purple-500/40 rounded-2xl p-5 transition-all">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 mx-auto">
                  <FaLinkedin />
                </div>

                <h3 className="font-semibold text-center">
                  LinkedIn
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Project posts &amp; achievements
                </p>
              </div>

              {/* GitHub */}
              <div className="bg-[#151B2E] border border-slate-700 hover:border-purple-500/40 rounded-2xl p-5 transition-all">
                <div className="w-11 h-11 rounded-xl bg-slate-700/30 text-slate-300 flex items-center justify-center mb-4 mx-auto">
                  <FaGithub />
                </div>

                <h3 className="font-semibold text-center">
                  GitHub
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Code &amp; technical evidence
                </p>
              </div>

              {/* Hackathons */}
              <div className="bg-[#151B2E] border border-slate-700 hover:border-purple-500/40 rounded-2xl p-5 transition-all">
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4 mx-auto">
                  <FaTrophy />
                </div>

                <h3 className="font-semibold text-center">
                  Hackathons
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Prototypes &amp; achievements
                </p>
              </div>

              {/* Portfolios */}
              <div className="bg-[#151B2E] border border-slate-700 hover:border-purple-500/40 rounded-2xl p-5 transition-all">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 mx-auto">
                  <FaCode />
                </div>

                <h3 className="font-semibold text-center">
                  Portfolios
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Personal projects &amp; work
                </p>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center my-5 text-purple-400 text-2xl">
              ↓
            </div>

            {/* ScoutX */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168,85,247,0.05)",
                  "0 0 45px rgba(168,85,247,0.18)",
                  "0 0 20px rgba(168,85,247,0.05)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="max-w-3xl mx-auto bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 border border-purple-500/30 rounded-3xl p-7"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-5">

                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-xl">
                  <FaSearch />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold text-purple-300">
                    ScoutX Innovation Discovery Engine
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Collects scattered innovation evidence into one
                    discoverable profile.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Down Arrow */}
            <div className="flex justify-center my-5 text-purple-400 text-2xl">
              ↓
            </div>

            {/* Structured Innovation Profile */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-3">

              {/* Idea */}
              <div className="bg-[#151B2E] border border-purple-500/20 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4 mx-auto">
                  <FaLightbulb />
                </div>

                <h3 className="font-semibold text-center">
                  Idea
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Problem &amp; concept
                </p>
              </div>

              {/* Prototype */}
              <div className="bg-[#151B2E] border border-purple-500/20 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 mx-auto">
                  <FaCode />
                </div>

                <h3 className="font-semibold text-center">
                  Prototype
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  What was built
                </p>
              </div>

              {/* Builder */}
              <div className="bg-[#151B2E] border border-purple-500/20 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-4 mx-auto">
                  <FaCheckCircle />
                </div>

                <h3 className="font-semibold text-center">
                  Builder
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Who built it
                </p>
              </div>

              {/* Evidence */}
              <div className="bg-[#151B2E] border border-purple-500/20 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4 mx-auto">
                  <FaTrophy />
                </div>

                <h3 className="font-semibold text-center">
                  Evidence
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Proof &amp; achievements
                </p>
              </div>

            </div>

            {/* Bottom Connection */}
            <div className="flex justify-center my-5 text-purple-400 text-2xl">
              ↓
            </div>

            {/* Evaluation + Matching */}
            <div className="max-w-3xl mx-auto bg-[#151B2E] border border-purple-500/20 rounded-2xl p-6">

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                {/* Innovation Score */}
                <div className="text-center">
                  <div className="text-purple-400 text-2xl font-bold">
                    87
                  </div>

                  <span className="text-xs text-slate-400">
                    Innovation Score
                  </span>
                </div>

                <div className="hidden md:block h-10 w-px bg-slate-700" />

                {/* Matching */}
                <div className="text-center">
                  <div className="text-cyan-400 text-2xl font-bold">
                    Smart Match
                  </div>

                  <span className="text-xs text-slate-400">
                    Relevant organizations &amp; opportunities
                  </span>
                </div>

              </div>
            </div>

            {/* Final Flow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 text-center"
            >
              <p className="text-slate-500 text-sm tracking-wide">

                <span className="text-purple-400">
                  Discover
                </span>

                {" → "}

                <span className="text-purple-400">
                  Evaluate
                </span>

                {" → "}

                <span className="text-purple-400">
                  Connect
                </span>

              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* =====================================================
            CORE PROBLEM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <p className="text-slate-500 text-sm leading-7">
            The problem is not a lack of innovation;
            <span className="text-slate-300">
              {" "}
              it is the lack of an efficient way to discover,
              evaluate, and connect innovators
            </span>{" "}
            with the organizations that need them.
          </p>
        </motion.div>

      </div>
    </section>
  );
}