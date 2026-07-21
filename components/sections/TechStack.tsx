"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://skillicons.dev/icons?i=nextjs",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://skillicons.dev/icons?i=express",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://skillicons.dev/icons?i=prisma",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://skillicons.dev/icons?i=github",
  },
  {
    name: "Vercel",
    icon: "https://skillicons.dev/icons?i=vercel",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="section-padding"
      ref={ref}
    >
      <div className="container-custom">
        {/* Header — terminal style like reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 flex flex-col items-center justify-center"
        >
          <p className="section-label mb-3">Tools and Technologies</p>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: "var(--color-text)" }}>
            My <span style={{ color: "var(--color-accent)" }}>Tech Stack</span>
          </h2>
        </motion.div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skills.map((skill, i) => {
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                {/* Icon circle */}
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--color-surface)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  {/* Accent ring on hover */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: "1.5px solid var(--color-accent)",
                      boxShadow: "0 0 16px var(--color-accent-glow)",
                    }}
                  />

                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={34}
                    height={34}
                    className="relative z-10 transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // fallback: show first letter if icon fails
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement("span");
                        fallback.textContent = skill.name[0];
                        fallback.style.cssText =
                          "font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: var(--color-accent);";
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>

                {/* Label */}
                <span
                  className="font-mono text-xs text-center transition-colors duration-300 group-hover:text-accent"
                  style={{ color: "var(--color-muted-2)" }}
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
