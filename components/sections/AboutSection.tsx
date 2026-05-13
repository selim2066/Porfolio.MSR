"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Briefcase,
  Code2,
  GraduationCap,
  Download,
  MapPin,
  Mail,
  Terminal,
  Layers,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   TYPEWRITER HOOK  (fires once on inView)
───────────────────────────────────────────── */
function useTypewriter(text: string, trigger: boolean, speed = 22) {
  const [displayed, setDisplayed] = useState(0);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    let i = 0;
    const tick = () => {
      i++;
      setDisplayed(i);
      if (i < text.length) {
        setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    };
    setTimeout(tick, speed);
  }, [text, speed]);

  useEffect(() => {
    if (trigger) start();
  }, [trigger, start]);

  return { partial: text.slice(0, displayed), done };
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const stats = [
  { value: "3+", label: "Full-Stack Projects", icon: Layers },
  { value: "15+", label: "Technologies", icon: Code2 },

];

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Developer",
    desc: "Specialising in Next.js, React, Node.js, Express, Prisma & PostgreSQL — building scalable, production-grade web apps from pixel to DB.",
    accent: "#00e5b0",
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    desc: "Web Developer Intern at Battery Low Interactive. Built MediStore, GadgetKing, PawStep — each shipped to production with real users.",
    accent: "#6366f1",
  },
  {
    icon: GraduationCap,
    title: "CSE Foundation",
    desc: "B.Sc. in Computer Science & Engineering from Green University of Bangladesh — strong fundamentals in algorithms, systems & databases.",
    accent: "#f59e0b",
  },
];

const skills = [
  "Next.js", "React", "TypeScript", "Node.js",
  "Express", "PostgreSQL", "Prisma", "Tailwind CSS",
  "REST APIs", "Git", "Docker",
];

