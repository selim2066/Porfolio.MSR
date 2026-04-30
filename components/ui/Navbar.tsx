"use client";

import { navLinks, personalInfo } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Get ALL section ids from the actual DOM order (not navLinks order)
      const sectionIds = [
        "home",
        "about",
        "projects",
        "skills",
        "education",
        "experience",
        "contact",
      ];

      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8, 11, 15, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
        }}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "var(--color-accent-dim)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Terminal size={14} style={{ color: "var(--color-accent)" }} />
            </div>
            <span
              className="font-display font-bold text-base text-xl hidden sm:block"
              style={{ color: "var(--color-text)" }}
            >
              {personalInfo.Nickname}
              <span style={{ color: "var(--color-accent)" }}>.</span>
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 text-sm font-mono transition-colors rounded-md"
                  style={{
                    color: isActive
                      ? "var(--color-accent)"
                      : "var(--color-muted-2)",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "var(--color-accent-dim)" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download
              className="hidden md:flex btn-primary text-sm py-2 px-5"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(8, 11, 15, 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg font-mono text-sm transition-colors"
                  style={{
                    color:
                      activeSection === link.href.replace("#", "")
                        ? "var(--color-accent)"
                        : "var(--color-muted-2)",
                    background:
                      activeSection === link.href.replace("#", "")
                        ? "var(--color-accent-dim)"
                        : "transparent",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div
                className="pt-3 pb-2 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-primary w-full justify-center text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
