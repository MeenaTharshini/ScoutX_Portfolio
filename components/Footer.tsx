"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
  FaRocket,
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

const valuePoints = [
  "Discover innovation",
  "Show real evidence",
  "Connect opportunities",
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

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#080A0F] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top purple glow */}
        <div className="absolute left-1/2 top-[-280px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/[0.07] blur-[140px]" />

        {/* Left glow */}
        <div className="absolute bottom-[-250px] left-[-180px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.05] blur-[130px]" />

        {/* Right glow */}
        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.035] blur-[130px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.09] via-white/[0.025] to-white/[0.015] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-12 lg:p-14"
        >
          {/* CTA glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-purple-600/[0.10] blur-[110px] transition-opacity duration-700 group-hover:bg-purple-600/[0.15]" />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-[350px] w-[350px] rounded-full bg-violet-600/[0.06] blur-[110px]" />

          {/* Top accent */}
          <div className="absolute left-12 right-12 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.07] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-300">
                <FaRocket className="text-[10px]" />
                Build. Discover. Connect.
              </div>

              <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
                The next great innovation
                <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  shouldn&apos;t stay hidden.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                ScoutX creates a discovery layer where projects, prototypes,
                technical capabilities, and the people behind them can be
                discovered and connected to real opportunities.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {valuePoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-400"
                  >
                    <FaCheckCircle className="text-[10px] text-purple-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CTA */}
            <div className="lg:text-right">
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group/cta inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(124,58,237,0.22)] transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-[0_20px_55px_rgba(124,58,237,0.32)]"
              >
                Connect With ScoutX

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover/cta:translate-x-1" />
              </motion.a>

              <p className="mt-4 text-xs text-slate-600">
                Discover what people can build.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-16">
          {/* =====================================================
              BRAND
          ====================================================== */}

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/[0.10] text-purple-300 shadow-[0_8px_30px_rgba(124,58,237,0.10)] transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/40 group-hover:bg-purple-500/[0.15] group-hover:shadow-[0_10px_35px_rgba(124,58,237,0.2)]">
                <FaRocket className="-rotate-12 text-sm" />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                Scout
                <span className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                  X
                </span>
              </span>
            </button>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              An innovation discovery platform connecting real-world problems
              with the people, projects, and prototypes capable of solving
              them.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith("http");

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={
                      isExternal ? "noopener noreferrer" : undefined
                    }
                    aria-label={`ScoutX ${social.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-purple-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              PRODUCT
          ====================================================== */}

          <FooterColumn
            title="Product"
            links={productLinks}
            onNavigate={scrollToSection}
          />

          {/* =====================================================
              ECOSYSTEM
          ====================================================== */}

          <FooterColumn
            title="Ecosystem"
            links={ecosystemLinks}
            onNavigate={scrollToSection}
          />

          {/* =====================================================
              MISSION
          ====================================================== */}

          <div>
            <h3 className="text-sm font-semibold text-slate-200">
              Our Mission
            </h3>

            <div className="mt-3 h-px w-7 bg-purple-500/50" />

            <p className="mt-5 text-sm leading-7 text-slate-500">
              To make valuable innovation discoverable, measurable, and
              connected to the opportunities where it can create real impact.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Start a conversation

              <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          DIVIDER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} ScoutX. All rights reserved.
            </p>

            <p className="mt-1 text-[11px] text-slate-700">
              Built to make innovation discoverable.
            </p>
          </div>

          {/* Center tagline */}
          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-700 lg:flex">
            <span className="h-px w-5 bg-purple-500/30" />

            <span>Build</span>

            <span className="text-purple-500/50">•</span>

            <span>Prove</span>

            <span className="text-purple-500/50">•</span>

            <span>Discover</span>

            <span className="text-purple-500/50">•</span>

            <span>Connect</span>

            <span className="h-px w-5 bg-purple-500/30" />
          </div>

          {/* Back to top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 text-xs font-medium text-slate-500 transition-colors hover:text-purple-300"
          >
            Back to top

            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/[0.07]">
              <FaArrowUp className="text-[10px] transition-transform duration-200 group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

/* =============================================================
   FOOTER COLUMN
============================================================= */

interface FooterColumnProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
  onNavigate: (href: string) => void;
}

function FooterColumn({
  title,
  links,
  onNavigate,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>

      <div className="mt-3 h-px w-7 bg-purple-500/50" />

      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.name}>
            <button
              type="button"
              onClick={() => onNavigate(link.href)}
              className="group flex items-center gap-2 text-left text-sm text-slate-500 transition-colors duration-200 hover:text-purple-300"
            >
              <span className="h-px w-0 bg-purple-400 transition-all duration-200 group-hover:w-3" />

              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}