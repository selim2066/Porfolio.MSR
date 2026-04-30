"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import {
  Download,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  ArrowDown,
  MapPin,
  Circle,
} from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
};

const TYPEWRITER_TEXTS = [
  "Full-Stack Developer",
  "Next.js • React • Node.js • Express",
  "PostgreSQL • Prisma • Production-Ready Code",
  "Building Scalable REST APIs",
  "Secure Auth & Role-Based Systems",
  "Exploring Docker, Redis & Go",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  const [typeText, setTypeText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter
  useEffect(() => {
    const current = TYPEWRITER_TEXTS[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typeText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typeText === "") {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % TYPEWRITER_TEXTS.length);
    } else {
      const speed = isDeleting ? 50 : 80;
      timeout = setTimeout(() => {
        setTypeText(
          isDeleting
            ? current.slice(0, typeText.length - 1)
            : current.slice(0, typeText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typeText, isDeleting, textIndex]);

  // GSAP floating bg
  useEffect(() => {
    if (!floatingRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".orb1", { y: -30, x: 15, duration: 5, repeat: -1, yoyo: true });
      gsap.to(".orb2", { y: 25, x: -20, duration: 7, repeat: -1, yoyo: true, delay: 1 });
      gsap.to(".orb3", { y: -20, duration: 4, repeat: -1, yoyo: true, delay: 2 });
    }, floatingRef);

    return () => ctx.revert();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      ref={containerRef}
    >
      {/* FLOATING BACKGROUND */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div
          className="orb1 absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-[60px] opacity-10"
          style={{ background: "radial-gradient(circle, var(--color-accent), transparent)" }}
        />
        <div
          className="orb2 absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full blur-[80px] opacity-10"
          style={{ background: "radial-gradient(circle, #0066ff, transparent)" }}
        />
        <div
          className="orb3 absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-[50px] opacity-5"
          style={{ background: "radial-gradient(circle, var(--color-accent), transparent)" }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div initial="hidden" animate="visible" variants={{}}>

            <motion.div variants={itemVariants} className="mb-6 pt-14">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono"
                style={{
                  background: "var(--color-accent-dim)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-accent)",
                }}
              >
                <Circle size={8} className="animate-pulse" />
                {personalInfo.availableForWork ? "Available for work" : "Busy"}
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-mono text-sm mb-3"
              style={{ color: "var(--color-muted-2)" }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display font-bold mb-4 leading-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              {personalInfo.firstName}{" "}
              <span style={{ color: "var(--color-accent)" }}>
                {personalInfo.lastName}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="h-10 mb-6">
              <span className="text-xl md:text-2xl font-display font-semibold"
                style={{ color: "var(--color-muted-2)" }}>
                {typeText}
              </span>
              <span className="typewriter-cursor" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mb-3"
              style={{ color: "var(--color-muted-2)" }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="flex items-center gap-2 text-sm mb-8 font-mono"
              style={{ color: "var(--color-muted)" }}
            >
              <MapPin size={14} style={{ color: "var(--color-accent)" }} />
              {personalInfo.bio}
            </motion.p>

            {/* BUTTONS */}
            <motion.div variants={itemVariants} className="flex gap-4 mb-10">
              <a href={personalInfo.resumeUrl} download className="btn-primary">
                <Download size={16} /> Resume
              </a>
              <button
                className="btn-outline"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let&apos;s Talk
              </button>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div variants={itemVariants} className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_18px_var(--color-accent)]"
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-muted-2)",
                    }}
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT — PROFILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            {/* 
              KEY FIX: outer wrapper has extra padding to make room for 
              the stat badges that overflow left/right. No overflow-hidden here.
            */}
            <div className="relative px-12 py-4">

              {/* GLOW RING */}
              <div
                className="absolute rounded-full opacity-70"
                style={{
                  animation: "spin 5s linear infinite",
                  background: "conic-gradient(var(--color-accent), transparent, var(--color-accent))",
                  padding: "3px",
                  width: "calc(100% - 96px + 14px)", /* account for px-12 padding */
                  height: "calc(100% - 32px + 14px)", /* account for py-4 padding */
                  top: "calc(16px - 7px)",
                  left: "calc(48px - 7px)",
                }}
              />

              {/* PROFILE IMAGE */}
              <div
                className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 z-10 transition-transform duration-500 hover:scale-[1.03]"
                style={{ borderColor: "var(--color-bg)" }}
              >
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* STAT — Experience (left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-1/3 px-4 py-2 rounded-xl z-20"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                }}
              >
                <p
                  className="text-xs font-mono"
                  style={{ color: "var(--color-muted)" }}
                >
                  Experience
                </p>
                <p
                  className="font-display font-bold text-lg"
                  style={{ color: "var(--color-accent)" }}
                >
                  3+ Years
                </p>
              </motion.div>

              {/* STAT — Projects (right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-0 bottom-1/3 px-4 py-2 rounded-xl z-20"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                }}
              >
                <p
                  className="text-xs font-mono"
                  style={{ color: "var(--color-muted)" }}
                >
                  Projects
                </p>
                <p
                  className="font-display font-bold text-lg"
                  style={{ color: "var(--color-accent)" }}
                >
                  20+
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs" style={{ color: "var(--color-muted)" }}>
          scroll down
        </span>
        <ArrowDown
          size={16}
          className="animate-bounce"
          style={{ color: "var(--color-accent)" }}
        />
      </div>
    </section>
  );
}