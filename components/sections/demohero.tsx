// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import {
//   Download,
//   Github,
//   Linkedin,
//   Twitter,
//   Facebook,
//   ArrowDown,
//   MapPin,
//   Circle,
// } from "lucide-react";
// import { personalInfo, socialLinks } from "@/lib/data";

// const iconMap: Record<string, React.ElementType> = {
//   github: Github,
//   linkedin: Linkedin,
//   twitter: Twitter,
//   facebook: Facebook,
// };

// const TYPEWRITER_TEXTS = [
//   "Full-Stack Developer",
//   "Next.js • React • Node.js • Express",
//   "PostgreSQL • Prisma • Production-Ready Code",
//   "Building Scalable REST APIs",
//   "Secure Auth & Role-Based Systems",
//   "Exploring Docker, Redis & Go",
// ];

// export default function HeroSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const floatingRef = useRef<HTMLDivElement>(null);
//   const [typeText, setTypeText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   // Typewriter effect
//   useEffect(() => {
//     const current = TYPEWRITER_TEXTS[textIndex];
//     let timeout: ReturnType<typeof setTimeout>;

//     if (!isDeleting && typeText === current) {
//       timeout = setTimeout(() => setIsDeleting(true), 2000);
//     } else if (isDeleting && typeText === "") {
//       setIsDeleting(false);
//       setTextIndex((i) => (i + 1) % TYPEWRITER_TEXTS.length);
//     } else {
//       const speed = isDeleting ? 50 : 80;
//       timeout = setTimeout(() => {
//         setTypeText(
//           isDeleting
//             ? current.slice(0, typeText.length - 1)
//             : current.slice(0, typeText.length + 1)
//         );
//       }, speed);
//     }

//     return () => clearTimeout(timeout);
//   }, [typeText, isDeleting, textIndex]);

//   // GSAP floating animation for decorative elements
//   useEffect(() => {
//     if (!floatingRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.to(".float-orb-1", {
//         y: -30,
//         x: 15,
//         duration: 5,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//       });
//       gsap.to(".float-orb-2", {
//         y: 25,
//         x: -20,
//         duration: 7,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//         delay: 1,
//       });
//       gsap.to(".float-orb-3", {
//         y: -20,
//         duration: 4,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//         delay: 2,
//       });
//     }, floatingRef);

//     return () => ctx.revert();
//   }, []);

//   const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.12 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center grid-bg overflow-hidden"
//       ref={containerRef}
//     >
//       {/* Floating background orbs */}
//       <div ref={floatingRef} className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div
//           className="float-orb-1 absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-10"
//           style={{
//             background: "radial-gradient(circle, var(--color-accent), transparent 70%)",
//             filter: "blur(60px)",
//           }}
//         />
//         <div
//           className="float-orb-2 absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full opacity-8"
//           style={{
//             background: "radial-gradient(circle, #0066ff, transparent 70%)",
//             filter: "blur(80px)",
//           }}
//         />
//         <div
//           className="float-orb-3 absolute top-1/2 left-1/2 w-48 h-48 rounded-full opacity-5"
//           style={{
//             background: "radial-gradient(circle, var(--color-accent), transparent 70%)",
//             filter: "blur(50px)",
//           }}
//         />
//       </div>

//       <div className="container-custom relative z-10 pt-24 pb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {/* Status badge */}
//             <motion.div variants={itemVariants} className="mb-6">
//               <span
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono"
//                 style={{
//                   background: "var(--color-accent-dim)",
//                   border: "1px solid var(--color-border)",
//                   color: "var(--color-accent)",
//                 }}
//               >
//                 <Circle size={8} fill="currentColor" className="animate-pulse" />
//                 {personalInfo.availableForWork
//                   ? "Available for work"
//                   : "Currently busy"}
//               </span>
//             </motion.div>

//             {/* Greeting */}
//             <motion.p
//               variants={itemVariants}
//               className="font-mono text-sm mb-3"
//               style={{ color: "var(--color-muted-2)" }}
//             >
//               Hello, I&apos;m
//             </motion.p>

//             {/* Name */}
//             <motion.h1
//               variants={itemVariants}
//               className="font-display font-bold mb-4 leading-none"
//               style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "var(--color-text)" }}
//             >
//               {personalInfo.firstName}{" "}
//               <span style={{ color: "var(--color-accent)" }}>
//                 {personalInfo.lastName}
//               </span>
//             </motion.h1>

