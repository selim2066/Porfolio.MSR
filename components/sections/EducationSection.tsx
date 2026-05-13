"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-28" ref={ref}>
      <div className="container-custom">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 lg:mb-16 text-center"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-4 border text-xs font-mono"
            style={{
              background: "rgba(0,229,176,0.06)",
              borderColor: "rgba(0,229,176,0.2)",
              color: "var(--color-accent)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Academic background
          </div>

          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.9rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
              lineHeight: 1.1,
            }}
          >
            My{" "}
            <span
              style={{
                color: "var(--color-accent)",
                textShadow: "0 0 30px rgba(0,229,176,0.4)",
              }}
            >
              Education
            </span>
          </h2>
        </motion.div>

        {/* ══════════════════════════════════════════
            MOBILE  — left-side single-column timeline
            Shown  : block on xs/sm, hidden on md+
        ══════════════════════════════════════════ */}
        <div className="md:hidden relative pl-8">
          {/* Vertical left line */}
          <div
            className="absolute left-3 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-accent) 20%, var(--color-accent) 80%, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-[1.45rem] top-5 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--color-bg)",
                    border: "2px solid var(--color-accent)",
                    boxShadow: "0 0 10px rgba(0,229,176,0.4)",
                  }}
                >
                  <GraduationCap size={8} color="var(--color-accent)" />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-4 border"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {/* Status + Date row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
                      style={{
                        background: "var(--color-surface-2)",
                        color: "var(--color-muted)",
                      }}
                    >
                      <CheckCircle2 size={10} />
                      {edu.status}
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs font-mono"
                      style={{ color: "var(--color-muted)" }}
                    >
                      <Calendar size={11} />
                      {edu.duration}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-base sm:text-lg mb-1"
                    style={{ color: "var(--color-text)" }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-muted-2)" }}
                  >
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            TABLET / DESKTOP — center alternating timeline
            Hidden on mobile, shown on md+
        ══════════════════════════════════════════ */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-accent), transparent)",
              transform: "translateX(-50%)",
            }}
          />

          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-[45%] ${
                    isLeft ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                >
                  <div
                    className="card-base p-6 backdrop-blur-md"
                    style={{
                      borderColor: "var(--color-border)",
                      boxShadow: "none",
                    }}
                  >
                    {/* Status + Date */}
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono"
                        style={{
                          background: "var(--color-surface-2)",
                          color: "var(--color-muted)",
                        }}
                      >
                        <CheckCircle2 size={10} />
                        {edu.status}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs font-mono"
                        style={{ color: "var(--color-muted)" }}
                      >
                        <Calendar size={12} />
                        {edu.duration}
                      </span>
                    </div>

                    <h3
                      className="font-display font-bold text-lg mb-1"
                      style={{ color: "var(--color-text)" }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-muted-2)" }}
                    >
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--color-bg)",
                      border: "2px solid var(--color-accent)",
                      boxShadow: "0 0 20px rgba(0,229,176,0.3)",
                    }}
                  >
                    <GraduationCap size={18} color="var(--color-accent)" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}