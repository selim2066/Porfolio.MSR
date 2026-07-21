"use client";

import { projects } from "@/lib/data";
import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: any;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Define the scroll ranges for this specific card
  const startEnter = (index - 1) / total;
  const endEnter = index / total;
  const endExit = (index + 1) / total;

  // Map scroll progress to animations
  const y = useTransform(
    progress,
    [startEnter, endEnter, endExit, 1],
    [800, 0, 0, 0]
  );

  const scale = useTransform(
    progress,
    [startEnter, endEnter, endExit, 1],
    [1, 1, 0.92 - (total - index) * 0.02, 0.9] // subtle diminishing scale based on depth
  );

  const opacity = useTransform(
    progress,
    [startEnter, endEnter, endExit, 1],
    [1, 1, 0.5, 0.2]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index,
        transformOrigin: "top center",
      }}
      className="absolute inset-0 w-full h-full project-card card-base overflow-hidden flex flex-col md:flex-row"
    >
      {/* LEFT COLUMN: Details */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center h-full overflow-y-auto order-2 md:order-1 scrollbar-hide">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-mono"
            style={{
              background: "var(--color-surface-2)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-border)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p
            className="section-label text-xs mb-0 tracking-wider"
            style={{ fontSize: "0.75rem", margin: 0 }}
          >
            {project.subtitle}
          </p>
        </div>

        <h3
          className="font-display font-bold text-3xl md:text-4xl leading-tight mb-3"
          style={{ color: "var(--color-text)" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm md:text-base leading-relaxed mb-4"
          style={{ color: "var(--color-muted-2)" }}
        >
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="tag-pill"
              style={{
                fontSize: "0.7rem",
                padding: "0.25rem 0.7rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <div className="mt-auto md:mt-0">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold font-mono transition-all group/btn px-6 py-3 rounded-full"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
            }}
          >
            View Details
            <ArrowRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN: Image */}
      <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-full relative overflow-hidden order-1 md:order-2 p-3 md:p-4 lg:p-6">
        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden group/img">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover/img:scale-105"
          />

          {/* Hover overlay with quick links */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100 transition-all duration-300 backdrop-blur-sm"
            style={{ background: "rgba(8, 11, 15, 0.6)" }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-bg)",
              }}
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-center"
        >
          <p className="section-label mb-3">What I&apos;ve built</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2
              className="font-display font-bold leading-none"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--color-text)",
              }}
            >
              Featured{" "}
              <span style={{ color: "var(--color-accent)" }}>Projects</span>
            </h2>
            <div
              className="h-px flex-1 hidden md:block"
              style={{ background: "var(--color-border)", minWidth: "60px" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Sticky Scroll Container */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 h-[680px] sm:h-[600px] md:h-[520px] lg:h-[560px]">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                total={projects.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p
            className="text-sm font-mono mb-4"
            style={{ color: "var(--color-muted)" }}
          >
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/selim2066"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={16} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
