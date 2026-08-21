"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
  FaRocket,
  FaLightbulb,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const productLinks = [
  { name: "About ScoutX", href: "#about" },
  { name: "The Problem", href: "#problem" },
  { name: "The Solution", href: "#solution" },
  { name: "Platform Features", href: "#features" },
  { name: "Our Advantage", href: "#advantage" },
];

const ecosystemLinks = [
  { name: "Innovators", href: "#users" },
  { name: "Organizations", href: "#users" },
  { name: "Institutions", href: "#users" },
  { name: "Hackathons", href: "#users" },
  { name: "Incubators", href: "#users" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "#",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:hello@scoutx.in",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#080806]
        text-[#F7F2E8]
        border-t
        border-[#D4AF37]/10
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-[-250px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[500px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          right-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#D4AF37]/4
          blur-[120px]
        "
      />

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-[#D4AF37]/20
            bg-gradient-to-br
            from-[#171611]
            via-[#11100D]
            to-[#0B0B09]
            p-8
            md:p-12
            lg:p-14
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          "
        >
          {/* CTA glow */}

          <div
            className="
              pointer-events-none
              absolute
              top-[-180px]
              right-[-120px]
              w-[450px]
              h-[450px]
              rounded-full
              bg-[#D4AF37]/8
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-180px]
              left-[-100px]
              w-[350px]
              h-[350px]
              rounded-full
              bg-[#E7C979]/5
              blur-[100px]
            "
          />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
            {/* LEFT */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-2
                  rounded-full
                  bg-[#D4AF37]/8
                  border
                  border-[#D4AF37]/20
                  text-[#E7C979]
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
              >
                <FaRocket className="text-[10px]" />

                <span>Build. Discover. Connect.</span>
              </div>

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  mt-6
                  max-w-4xl
                "
              >
                The next great innovation
                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#E7C979]
                    via-[#D4AF37]
                    to-[#AD8930]
                  "
                >
                  shouldn't stay hidden.
                </span>
              </h2>

              <p
                className="
                  text-[#A9A293]
                  text-base
                  md:text-lg
                  leading-7
                  mt-6
                  max-w-2xl
                "
              >
                ScoutX creates a discovery layer where ideas, projects,
                prototypes, and the people behind them can be found,
                evaluated, matched, and connected to real opportunities.
              </p>

              {/* Small value points */}

              <div className="flex flex-wrap gap-x-5 gap-y-3 mt-7">
                {[
                  "Discover innovation",
                  "Show real evidence",
                  "Connect opportunities",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-[#BEB6A7]
                    "
                  >
                    <FaCheckCircle className="text-[#D4AF37] text-[10px]" />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CTA */}

            <div className="lg:text-right">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-3.5
                  rounded-xl
                  bg-gradient-to-br
                  from-[#E7C979]
                  via-[#D4AF37]
                  to-[#AD8930]
                  text-[#0B0B09]
                  font-bold
                  text-sm
                  shadow-[0_12px_35px_rgba(201,166,70,0.18)]
                  hover:shadow-[0_18px_50px_rgba(201,166,70,0.30)]
                  hover:brightness-110
                  transition-all
                  duration-300
                "
              >
                Connect With ScoutX

                <FaArrowRight className="text-xs" />
              </motion.a>

              <p className="text-[#70695D] text-xs mt-4">
                Discover what people can build.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          FOOTER CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  relative
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-[#E7C979]
                  via-[#D4AF37]
                  to-[#AD8930]
                  text-[#0B0B09]
                  shadow-[0_8px_25px_rgba(201,166,70,0.15)]
                  group-hover:shadow-[0_10px_35px_rgba(201,166,70,0.28)]
                  transition-all
                  duration-300
                "
              >
                <FaRocket className="text-sm -rotate-12" />
              </div>

              <span className="text-2xl font-bold tracking-tight">
                Scout
                <span className="text-[#D4AF37]">X</span>
              </span>
            </button>

            <p
              className="
                text-[#777064]
                text-sm
                leading-7
                mt-5
                max-w-xs
              "
            >
              An innovation discovery platform connecting real-world
              problems with the people and prototypes capable of solving
              them.
            </p>

            {/* Social */}

            <div className="flex items-center gap-2.5 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("#")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.href.startsWith("#")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={`ScoutX ${social.label}`}
                    className="
                      w-10
                      h-10
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-[#11100D]
                      border
                      border-[#F7F2E8]/8
                      text-[#777064]
                      hover:text-[#E7C979]
                      hover:border-[#D4AF37]/30
                      hover:bg-[#D4AF37]/5
                      transition-all
                      duration-300
                    "
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =================================================
              PRODUCT
          ================================================== */}

          <div>
            <h3 className="text-sm font-semibold text-[#F7F2E8]">
              Product
            </h3>

            <div className="w-7 h-px bg-[#D4AF37]/50 mt-3" />

            <ul className="mt-5 space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-left
                      text-sm
                      text-[#777064]
                      hover:text-[#E7C979]
                      transition-colors
                      duration-200
                    "
                  >
                    <span
                      className="
                        w-0
                        h-px
                        bg-[#D4AF37]
                        group-hover:w-3
                        transition-all
                        duration-200
                      "
                    />

                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              ECOSYSTEM
          ================================================== */}

          <div>
            <h3 className="text-sm font-semibold text-[#F7F2E8]">
              Ecosystem
            </h3>

            <div className="w-7 h-px bg-[#D4AF37]/50 mt-3" />

            <ul className="mt-5 space-y-3.5">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-left
                      text-sm
                      text-[#777064]
                      hover:text-[#E7C979]
                      transition-colors
                      duration-200
                    "
                  >
                    <span
                      className="
                        w-0
                        h-px
                        bg-[#D4AF37]
                        group-hover:w-3
                        transition-all
                        duration-200
                      "
                    />

                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              MISSION
          ================================================== */}

          <div>
            <h3 className="text-sm font-semibold text-[#F7F2E8]">
              Our Mission
            </h3>

            <div className="w-7 h-px bg-[#D4AF37]/50 mt-3" />

            <p
              className="
                text-[#777064]
                text-sm
                leading-7
                mt-5
              "
            >
              To make valuable innovation discoverable, measurable,
              and connected to the opportunities where it can create
              real impact.
            </p>

            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[#D4AF37]
                hover:text-[#E7C979]
                text-sm
                font-medium
                mt-5
                transition-colors
              "
            >
              Start a conversation

              <FaArrowRight
                className="
                  text-[10px]
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div className="relative z-10 border-t border-[#F7F2E8]/7">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]/20
              to-transparent
            "
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          {/* Copyright */}

          <div className="text-center md:text-left">
            <p className="text-xs text-[#625C52]">
              © {new Date().getFullYear()} ScoutX. All rights reserved.
            </p>

            <p className="text-[11px] text-[#454139] mt-1">
              Built to make innovation discoverable.
            </p>
          </div>

          {/* Center tagline */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-2
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-[#4F4A42]
            "
          >
            <span className="w-5 h-px bg-[#D4AF37]/30" />

            Build
            <span className="text-[#D4AF37]/50">•</span>
            Prove
            <span className="text-[#D4AF37]/50">•</span>
            Discover
            <span className="text-[#D4AF37]/50">•</span>
            Connect

            <span className="w-5 h-px bg-[#D4AF37]/30" />
          </div>

          {/* Back to top */}

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              group
              inline-flex
              items-center
              gap-3
              text-xs
              font-medium
              text-[#777064]
              hover:text-[#E7C979]
              transition-colors
            "
          >
            Back to top

            <span
              className="
                w-9
                h-9
                rounded-xl
                bg-[#11100D]
                border
                border-[#F7F2E8]/8
                flex
                items-center
                justify-center
                group-hover:border-[#D4AF37]/35
                group-hover:bg-[#D4AF37]/5
                transition-all
              "
            >
              <FaArrowUp
                className="
                  text-[10px]
                  group-hover:-translate-y-0.5
                  transition-transform
                "
              />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}