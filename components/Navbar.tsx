"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaRocket,
  FaChevronDown,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Why ScoutX", to: "about" },
  { name: "The Problem", to: "problem" },
  { name: "Solution", to: "solution" },
  { name: "Features", to: "features" },
  { name: "Ecosystem", to: "users" },
  { name: "Team", to: "team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* =====================================================
              LOGO
          ====================================================== */}

          <Link
            to="home"
            smooth
            duration={600}
            offset={-80}
            onClick={closeMenu}
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* Logo Mark */}

            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition">
              <FaRocket className="text-white text-sm -rotate-12" />
            </div>

            {/* Logo Text */}

            <div className="text-2xl font-bold tracking-tight text-white">
              Scout
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-400">
                X
              </span>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="!text-purple-400"
                  className="relative text-slate-300 hover:text-white text-sm font-medium cursor-pointer transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 transition-all duration-300 cursor-pointer"
            >
              Join ScoutX

              <FaRocket className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 rounded-xl border border-slate-700 bg-slate-900/70 text-slate-200 flex items-center justify-center hover:border-purple-500/40 hover:text-purple-400 transition"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="lg:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-7">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.to}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      offset={-75}
                      spy
                      activeClass="!text-purple-400 !bg-purple-500/10"
                      onClick={closeMenu}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium cursor-pointer transition-all"
                    >
                      <span>{link.name}</span>

                      <FaChevronDown className="rotate-[-90deg] text-[10px] text-slate-600" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}

              <div className="mt-6 pt-6 border-t border-slate-800">
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/20 transition-all cursor-pointer"
                >
                  Join ScoutX
                  <FaRocket className="text-xs" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}