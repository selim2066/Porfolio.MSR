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
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">Academic background</p>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
            }}
          >
            My{" "}
            <span style={{ color: "var(--color-accent)" }}>Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
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
    className={`w-full md:w-[45%] ${
      isLeft ? "md:pr-12 text-right" : "md:pl-12 text-left"
    }`}
  >
    <div
      className="card-base p-6 backdrop-blur-md"
      style={{
        borderColor: "var(--color-border)",
        boxShadow: "none",
      }}
    >
      {/* Status */}
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
  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
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