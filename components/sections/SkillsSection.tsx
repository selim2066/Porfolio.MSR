"use client";

import { skills } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { Cpu, Server, Wrench } from "lucide-react";
import { useRef } from "react";
import {
  SiAngular,
  SiAstro,
  SiCss,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiLinear,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRemix,
  SiSass,
  SiSqlite,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiVuedotjs,
  SiWebpack,
} from "react-icons/si";

/* ───────────────── ICONS ───────────────── */

const skillIcons: Record<string, { icon: any; color: string }> = {
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  Sass: { icon: SiSass, color: "#CC6699" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  Svelte: { icon: SiSvelte, color: "#FF3E00" },
  Astro: { icon: SiAstro, color: "#FF5D01" },
  Remix: { icon: SiRemix, color: "#ffffff" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  Vite: { icon: SiVite, color: "#646CFF" },
  Webpack: { icon: SiWebpack, color: "#8DD6F9" },
  Figma: { icon: SiFigma, color: "#F24E1E" },

  Node: { icon: SiNodedotjs, color: "#8CC84B" },
  "Node.js": { icon: SiNodedotjs, color: "#8CC84B" },
  Express: { icon: SiExpress, color: "#ffffff" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  Python: { icon: SiPython, color: "#3776AB" },
  Django: { icon: SiDjango, color: "#00e5b0" },
  Flask: { icon: SiFlask, color: "#ffffff" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },

  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  SQLite: { icon: SiSqlite, color: "#003B57" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  Prisma: { icon: SiPrisma, color: "#ffffff" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },

  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#ffffff" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  GCP: { icon: SiGooglecloud, color: "#4285F4" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Jest: { icon: SiJest, color: "#C21325" },
  Vitest: { icon: SiVitest, color: "#6E9F18" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Linear: { icon: SiLinear, color: "#5E6AD2" },
  Notion: { icon: SiNotion, color: "#ffffff" },
};

/* ───────────────── CATEGORY META ───────────────── */

const categoryIcons: Record<string, any> = {
  Frontend: Cpu,
  Backend: Server,
  "Tools & Others": Wrench,
};

const categoryColors: Record<string, string> = {
  Frontend: "#00e5b0",
  Backend: "#6366f1",
  "Tools & Others": "#f59e0b",
};

/* ───────────────── SKILL BAR ───────────────── */

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
        <span className="flex items-center gap-2 text-sm text-white font-mono">
          {Icon && <Icon size={14} style={{ color: entry.color }} />}
          {name}
        </span>
        <span className="text-xs text-zinc-400">{level}%</span>
      </div>

      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
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

/* ───────────────── TAG ───────────────── */

/* ───────────────── MARQUEE CHIP ───────────────── */

/* ───────────────── CHIP ───────────────── */
function SkillChip({ name }: { name: string }) {
  const entry = skillIcons[name];
  const Icon = entry?.icon;
  const color = entry?.color || "#00e5b0";

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.08,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="group relative flex items-center gap-3 px-6 py-3 rounded-xl shrink-0
      border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer
      overflow-hidden"
    >
      {/* glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"
        style={{
          background: `radial-gradient(circle at center, ${color}40, transparent 70%)`,
        }}
      />

      {/* icon */}
      {Icon && (
        <Icon
          size={18}
          className="relative z-10 transition duration-300 group-hover:scale-125"
          style={{
            color,
            filter: `drop-shadow(0 0 0px ${color})`,
          }}
        />
      )}

      {/* text */}
      <span className="relative z-10 text-sm text-white font-mono tracking-wide">
        {name}
      </span>

      {/* border glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          boxShadow: `0 0 18px ${color}55 inset, 0 0 16px ${color}55`,
        }}
      />
    </motion.div>
  );
}

/* ───────────────── MAIN COMPONENT ───────────────── */

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const allSkills = skills.flatMap((cat) => cat.items).map((item) => item.name);

  const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 bg-[var(--color-surface)] overflow-hidden"
    >
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="section-label mb-3">What I work with</p>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            My <span className="text-[var(--color-accent)]">Skills</span>
          </h2>
        </motion.div>

        {/* MARQUEE */}
        {/* MARQUEE */}
        <div className="mb-16 space-y-5">
          {/* Row 1 */}
          <div className="overflow-hidden group">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="marquee-track flex gap-4 min-w-max py-2"
            >
              {[...row1, ...row1].map((skill, i) => (
                <SkillChip key={i} name={skill} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden group">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="marquee-track flex gap-4 min-w-max py-2"
            >
              {[...row2, ...row2].map((skill, i) => (
                <SkillChip key={i} name={skill} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category, ci) => {
            const Icon = categoryIcons[category.category] || Cpu;
            const color = categoryColors[category.category] || "#00e5b0";

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.15 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}20` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      {category.category}
                    </p>
                    <p className="text-xs text-zinc-400">
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
      </div>
    </section>
  );
}
