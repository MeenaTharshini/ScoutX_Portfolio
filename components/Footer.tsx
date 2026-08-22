"use client";

import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#080806] px-5 py-8 text-[#F7F2E8]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            Scout
            <span className="text-[#D4AF37]">X</span>
          </h2>

          <p className="mt-1 text-xs text-[#777267]">
            We remove the dependency on opportunity-based discovery.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-5 text-xs text-[#8F887B]">
          <a href="#problem" className="transition hover:text-[#D4AF37]">
            Problem
          </a>

          <a href="#solution" className="transition hover:text-[#D4AF37]">
            Solution
          </a>

          <a href="#why" className="transition hover:text-[#D4AF37]">
            Why ScoutX
          </a>

          <a href="#business" className="transition hover:text-[#D4AF37]">
            Business
          </a>

          <a href="#contact" className="transition hover:text-[#D4AF37]">
            Contact
          </a>
        </div>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs text-[#777267] transition hover:text-[#D4AF37]"
        >
          Back to top
          <FaArrowUp className="text-[10px]" />
        </button>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-7 max-w-6xl border-t border-white/[0.06] pt-5 text-center">
        <p className="text-[11px] text-[#555047]">
          © {new Date().getFullYear()} ScoutX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}