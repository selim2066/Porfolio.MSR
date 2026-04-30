"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import { personalInfo, emailjsConfig } from "@/lib/data";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Contact",
          message: form.message,
          to_email: personalInfo.email,
        },
        emailjsConfig.publicKey
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email me directly.");
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#00e5b0",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "#6366f1",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: personalInfo.whatsapp,
      href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`,
      color: "#25D366",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "#f59e0b",
    },
  ];

  const inputStyle = {
    background: "var(--color-surface-2)",
    border: "1px solid var(--color-border)",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    color: "var(--color-text)",
    fontSize: "0.9rem",
    fontFamily: "var(--font-body)",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      className="section-padding"
      ref={ref}
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Get in touch</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)" }}
            >
              Contact{" "}
              <span style={{ color: "var(--color-accent)" }}>Me</span>
            </h2>
            <div
              className="h-px flex-1 hidden md:block"
              style={{ background: "var(--color-border)", minWidth: "60px" }}
            />
          </div>
          <p
            className="mt-4 max-w-lg text-base"
            style={{ color: "var(--color-muted-2)" }}
          >
            Have a project in mind or just want to say hi? My inbox is always
            open. I&apos;ll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="card-base p-4 flex items-center gap-4 cursor-pointer"
                  style={{ background: "var(--color-bg)", textDecoration: "none" }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-mono mb-0.5"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card-base p-6 md:p-8" style={{ background: "var(--color-bg)" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="block text-xs font-mono mb-2"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Your Name <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Md Selim Reza"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--color-accent)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--color-border)")
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-mono mb-2"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Email Address <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="mdselimreza.dev@gmail.com"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--color-accent)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--color-border)")
                    }
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-xs font-mono mb-2"
                  style={{ color: "var(--color-muted)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration..."
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--color-accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--color-border)")
                  }
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-xs font-mono mb-2"
                  style={{ color: "var(--color-muted)" }}
                >
                  Message <span style={{ color: "var(--color-accent)" }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--color-accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--color-border)")
                  }
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg mb-4"
                  style={{
                    background: "rgba(0, 229, 176, 0.1)",
                    border: "1px solid rgba(0, 229, 176, 0.3)",
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: "var(--color-accent)" }} />
                  <p
                    className="text-sm font-mono"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Message sent! I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg mb-4"
                  style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <AlertCircle size={16} style={{ color: "#ef4444" }} />
                  <p className="text-sm font-mono" style={{ color: "#ef4444" }}>
                    {errorMsg}
                  </p>
                </motion.div>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="btn-primary w-full justify-center"
                style={{ opacity: status === "loading" ? 0.7 : 1 }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <p
                className="text-xs font-mono text-center mt-3"
                style={{ color: "var(--color-muted)" }}
              >
               Jajhakallah Khairan for visiting my portfolio!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
