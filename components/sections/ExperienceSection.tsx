"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="section-padding"
      ref={ref}
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Work history</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
            >
              My{" "}
              <span style={{ color: "var(--color-accent)" }}>Experience</span>
            </h2>
            <div
              className="h-px flex-1 hidden md:block"
              style={{ background: "var(--color-border)", minWidth: "60px" }}
            />
          </div>
        </motion.div>

        {/* Experience cards */}
        <div className="flex flex-col gap-6 max-w-3xl">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-base p-6"
              style={{ background: "var(--color-bg)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--color-accent-dim)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <Briefcase size={16} style={{ color: "var(--color-accent)" }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h3
                      className="font-display font-bold text-lg"
                      style={{ color: "var(--color-text)" }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className="flex items-center gap-1.5 text-xs font-mono"
                      style={{ color: "var(--color-muted)" }}
                    >
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-muted-2)" }}
                  >
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
