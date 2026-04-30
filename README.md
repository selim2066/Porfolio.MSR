# Personal Portfolio — Next.js

A modern, animated personal portfolio built with **Next.js 14**, **Framer Motion**, **GSAP**, **Lenis**, and **EmailJS**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animations**: Framer Motion + GSAP
- **Smooth Scroll**: Lenis
- **Styling**: Tailwind CSS + CSS Variables
- **Contact Form**: EmailJS (no backend needed)
- **Font**: Syne (display) + DM Sans (body)
- **Theme**: Dark + Teal accent (`#00e5b0`)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Personalize your data

Open `lib/data.ts` and update:

- `personalInfo` — your name, email, phone, WhatsApp, location, etc.
- `socialLinks` — your GitHub, LinkedIn, Twitter, Facebook URLs
- `aboutMe` — your story, journey, hobbies
- `skills` — your tech skills and proficiency levels
- `education` — your academic background
- `experience` — your work experience (optional)
- `projects` — your projects with descriptions, links, challenges

### 3. Add your assets

Place the following files in the `/public` folder:

- `profile.jpg` — Your profile photo (recommended: 400x400px, square)
- `resume.pdf` — Your resume/CV
- `projects/ecommerce.jpg` — Project screenshot
- `projects/taskflow.jpg` — Project screenshot
- `projects/devblog.jpg` — Project screenshot

### 4. Set up EmailJS

1. Go to [emailjs.com](https://www.emailjs.com) and create a free account
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Update `emailjsConfig` in `lib/data.ts`:

```ts
export const emailjsConfig = {
  serviceId: "service_xxxxxxx",
  templateId: "template_xxxxxxx",
  publicKey: "xxxxxxxxxxxxxxxx",
};
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Build for production

```bash
npm run build
npm start
```

---

## Deployment

### Deploy to Vercel (recommended — free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Click Deploy ✓

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (Lenis setup)
│   ├── page.tsx            # Home page
│   └── projects/
│       └── [id]/
│           └── page.tsx    # Project detail page
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx      # Responsive navbar
│   │   └── Footer.tsx      # Footer
│   └── sections/
│       ├── HeroSection.tsx       # Hero + typewriter + profile
│       ├── AboutSection.tsx      # About me + stats
│       ├── SkillsSection.tsx     # Skills with progress bars
│       ├── EducationSection.tsx  # Education timeline
│       ├── ExperienceSection.tsx # Work experience
│       ├── ProjectsSection.tsx   # Project cards
│       └── ContactSection.tsx    # Contact form + info
├── lib/
│   └── data.ts             # ← All your personal data goes here
├── styles/
│   └── globals.css         # Global styles + design tokens
├── public/
│   ├── profile.jpg         # Your photo (add this)
│   ├── resume.pdf          # Your resume (add this)
│   └── projects/           # Project screenshots (add these)
└── README.md
```

---

## Customization

### Change accent color

In `styles/globals.css`, update:

```css
--color-accent: #00e5b0; /* Change this to your preferred color */
```

### Add more projects

In `lib/data.ts`, add to the `projects` array following the same structure.

### Add experience

Uncomment and fill in the `experience` array in `lib/data.ts`. The section will automatically appear.
# Portfolio-MSR
# Porfolio.MSR
