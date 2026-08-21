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


        {/* =====================================================
            CORE PROBLEM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          
        </motion.div>

      </div>
    </section>
  );
}