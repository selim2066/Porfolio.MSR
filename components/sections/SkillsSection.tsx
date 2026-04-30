"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { Cpu, Server, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Cpu,
  Backend: Server,
  "Tools & Others": Wrench,
};

const categoryColors: Record<string, string> = {
  Frontend: "#00e5b0",
  Backend: "#6366f1",
  "Tools & Others": "#f59e0b",
};

function SkillBar({
  name,
  level,
  color,
  delay,
  inView,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm font-mono"
          style={{ color: "var(--color-text)" }}
        >
          {name}
        </span>
        <span
          className="text-xs font-mono"
          style={{ color: "var(--color-muted)" }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--color-surface-2)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
          <p className="section-label mb-3">What I work with</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
            >
              My{" "}
              <span style={{ color: "var(--color-accent)" }}>Skills</span>
            </h2>
            <div
              className="h-px flex-1 hidden md:block"
              style={{ background: "var(--color-border)", minWidth: "60px" }}
            />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category, ci) => {
            const Icon = categoryIcons[category.category] || Cpu;
            const color = categoryColors[category.category] || "#00e5b0";

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.15 }}
                className="card-base p-6"
                style={{ background: "var(--color-bg)" }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${color}18`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p
                      className="font-display font-semibold text-base"
                      style={{ color: "var(--color-text)" }}
                    >
                      {category.category}
                    </p>
                    <p
                      className="text-xs font-mono"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {category.items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skill bars */}
                {category.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={color}
                    delay={ci * 0.15 + si * 0.08}
                    inView={inView}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Tech tags row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-2 justify-center"
        >
          {skills.flatMap((c) => c.items).map((skill) => (
            <span key={skill.name} className="tag-pill">
              {skill.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