//             {/* Typewriter designation */}
//             <motion.div
//               variants={itemVariants}
//               className="flex items-center gap-2 mb-6 h-10"
//             >
//               <span
//                 className="font-display text-xl md:text-2xl font-semibold"
//                 style={{ color: "var(--color-muted-2)" }}
//               >
//                 {typeText}
//               </span>
//               <span className="typewriter-cursor" />
//             </motion.div>

//             {/* Tagline */}
//             <motion.p
//               variants={itemVariants}
//               className="text-base md:text-lg leading-relaxed mb-3 max-w-md"
//               style={{ color: "var(--color-muted-2)" }}
//             >
//               {personalInfo.tagline}
//             </motion.p>

//             {/* Location */}
//             <motion.p
//               variants={itemVariants}
//               className="flex items-center gap-2 text-sm mb-8 font-mono"
//               style={{ color: "var(--color-muted)" }}
//             >
//               <MapPin size={14} style={{ color: "var(--color-accent)" }} />
//               {personalInfo.bio}
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-wrap gap-4 mb-10"
//             >
//               <a
//                 href={personalInfo.resumeUrl}
//                 download
//                 className="btn-primary"
//               >
//                 <Download size={16} />
//                 Download Resume
//               </a>
//               <button
//                 onClick={() => {
//                   document
//                     .getElementById("contact")
//                     ?.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 className="btn-outline"
//               >
//                 Let&apos;s Talk
//               </button>
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//               variants={itemVariants}
//               className="flex items-center gap-3"
//             >
//               <span
//                 className="text-xs font-mono mr-1"
//                 style={{ color: "var(--color-muted)" }}
//               >
//                 Find me:
//               </span>
//               {socialLinks.map((s) => {
//                 const Icon = iconMap[s.icon];
//                 return (
//                   <motion.a
//                     key={s.name}
//                     href={s.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1, y: -3 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
//                     style={{
//                       background: "var(--color-surface)",
//                       border: "1px solid var(--color-border)",
//                       color: "var(--color-muted-2)",
//                     }}
//                     title={s.name}
//                   >
//                     {Icon && <Icon size={16} />}
//                   </motion.a>
//                 );
//               })}
//             </motion.div>
//           </motion.div>

//           {/* Right — Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className="flex justify-center lg:justify-end"
//           >
//             <div className="relative">
//               {/* Rotating ring */}
//               <div
//                 className="absolute inset-0 rounded-full"
//                 style={{
//                   background: `conic-gradient(var(--color-accent) 0%, transparent 40%, var(--color-accent) 60%, transparent 100%)`,
//                   padding: "3px",
//                   borderRadius: "50%",
//                   animation: "spin 6s linear infinite",
//                   width: "calc(100% + 12px)",
//                   height: "calc(100% + 12px)",
//                   top: "-6px",
//                   left: "-6px",
//                 }}
//               />

