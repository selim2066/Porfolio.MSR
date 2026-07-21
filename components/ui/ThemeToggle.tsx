"use client";

import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg border border-transparent" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${isDark ? "Day" : "Night"} mode`}
      title={`Switch to ${isDark ? "Day" : "Night"} mode`}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group overflow-hidden"
      style={{
        background: "var(--color-surface)",
        color: "var(--color-text)",
        boxShadow: isDark
          ? "0 0 12px rgba(0, 229, 176, 0.15)"
          : "0 2px 10px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Background glow animation on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle at center, rgba(251, 191, 36, 0.15), transparent 70%)"
            : "radial-gradient(circle at center, rgba(13, 148, 136, 0.15), transparent 70%)",
        }}
      />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center justify-center text-amber-400"
          >
            <Sun size={18} className="drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center justify-center text-teal-600 dark:text-teal-400"
          >
            <Moon size={18} className="drop-shadow-[0_0_8px_rgba(13,148,136,0.4)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
