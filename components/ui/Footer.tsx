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
    <footer
      className="relative"
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "var(--color-accent-dim)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Terminal size={14} style={{ color: "var(--color-accent)" }} />
              </div>
              <span className="font-display font-bold" style={{ color: "var(--color-text)" }}>
                {personalInfo.firstName}
                <span style={{ color: "var(--color-accent)" }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Full Stack Developer based in {personalInfo.location}. Building things for the web.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm transition-colors hover:text-accent"
                  style={{ color: "var(--color-muted)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="section-label mb-4">Find Me Online</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-muted)",
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

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-2 pt-6 text-xs"
          style={{
            borderTop: "1px solid var(--color-border)",
            color: "var(--color-muted)",
          }}
        >
          <p className="font-mono">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono">
            Built with <Heart size={12} style={{ color: "var(--color-accent)" }} fill="currentColor" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