//               {/* Profile image container */}
//               <div
//                 className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden z-10"
//                 style={{
//                   border: "4px solid var(--color-bg)",
//                   background: "var(--color-surface)",
//                 }}
//               >
//                 {/* Placeholder — replace with real <Image> once you have a photo */}
//                 <div
//                   className="w-full h-full flex items-center justify-center"
//                   style={{
//                     background: "linear-gradient(135deg, var(--color-surface), var(--color-surface-2))",
//                   }}
//                 >
//                   <div className="text-center">
//                     <div
//                       className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
//                       style={{ background: "var(--color-accent-dim)" }}
//                     >
//                       <span
//                         className="font-display font-bold text-3xl"
//                         style={{ color: "var(--color-accent)" }}
//                       >
//                         {personalInfo.firstName[0]}
//                       </span>
//                     </div>
//                     <p
//                       className="text-xs font-mono"
//                       style={{ color: "var(--color-muted)" }}
//                     >
//                       Add your photo
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating stats badges */}
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -left-8 top-1/4 px-4 py-2 rounded-xl"
//                 style={{
//                   background: "var(--color-surface)",
//                   border: "1px solid var(--color-border)",
//                   boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 <p className="font-mono text-xs" style={{ color: "var(--color-muted)" }}>
//                   Experience
//                 </p>
//                 <p
//                   className="font-display font-bold text-lg"
//                   style={{ color: "var(--color-accent)" }}
//                 >
//                   3+ Years
//                 </p>
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                 className="absolute -right-8 bottom-1/4 px-4 py-2 rounded-xl"
//                 style={{
//                   background: "var(--color-surface)",
//                   border: "1px solid var(--color-border)",
//                   boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 <p className="font-mono text-xs" style={{ color: "var(--color-muted)" }}>
//                   Projects
//                 </p>
//                 <p
//                   className="font-display font-bold text-lg"
//                   style={{ color: "var(--color-accent)" }}
//                 >
//                   20+
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//         >
//           <span
//             className="font-mono text-xs"
//             style={{ color: "var(--color-muted)" }}
//           >
//             scroll down
//           </span>
//           <motion.div
//             animate={{ y: [0, 6, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           >
//             <ArrowDown size={16} style={{ color: "var(--color-accent)" }} />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@300;400;500&display=swap');

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// :root {
//   --font-display: 'Syne', serif;
//   --font-body: 'DM Sans', sans-serif;
//   --font-mono: 'JetBrains Mono', monospace;

//   --color-bg: #080b0f;
//   --color-surface: #0f1318;
//   --color-surface-2: #161c24;
//   --color-border: rgba(0, 229, 176, 0.12);
//   --color-accent: #00e5b0;
//   --color-accent-dim: rgba(0, 229, 176, 0.15);
//   --color-accent-glow: rgba(0, 229, 176, 0.35);
//   --color-text: #e8edf2;
//   --color-muted: #5a6a7a;
//   --color-muted-2: #8899aa;
// }

// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// html {
//   scroll-behavior: auto; /* Lenis handles this */
// }

// body {
//   background-color: var(--color-bg);
//   color: var(--color-text);
//   font-family: var(--font-body);
//   font-size: 16px;
//   line-height: 1.7;
//   overflow-x: hidden;
// }

// ::selection {
//   background: var(--color-accent);
//   color: var(--color-bg);
// }

// /* Custom scrollbar */
// ::-webkit-scrollbar {
//   width: 4px;
// }
// ::-webkit-scrollbar-track {
//   background: var(--color-bg);
// }
// ::-webkit-scrollbar-thumb {
//   background: var(--color-accent);
//   border-radius: 2px;
// }

// /* Lenis smooth scroll */
// html.lenis {
//   height: auto;
// }
// .lenis.lenis-smooth {
//   scroll-behavior: auto;
// }
// .lenis.lenis-smooth [data-lenis-prevent] {
//   overscroll-behavior: contain;
// }
// .lenis.lenis-stopped {
//   overflow: hidden;
// }
// .lenis.lenis-scrolling iframe {
//   pointer-events: none;
// }

// /* Utility classes */
// .font-display { font-family: var(--font-display); }
// .font-body { font-family: var(--font-body); }
// .font-mono { font-family: var(--font-mono); }

// .text-accent { color: var(--color-accent); }
// .bg-accent { background-color: var(--color-accent); }
// .border-accent { border-color: var(--color-accent); }

// .section-padding {
//   padding: 7rem 0;
// }

// .container-custom {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1.5rem;
// }

// /* Noise texture overlay */
// .noise::before {
//   content: '';
//   position: fixed;
//   inset: 0;
//   background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
//   pointer-events: none;
//   z-index: 9999;
//   opacity: 0.4;
// }

// /* Grid background */
// .grid-bg {
//   background-image:
//     linear-gradient(rgba(0, 229, 176, 0.03) 1px, transparent 1px),
//     linear-gradient(90deg, rgba(0, 229, 176, 0.03) 1px, transparent 1px);
//   background-size: 60px 60px;
// }

// /* Glow effects */
// .glow-accent {
//   box-shadow: 0 0 30px var(--color-accent-glow), 0 0 60px rgba(0, 229, 176, 0.15);
// }
// .text-glow {
//   text-shadow: 0 0 20px var(--color-accent-glow);
// }

// /* Animated gradient border */
// @keyframes borderGlow {
//   0%, 100% { border-color: rgba(0, 229, 176, 0.3); }
//   50% { border-color: rgba(0, 229, 176, 0.8); }
// }

