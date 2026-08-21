"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Problem", to: "problem" },
  { name: "Solution", to: "solution" },
  { name: "Advantage", to: "advantage" },
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
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "navbar-glass shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
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
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            {/* Logo Mark */}

            <div
              className="
                relative
                w-9
                h-9
                rounded-xl
                flex
                items-center
                justify-center
                brand-gradient
                shadow-[0_8px_25px_rgba(201,166,70,0.18)]
                group-hover:shadow-[0_10px_35px_rgba(201,166,70,0.35)]
                transition-all
                duration-300
              "
            >
              <FaRocket className="text-[#0B0B09] text-sm -rotate-12" />

              {/* Small shine */}
              <span
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-white/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />
            </div>

            {/* Logo Name */}

            <div className="text-2xl font-bold tracking-tight text-[#F7F2E8]">
              Scout
              <span className="text-gradient">X</span>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="!text-[#D4AF37]"
                  className="
                    relative
                    text-[#B7B0A2]
                    hover:text-[#F7F2E8]
                    text-sm
                    font-medium
                    cursor-pointer
                    transition-colors
                    duration-200
                    group
                  "
                >
                  {link.name}

                  {/* Gold underline */}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[1.5px]
                      w-0
                      bg-gradient-to-r
                      from-[#E7C979]
                      to-[#AD8930]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}

          <div className="hidden lg:flex">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="
                group
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                bg-gradient-to-br
                from-[#E7C979]
                via-[#D4AF37]
                to-[#AD8930]
                hover:brightness-110
                text-[#0B0B09]
                text-sm
                font-bold
                shadow-[0_10px_30px_rgba(201,166,70,0.18)]
                hover:shadow-[0_15px_40px_rgba(201,166,70,0.30)]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Join ScoutX

              <FaArrowRight
                className="
                  text-xs
                  group-hover:translate-x-1
                  transition-transform
                  duration-200
                "
              />
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              lg:hidden
              w-10
              h-10
              rounded-xl
              border
              border-[#D4AF37]/20
              bg-[#12120F]/80
              backdrop-blur-md
              text-[#E7C979]
              flex
              items-center
              justify-center
              hover:border-[#D4AF37]/50
              hover:bg-[#D4AF37]/10
              transition-all
              duration-200
            "
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}

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
            className="
              lg:hidden
              overflow-hidden
              bg-[#0B0B09]/95
              backdrop-blur-2xl
              border-t
              border-[#F7F2E8]/8
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            "
          >
            <div className="px-5 sm:px-6 py-6">
              {/* Mobile Navigation */}

              <ul className="flex flex-col gap-1.5">
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
                      delay: index * 0.035,
                      duration: 0.2,
                    }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      offset={-75}
                      spy
                      activeClass="
                        !text-[#D4AF37]
                        !bg-[#D4AF37]/10
                        !border-[#D4AF37]/20
                      "
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-transparent
                        text-[#B7B0A2]
                        hover:text-[#F7F2E8]
                        hover:bg-[#D4AF37]/5
                        hover:border-[#D4AF37]/10
                        text-sm
                        font-medium
                        cursor-pointer
                        transition-all
                        duration-200
                      "
                    >
                      <span>{link.name}</span>

                      <FaArrowRight
                        className="
                          text-[10px]
                          text-[#8D6D25]
                        "
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* =================================================
                  MOBILE CTA
              ================================================== */}

              <div className="mt-6 pt-6 border-t border-[#F7F2E8]/8">
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    px-5
                    py-3.5
                    rounded-xl
                    bg-gradient-to-br
                    from-[#E7C979]
                    via-[#D4AF37]
                    to-[#AD8930]
                    hover:brightness-110
                    text-[#0B0B09]
                    font-bold
                    text-sm
                    shadow-[0_10px_30px_rgba(201,166,70,0.18)]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Join ScoutX

                  <FaRocket
                    className="
                      text-xs
                      group-hover:-rotate-12
                      transition-transform
                      duration-200
                    "
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}