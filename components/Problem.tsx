"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaUsers,
  FaMoneyBillWave,
  FaSearch,
  FaLightbulb,
  FaBuilding,
  FaArrowRight,
  FaExclamationTriangle,
} from "react-icons/fa";

const problemPoints = [
  {
    icon: FaGlobe,
    title: "Innovation is Scattered",
    description:
      "Ideas and prototypes are spread across GitHub, LinkedIn, portfolios, college events, and hackathons.",
  },
  {
    icon: FaUsers,
    title: "Hidden Innovators",
    description:
      "Talented builders who never participate in hackathons often remain invisible to organizations.",
  },
  {
    icon: FaSearch,
    title: "Discovery Is Difficult",
    description:
      "Finding the right project, technology, or innovator through scattered platforms is slow and inefficient.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Discovery Can Be Expensive",
    description:
      "Companies often rely on hackathons and events that require planning, logistics, time, and resources.",
  },
];

const lostFlow = [
  {
    icon: FaLightbulb,
    title: "Build",
    description: "An innovator creates an idea or prototype.",
  },
  {
    icon: FaGlobe,
    title: "Scatter",
    description: "The project appears across different platforms.",
  },
  {
    icon: FaSearch,
    title: "Disappear",
    description: "Visibility decreases as attention moves elsewhere.",
  },
  {
    icon: FaBuilding,
    title: "Missed",
    description: "The right organization never discovers it.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="
        relative
        overflow-hidden
        bg-[#0B0B09]
        text-[#F7F2E8]
        py-24
        md:py-32
        px-6
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          top-[-180px]
          left-[-180px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#C9A646]/8
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-180px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#D4AF37]/6
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-[700px]
          h-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C9A646]/[0.025]
          blur-3xl
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="eyebrow">
            The Problem
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              mt-5
              leading-tight
              tracking-tight
            "
          >
            Innovation exists.
            <br />

            <span className="text-gradient">
              Discovery is the problem.
            </span>
          </h2>

          <p
            className="
              text-[#B7B0A2]
              text-lg
              md:text-xl
              leading-8
              mt-7
              max-w-3xl
              mx-auto
            "
          >
            Valuable ideas and prototypes are being created every day.
            But they are scattered across platforms, events, and personal
            networks — making them difficult for the right organizations
            to discover and evaluate.
          </p>
        </motion.div>

        {/* =====================================================
            DISCOVERY GAP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <FaExclamationTriangle className="text-[#D4AF37]" />

            <p
              className="
                text-[#D4AF37]
                uppercase
                tracking-widest
                text-sm
                font-semibold
              "
            >
              The Discovery Gap
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {problemPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    surface-card
                    p-6
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-[#D4AF37]/10
                      border
                      border-[#D4AF37]/15
                      text-[#E7C979]
                      flex
                      items-center
                      justify-center
                      text-lg
                      group-hover:bg-[#D4AF37]/15
                      group-hover:border-[#D4AF37]/30
                      group-hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    <Icon />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      text-lg
                      font-semibold
                      mt-5
                      text-[#F7F2E8]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      text-[#9F988B]
                      text-sm
                      leading-6
                      mt-3
                    "
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

        {/* =====================================================
            HOW IDEAS GET LOST
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-10">

            <p
              className="
                text-[#8D6D25]
                uppercase
                tracking-widest
                text-sm
                font-semibold
              "
            >
              The Current Journey
            </p>

            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                mt-3
                text-[#F7F2E8]
              "
            >
              How valuable ideas get lost
            </h3>

          </div>

          <div className="relative">

            {/* Connecting Line */}

            <div
              className="
                hidden
                lg:block
                absolute
                top-14
                left-[10%]
                right-[10%]
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#D4AF37]/30
                to-transparent
              "
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {lostFlow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="
                      relative
                      surface-card
                      p-6
                      text-center
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        w-12
                        h-12
                        mx-auto
                        rounded-xl
                        bg-[#D4AF37]/10
                        border
                        border-[#D4AF37]/15
                        text-[#E7C979]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon />
                    </div>

                    {/* Number */}

                    <p
                      className="
                        text-[#D4AF37]
                        text-xs
                        font-semibold
                        mt-4
                        tracking-widest
                      "
                    >
                      0{index + 1}
                    </p>

                    {/* Title */}

                    <h4
                      className="
                        font-semibold
                        text-lg
                        mt-2
                        text-[#F7F2E8]
                      "
                    >
                      {item.title}
                    </h4>

                    {/* Description */}

                    <p
                      className="
                        text-[#9F988B]
                        text-sm
                        leading-6
                        mt-2
                      "
                    >
                      {item.description}
                    </p>

                    {/* Arrow */}

                    {index < lostFlow.length - 1 && (
                      <FaArrowRight
                        className="
                          hidden
                          lg:block
                          absolute
                          -right-3
                          top-12
                          text-[#D4AF37]
                          z-10
                          drop-shadow-[0_0_8px_rgba(201,166,70,0.35)]
                        "
                      />
                    )}

                  </motion.div>
                );
              })}

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CORE PROBLEM
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div
            className="
              max-w-5xl
              mx-auto
              text-center
              rounded-3xl
              border
              border-[#D4AF37]/20
              bg-gradient-to-br
              from-[#D4AF37]/10
              via-[#12120F]
              to-[#0B0B09]
              px-7
              py-12
              md:px-14
              md:py-16
              shadow-[0_30px_80px_rgba(0,0,0,0.28)]
            "
          >

            <p
              className="
                text-[#D4AF37]
                uppercase
                tracking-widest
                text-sm
                font-semibold
              "
            >
              The Core Problem
            </p>

            <h3
              className="
                text-2xl
                md:text-4xl
                font-bold
                leading-tight
                mt-5
                text-[#F7F2E8]
              "
            >
              Companies don't lack problems.
              <br />

              <span className="text-gradient">
                They lack efficient access to ideas.
              </span>
            </h3>

            <p
              className="
                text-[#B7B0A2]
                text-base
                md:text-lg
                leading-8
                max-w-3xl
                mx-auto
                mt-6
              "
            >
              The problem is not a lack of innovation. It is the lack of an
              efficient way to discover, evaluate, and connect innovators
              with the organizations that need them.
            </p>

          </div>
        </motion.div>

        {/* =====================================================
            TRANSITION TO SOLUTION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >

          <p className="text-[#817A6E]">
            The missing layer is not another social network.
          </p>

          <h3
            className="
              text-2xl
              md:text-4xl
              font-bold
              mt-4
              text-[#F7F2E8]
            "
          >
            It is a smarter way to{" "}

            <span className="text-gradient">
              discover innovation.
            </span>
          </h3>

          <a
            href="#solution"
            className="
              btn-primary
              mt-7
            "
          >
            See the ScoutX Solution

            <FaArrowRight />
          </a>

        </motion.div>

      </div>
    </section>
  );
}