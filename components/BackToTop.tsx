"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? Math.min((scrollTop / documentHeight) * 100, 100)
          : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 450);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="fixed bottom-6 right-6 z-[9999] group"
        >
          {/* Tooltip */}
          <div
            className="
              absolute
              right-0
              bottom-[calc(100%+10px)]
              whitespace-nowrap
              rounded-lg
              bg-[#11100D]
              border border-[#D4AF37]/20
              px-3
              py-2
              text-[11px]
              font-medium
              tracking-wide
              text-[#E7C979]
              opacity-0
              translate-y-1
              pointer-events-none
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-200
              shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            "
          >
            Back to top
          </div>

          {/* Button wrapper */}
          <div className="relative w-12 h-12 sm:w-13 sm:h-13">
            
            {/* Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 100 100"
            >
              {/* Background ring */}
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(212,175,55,0.15)"
                strokeWidth="3"
              />

              {/* Progress */}
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="289"
                strokeDashoffset={289 - (289 * scrollProgress) / 100}
                className="transition-[stroke-dashoffset] duration-150"
              />

              <defs>
                <linearGradient
                  id="goldGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#E7C979" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AD8930" />
                </linearGradient>
              </defs>
            </svg>

            {/* Main Button */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Back to top"
              className="
                absolute
                inset-[4px]
                rounded-full

                flex
                items-center
                justify-center

                bg-[#11100D]/95
                backdrop-blur-xl

                border
                border-[#D4AF37]/25

                text-[#E7C979]

                shadow-[0_8px_30px_rgba(0,0,0,0.35)]

                hover:border-[#D4AF37]/60
                hover:text-[#F7F2E8]

                transition-colors
                duration-300
              "
            >
              <FaArrowUp className="text-xs sm:text-sm" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}