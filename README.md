# Varun K. — Developer Portfolio

A production-ready, animated developer portfolio website built with **React 19**, **Vite**, **Framer Motion**, and **Remix Icons** using scoped **CSS Modules**.

---

## 🎨 Design System

* **Primary:** `#11120D` (Obsidian / Deep Charcoal)
* **Secondary:** `#565449` (Warm Olive Slate)
* **Accent:** `#D8CFBC` (Soft Warm Champagne)
* **Background:** `#FFFBF4` (Warm Parchment Silk)
* **Typography:** `Inter` & `JetBrains Mono` via Google Fonts

---

## 🏗️ Project Architecture

```bash
/src
  /components
    Navbar.jsx          # Sticky glass navbar with scroll progress & active section spy
    Navbar.module.css
    Footer.jsx          # Brand signature, navigation links & back-to-top button
    Footer.module.css
    ProjectCard.jsx     # Reusable animated project card with hover zoom & live links
    ProjectCard.module.css

  /sections
    /Home
      Home.jsx          # Hero section with 3D floating code card & quick metrics
      Home.module.css
    /About
      About.jsx         # Biography, 4 engineering philosophies & categorized skill matrix
      About.module.css
    /Projects
      Projects.jsx      # Filterable showcase with pop-layout animations & SVG mockups
      Projects.module.css
    /Experience
      Experience.jsx    # Interactive vertical timeline with career milestones & badges
      Experience.module.css
    /Contact
      Contact.jsx       # 1-click email copy, social channels & interactive contact form
      Contact.module.css

  /animations
    animations.js       # Centralized Framer Motion variants (fadeInUp, staggerContainer, etc.)

  /data
    projectsData.js     # Featured projects showcase data and vector mockup previews

  /styles
    variables.css       # Design tokens & color variables
    global.css          # CSS reset, typography, and utility classes
```

---

## ⚡ Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build Locally
```bash
npm run preview
```

### 5. Lint Codebase
```bash
npm run lint
```
