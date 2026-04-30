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
  id: "gadget-king",
  title: "Gadget King",
  subtitle: "React E-commerce Web Application",
  shortDescription:
    "A modern e-commerce frontend with cart, wishlist, product sorting, and analytics features.",

  image: "/projects/banner gadgetking.jpg",
  placeholder: "#1a1a2e",

  tech: [
    "React",
    "Tailwind CSS",
    "DaisyUI",
    "React Router",
    "Context API"
  ],

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
    "Ensuring consistent UI updates across multiple pages using shared state."
  ],

  improvements: [
    "Add backend integration (Node.js + Express + PostgreSQL) for persistent data.",
    "Implement authentication system (JWT / BetterAuth).",
    "Add product search and advanced filtering (category, rating, price range).",
    "Integrate payment gateway for real checkout functionality.",
    "Optimize performance and add loading skeletons."
  ],

  featured: true,
},
  {
  id: "pawstep",
  title: "PawStep — Pet Adoption Platform",
  subtitle: "Interactive Pet Adoption Web App",

  shortDescription:
    "A responsive web app for browsing and adopting pets with filtering, sorting, and interactive UI features.",

  image: "/projects/pawstep.png",
  placeholder: "#1f2937",

  tech: [
    "HTML",
    "CSS",
    "JavaScript (ES6+)",
    "Tailwind CSS"
  ],

  liveUrl: "https://pawstep.netlify.app/",
  githubUrl: "https://github.com/selim2066/pawstep",

  description: `
PawStep is a dynamic pet adoption web application that allows users to explore pets by category, sort them by price, and interact with each listing through likes, adoption actions, and detailed views.

The application features a smooth adoption flow with a countdown timer, enhancing user engagement. Users can also save their favorite pets using a like system, which displays selected pets in a sidebar grid.

Built with vanilla JavaScript and Tailwind CSS, the project focuses on responsive design, clean UI, and efficient DOM manipulation.
  `,

  challenges: [
    "Managing dynamic UI updates and state without using a frontend framework.",
    "Implementing real-time sorting and category filtering logic.",
    "Handling liked pets state and rendering them in a separate sidebar.",
    "Creating a smooth countdown-based adoption interaction using JavaScript."
  ],

  improvements: [
    "Convert the project into React for better state management.",
    "Add backend integration to persist pet data and user actions.",
    "Implement user authentication (login/signup).",
    "Add advanced filtering (age, breed, price range).",
    "Improve performance and add loading skeletons."
  ],

  featured: false,
}
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
