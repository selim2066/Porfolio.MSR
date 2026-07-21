"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks, navLinks } from "@/lib/data";
import { Github, Linkedin, Twitter, Facebook, ArrowUp } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const firstWord = "SELIM".split("");
  const secondWord = "REZA".split("");

  return (
    <footer className="relative py-12 md:py-20 overflow-hidden" style={{ background: "transparent" }}>
      <div className="container-custom">
        <div
          className="
            backdrop-blur-xl 
            rounded-3xl
            p-6 md:p-12
            card-base
          "
        >
          {/* TOP TAGLINE BAR */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
              <span className="text-xs font-mono tracking-wider uppercase" style={{ color: "var(--color-muted-2)" }}>
                Available for hire
              </span>
            </div>

            <span className="text-xs font-mono tracking-widest uppercase hidden sm:block" style={{ color: "var(--color-muted)" }}>
              DESIGN, PRODUCT & CRAFT
            </span>
          </div>

          {/* GRID INFO & NAV (UPPER SECTION) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
            {/* BRAND SUMMARY */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: "var(--color-accent-dim)",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image src="/logo.png" alt="Logo" width={32} height={32} />
                  </motion.div>
                  <span className="font-display text-xl font-bold" style={{ color: "var(--color-text)" }}>
                    {personalInfo.name}
                  </span>
                </div>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--color-muted-2)" }}>
                  Building production-ready web applications with Next.js, React, Node.js, Express, and PostgreSQL. Focused on clean architecture and high-performance user experiences.
                </p>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="md:col-span-4">
              <p className="text-xs uppercase font-mono tracking-wider mb-4" style={{ color: "var(--color-muted)" }}>
                Quick Navigation
              </p>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-left font-mono transition-all duration-200 hover:translate-x-1"
                    style={{ color: "var(--color-muted-2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted-2)")}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SOCIAL CONNECT */}
            <div className="md:col-span-3">
              <p className="text-xs uppercase font-mono tracking-wider mb-4" style={{ color: "var(--color-muted)" }}>
                Connect With Me
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <motion.a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "var(--color-surface-2)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text)",
                      }}
                      title={s.name}
                    >
                      {Icon && <Icon size={16} />}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* INTERACTIVE TYPOGRAPHY (SELIM REZA STRICTLY IN ONE LINE & PERFECTLY FIT IN FOOTER CARD) */}
          <div className="py-5 md:py-8 my-2 select-none flex items-center justify-start border-t border-b overflow-visible" style={{ borderColor: "var(--color-border)" }}>
            <div
              className="flex flex-nowrap items-center font-display font-extrabold tracking-tight leading-none whitespace-nowrap"
              style={{ fontSize: "clamp(1.8rem, 7.5vw, 5.8rem)" }}
            >
              {/* FIRST NAME: SELIM */}
              <div className="flex items-center">
                {firstWord.map((char, index) => (
                  <motion.span
                    key={`first-${index}`}
                    className="inline-block cursor-pointer transition-colors duration-200"
                    style={{ color: "var(--color-text)" }}
                    whileHover={{
                      y: -14,
                      scale: 1.12,
                      color: "var(--color-accent)",
                      textShadow: "0 10px 25px var(--color-accent-glow)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 14,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* SPACE BETWEEN NAMES */}
              <span className="mx-[0.2em]" />

              {/* LAST NAME: REZA */}
              <div className="flex items-center">
                {secondWord.map((char, index) => (
                  <motion.span
                    key={`second-${index}`}
                    className="inline-block cursor-pointer italic transition-colors duration-200"
                    style={{ color: "var(--color-accent)" }}
                    whileHover={{
                      y: -14,
                      scale: 1.12,
                      color: "var(--color-text)",
                      textShadow: "0 10px 25px var(--color-accent-glow)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 14,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <p className="text-xs font-mono" style={{ color: "var(--color-muted-2)" }}>
              © {new Date().getFullYear()} <span className="font-bold" style={{ color: "var(--color-text)" }}>SELIM REZA</span>. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-xs font-mono transition-all duration-200 group"
                style={{ color: "var(--color-accent)" }}
              >
                <span>Back to top</span>
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}