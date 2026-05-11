"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks, navLinks } from "@/lib/data";
import { Github, Linkedin, Twitter, Facebook, Terminal, Heart } from "lucide-react";
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
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 bg-[var(--color-surface)]">

      {/* Glass container */}
      <div className="container-custom ">
        <div
          className="
            backdrop-blur-xl 
            bg-white/5 dark:bg-white/5
            border border-white/10
            rounded-2xl
            shadow-[0_8px_40px_rgba(0,0,0,0.25)]
            px-6 py-12
          "
        >

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <motion.button
                            onClick={() => handleNavClick("#home")}
                            className="flex items-center gap-2 group"
                            whileHover={{ scale: 1.12 }}
                          >
                            <motion.div
                              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-10"
                              style={{
                                background: "var(--color-accent-dim)",
                                border: "1px solid var(--color-border)",
                              }}
                              whileHover={{
                                boxShadow:
                                  "0 0 16px var(--color-accent), 0 0 32px var(--color-accent)",
                                borderColor: "var(--color-accent)",
                                background: "var(--color-accent-dim)",
                              }}
                              transition={{ duration: 1 }}
                            >
                              <Image src="/logo.png" alt="Logo" width={36} height={36} />
                            </motion.div>
                            
                          </motion.button>

                <span className="font-display text-xl font-semibold text-white">
                  {personalInfo.Nickname}
                  <span className="text-accent">.</span>
                </span>
              </div>

              <p className="text-sm leading-relaxed text-white/70 max-w-xs">
                Full Stack Developer based in {personalInfo.location}. 
                Crafting modern, scalable, and high-performance web experiences.
              </p>
            </div>

            {/* NAVIGATION */}
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50 mb-4">
                Navigation
              </p>

              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="
                      text-sm text-white/70 
                      hover:text-white 
                      transition-all duration-200 
                      text-left
                      hover:translate-x-1
                    "
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50 mb-4">
                Connect
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <motion.a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      className="
                        w-11 h-11 rounded-xl flex items-center justify-center
                        bg-white/5 border border-white/10
                        backdrop-blur-md
                        text-white/70 hover:text-white
                        hover:bg-white/10
                        transition-all duration-300
                      "
                      title={s.name}
                    >
                      {Icon && <Icon size={16} />}
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="h-px bg-white/10 mb-6" />

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-xs text-white/60 font-mono">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>

            <p className="text-xs text-white/60 font-mono flex items-center gap-1">
              Thanks for visiting!
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}