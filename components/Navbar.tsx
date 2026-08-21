"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaRocket,
  FaArrowRight,
  FaChevronDown,
  FaUserGraduate,
  FaBuilding,
  FaLightbulb,
} from "react-icons/fa";

const primaryLinks = [
  { name: "About", to: "about" },
  { name: "How It Works", to: "solution" },
  { name: "Features", to: "features" },
  { name: "Ecosystem", to: "users" },
];

const audienceLinks = [
  {
    title: "For Innovators",
    description: "Showcase projects and get discovered.",
    icon: FaUserGraduate,
    to: "users",
  },
  {
    title: "For Organizations",
    description: "Discover talent, prototypes and solutions.",
    icon: FaBuilding,
    to: "users",
  },
  {
    title: "Innovation Ecosystem",
    description: "Connect colleges, programs and incubators.",
    icon: FaLightbulb,
    to: "users",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [audienceOpen, setAudienceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setAudienceOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6"
      >
        <nav
          className={`
            mx-auto max-w-7xl
            rounded-2xl
            border
            transition-all duration-500
            ${
              scrolled
                ? `
                  border-white/[0.09]
                  bg-[#090B10]/90
                  shadow-[0_15px_50px_rgba(0,0,0,0.30)]
                  backdrop-blur-2xl
                `
                : `
                  border-white/[0.08]
                  bg-[#090B10]/70
                  shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                  backdrop-blur-xl
                `
            }
          `}
        >
          <div
            className={`
              flex items-center justify-between
              px-4 sm:px-5 lg:px-6
              transition-all duration-500
              ${scrolled ? "h-[64px]" : "h-[70px]"}
            `}
          >
            {/* =====================================================
                LOGO
            ====================================================== */}

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-3"
              aria-label="Go to top"
            >
              <div
                className="
                  relative flex h-9 w-9 items-center justify-center
                  overflow-hidden rounded-xl
                  bg-gradient-to-br
                  from-purple-300
                  via-purple-500
                  to-violet-700
                  shadow-[0_8px_25px_rgba(139,92,246,0.25)]
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:shadow-[0_10px_35px_rgba(139,92,246,0.4)]
                "
              >
                <FaRocket className="-rotate-12 text-[13px] text-white" />

                <span
                  className="
                    absolute -left-8 top-0
                    h-full w-6 rotate-12
                    bg-white/30 blur-sm
                    transition-all duration-700
                    group-hover:left-12
                  "
                />
              </div>

              <span
                className="
                  text-[22px] font-bold tracking-[-0.045em]
                  text-white
                "
              >
                Scout
                <span
                  className="
                    bg-gradient-to-r from-purple-300
                    via-violet-400 to-fuchsia-400
                    bg-clip-text text-transparent
                  "
                >
                  X
                </span>
              </span>
            </button>

            {/* =====================================================
                DESKTOP NAV
            ====================================================== */}

            <div className="hidden lg:flex lg:items-center">
              <div
                className="
                  flex items-center gap-1
                  rounded-xl
                  border border-white/[0.05]
                  bg-white/[0.025]
                  p-1
                "
              >
                {primaryLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth
                    duration={700}
                    offset={-90}
                    spy
                    activeClass="!bg-white/[0.08] !text-white"
                    className="
                      group relative
                      cursor-pointer
                      rounded-lg
                      px-4 py-2.5
                      text-[13px]
                      font-medium
                      text-slate-400
                      transition-all duration-300
                      hover:bg-white/[0.05]
                      hover:text-white
                    "
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Audience dropdown */}

                <div
                  className="relative"
                  onMouseEnter={() => setAudienceOpen(true)}
                  onMouseLeave={() => setAudienceOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setAudienceOpen((prev) => !prev)}
                    className="
                      flex cursor-pointer items-center gap-2
                      rounded-lg
                      px-4 py-2.5
                      text-[13px]
                      font-medium
                      text-slate-400
                      transition-all duration-300
                      hover:bg-white/[0.05]
                      hover:text-white
                    "
                    aria-expanded={audienceOpen}
                  >
                    For You
                    <FaChevronDown
                      className={`
                        text-[8px]
                        transition-transform duration-300
                        ${audienceOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  <AnimatePresence>
                    {audienceOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 8,
                          scale: 0.98,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: 8,
                          scale: 0.98,
                        }}
                        transition={{ duration: 0.18 }}
                        className="
                          absolute right-0 top-[calc(100%+12px)]
                          w-[320px]
                          overflow-hidden
                          rounded-2xl
                          border border-white/[0.08]
                          bg-[#0D1017]/98
                          p-2
                          shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                          backdrop-blur-2xl
                        "
                      >
                        <div className="px-3 pb-2 pt-2">
                          <p
                            className="
                              text-[10px] font-semibold uppercase
                              tracking-[0.2em] text-purple-400
                            "
                          >
                            Explore ScoutX
                          </p>
                        </div>

                        {audienceLinks.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.title}
                              to={item.to}
                              smooth
                              duration={700}
                              offset={-90}
                              onClick={closeMenu}
                              className="
                                group flex cursor-pointer items-start gap-3
                                rounded-xl p-3
                                transition-all duration-200
                                hover:bg-white/[0.05]
                              "
                            >
                              <div
                                className="
                                  flex h-10 w-10 shrink-0
                                  items-center justify-center
                                  rounded-xl
                                  border border-purple-500/15
                                  bg-purple-500/[0.07]
                                  text-purple-300
                                  transition-all duration-200
                                  group-hover:border-purple-400/30
                                  group-hover:bg-purple-500/[0.12]
                                "
                              >
                                <Icon className="text-sm" />
                              </div>

                              <div>
                                <p
                                  className="
                                    text-sm font-semibold text-slate-200
                                    group-hover:text-white
                                  "
                                >
                                  {item.title}
                                </p>

                                <p
                                  className="
                                    mt-1 text-xs leading-5
                                    text-slate-500
                                  "
                                >
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* =====================================================
                DESKTOP ACTIONS
            ====================================================== */}

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                to="contact"
                smooth
                duration={700}
                offset={-90}
                className="
                  group flex cursor-pointer items-center gap-2
                  rounded-xl
                  border border-white/[0.08]
                  bg-white/[0.03]
                  px-4 py-2.5
                  text-[13px] font-semibold
                  text-slate-300
                  transition-all duration-300
                  hover:border-purple-500/20
                  hover:bg-purple-500/[0.06]
                  hover:text-white
                "
              >
                Contact
              </Link>

              <Link
                to="contact"
                smooth
                duration={700}
                offset={-90}
                className="
                  group flex cursor-pointer items-center gap-2.5
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-500
                  to-violet-600
                  px-5 py-2.5
                  text-[13px] font-bold
                  text-white
                  shadow-[0_8px_25px_rgba(124,58,237,0.22)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:from-purple-400
                  hover:to-violet-500
                  hover:shadow-[0_12px_35px_rgba(124,58,237,0.35)]
                "
              >
                Get Started

                <FaArrowRight
                  className="
                    text-[9px]
                    transition-transform duration-300
                    group-hover:translate-x-1
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
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-white/[0.08]
                bg-white/[0.04]
                text-slate-300
                transition-all duration-300
                hover:border-purple-500/30
                hover:bg-purple-500/[0.08]
                hover:text-white
                lg:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* =====================================================
              MOBILE NAV
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
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  overflow-hidden
                  border-t border-white/[0.07]
                  lg:hidden
                "
              >
                <div className="px-4 pb-4 pt-3">
                  {/* Main links */}

                  <div className="space-y-1">
                    {primaryLinks.map((link, index) => (
                      <motion.div
                        key={link.to}
                        initial={{
                          opacity: 0,
                          x: -10,
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
                          duration={700}
                          offset={-80}
                          spy
                          onClick={closeMenu}
                          activeClass="
                            !border-purple-500/20
                            !bg-purple-500/[0.08]
                            !text-purple-300
                          "
                          className="
                            flex cursor-pointer items-center
                            justify-between
                            rounded-xl
                            border border-transparent
                            px-4 py-3
                            text-sm font-medium
                            text-slate-400
                            transition-all
                            hover:bg-white/[0.04]
                            hover:text-white
                          "
                        >
                          <span>{link.name}</span>

                          <FaArrowRight
                            className="text-[9px] text-slate-700"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Audience section */}

                  <div
                    className="
                      mt-3 rounded-2xl
                      border border-white/[0.06]
                      bg-white/[0.02]
                      p-3
                    "
                  >
                    <p
                      className="
                        px-2 pb-2 pt-1
                        text-[10px] font-semibold uppercase
                        tracking-[0.2em] text-purple-400
                      "
                    >
                      Explore by audience
                    </p>

                    <div className="space-y-1">
                      {audienceLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.title}
                            to={item.to}
                            smooth
                            duration={700}
                            offset={-80}
                            onClick={closeMenu}
                            className="
                              flex cursor-pointer items-center gap-3
                              rounded-xl p-2.5
                              transition-all
                              hover:bg-white/[0.04]
                            "
                          >
                            <div
                              className="
                                flex h-9 w-9 shrink-0
                                items-center justify-center
                                rounded-lg
                                bg-purple-500/[0.08]
                                text-purple-300
                              "
                            >
                              <Icon className="text-xs" />
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-slate-300">
                                {item.title}
                              </p>

                              <p className="mt-0.5 text-[11px] text-slate-600">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom actions */}

                  <div
                    className="
                      mt-3 grid grid-cols-2 gap-2
                      border-t border-white/[0.06]
                      pt-4
                    "
                  >
                    <Link
                      to="contact"
                      smooth
                      duration={700}
                      offset={-80}
                      onClick={closeMenu}
                      className="
                        flex cursor-pointer
                        items-center justify-center
                        rounded-xl
                        border border-white/[0.08]
                        bg-white/[0.03]
                        px-4 py-3
                        text-sm font-semibold
                        text-slate-300
                        transition-all
                        hover:bg-white/[0.06]
                        hover:text-white
                      "
                    >
                      Contact
                    </Link>

                    <Link
                      to="contact"
                      smooth
                      duration={700}
                      offset={-80}
                      onClick={closeMenu}
                      className="
                        group flex cursor-pointer
                        items-center justify-center gap-2
                        rounded-xl
                        bg-gradient-to-r
                        from-purple-500 to-violet-600
                        px-4 py-3
                        text-sm font-bold
                        text-white
                        shadow-[0_8px_25px_rgba(124,58,237,0.2)]
                      "
                    >
                      Get Started

                      <FaArrowRight className="text-[9px]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}