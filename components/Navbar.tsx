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
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

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
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? `
              bg-[#0B0B09]/90
              backdrop-blur-2xl
              border-b border-white/[0.07]
              shadow-[0_12px_40px_rgba(0,0,0,0.25)]
            `
            : `
              bg-[#FFFDF8]/95
              backdrop-blur-xl
              border-b border-[#D4AF37]/10
              shadow-[0_5px_25px_rgba(80,60,20,0.05)]
            `
        }
      `}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className={`
            flex
            items-center
            justify-between
            transition-all
            duration-500
            ${scrolled ? "h-[68px]" : "h-[76px]"}
          `}
        >

          {/* =====================================================
              LOGO
          ====================================================== */}

          <Link
            to="home"
            smooth
            duration={700}
            offset={-80}
            onClick={closeMenu}
            className="group flex cursor-pointer items-center gap-3"
          >
            {/* Logo icon */}

            <div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-gradient-to-br
                from-[#F1D88A]
                via-[#D4AF37]
                to-[#A77D1D]
                shadow-[0_8px_25px_rgba(201,166,70,0.20)]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:shadow-[0_10px_35px_rgba(201,166,70,0.35)]
              "
            >
              <FaRocket
                className="
                  relative
                  z-10
                  -rotate-12
                  text-sm
                  text-[#0B0B09]
                "
              />

              <div
                className="
                  absolute
                  -left-8
                  top-0
                  h-full
                  w-8
                  rotate-12
                  bg-white/30
                  blur-sm
                  transition-all
                  duration-700
                  group-hover:left-14
                "
              />
            </div>

            {/* Brand */}

            <div
              className={`
                text-[25px]
                font-bold
                tracking-[-0.04em]
                transition-colors
                duration-500
                ${
                  scrolled
                    ? "text-[#F7F2E8]"
                    : "text-[#17150F]"
                }
              `}
            >
              Scout
              <span
                className="
                  bg-gradient-to-r
                  from-[#D4AF37]
                  via-[#E7C979]
                  to-[#AD8930]
                  bg-clip-text
                  text-transparent
                "
              >
                X
              </span>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={700}
                    offset={-80}
                    spy
                    activeClass={
                      scrolled
                        ? "!text-[#E7C979]"
                        : "!text-[#A87D19]"
                    }
                    className={`
                      group
                      relative
                      cursor-pointer
                      py-2
                      text-[13px]
                      font-semibold
                      tracking-[-0.01em]
                      transition-colors
                      duration-300
                      ${
                        scrolled
                          ? `
                            text-[#AAA397]
                            hover:text-[#F7F2E8]
                          `
                          : `
                            text-[#5F594D]
                            hover:text-[#17150F]
                          `
                      }
                    `}
                  >
                    {link.name}

                    {/* Underline */}

                    <span
                      className="
                        absolute
                        -bottom-0.5
                        left-0
                        h-[2px]
                        w-0
                        rounded-full
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
          </div>

          {/* =====================================================
              DESKTOP CTA
          ====================================================== */}

          <div className="hidden lg:block">
            <Link
              to="contact"
              smooth
              duration={700}
              offset={-80}
              className="
                group
                inline-flex
                cursor-pointer
                items-center
                gap-2.5
                rounded-full
                bg-gradient-to-r
                from-[#E7C979]
                via-[#D4AF37]
                to-[#B88B25]
                px-6
                py-3
                text-sm
                font-bold
                text-[#17150F]
                shadow-[0_8px_25px_rgba(201,166,70,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:brightness-105
                hover:shadow-[0_12px_35px_rgba(201,166,70,0.32)]
              "
            >
              Join ScoutX

              <FaArrowRight
                className="
                  text-[11px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =====================================================
              MOBILE BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              transition-all
              duration-300
              lg:hidden
              ${
                scrolled
                  ? `
                    border-[#D4AF37]/20
                    bg-white/[0.04]
                    text-[#E7C979]
                    hover:bg-[#D4AF37]/10
                  `
                  : `
                    border-[#B08A32]/20
                    bg-[#F5EEDC]
                    text-[#80601B]
                    hover:bg-[#E8D8A9]/30
                  `
              }
            `}
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
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              overflow-hidden
              border-t
              backdrop-blur-2xl
              lg:hidden
              ${
                scrolled
                  ? `
                    border-white/[0.07]
                    bg-[#0B0B09]/97
                  `
                  : `
                    border-[#D4AF37]/10
                    bg-[#FFFDF8]/98
                  `
              }
            `}
          >
            <div className="px-5 py-5 sm:px-6">

              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.to}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.035,
                      duration: 0.25,
                    }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={700}
                      offset={-75}
                      spy
                      onClick={closeMenu}
                      activeClass={
                        scrolled
                          ? `
                            !text-[#E7C979]
                            !bg-[#D4AF37]/10
                            !border-[#D4AF37]/20
                          `
                          : `
                            !text-[#9B731D]
                            !bg-[#D4AF37]/10
                            !border-[#D4AF37]/20
                          `
                      }
                      className={`
                        flex
                        cursor-pointer
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-transparent
                        px-4
                        py-3.5
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          scrolled
                            ? `
                              text-[#AAA397]
                              hover:bg-white/[0.03]
                              hover:text-[#F7F2E8]
                            `
                            : `
                              text-[#5F594D]
                              hover:bg-[#D4AF37]/5
                              hover:text-[#17150F]
                            `
                        }
                      `}
                    >
                      <span>{link.name}</span>

                      <FaArrowRight
                        className={`
                          text-[10px]
                          ${
                            scrolled
                              ? "text-[#8D6D25]"
                              : "text-[#AD8930]"
                          }
                        `}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}

              <div
                className={`
                  mt-5
                  border-t
                  pt-5
                  ${
                    scrolled
                      ? "border-white/[0.07]"
                      : "border-[#0B0B09]/10"
                  }
                `}
              >
                <Link
                  to="contact"
                  smooth
                  duration={700}
                  offset={-75}
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    bg-gradient-to-r
                    from-[#E7C979]
                    via-[#D4AF37]
                    to-[#AD8930]
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-[#17150F]
                    shadow-[0_8px_25px_rgba(201,166,70,0.18)]
                  "
                >
                  Join ScoutX

                  <FaRocket
                    className="
                      text-[11px]
                      transition-transform
                      duration-300
                      group-hover:-rotate-12
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