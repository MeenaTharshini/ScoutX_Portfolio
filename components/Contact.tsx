"use client";

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Contact = () => {
  const links = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: "mailto:meenatharshiniiyappan@gmail.com",
    external: false,
  },
  {
    icon: <FaPhoneAlt />,
    label: "Call",
    href: "tel:+916374093373",
    external: false,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/MeenaTharshini",
    external: true,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/meena-tharshini-i-410343301/",
    external: true,
  },
  {
    icon: <SiLeetcode />,
    label: "LeetCode",
    href: "https://leetcode.com/u/MeenaTharshiniI/",
    external: true,
  },
];

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let’s <span className="text-purple-500">Connect</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Open to internships, freelance opportunities, and software engineering roles.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {links.map((item, index) => (
    <a
      key={index}
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      aria-label={item.label}
      className="
        group
        min-h-[160px]
        bg-[#151B2E]
        border border-purple-500/10
        rounded-2xl
        flex flex-col
        items-center
        justify-center
        gap-4
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-purple-500/50
        hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
      "
    >
      {/* Icon */}
      <div
        className="
          w-14
          h-14
          rounded-full
          bg-purple-500/10
          flex
          items-center
          justify-center
          text-3xl
          text-purple-400
          transition-all
          duration-300
          group-hover:bg-purple-500
          group-hover:text-white
          group-hover:scale-110
        "
      >
        {item.icon}
      </div>

      {/* Label */}
      <span className="text-base font-semibold text-slate-300 group-hover:text-white transition">
        {item.label}
      </span>
    </a>
  ))}
</div>

        {/* Contact Info */}
        <div className="mt-14 text-center text-slate-400 text-sm space-y-2">
          <p className="hover:text-purple-400 transition">
             meenatharshiniiyappan@gmail.com
          </p>
          <p className="hover:text-purple-400 transition">
             +91 63740 93373
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;