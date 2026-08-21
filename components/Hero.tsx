"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaSearch,
  FaLightbulb,
  FaBuilding,
  FaCode,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-900 text-white flex items-center pt-28 md:pt-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-[-120px] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-[-100px] w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Main Hero */}
        <div className="text-center max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            AI-Powered Innovation Discovery Platform
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            Where

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600">
              Problems Meet
            </span>

            <span className="block">
              Prototypes.
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
                "Discover innovations that solve real problems.",
                2500,
                "Turn scattered prototypes into discoverable solutions.",
                2500,
                "Match real-world challenges with emerging innovators.",
                2500,
                "Give promising ideas a path beyond the hackathon.",
                2500,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-slate-400 text-lg md:text-xl leading-8 max-w-3xl mx-auto"
          >
            ScoutX is an innovation discovery platform that connects
            <span className="text-purple-400 font-medium">
              {" "}
              real-world problems
            </span>{" "}
            with
            <span className="text-purple-400 font-medium">
              {" "}
              existing student and early-stage prototypes
            </span>
            , helping organizations discover, evaluate, and collaborate
            on solutions beyond traditional recruitment.
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
              See the Problem
            </a>
          </motion.div>

        </div>

        {/* Core Concept */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-20"
        >

          <div className="max-w-5xl mx-auto">

            {/* Flow */}
            <div className="grid md:grid-cols-5 gap-3 items-center">

              {/* Problem */}
              <div className="bg-[#151B2E] border border-slate-700 hover:border-purple-500/40 rounded-2xl p-5 transition">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 mx-auto">
                  <FaBuilding />
                </div>

                <h3 className="font-semibold text-center">
                  Real Problems
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Organizations post challenges
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-purple-400 text-xl">
                →
              </div>

              {/* Matching */}
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5 shadow-lg shadow-purple-500/5">
                <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-4 mx-auto">
                  <FaSearch />
                </div>

                <h3 className="font-semibold text-center text-purple-300">
                  ScoutX Engine
                </h3>

                <p className="text-slate-400 text-xs text-center mt-2">
                  Finds relevant innovations
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-purple-400 text-xl">
                →
              </div>

              {/* Innovation */}
              <div className="bg-[#151B2E] border border-slate-700 hover:border-purple-500/40 rounded-2xl p-5 transition">
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4 mx-auto">
                  <FaLightbulb />
                </div>

                <h3 className="font-semibold text-center">
                  Prototypes
                </h3>

                <p className="text-slate-500 text-xs text-center mt-2">
                  Existing ideas & solutions
                </p>
              </div>

            </div>

            {/* Bottom connection */}
            <div className="flex justify-center my-4 text-purple-400 text-xl">
              ↓
            </div>

            <div className="max-w-xl mx-auto bg-[#151B2E] border border-purple-500/20 rounded-2xl p-5">

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <FaCode />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="font-semibold">
                    Builder + Evidence
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Prototype • Technology • Impact • Validation
                  </p>
                </div>

                <div className="hidden md:block text-purple-400 text-xl">
                  →
                </div>

                <div className="text-center">
                  <span className="text-purple-400 font-semibold">
                    Opportunity
                  </span>

                  <p className="text-slate-500 text-xs mt-1">
                    Pilot • Collaboration • Incubation
                  </p>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm tracking-wide">
            <span className="text-purple-400">
              Build
            </span>
            {" → "}
            <span className="text-purple-400">
              Prove
            </span>
            {" → "}
            <span className="text-purple-400">
              Discover
            </span>
            {" → "}
            <span className="text-purple-400">
              Match
            </span>
            {" → "}
            <span className="text-purple-400">
              Impact
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}