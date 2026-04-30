"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">What I&apos;ve built</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="project-card card-base overflow-hidden flex flex-col group"
            >
              {/* Project Image / Placeholder */}
              <div className="relative h-48 overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Layers
                      size={40}
                      className="mx-auto mb-2 opacity-20"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <p
                      className="font-mono text-xs opacity-30"
                      style={{ color: "var(--color-text)" }}
                    >
                      {project.title}
                    </p>
                  </div>
                </div>

                {/* Hover overlay with quick links */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: "rgba(8, 11, 15, 0.85)" }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: "var(--color-accent)",
                      color: "var(--color-bg)",
                    }}
                    title="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text)",
                    }}
                    title="GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <p
                    className="section-label text-xs mb-1"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {project.subtitle}
                  </p>
                  <h3
                    className="font-display font-bold text-lg leading-tight"
                    style={{ color: "var(--color-text)" }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--color-muted-2)" }}
                >
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="tag-pill"
                      style={{ fontSize: "0.65rem", padding: "0.15rem 0.55rem" }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span
                      className="tag-pill"
                      style={{ fontSize: "0.65rem", padding: "0.15rem 0.55rem" }}
                    >
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center gap-2 text-sm font-semibold font-mono transition-all group/btn"
                  style={{ color: "var(--color-accent)" }}
                >
                  View Details
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
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
