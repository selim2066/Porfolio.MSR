// ============================================================
// PORTFOLIO DATA — Edit everything here with your real info
// ============================================================

export const personalInfo = {
  name: "Md. Selim Reza",
  firstName: "Md Selim",
  Nickname: "Selim",
  lastName: "Reza",
  designation: "Full Stack Developer",
  tagline: "I craft fast, elegant, and scalable web experiences.",
  bio: "Dhaka, Bangladesh",
  email: "mdselimreza2066@email.com",
  phone: "+880 1580-912090",
  whatsapp: "+880 1580-912090",
  location: "Dhaka, Bangladesh",
  resumeUrl: "/resume.pdf", // Place your resume PDF in /public folder
  profileImage: "/me-prof.jpeg", // Place your photo in /public folder
  availableForWork: true,
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/selim2000",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mdselimreza2000/",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/mdselimreza2000",
    icon: "facebook",
  },
];

export const aboutMe = {
  intro: `I'm a passionate Full Stack Developer from Dhaka, Bangladesh, with a deep love for turning ideas into seamless digital experiences. My journey into programming started when I was curious about how websites worked — I opened DevTools for the first time and never looked back.`,

  journey: `Since then, I've worked with modern JavaScript frameworks, built RESTful APIs, and designed databases that power real-world applications. I enjoy the full spectrum of web development — from pixel-perfect UIs to optimized backend logic.`,

  workStyle: `I thrive on clean code, thoughtful architecture, and collaborative problem-solving. Whether it's building a complex dashboard or an elegant landing page, I bring the same level of care and attention to every project.`,

  hobbies: `Outside of coding, you'll find me playing football   on weekends, exploring street food around Dhaka, or deep-diving into tech YouTube at 2am. I also enjoy reading about software architecture and the occasional sci-fi novel.`,

  stats: [
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies Known", value: "15+" },
    { label: "Years of Coding", value: "3+" },
    { label: "Cups of Coffee", value: "∞" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "Tailwind", level: 92 },
      { name: "Framer Motion", level: 75 },
      { name: "GSAP", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 88 },
      { name: "Go", level: 60 },
      { name: "REST API", level: 90 },
      { name: "JWT", level: 75 },
      { name: "BetterAuth", level: 70 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: 75 },
      { name: "Prisma", level: 70 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Vercel", level: 85 },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    duration: "2021 – 2025",
    description:
      "Studied core computer science fundamentals including data structures, algorithms, databases, computer networks, and introductory concepts in Machine Learning and Artificial Intelligence.",
    status: "Completed",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Govt Shah Sultan College, Bogura",
    duration: "2017 – 2020",
    description:
      "Completed higher secondary education with a focus on science, building a strong foundation in mathematics and analytical thinking that led to an interest in programming.",
    status: "Completed",
  },
];

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer Intern (React.js)",
    company: "Battery Low Interactive",
    duration: "June 2025 – August 2025",
    description:
      "Worked as a frontend developer intern focusing on building responsive and user-friendly interfaces. Contributed to real-world projects using modern React ecosystem tools, improved UI performance, and collaborated with the team to deliver clean and maintainable code.",
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
];

