"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

const productLinks = [
  { name: "About ScoutX", href: "#about" },
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "Features", href: "#features" },
];

const ecosystemLinks = [
  { name: "Innovators", href: "#users" },
  { name: "Organizations", href: "#users" },
  { name: "Institutions", href: "#users" },
  { name: "Hackathons & Incubators", href: "#users" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#080B14] text-white border-t border-slate-800">

      {/* Main CTA */}
      <div className="max-w-7xl mx-auto px-6 pt-20">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 md:p-12"
        >

          {/* Glow */}
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">

            <div>

              <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-widest">
                <FaRocket />
                <span>Build. Discover. Connect.</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">
                The next great innovation
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
                  {" "}
                  shouldn't stay hidden.
                </span>
              </h2>

              <p className="text-slate-400 leading-7 mt-5 max-w-2xl">
                ScoutX is building a discovery layer that helps organizations
                find emerging innovators and promising prototypes based on
                what they have actually built.
              </p>

            </div>

            <div className="lg:text-right">

              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-7 py-3.5 rounded-xl font-medium transition"
              >
                Connect With ScoutX
                <FaRocket />
              </a>

              <p className="text-slate-600 text-sm mt-4">
                Discover what people can build.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >

              <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <FaLightbulb />
              </div>

              <span className="text-2xl font-bold">
                Scout<span className="text-purple-400">X</span>
              </span>

            </a>

            <p className="text-slate-500 text-sm leading-7 mt-5 max-w-xs">
              An innovation discovery platform connecting real-world problems
              with the people and prototypes capable of solving them.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ScoutX LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ScoutX GitHub"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:hello@scoutx.in"
                aria-label="Email ScoutX"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Product */}
          <div>

            <h3 className="font-semibold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">

              {productLinks.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    {link.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Ecosystem */}
          <div>

            <h3 className="font-semibold text-white">
              Ecosystem
            </h3>

            <ul className="mt-5 space-y-3">

              {ecosystemLinks.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    {link.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Mission */}
          <div>

            <h3 className="font-semibold text-white">
              Our Mission
            </h3>

            <p className="text-sm text-slate-500 leading-7 mt-5">
              To make valuable innovation discoverable, measurable, and
              connected to the opportunities where it can create real impact.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium mt-5 transition"
            >
              Start a conversation
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="text-center md:text-left">

              <p className="text-sm text-slate-600">
                © {new Date().getFullYear()} ScoutX. All rights reserved.
              </p>

              <p className="text-xs text-slate-700 mt-1">
                Built to make innovation discoverable.
              </p>

            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-slate-500 hover:text-purple-400 transition"
            >
              Back to top

              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-purple-500/30 flex items-center justify-center transition">
                <FaArrowUp className="text-xs" />
              </span>

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}