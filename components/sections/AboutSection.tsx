"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutMe } from "@/lib/data";
import { Code2, Heart, Briefcase, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "My Journey",
    content: (d: typeof aboutMe) => d.journey,
    color: "#00e5b0",
  },
  {
    icon: Briefcase,
    title: "How I Work",
    content: (d: typeof aboutMe) => d.workStyle,
    color: "#6366f1",
  },
  {
    icon: Heart,
    title: "Beyond Code",
    content: (d: typeof aboutMe) => d.hobbies,
    color: "#f59e0b",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Get to know me</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
            >
              About{" "}
              <span style={{ color: "var(--color-accent)" }}>Me</span>
            </h2>
            <div
              className="h-px flex-1 hidden md:block"
              style={{ background: "var(--color-border)", minWidth: "60px" }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Intro + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div
              className="card-base p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} style={{ color: "var(--color-accent)" }} />
                <span className="section-label">Introduction</span>
              </div>
              <p
                className="leading-relaxed text-base"
                style={{ color: "var(--color-muted-2)" }}
              >
                {aboutMe.intro}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutMe.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="card-base p-4 text-center"
                >
                  <p
                    className="font-display font-bold text-2xl mb-1"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs font-mono leading-tight"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detail Cards */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="card-base p-6 flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1"
                    style={{
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: card.color }} />
                  </div>
                  <div>
                    <h3
                      className="font-display font-semibold text-base mb-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-muted-2)" }}
                    >
                      {card.content(aboutMe)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
