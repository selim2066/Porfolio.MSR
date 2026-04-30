"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  AlertTriangle,
  Rocket,
  Layers,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();

  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted text-xl mb-4">Project not found.</p>
          <button
            onClick={() => router.push("/#projects")}
            className="btn-primary"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen grid-bg"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="container-custom max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-mono text-sm">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-label mb-3">Case Study</p>

          <h1
            className="font-display text-4xl md:text-5xl font-bold mb-3"
            style={{ color: "var(--color-text)" }}
          >
            {project.title}
          </h1>

          <p className="text-xl" style={{ color: "var(--color-muted-2)" }}>
            {project.subtitle}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-xl overflow-hidden mb-10 border"
          style={{
            borderColor: "var(--color-border)",
            height: "320px",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-base p-6 mb-6"
        >
          <h2
            className="font-display text-lg font-bold mb-4 flex items-center gap-2"
            style={{ color: "var(--color-accent)" }}
          >
            <Layers size={18} /> Tech Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-base p-6 mb-6"
        >
          <h2
            className="font-display text-lg font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            About This Project
          </h2>

          <p style={{ color: "var(--color-muted-2)", lineHeight: "1.8" }}>
            {project.description}
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-4 mb-6"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={16} />
            GitHub (Client)
          </a>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-base p-6 mb-6"
        >
          <h2
            className="font-display text-lg font-bold mb-4 flex items-center gap-2"
            style={{ color: "#f59e0b" }}
          >
            <AlertTriangle size={18} /> Challenges Faced
          </h2>

          <ul className="space-y-3">
            {project.challenges.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
                style={{ color: "var(--color-muted-2)" }}
              >
                <span
                  className="font-mono text-xs mt-1 shrink-0"
                  style={{ color: "#f59e0b" }}
                >
                  0{i + 1}
                </span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Future Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="card-base p-6"
        >
          <h2
            className="font-display text-lg font-bold mb-4 flex items-center gap-2"
            style={{ color: "var(--color-accent)" }}
          >
            <Rocket size={18} /> Future Improvements
          </h2>

          <ul className="space-y-3">
            {project.improvements.map((imp, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
                style={{ color: "var(--color-muted-2)" }}
              >
                <span
                  className="font-mono text-xs mt-1 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                >
                  →
                </span>
                {imp}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}