export const projects = [
  {
    id: "medistore-platform",
    title: "MediStore — OTC Medicine E-Commerce",
    subtitle: "Full-Stack Medicine Ordering System",
    shortDescription:
      "A full-stack e-commerce platform for OTC medicines with authentication, role-based access, product management, and secure backend APIs.",
    image: "/projects/medistore-hero.png",
    placeholder: "#1a2535",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "BetterAuth",
      "Shadcn UI",
    ],
    liveUrl: "https://medi-store-msr-frontend.vercel.app/",
    githubUrl: "https://github.com/selim2066/MediStore-MSR-Frontend",
    description: `MediStore is a full-stack OTC medicine e-commerce platform built with Next.js (App Router) on the frontend and Express.js with TypeScript on the backend. It supports secure user authentication, role-based access (Admin, Seller, Customer), product management, and order workflows. The backend is powered by PostgreSQL and Prisma, enabling efficient relational data handling and scalable API design.`,
    challenges: [
      "Designing a role-based authentication system (Admin, Seller, Customer) with secure token management.",
      "Structuring a scalable PostgreSQL schema with Prisma for users, products, orders, and relationships.",
      "Handling protected routes and secure API communication between Next.js frontend and Express backend.",
      "Managing state and data fetching efficiently in Next.js App Router environment.",
      "Implemented secure cross-domain authentication between Next.js and Express in production, resolving cookie transmission issues caused by SameSite and HTTPS constraints by correctly configuring CORS, secure cookies, and credential-based requests.",
      "Integrate online payment gateway (e.g. SSLCommerz).",
    ],
    improvements: [
      "Add advanced search, filtering, and pagination for products.",
      "Implement Redis caching for performance optimization.",
      "Introduce Docker-based deployment for consistent environments.",
    ],
    featured: true,
  },
 
  {
    id: "vroom",
    title: "Vroom — Premium Vehicle Rental Platform",
    subtitle: "Full-Stack Vehicle Rental Management System",
    shortDescription:
      "A production-ready full-stack vehicle rental platform with JWT authentication, real-time booking, admin analytics dashboard, and a RESTful API backed by PostgreSQL.",
    image: "/projects/vroom.png",
    placeholder: "#1f2937",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
      "Recharts",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Sonner",
      "Lenis",
    ],
    liveUrl: "https://vehicle-rental-management-frontend.vercel.app/",
    githubUrl:
      "https://github.com/selim2066/Vehicle_Rental_Management-Frontend",
    description: `
Vroom is a production-ready, full-stack vehicle rental management platform with separate customer and admin experiences. Customers can browse the full fleet with multi-filter search (type, fuel, transmission, price range), book vehicles with automatic price calculation, submit verified reviews tied to completed bookings, manage their booking history, and update their profile.

On the backend, a RESTful Express + TypeScript API handles all business logic through a clean Route → Controller → Service architecture. Booking creation is wrapped in a Prisma transaction to prevent race conditions and double-bookings. An auto-return scheduler runs on startup and every hour to mark expired rentals as returned and free vehicle availability automatically.

Admins get a full dashboard with live KPI stats (revenue, active bookings, fleet availability), Recharts-powered charts for monthly revenue trends, booking status breakdown, and vehicle type distribution, plus full fleet management, booking status control, and user management with soft-delete.

Auth uses short-lived JWT access tokens (15 min) with rotating refresh tokens (7 days) stored and invalidated in PostgreSQL — a secure, stateful token strategy suited for production use.
  `,
    challenges: [
      "Preventing double-booking race conditions by wrapping booking creation in a Prisma atomic transaction that checks availability and locks the vehicle in a single DB operation.",
      "Implementing a rotating refresh token strategy where each use invalidates the old token and issues a new one — requiring careful coordination between the auth service and token storage.",
      "Building an auto-return scheduler that runs on server startup and hourly to mark expired bookings as returned and reset vehicle availability without manual admin intervention.",
      "Designing a modular Next.js frontend service layer that maps cleanly to each backend domain (auth, vehicles, bookings, reviews, users) while remaining SSR-compatible with the App Router.",
      "Integrating Framer Motion, GSAP, and Lenis smooth scroll simultaneously without animation conflicts, while keeping the dashboard fully functional and performant.",
      "Enforcing role-based access control across both layers — admin vs. customer guards on protected API routes and matching route protection on the frontend dashboard.",
    ],
    improvements: [
      "Add WebSocket or SSE support for real-time booking notifications to both customers and admins.",
      "Introduce Cloudinary or S3 image upload so admins can upload vehicle photos directly from the dashboard instead of pasting URLs.",
      "Add a map view for vehicle pickup and drop-off location selection using Mapbox or Google Maps.",
      "Write unit and integration tests for critical service logic (booking creation, auth flow) using Vitest and Supertest.",
      "Add email notifications for booking confirmations, cancellations, and rental reminders via Nodemailer or Resend.",
      "Extend admin analytics with date-range filtering and exportable CSV reports.",
    ],
    featured: false,
  },
   {
    id: "gadget-king",
    title: "Gadget King",
    subtitle: "React E-commerce Web Application",
    shortDescription:
      "A modern e-commerce frontend with cart, wishlist, product sorting, and analytics features.",

    image: "/projects/banner gadgetking.jpg",
    placeholder: "#1a1a2e",

    tech: ["React", "Tailwind CSS", "DaisyUI", "React Router", "Context API"],

    liveUrl: "https://gadget-king.netlify.app/",
    githubUrl: "https://github.com/selim2066/gadget-king",

    description: `
Gadget King is a responsive e-commerce web application built using React. 
It allows users to browse products, sort them by price, and manage cart and wishlist efficiently. 

The application includes product statistics tracking, showing how frequently items are added to the cart. 
It focuses on clean UI/UX using Tailwind CSS and DaisyUI, along with smooth routing using React Router.
  `,

    challenges: [
      "Managing global state for cart and wishlist using Context API without external libraries.",
      "Implementing dynamic price sorting (ascending/descending) efficiently.",
      "Tracking and visualizing product statistics based on user interactions.",
      "Ensuring consistent UI updates across multiple pages using shared state.",
    ],

    improvements: [
      "Add backend integration (Node.js + Express + PostgreSQL) for persistent data.",
      "Implement authentication system (JWT / BetterAuth).",
      "Add product search and advanced filtering (category, rating, price range).",
      "Integrate payment gateway for real checkout functionality.",
      "Optimize performance and add loading skeletons.",
    ],

    featured: true,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// EmailJS Config — fill these in from emailjs.com
export const emailjsConfig = {
  serviceId: "service_vi2lvke",
  templateId: "template_zf87jai",
  publicKey: "KfZkt23nPM0NlrEKb",
};
