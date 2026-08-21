"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
  FaRocket,
} from "react-icons/fa";

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

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-[#D4AF37]/10 bg-[#0B0B09] text-[#F7F1E3]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.06] blur-[140px]" />

        <div className="absolute bottom-[-220px] left-[-180px] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.04] blur-[120px]" />

        <div className="absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-[#E7C979]/[0.02] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr] md:py-16 lg:gap-20">
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
              aria-label="Back to top"
            >
              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  border border-[#D4AF37]/20
                  bg-[#D4AF37]/[0.07]
                  text-[#E7C979]
                  transition-all
                  group-hover:border-[#D4AF37]/40
                  group-hover:bg-[#D4AF37]/[0.12]
                "
              >
                <FaRocket className="-rotate-12 text-sm" />
              </span>

              <span className="text-2xl font-bold tracking-tight text-[#F7F1E3]">
                Scout
                <span
                  className="
                    bg-gradient-to-r
                    from-[#F0D98A]
                    via-[#D4AF37]
                    to-[#AD8930]
                    bg-clip-text
                    text-transparent
                  "
                >
                  X
                </span>
              </span>
            </button>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#918A7D]">
              An innovation discovery platform connecting real-world
              problems with the people, projects, and prototypes capable
              of solving them.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`ScoutX ${social.label}`}
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-xl
                      border border-white/[0.07]
                      bg-white/[0.025]
                      text-[#7F786B]
                      transition-all
                      hover:border-[#D4AF37]/30
                      hover:bg-[#D4AF37]/[0.07]
                      hover:text-[#E7C979]
                    "
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-sm font-semibold text-[#DDD5C6]">
              Our Mission
            </h3>

            <div className="mt-3 h-px w-7 bg-[#D4AF37]/50" />

            <p className="mt-4 max-w-md text-sm leading-7 text-[#918A7D]">
              To make valuable innovation discoverable, measurable,
              and connected to opportunities where it can create real
              impact.
            </p>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6F695E]">
                ScoutX
              </p>

              <p className="mt-2 text-sm text-[#7F786B]">
                Build. Prove. Discover. Connect.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-5 py-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs text-[#6F695E]">
              © {new Date().getFullYear()} ScoutX. All rights reserved.
            </p>

            <p className="mt-1 text-[11px] text-[#4F4A42]">
              Built to make innovation discoverable.
            </p>
          </div>

          {/* Process */}
          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#625C51] lg:flex">
            <span>Build</span>
            <span className="text-[#D4AF37]/50">•</span>
            <span>Prove</span>
            <span className="text-[#D4AF37]/50">•</span>
            <span>Discover</span>
            <span className="text-[#D4AF37]/50">•</span>
            <span>Connect</span>
          </div>

          {/* Back to Top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              group inline-flex items-center gap-3
              text-xs font-medium
              text-[#7F786B]
              transition
              hover:text-[#E7C979]
            "
          >
            Back to top

            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl
                border border-white/[0.07]
                bg-white/[0.025]
                transition
                group-hover:border-[#D4AF37]/30
                group-hover:bg-[#D4AF37]/[0.07]
              "
            >
              <FaArrowUp className="text-[10px]" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}