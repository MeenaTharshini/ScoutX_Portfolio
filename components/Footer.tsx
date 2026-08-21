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
  { name: "Features", href: "#features" },
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
    const element = document.getElementById(href.replace("#", ""));

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#080A12] text-white"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/[0.07] blur-[140px]" />

        <div className="absolute bottom-[-220px] left-[-180px] h-[450px] w-[450px] rounded-full bg-violet-600/[0.05] blur-[120px]" />

        <div className="absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-fuchsia-600/[0.03] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[28px] border border-purple-500/20 bg-[#10131F] p-8 md:mt-20 md:p-12"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-600/[0.10] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet-600/[0.05] blur-[100px]" />

          <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">
                <FaRocket className="text-[10px]" />
                Build. Discover. Connect.
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                The next great innovation
                <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                  shouldn&apos;t stay hidden.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                ScoutX helps people discover projects, prototypes, technical
                capabilities, and opportunities worth connecting.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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

            <div>
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3.5 text-sm font-semibold shadow-[0_15px_40px_rgba(124,58,237,0.2)] transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
              >
                Connect With ScoutX

                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* MAIN FOOTER */}

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-14 lg:py-16">

          {/* BRAND */}

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 transition-all group-hover:border-purple-400/40 group-hover:bg-purple-500/[0.14]"
              >
                <FaRocket className="-rotate-12 text-sm" />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                Scout
                <span className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
                  X
                </span>
              </span>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              An innovation discovery platform connecting real-world problems
              with the people, projects, and prototypes capable of solving
              them.
            </p>

            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`ScoutX ${social.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 transition-all hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-purple-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* PRODUCT */}

          <FooterColumn
            title="Product"
            links={productLinks}
            onNavigate={scrollToSection}
          />

          {/* ECOSYSTEM */}

          <FooterColumn
            title="Ecosystem"
            links={ecosystemLinks}
            onNavigate={scrollToSection}
          />

          {/* MISSION */}

          <div>
            <FooterTitle title="Our Mission" />

            <p className="mt-4 text-sm leading-6 text-slate-500">
              To make valuable innovation discoverable, measurable, and
              connected to opportunities where it can create real impact.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition hover:text-purple-300"
            >
              Start a conversation
              <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        {/* BOTTOM BAR */}

        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} ScoutX. All rights reserved.
            </p>

            <p className="mt-1 text-[11px] text-slate-700">
              Built to make innovation discoverable.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-700 lg:flex">
            <span>Build</span>
            <span className="text-purple-500/50">•</span>
            <span>Prove</span>
            <span className="text-purple-500/50">•</span>
            <span>Discover</span>
            <span className="text-purple-500/50">•</span>
            <span>Connect</span>
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 text-xs font-medium text-slate-500 transition hover:text-purple-300"
          >
            Back to top

            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] transition group-hover:border-purple-500/30 group-hover:bg-purple-500/[0.07]">
              <FaArrowUp className="text-[10px] transition-transform group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

/* =============================================================
   FOOTER COMPONENTS
============================================================= */

function FooterTitle({ title }: { title: string }) {
  return (
    <>
      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
      <div className="mt-3 h-px w-7 bg-purple-500/50" />
    </>
  );
}

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
      <FooterTitle title={title} />

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <button
              type="button"
              onClick={() => onNavigate(link.href)}
              className="group flex items-center gap-2 text-left text-sm text-slate-500 transition-colors hover:text-purple-300"
            >
              <span className="h-px w-0 bg-purple-400 transition-all group-hover:w-3" />
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}