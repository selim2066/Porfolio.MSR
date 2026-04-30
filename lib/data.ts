// ============================================================
// PORTFOLIO DATA — Edit everything here with your real info
// ============================================================

export const personalInfo = {
  name: "Md. Selim Reza",
  firstName: "Md Selim",
  lastName: "Reza",
  designation: "Full Stack Developer",
  tagline: "I craft fast, elegant, and scalable web experiences.",
  bio: "Dhaka, Bangladesh",
  email: "mdselimreza2066@email.com",
  phone: "+880 1580-912090",
  whatsapp: "+880 1580-912090",
  location: "Dhaka, Bangladesh",
  resumeUrl: "/resume.pdf", // Place your resume PDF in /public folder
  profileImage: "/profile.jpg", // Place your photo in /public folder
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
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 75 },
      { name: "GSAP", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "REST API", level: 90 },
      { name: "Prisma ORM", level: 80 },
      { name: "PostgreSQL", level: 75 }
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    duration: "2021 – 2025",
    description:
      "Studying core CS fundamentals including data structures, algorithms, databases, computer networks, Machine Learning and AI. ",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt Shah Sultan College, Bogura",
    duration: "2017 – 2020",
    description:
      "Completed HSC in Science group. Developed early interest in mathematics and programming during this period.",
    current: false,
  },
];

export const experience = [
  // Uncomment and edit when you have experience
  // {
  //   role: "Junior Frontend Developer",
  //   company: "Company Name",
  //   duration: "Jan 2024 – Present",
  //   description: "Building and maintaining React-based web applications...",
  //   tech: ["React", "TypeScript", "Tailwind"],
  // },
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
      "Integrate online payment gateway (e.g. SSLCommerz)."
    ],
    improvements: [
      
      "Add advanced search, filtering, and pagination for products.",
      "Implement Redis caching for performance optimization.",
      "Introduce Docker-based deployment for consistent environments.",
    ],
    featured: true,
  },
  {
    id: "task-manager",
    title: "TaskFlow — Project Manager",
    subtitle: "Collaborative Task Management App",
    shortDescription:
      "A Trello-inspired drag-and-drop task management application with real-time collaboration features.",
    image: "/projects/taskflow.jpg",
    placeholder: "#1a1a2e",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "BetterAuth"],
    liveUrl: "https://your-taskflow-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/taskflow",
    description: `TaskFlow is a real-time project management tool inspired by Trello. Users can create boards, add lists, and manage tasks with drag-and-drop. Socket.io enables real-time updates — when one team member moves a card, everyone sees it instantly. Authentication is handled with BetterAuth and bcrypt.`,
    challenges: [
      "Synchronizing drag-and-drop state across multiple connected clients using Socket.io rooms.",
      "Handling optimistic UI updates that revert gracefully on server errors.",
      "Designing an efficient MongoDB schema for nested board > list > card relationships.",
    ],
    improvements: [
      "Add time tracking and burndown charts for sprint planning.",
      "Integrate GitHub to automatically create cards from GitHub Issues.",
      "Implement offline support with service workers and sync on reconnect.",
    ],
    featured: true,
  },
  {
    id: "blog-platform",
    title: "DevBlog — Writing Platform",
    subtitle: "MDX-Powered Developer Blog",
    shortDescription:
      "A clean, fast developer blog platform with MDX support, syntax highlighting, and a minimal CMS.",
    image: "/projects/devblog.jpg",
    placeholder: "#0f1a10",
    tech: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://your-devblog-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/devblog",
    description: `A developer-first blogging platform built with Next.js and MDX. It supports full Markdown with JSX components, syntax highlighting via Prism.js, and a tag-based categorization system. Blog posts are stored as .mdx files, while user data and comments are managed with Prisma and PostgreSQL.`,
    challenges: [
      "Setting up the MDX pipeline to support custom components like callouts and code blocks with copy buttons.",
      "Implementing an efficient full-text search without a dedicated search engine.",
      "Building a reading progress indicator that works smoothly without blocking the main thread.",
    ],
    improvements: [
      "Add a newsletter subscription feature with Resend or Mailchimp integration.",
      "Implement an AI-powered post summarizer using Claude API.",
      "Build a minimal admin CMS dashboard for managing posts without touching code.",
    ],
    featured: false,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// EmailJS Config — fill these in from emailjs.com
export const emailjsConfig = {
  serviceId: "service_vi2lvke",
  templateId: "template_zf87jai",
  publicKey: "KfZkt23nPM0NlrEKb",
};