// .border-animated {
//   animation: borderGlow 3s ease-in-out infinite;
// }

// /* Skill bar animation */
// @keyframes fillBar {
//   from { width: 0%; }
//   to { width: var(--fill-width); }
// }

// /* Tag pill */
// .tag-pill {
//   display: inline-flex;
//   align-items: center;
//   gap: 0.25rem;
//   padding: 0.25rem 0.75rem;
//   background: var(--color-accent-dim);
//   border: 1px solid var(--color-border);
//   border-radius: 999px;
//   font-size: 0.75rem;
//   font-family: var(--font-mono);
//   color: var(--color-accent);
//   letter-spacing: 0.05em;
// }

// /* Section label */
// .section-label {
//   font-family: var(--font-mono);
//   font-size: 0.7rem;
//   letter-spacing: 0.2em;
//   text-transform: uppercase;
//   color: var(--color-accent);
// }

// /* Card base */
// .card-base {
//   background: var(--color-surface);
//   border: 1px solid var(--color-border);
//   border-radius: 1rem;
//   transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
// }
// .card-base:hover {
//   border-color: rgba(0, 229, 176, 0.4);
//   box-shadow: 0 8px 40px rgba(0, 229, 176, 0.08);
// }

// /* Button primary */
// .btn-primary {
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.75rem 1.75rem;
//   background: var(--color-accent);
//   color: var(--color-bg);
//   font-family: var(--font-display);
//   font-weight: 600;
//   font-size: 0.9rem;
//   border-radius: 0.5rem;
//   border: none;
//   cursor: pointer;
//   transition: all 0.25s ease;
//   text-decoration: none;
//   letter-spacing: 0.02em;
// }
// .btn-primary:hover {
//   background: #00ffca;
//   transform: translateY(-2px);
//   box-shadow: 0 8px 25px var(--color-accent-glow);
// }

// /* Button outline */
// .btn-outline {
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.75rem 1.75rem;
//   background: transparent;
//   color: var(--color-accent);
//   font-family: var(--font-display);
//   font-weight: 600;
//   font-size: 0.9rem;
//   border-radius: 0.5rem;
//   border: 1px solid var(--color-accent);
//   cursor: pointer;
//   transition: all 0.25s ease;
//   text-decoration: none;
//   letter-spacing: 0.02em;
// }
// .btn-outline:hover {
//   background: var(--color-accent-dim);
//   transform: translateY(-2px);
// }

// /* Mobile menu */
// .mobile-menu-enter {
//   animation: slideDown 0.3s ease forwards;
// }
// @keyframes slideDown {
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// }

// /* Typewriter cursor */
// .typewriter-cursor {
//   display: inline-block;
//   width: 3px;
//   height: 1.1em;
//   background: var(--color-accent);
//   margin-left: 2px;
//   vertical-align: middle;
//   animation: blink 1s step-end infinite;
// }
// @keyframes blink {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0; }
// }

// /* Image placeholder for profile */
// .profile-ring {
//   position: relative;
// }
// .profile-ring::before {
//   content: '';
//   position: absolute;
//   inset: -4px;
//   border-radius: 50%;
//   background: conic-gradient(var(--color-accent), transparent, var(--color-accent));
//   animation: spin 4s linear infinite;
//   z-index: -1;
// }
// @keyframes spin {
//   to { transform: rotate(360deg); }
// }

// /* Project card image overlay */
// .project-overlay {
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(to top, var(--color-surface) 0%, transparent 60%);
//   opacity: 0;
//   transition: opacity 0.3s ease;
// }
// .project-card:hover .project-overlay {
//   opacity: 1;
// }

// /* Timeline dot */
// .timeline-dot {
//   width: 12px;
//   height: 12px;
//   background: var(--color-accent);
//   border-radius: 50%;
//   box-shadow: 0 0 0 4px var(--color-accent-dim);
//   flex-shrink: 0;
// }

// /* Focus styles */
// :focus-visible {
//   outline: 2px solid var(--color-accent);
//   outline-offset: 3px;
//   border-radius: 4px;
// }

// /* Responsive images */
// img {
//   max-width: 100%;
//   height: auto;
// }
