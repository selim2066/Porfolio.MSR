"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, CheckCircle2, Clock } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Academic background</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
            >
              My{" "}
              <span style={{ color: "var(--color-accent)" }}>Education</span>
            </h2>
            <div
              className="h-px flex-1 hidden md:block"
              style={{ background: "var(--color-border)", minWidth: "60px" }}
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--color-border)" }}
          />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative flex gap-6 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="relative z-10 shrink-0 hidden md:flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mt-1"
                  style={{
                    background: edu.current
                      ? "var(--color-accent)"
                      : "var(--color-surface)",
                    border: `2px solid ${edu.current ? "var(--color-accent)" : "var(--color-border)"}`,
                  }}
                >
                  <GraduationCap
                    size={16}
                    style={{
                      color: edu.current ? "var(--color-bg)" : "var(--color-muted)",
                    }}
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className="card-base p-6 flex-1"
                style={{
                  borderColor: edu.current
                    ? "rgba(0, 229, 176, 0.3)"
                    : "var(--color-border)",
                }}
              >
                {/* Status badge */}
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono`}
                    style={{
                      background: edu.current
                        ? "var(--color-accent-dim)"
                        : "var(--color-surface-2)",
                      color: edu.current
                        ? "var(--color-accent)"
                        : "var(--color-muted)",
                      border: `1px solid ${edu.current ? "var(--color-border)" : "var(--color-border)"}`,
                    }}
                  >
                    {edu.current ? (
                      <Clock size={10} />
                    ) : (
                      <CheckCircle2 size={10} />
                    )}
                    {edu.current ? "In Progress" : "Completed"}
                  </span>

                  <span
                    className="flex items-center gap-1.5 text-xs font-mono"
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
                  className="text-sm font-semibold mb-3"
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
    </section>
  );
}
