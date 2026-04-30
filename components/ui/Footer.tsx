"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks, navLinks } from "@/lib/data";
import { Github, Linkedin, Twitter, Facebook, Terminal, Heart } from "lucide-react";

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
    <footer className="relative my-20">

      {/* Glass container */}
      <div className="container-custom">
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center 
                  bg-white/10 border border-white/10 backdrop-blur-md">
                  <Terminal size={16} className="text-accent" />
                </div>

                <span className="font-display text-lg font-semibold text-white">
                  {personalInfo.firstName}
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
              Built with
              <Heart size={12} className="text-accent fill-current" />
              using Next.js
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}