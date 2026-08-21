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
  {
    name: "About",
    to: "about",
  },
  {
    name: "Why ScoutX",
    to: "problem",
  },
  {
    name: "Platform",
    to: "solution",
  },
  {
    name: "Features",
    to: "features",
  },
  {
    name: "Ecosystem",
    to: "users",
  },
  {
    name: "Team",
    to: "team",
  },
];

const scrollProps = {
  smooth: true,
  duration: 700,
  offset: -90,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goHome = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? "px-3 pt-3 sm:px-5 lg:px-6"
            : "px-2 pt-2 sm:px-4 lg:px-5"
        }`}
      >
        <nav
          className={`mx-auto max-w-7xl border transition-all duration-500 ${
            scrolled
              ? `
                rounded-2xl
                border-white/[0.08]
                bg-[#0B0B09]/90
                shadow-[0_18px_60px_rgba(0,0,0,0.35)]
                backdrop-blur-2xl
              `
              : `
                rounded-2xl
                border-white/[0.04]
                bg-[#0B0B09]/70
                backdrop-blur-xl
              `
          }`}
        >
          {/* =========================
              MAIN NAV
          ========================== */}

          <div
            className={`flex items-center justify-between px-4 sm:px-6 lg:px-7 ${
              scrolled ? "h-[66px]" : "h-[72px]"
            }`}
          >
            {/* =========================
                LOGO
            ========================== */}

            <button
              type="button"
              onClick={goHome}
              aria-label="Go to ScoutX home"
              className="group flex items-center gap-3 outline-none"
            >
              <div
                className="
                  relative
                  flex h-10 w-10 shrink-0 items-center justify-center
                  overflow-hidden rounded-xl
                  bg-gradient-to-br
                  from-[#F4DF9B]
                  via-[#D4AF37]
                  to-[#9B741F]
                  shadow-[0_8px_28px_rgba(212,175,55,0.18)]
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:shadow-[0_10px_35px_rgba(212,175,55,0.32)]
                "
              >
                <FaRocket className="-rotate-12 text-sm text-[#0B0B09]" />

                <span
                  className="
                    absolute -left-10 top-0 h-full w-7 rotate-12
                    bg-white/35 blur-sm
                    transition-all duration-700
                    group-hover:left-14
                  "
                />
              </div>

              <span
                className="
                  hidden text-[22px] font-bold tracking-[-0.045em]
                  text-[#F7F2E8] sm:block
                "
              >
                Scout
                <span
                  className="
                    bg-gradient-to-r from-[#F1D88A]
                    via-[#D4AF37] to-[#A77D1D]
                    bg-clip-text text-transparent
                  "
                >
                  X
                </span>
              </span>
            </button>

            {/* =========================
                DESKTOP NAV
            ========================== */}

            <div className="hidden lg:flex lg:items-center">
              <div
                className="
                  flex items-center gap-0.5
                  rounded-xl
                  border border-white/[0.055]
                  bg-white/[0.025]
                  p-1
                "
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    {...scrollProps}
                    spy
                    activeClass="!bg-[#D4AF37]/10 !text-[#E7C979]"
                    className="
                      group relative cursor-pointer
                      rounded-lg
                      px-3.5 py-2.5
                      text-[12px] font-semibold
                      text-[#9C978C]
                      transition-all duration-300
                      hover:bg-white/[0.045]
                      hover:text-[#F7F2E8]
                    "
                  >
                    {link.name}

                    <span
                      className="
                        absolute bottom-1 left-1/2
                        h-px w-0
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-[#D4AF37] to-[#F1D88A]
                        transition-all duration-300
                        group-hover:w-5
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* =========================
                DESKTOP ACTIONS
            ========================== */}

            <div className="hidden items-center gap-2 lg:flex">
              <Link
                to="contact"
                {...scrollProps}
                className="
                  cursor-pointer
                  rounded-xl
                  border border-white/[0.07]
                  bg-white/[0.025]
                  px-4 py-2.5
                  text-[12px] font-semibold
                  text-[#B0ABA0]
                  transition-all duration-300
                  hover:border-[#D4AF37]/20
                  hover:bg-[#D4AF37]/[0.05]
                  hover:text-[#F7F2E8]
                "
              >
                Contact
              </Link>

              <Link
                to="contact"
                {...scrollProps}
                className="
                  group
                  inline-flex cursor-pointer
                  items-center gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#E8CB72]
                  via-[#D4AF37]
                  to-[#AD8225]
                  px-5 py-2.5
                  text-[12px] font-bold
                  text-[#17150F]
                  shadow-[0_8px_25px_rgba(212,175,55,0.16)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_35px_rgba(212,175,55,0.28)]
                "
              >
                Join ScoutX

                <FaArrowRight
                  className="
                    text-[9px]
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* =========================
                MOBILE BUTTON
            ========================== */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-white/[0.08]
                bg-white/[0.035]
                text-[#D4AF37]
                transition-all duration-300
                hover:border-[#D4AF37]/25
                hover:bg-[#D4AF37]/[0.08]
                lg:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* =========================
              MOBILE MENU
          ========================== */}

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  overflow-hidden
                  border-t border-white/[0.07]
                  lg:hidden
                "
              >
                <div className="px-4 pb-5 pt-3">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
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
                          offset={-80}
                          spy
                          onClick={closeMenu}
                          activeClass="
                            !border-[#D4AF37]/20
                            !bg-[#D4AF37]/[0.08]
                            !text-[#E7C979]
                          "
                          className="
                            flex cursor-pointer
                            items-center justify-between
                            rounded-xl
                            border border-transparent
                            px-4 py-3
                            text-sm font-semibold
                            text-[#9C978C]
                            transition-all duration-300
                            hover:bg-white/[0.035]
                            hover:text-[#F7F2E8]
                          "
                        >
                          <span>{link.name}</span>

                          <FaArrowRight
                            className="text-[9px] text-[#80601B]"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile CTA */}

                  <div className="mt-3 border-t border-white/[0.07] pt-4">
                    <Link
                      to="contact"
                      smooth
                      duration={700}
                      offset={-80}
                      onClick={closeMenu}
                      className="
                        group
                        flex w-full cursor-pointer
                        items-center justify-center gap-2.5
                        rounded-xl
                        bg-gradient-to-r
                        from-[#E8CB72]
                        via-[#D4AF37]
                        to-[#AD8225]
                        px-5 py-3.5
                        text-sm font-bold
                        text-[#17150F]
                        shadow-[0_8px_25px_rgba(212,175,55,0.18)]
                      "
                    >
                      Join ScoutX

                      <FaArrowRight
                        className="
                          text-[10px]
                          transition-transform duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </Link>
                  </div>

                  {/* Mobile brand statement */}

                  <div
                    className="
                      mt-4 rounded-xl
                      border border-[#D4AF37]/[0.08]
                      bg-[#D4AF37]/[0.025]
                      px-4 py-3
                    "
                  >
                    <p
                      className="
                        text-[10px] font-semibold uppercase
                        tracking-[0.18em]
                        text-[#80601B]
                      "
                    >
                      ScoutX
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#777267]">
                      Discover what people can build.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}