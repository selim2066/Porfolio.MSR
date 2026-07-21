"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { certifications } from "@/lib/data";
import { Award, Calendar, X, Download, Eye } from "lucide-react";

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-28" ref={ref}>
      <div className="container-custom">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 lg:mb-16 text-center"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-4 border text-xs font-mono"
            style={{
              background: "rgba(0,229,176,0.06)",
              borderColor: "rgba(0,229,176,0.2)",
              color: "var(--color-accent)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            CERTIFICATIONS
          </div>

          <h2
            className="font-display font-bold leading-none"
            style={{
              fontSize: "clamp(1.9rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
            }}
          >
            Certifications &{" "}
            <span
              style={{
                color: "var(--color-accent)",
                textShadow: "0 0 30px rgba(0,229,176,0.4)",
              }}
            >
              Training
            </span>
          </h2>
        </motion.div>

        {/* ── Grid ── */}
        <div 
          className={
            certifications.length === 1 
              ? "max-w-3xl mx-auto" 
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          }
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-base p-4 sm:p-6 flex flex-col sm:flex-row items-stretch gap-6 h-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "0 10px 30px -10px rgba(0,229,176,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 40px -10px rgba(0,229,176,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 30px -10px rgba(0,229,176,0)";
              }}
            >
              {/* Left Accent Border */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[var(--color-accent)] transition-colors duration-300 z-20"
              />

              {/* Subtle accent glow top right */}
              <div 
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ background: "var(--color-accent)" }}
              />

              {/* Image Column */}
              {/* @ts-ignore */}
              {cert.image && (
                <div className="w-full sm:w-1/3 md:w-[220px] relative rounded-xl overflow-hidden aspect-square sm:aspect-auto sm:h-full flex-shrink-0" style={{ border: "1px solid var(--color-border)" }}>
                  <img 
                    // @ts-ignore
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
                      style={{
                        background: "rgba(0,229,176,0.2)",
                        border: "1px solid rgba(0,229,176,0.4)",
                      }}
                    >
                      <Award size={16} style={{ color: "var(--color-accent)" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Content Column */}
              <div className="flex flex-col justify-between flex-1 py-1 sm:py-2 relative z-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: "var(--color-surface-2)",
                        color: "var(--color-muted)",
                        border: "1px solid var(--color-border)"
                      }}
                    >
                      <Calendar size={12} />
                      {cert.duration}
                    </span>
                    <span className="text-xs font-mono font-semibold" style={{ color: "var(--color-accent)" }}>
                      {cert.organization}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-xl md:text-2xl leading-tight mb-4"
                    style={{ color: "var(--color-text)" }}
                  >
                    {cert.title}
                  </h3>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 text-sm font-display font-semibold rounded-xl px-6 py-3 transition-all duration-300 hover:-translate-y-1 relative z-10"
                  style={{
                    background: "var(--color-surface-2)",
                    color: "var(--color-text)",
                    border: "1px solid var(--color-border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-accent)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text)";
                  }}
                >
                  View Certificate
                  <Eye size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Modal ── */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] card-base flex flex-col overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-5 border-b" style={{ borderColor: "var(--color-border)" }}>
                  <h3 className="font-display font-bold text-lg sm:text-xl truncate pr-4" style={{ color: "var(--color-text)" }}>
                    {selectedCert.title}
                  </h3>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full transition-colors flex-shrink-0"
                    style={{ background: "var(--color-surface-2)", color: "var(--color-text)" }}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Image Body */}
                <div 
                  className="relative flex-1 min-h-[40vh] sm:min-h-[60vh] overflow-auto flex items-center justify-center p-4 sm:p-8"
                  style={{ background: "rgba(0,0,0,0.2)" }}
                >
                  {/* @ts-ignore - certificateImage may not exist on all certs but we added it to data */}
                  {selectedCert.certificateImage ? (
                    <img 
                      // @ts-ignore
                      src={selectedCert.certificateImage} 
                      alt={selectedCert.title}
                      className="max-w-full max-h-full object-cover rounded-lg border w-full h-full"
                      style={{ borderColor: "var(--color-border)", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}
                    />
                  ) : (
                    <div className="text-sm" style={{ color: "var(--color-muted)" }}>
                      No image preview available
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-4 sm:p-5 border-t flex justify-end gap-4" style={{ borderColor: "var(--color-border)" }}>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="inline-flex items-center gap-2 text-sm font-display font-semibold rounded-xl px-5 py-2.5 transition-all duration-300"
                    style={{
                      color: "var(--color-muted-2)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--color-muted-2)";
                    }}
                  >
                    Close
                  </button>

                  <a
                    href={selectedCert.certificateUrl}
                    download
                    className="inline-flex items-center gap-2 text-sm font-display font-semibold rounded-xl px-6 py-2.5 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "var(--color-accent)",
                      color: "#ffffff",
                      boxShadow: "0 4px 20px var(--color-accent-glow)",
                    }}
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
