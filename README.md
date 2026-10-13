# Harsh Pithva — Personal Developer Portfolio

A modern, production-grade personal developer portfolio built for **Harsh Pithva**, Master of Computer Applications (MCA) student at RV College of Engineering (RVCE), Bengaluru, and creator of **PostPro**.

Designed with a high-end dark aesthetic inspired by modern developer products and SaaS landing pages.

---

## 🚀 Key Highlights & Architecture

- **Single Source of Truth (`src/data/profile.ts`)**: All personal details, bio paragraphs, social handles, projects, skill matrices, education, experience, and certifications are managed in one clean TypeScript file.
- **Flagship Project Showcase (PostPro)**:
  - Deep-dive architectural breakdown of PostPro (PHP, MySQL, HTML, CSS, JavaScript).
  - Explicit transparency noting the AI-simulated recommendation system.
  - **Interactive Live Simulation Studio**: Directly test mood selections (*Energetic, Travel, Chill, Deep, Celebration*) and observe instant caption generation, hashtag retrieval, and soundtrack recommendations with one-click copy feedback.
- **Authentic & Verifiable**:
  - No fabricated statistics, false years of experience, or inflated percentages (e.g. "95% Java").
  - Clear distinction between verified hands-on development (C, PHP, MySQL, Android internship) and foundational/ongoing learning (Java fundamentals, DSA).
  - Unconfigured placeholders (like `[YOUR_EMAIL]`, `[YOUR_LINKEDIN_URL]`) are automatically masked or hidden from the public view.
- **Accessibility & Motion**:
  - Fully accessible ARIA semantics, visible focus rings, and high contrast.
  - Automatic `prefers-reduced-motion` compliance.
  - Smooth scrolling with active section indicator in sticky navigation.
- **Theme & Responsiveness**:
  - Deep midnight navy (`#070a12`, `#0b1120`) palette with electric blue, indigo, and cyan accents.
  - Interactive Dark/Light mode toggle.
  - Fully responsive across mobile, tablet, and desktop viewports with zero horizontal overflow.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
MyPortfolio/
├── index.html                 # SEO metadata, Open Graph, fonts & root mount
├── package.json               # Dependencies and build scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom colors, keyframes, and utilities
├── tsconfig.json              # TypeScript compilation settings
├── vite.config.ts             # Vite configuration
├── public/
│   ├── favicon.svg            # Custom HP geometric monogram
│   ├── resume.pdf             # Downloadable resume document
│   └── robots.txt             # Search crawler directives
└── src/
    ├── App.tsx                # Main application coordinator
    ├── main.tsx               # DOM root renderer
    ├── index.css              # Global styles, scrollbar, reduced motion
    ├── types/
    │   └── index.ts           # Strongly-typed schema definitions
    ├── data/
    │   └── profile.ts         # ⭐ SINGLE SOURCE OF TRUTH (Edit this file!)
    └── components/
        ├── Navbar.tsx         # Sticky navigation with mobile menu & theme toggle
        ├── Hero.tsx           # Intro hero with interactive developer code visual
        ├── About.tsx          # 2-column biography, profile card & core values
        ├── Skills.tsx         # Grouped technical toolkit with proficiency badges
        ├── FeaturedProject.tsx# PostPro flagship card & live simulator studio
        ├── ProjectDetailsModal.tsx # Full architecture & problem/solution modal
        ├── FutureProjects.tsx # Pipeline for upcoming projects
        ├── Experience.tsx     # Android Developer Internship timeline
        ├── Education.tsx      # RVCE (MCA) & Bhavan's Shree H.J. Doshi (BCA)
        ├── Certifications.tsx # CCC and Tally credential cards
        ├── Strengths.tsx      # Professional traits & team attributes
        ├── LearningJourney.tsx# "Currently Exploring" learning trajectory
        ├── Contact.tsx        # Client-validated contact form & direct reach
        ├── ResumeModal.tsx    # Resume preview and download handler
        └── Footer.tsx         # HP monogram, copyright & back-to-top control
```

---

## 💻 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to see the live portfolio with hot module reloading.

### 4. Create Production Build
```bash
npm run build
```
This runs TypeScript checking and compiles an optimized, minified production build into the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Personalize & Update Your Portfolio

All personal details are located in one single file: **`src/data/profile.ts`**.

### 1. Updating Social & Contact Links
Open `src/data/profile.ts` and replace the placeholders:
```typescript
socialLinks: {
  email: "your.real.email@gmail.com",       // Replace [YOUR_EMAIL]
  github: "https://github.com/yourusername", // Replace [YOUR_GITHUB_URL]
  linkedin: "https://linkedin.com/in/yourid",// Replace [YOUR_LINKEDIN_URL]
  phone: "+91 98765 43210"                   // Optional: Replace [YOUR_PHONE_NUMBER]
}
```
*Note: Any field left as `[YOUR_...]` or blank is automatically hidden on the live website.*

### 2. Updating Resume File
1. Place your official resume PDF into the `public/` folder with the filename `resume.pdf` (e.g. `public/resume.pdf`).
2. If your file has a different name, update `resumePath` and `resumeFileName` in `src/data/profile.ts`:
```typescript
resumeFileName: "Harsh_Pithva_Resume.pdf",
resumePath: "/resume.pdf"
```

### 3. Adding Live Project URLs (PostPro)
When you deploy PostPro or publish its GitHub repository, update:
```typescript
liveDemoUrl: "https://postpro.example.com", // Or leave empty for "Link coming soon"
sourceCodeUrl: "https://github.com/yourusername/postpro"
```

### 4. Adding New Projects
To add more projects as you complete them during your MCA:
1. Open `src/data/profile.ts`.
2. Add a new project object to `projectsData`:
```typescript
{
  id: "new-project",
  title: "Project Title",
  subtitle: "Short tagline",
  shortDescription: "Overview of the project...",
  fullDescription: "Detailed breakdown...",
  techStack: ["Java", "Spring Boot", "MySQL"],
  features: ["Feature 1", "Feature 2"],
  problemStatement: "Problem solved...",
  proposedSolution: "Solution created...",
  keyLearningOutcomes: ["What you learned..."],
  isFeatured: false,
  status: "Completed"
}
```

---

## 🚢 Deployment Options

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set Build Command to `npm run build` and Output Directory to `dist`.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

### Deploy to GitHub Pages
You can configure the `vite.config.ts` base path and use the `gh-pages` package to host directly from GitHub.

---

## 📄 License
Created for Harsh Pithva. All rights reserved.
