"use client";

import { skills } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { Cpu, Server, Database, Wrench,  Workflow  } from "lucide-react";
import { useRef } from "react";
import {
  SiBetterauth,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGo,
  SiJavascript,
  SiJsonwebtokens,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

/* ───────── ICON MAP ───────── */

const skillIcons: Record<string, { icon: any; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "var(--color-text)" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },

  "Framer Motion": { icon: SiFigma, color: "#ff4d4d" }, // fallback
  GSAP: { icon: SiJavascript, color: "#88ce02" }, // no official

  "Node.js": { icon: SiNodedotjs, color: "#8CC84B" },
  Express: { icon: SiExpress, color: "var(--color-text)" },

  Prisma: { icon: SiPrisma, color: "var(--color-text)" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },

  Go: { icon: SiGo, color: "#00ADD8" },

  JWT: { icon: SiJsonwebtokens, color: "var(--color-text)" },

  "REST API": { icon: SiOpenapiinitiative, color: "#6BA539" },

  BetterAuth: { icon: SiBetterauth, color: "#EB5424" }, // closest match

  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "var(--color-text)" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Postman: { icon: SiPostman, color: "#FF6C37" },

  "VS Code": { icon: SiVercel, color: "#3b82f6" }, // cleaner fallback
};

/* ───────── CATEGORY META ───────── */

const categoryIcons: Record<string, any> = {
  Frontend: Cpu,
  Backend: Server,
  Database: Database,
  DevOps: Workflow,
};

const categoryColors: Record<string, string> = {
  Frontend: "#00e5b0",
  Backend: "#6366f1",
  Database: "#ec4899",
  DevOps: "#f59e0b",
};

/* ───────── SKILL BAR ───────── */

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
  const entry = skillIcons[name];
  const Icon = entry?.icon;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="flex items-center gap-2 text-sm font-mono" style={{ color: "var(--color-text)" }}>
          {Icon && <Icon size={14} style={{ color: entry.color }} />}
          {name}
        </span>
        <span className="text-xs" style={{ color: "var(--color-muted-2)" }}>{level}%</span>
      </div>

      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.1,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

/* ───────── CHIP ───────── */

function SkillChip({ name }: { name: string }) {
  const entry = skillIcons[name];
  const Icon = entry?.icon;
  const rawColor = entry?.color || "var(--color-accent)";
  const isVarColor = rawColor.startsWith("var");
  const color = isVarColor ? "var(--color-accent)" : rawColor;
  const iconColor = rawColor;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="group relative flex items-center gap-3 px-6 py-3 rounded-2xl shrink-0
      backdrop-blur-xl cursor-pointer overflow-hidden card-base"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"
        style={{
          background: isVarColor
            ? "var(--color-accent-dim)"
            : `radial-gradient(circle at center, ${color}40, transparent 70%)`,
        }}
      />

      {Icon && (
        <Icon
          size={18}
          className="relative z-10 transition duration-300 group-hover:scale-125"
          style={{ color: iconColor }}
        />
      )}

      <span className="relative z-10 text-sm font-mono tracking-wide" style={{ color: "var(--color-text)" }}>
        {name}
      </span>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          boxShadow: isVarColor
            ? "0 0 18px var(--color-accent-glow)"
            : `0 0 18px ${color}55 inset, 0 0 16px ${color}55`,
        }}
      />
    </motion.div>
  );
}

/* ───────── MAIN ───────── */

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const allSkills = skills.flatMap((cat) => cat.items).map((i) => i.name);
  const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 flex flex-col items-center justify-center"
        >
          <p className="section-label mb-3">What I work with</p>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: "var(--color-text)" }}>
            My <span style={{ color: "var(--color-accent)" }}>Skills</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 min-w-max py-2"
          >
            {[...row2, ...row2].map((s, i) => (
              <SkillChip key={i} name={s} />
            ))}
          </motion.div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skills.map((category, ci) => {
            const Icon = categoryIcons[category.category];
            const color = categoryColors[category.category];

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.15 }}
                className="p-6 rounded-2xl backdrop-blur-xl card-base"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}20` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>

                  <div>
                    <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                      {category.category}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-muted-2)" }}>
                      {category.items.length} technologies
                    </p>
                  </div>
                </div>

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

        {/* MARQUEE */}
        <div className="mb-16 space-y-5">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 min-w-max py-2"
            >
              {[...row1, ...row1].map((s, i) => (
                <SkillChip key={i} name={s} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