/* ─────────────────────────────────────────────
   MAGNETIC PHOTO CARD
───────────────────────────────────────────── */
function PhotoCard({ inView }: { inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), { stiffness: 200, damping: 30 });
  const glareX = useTransform(mouseX, [-150, 150], [0, 100]);
  const glareY = useTransform(mouseY, [-150, 150], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto"
    >
      {/* Glow backdrop */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
        style={{ background: "radial-gradient(ellipse at center, #00e5b0 0%, transparent 70%)", transform: "scale(1.15)" }}
      />

      {/* Card shell */}
      <div
        className="relative rounded-3xl overflow-hidden border"
        style={{
          background: "linear-gradient(135deg, rgba(15,19,24,0.95) 0%, rgba(22,28,36,0.95) 100%)",
          borderColor: "rgba(0,229,176,0.3)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,229,176,0.2)",
        }}
      >
        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.07) 0%, transparent 60%)`
            ),
          }}
        />

        {/* Photo */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src="/me-prof02.png"
            alt="Selim — Full-Stack Developer"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 90vw, 340px"
            priority
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(15,19,24,1) 0%, transparent 100%)" }}
          />
        </div>

        {/* Name badge */}
        <div className="px-5 py-4" style={{ marginTop: "-2rem", position: "relative", zIndex: 5 }}>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#00e5b0", boxShadow: "0 0 8px #00e5b0" }}
            />
            <span className="text-xs font-mono" style={{ color: "#00e5b0" }}>
              Available for work
            </span>
          </div>
          <h3 className="font-display font-bold text-xl" style={{ color: "#e8edf2" }}>
            Selim
          </h3>
          <p className="text-sm" style={{ color: "#8899aa" }}>
            Full-Stack Developer
          </p>

          {/* Info row */}
          <div className="mt-3 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <MapPin size={12} style={{ color: "#00e5b0" }} />
              <span className="text-xs font-mono" style={{ color: "#8899aa" }}>
                Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal size={12} style={{ color: "#6366f1" }} />
              <span className="text-xs font-mono" style={{ color: "#8899aa" }}>
                Next.js · Node.js · PostgreSQL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={12} style={{ color: "#f59e0b" }} />
              <span className="text-xs font-mono" style={{ color: "#8899aa" }}>
                Open to remote opportunities
              </span>
            </div>
          </div>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-display font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00e5b0, #00c49a)",
              color: "#080b0f",
              boxShadow: "0 4px 20px rgba(0,229,176,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(0,229,176,0.55)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(0,229,176,0.35)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <Download size={14} />
            Download CV
          </a>
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 flex items-center gap-1.5 rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-mono border"
        style={{
          background: "rgba(15,19,24,0.95)",
          borderColor: "rgba(99,102,241,0.4)",
          color: "#6366f1",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(99,102,241,0.2)",
        }}
      >
        <Code2 size={10} />
        <span className="hidden sm:inline">Clean Code</span>
        <span className="sm:hidden">&lt;/&gt;</span>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   STAT COUNTER
───────────────────────────────────────────── */
function StatCard({ stat, i, inView }: { stat: typeof stats[0]; i: number; inView: boolean }) {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
      className="relative group rounded-2xl p-4 text-center border overflow-hidden cursor-default"
      style={{
        background: "rgba(15,19,24,0.8)",
        borderColor: "rgba(0,229,176,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, rgba(0,229,176,0.06) 0%, transparent 70%)" }}
      />
      <Icon size={18} className="mx-auto mb-2" style={{ color: "var(--color-accent)" }} />
      <p className="font-display font-bold text-2xl" style={{ color: "var(--color-accent)" }}>
        {stat.value}
      </p>
      <p className="text-xs font-mono mt-0.5" style={{ color: "var(--color-muted)" }}>
        {stat.label}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   TYPEWRITER PARAGRAPH
───────────────────────────────────────────── */
const FULL_TEXT =
  "I'm a passionate Full-Stack Developer who loves building products that live at the intersection of great engineering and great design. I work across the entire stack — from crafting pixel-perfect UIs to architecting robust backend systems and optimised databases. I believe every line of code should tell a story and every interface should feel effortless.";

// Boundaries for the bold segment
const BOLD_START = "I'm a ".length;
const BOLD_END = BOLD_START + "passionate Full-Stack Developer".length;

function TypewriterParagraph({ inView }: { inView: boolean }) {
  const { partial, done } = useTypewriter(FULL_TEXT, inView, 22);

  const before = partial.slice(0, Math.min(partial.length, BOLD_START));
  const bold = partial.length > BOLD_START
    ? partial.slice(BOLD_START, Math.min(partial.length, BOLD_END))
    : "";
  const after = partial.length > BOLD_END ? partial.slice(BOLD_END) : "";

  return (
    <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-2)" }}>
      {before}
      {bold && (
        <span className="font-semibold" style={{ color: "var(--color-text)" }}>
          {bold}
        </span>
      )}
      {after}
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            background: "var(--color-accent)",
            marginLeft: "2px",
            verticalAlign: "middle",
            borderRadius: "2px",
            animation: "blink 0.9s infinite",
            boxShadow: "0 0 8px var(--color-accent-glow)",
          }}
        />
      )}
    </p>
  );
}

/* ─────────────────────────────────────────────
   HIGHLIGHT CARD
───────────────────────────────────────────── */
function HighlightCard({
  card,
  i,
  inView,
}: {
  card: typeof highlights[0];
  i: number;
  inView: boolean;
}) {
  const Icon = card.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-4 sm:p-5 border flex items-start gap-3 sm:gap-4 overflow-hidden group transition-all duration-300"
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(15,19,24,0.95), ${card.accent}10)`
          : "rgba(15,19,24,0.8)",
        borderColor: hovered ? `${card.accent}50` : "rgba(0,229,176,0.1)",
        boxShadow: hovered ? `0 15px 50px ${card.accent}12` : "none",
        backdropFilter: "blur(12px)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-300"
        style={{
          background: `linear-gradient(to bottom, transparent, ${card.accent}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
        style={{
          background: `${card.accent}18`,
          border: `1px solid ${card.accent}35`,
          boxShadow: hovered ? `0 0 20px ${card.accent}25` : "none",
        }}
      >
        <Icon size={20} style={{ color: card.accent }} />
      </div>

      <div>
        <h3
          className="font-display font-semibold text-base mb-1.5 transition-colors duration-300"
          style={{ color: hovered ? card.accent : "var(--color-text)" }}
        >
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-2)" }}>
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Background radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(0,229,176,0.04) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />

      <div className="container-custom relative z-10">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-14 lg:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-5 border text-xs font-mono"
            style={{
              background: "rgba(0,229,176,0.06)",
              borderColor: "rgba(0,229,176,0.2)",
              color: "var(--color-accent)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Get to know me
          </div>

          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.9rem, 5vw, 3.8rem)",
              color: "var(--color-text)",
              lineHeight: 1.1,
            }}
          >
            About{" "}
            <span
              style={{
                color: "var(--color-accent)",
                textShadow: "0 0 30px rgba(0,229,176,0.4)",
              }}
            >
              Me
            </span>
          </h2>

          <p
            className="mt-3 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed hidden sm:block"
            style={{ color: "var(--color-muted-2)" }}
          >
            A developer who obsesses over clean code, beautiful UIs, and
            experiences that feel inevitable.
          </p>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT — Photo card */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            <PhotoCard inView={inView} />

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} i={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="md:col-span-1 lg:col-span-8 flex flex-col gap-5 sm:gap-6">
            {/* Intro card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl p-5 sm:p-6 border relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,229,176,0.05) 0%, rgba(15,19,24,0.95) 60%)",
                borderColor: "rgba(0,229,176,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(0,229,176,0.08)", transform: "translate(30%, -30%)" }}
              />
              <p
                className="font-mono text-xs mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                // who_am_i
              </p>
              <TypewriterParagraph inView={inView} />
            </motion.div>

            {/* Highlight cards */}
            <div className="flex flex-col gap-4">
              {highlights.map((card, i) => (
                <HighlightCard key={card.title} card={card} i={i} inView={inView} />
              ))}
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="rounded-2xl p-5 border"
              style={{
                background: "rgba(15,19,24,0.8)",
                borderColor: "rgba(0,229,176,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="font-mono text-xs mb-3" style={{ color: "var(--color-muted)" }}>
                // tech_stack[]
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.75 + i * 0.04 }}
                    className="tag-pill text-xs transition-all duration-200 hover:scale-105"
                    style={{ cursor: "default" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
