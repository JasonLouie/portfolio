import missing from "@/src/assets/missing.png";
import chatforge from "@/src/assets/chatforge.png";
import { StaticImageData } from "next/image";
import { SiFramework, SiClaude, SiAnthropic, SiGooglegemini, SiPython, SiJavascript, SiTypescript, SiDotnet, SiCplusplus, SiMysql, SiHtml5, SiCss3, SiMongoose, SiPassport, SiNextdotjs, SiReact, SiAngular, SiRedux, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiPostman, SiVercel, SiRender, SiNetlify, SiPytest, SiTestinglibrary, SiJunit5, SiJest } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaLaptopCode } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { LuFlaskConical, LuWrench, LuSparkles, LuBrainCircuit } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";

export const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/#contact" },
];

export const bio = "I am a software engineer with a strong foundation in React, Node.js, and algorithm optimization, currently advancing my expertise through a Master's degree at Georgia Tech.";

export const skills = [
    {
        name: "Languages",
        details: [
            { name: "Python", icon: SiPython, color: "text-blue-500" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
            { name: "C#", icon: TbBrandCSharp, color: "text-purple-500" },
            { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
            { name: "Java", icon: FaJava, color: "text-red-500" },
            { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: SiCss3, color: "text-blue-500" }
        ],
        logo: { icon: FaLaptopCode, color: "text-white" },
    },
    {
        name: "Frameworks & Libraries",
        details: [
            { name: "React", icon: SiReact, color: "text-cyan-500" },
            { name: "Redux", icon: SiRedux, color: "text-white" },
            { name: "Zustand", icon: GiBearFace, color: "text-orange-900" },
            { name: "Node.js", icon: SiNodedotjs, color: "text-lime-300" },
            { name: "Express.js", icon: SiExpress, color: "text-white" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "Angular", icon: SiAngular, color: "text-red-600" },
            { name: ".NET", icon: SiDotnet, color: "text-white" },
            { name: "Passport.js", icon: SiPassport, color: "text-green-400" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-300" },
            { name: "Mongoose", icon: SiMongoose, color: "text-orange-800" }
        ],
        logo: { icon: SiFramework, color: "text-white" }
    },
    {
        name: "Tools & Databases",
        details: [
            { name: "Git", icon: SiGit, color: "text-orange-600" },
            { name: "GitHub", icon: SiGithub, color: "text-white" },
            { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
            { name: "Postman", icon: SiPostman, color: "text-orange-500" },
            { name: "Vercel", icon: SiVercel, color: "text-white" },
            { name: "Render", icon: SiRender, color: "text-white"},
            { name: "Netlify", icon: SiNetlify, color: "text-teal-400"},
            { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
        ],
        logo: { icon: LuWrench, color: "text-white" }
    },
    {
        name: "Software Testing",
        details: [
            { name: "Jest", icon: SiJest, color: "text-red-600"},
            { name: "Pytest", icon: SiPytest, color: "text-blue-600" },
            { name: "React Testing Lib", icon: SiTestinglibrary, color: "text-red-500" },
            { name: "JUnit", icon: SiJunit5, color: "text-green-500" }
        ],
        logo: { icon: LuFlaskConical, color: "text-white" }
    },
    {
        name: "AI Tools",
        details: [
            { name: "Claude Code", icon: SiClaude, color: "text-orange-400" },
            { name: "Gemini", icon: SiGooglegemini, color: "text-blue-400" },
            { name: "Claude API", icon: SiAnthropic, color: "text-orange-500" },
            { name: "Prompt Engineering", icon: LuBrainCircuit, color: "text-purple-400" }
        ],
        logo: { icon: LuSparkles, color: "text-white" }
    }
];

export interface Project {
    slug: string;
    name: string;
    description: string;
    stack: string[];
    src: StaticImageData;
    fit?: "cover" | "contain"; // image object-fit on card/detail (default "cover")
    github?: string;
    demo?: string;
    // Detail-page (/projects/[slug]) content — optional; rendered only when present.
    overview?: string;
    features?: string[];
    highlights?: string[];
}

export const projects: Project[] = [
    {
        slug: "family-buddies",
        name: "Family Buddies",
        description: "A custom website for a New York elderly-care coordination service — case management, home visits, wellness check-ins, and help navigating benefit programs like MLTC and NHTD.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google APIs"],
        src: missing,
        demo: "https://www.familybuddies.net/",
        overview: "A freelance website for Family Buddies, a New York elderly-care coordination service. It presents the company's services, benefit-program guidance, and team, and converts visitors through a spam-protected contact pipeline — built solo and shipped to production.",
        features: [
            "Content-rich single-page site (services, programs, team, story, and more)",
            "Animated, accessible, mobile-first UI",
            "SEO-ready: metadata, sitemap, and robots configuration",
            "Contact form that validates input and persists submissions to Google Sheets",
            "Spam protection via Cloudflare Turnstile and a honeypot"
        ],
        highlights: [
            "Achieved a perfect 100 Lighthouse Performance and SEO score",
            "Server-side contact pipeline: a Next.js route handler appends submissions to Google Sheets via a service account",
            "Scroll-reveal animations with Framer Motion",
            "Data-driven content sourced from a typed content module"
        ]
    },
    {
        slug: "ai-humanizer",
        name: "AI Humanizer App",
        description: "An AI-text humanizer built during my internship — a multi-stage, prompt-engineered LLM pipeline that rewrites AI-assisted drafts to read naturally and evade detectors, with authentication and usage-based billing.",
        stack: ["Next.js", "TypeScript", "Express", "MongoDB", "Clerk", "Tailwind CSS"],
        src: missing,
        demo: "https://text-humanizer-client.vercel.app/",
        overview: "A SaaS AI-text humanizer built during my internship at GTechFin. It rewrites AI-generated drafts to read naturally and evade AI detectors through a multi-stage Anthropic Claude pipeline, wrapped in a full product with accounts, billing, and rate limiting.",
        features: [
            "Multi-stage rewriting pipeline (diagnose → rewrite → re-humanize borderline outputs)",
            "Detector-aware scoring (ZeroGPT) that drives iterative refinement",
            "User accounts and authentication via Clerk",
            "Usage-based billing with Stripe",
            "Per-user monthly rate limits and humanization history"
        ],
        highlights: [
            "100% of outputs scored human-leaning (under 50% AI on ZeroGPT) across a 66-case benchmark, ~85% under 30%",
            "Prompt-engineered Anthropic Claude stages paired with deterministic post-processing",
            "Anthropic prompt caching to cut LLM cost",
            "Next.js + Express on MongoDB, with atomic quota accounting and Playwright E2E tests"
        ]
    },
    {
        slug: "nexus-chat",
        name: "Nexus Chat",
        description: "A full-stack real-time chat app — an Angular client and an Express + Socket.io server with TypeORM/MySQL persistence, JWT/Passport authentication, and Cloudinary media uploads, organized as a type-safe monorepo with a shared package.",
        stack: ["Angular", "TypeScript", "Express", "Socket.io", "MySQL", "TypeORM"],
        src: missing,
        github: "https://github.com/JasonLouie/Nexus-Chat",
        overview: "A full-stack real-time chat application with an Angular client and an Express + Socket.io server, structured as a type-safe monorepo. It supports authenticated direct and group messaging with live presence, media sharing, and persistent history.",
        features: [
            "Real-time messaging over Socket.io with live online presence",
            "Direct messages and group chats",
            "JWT/Passport authentication with Angular route guards",
            "Image and media uploads via Cloudinary",
            "Persistent message history backed by TypeORM and MySQL"
        ],
        highlights: [
            "Type-safe monorepo (client / server / shared) sharing contracts across the Angular and Express boundary",
            "Authenticated Socket.io connections via socket-auth middleware, with strongly-typed socket events",
            "Server-side dependency-injection container and an extensive set of custom class-validator decorators",
            "TypeORM entities on MySQL with bcrypt-hashed credentials"
        ]
    },
    {
        slug: "pokeguesser",
        name: "PokéGuesser",
        description: "A full-stack MERN game that challenges users to identify Pokémon from visual clues and stats, featuring secure authentication, optimistic UI updates, and a responsive design.",
        stack: ["MongoDB", "Express", "React", "Node.js", "Zustand", "Passport.js", "JWT"],
        src: missing,
        github: "https://github.com/JasonLouie/PokeGuesser",
        demo: "https://pokeguesser-frontend.onrender.com/",
        overview: "A full-stack MERN game where players identify Pokémon from visual clues and stats. It pairs a responsive React client with a secured Node/Express API and persists progress across local and cloud storage.",
        features: [
            "Guess Pokémon from progressively-revealed clues and stats",
            "User accounts with secure authentication",
            "Progress synced across local storage and a cloud database",
            "Fast fuzzy search / autocomplete over the full dataset"
        ],
        highlights: [
            "Zustand middleware syncing complex game state across local storage and MongoDB",
            "Near-instant fuzzy search on a 1,000+ item dataset via memoized Fuse.js",
            "Secure sessions with Passport.js strategies and JWTs stored in cookies",
            "Separate frontend and backend services deployed on Render"
        ]
    },
    {
        slug: "mangadb",
        name: "MangaDB",
        description: "A React app for browsing manga, manhwa, manhua, and light novels — search, detail pages, client-side accounts, favorites, and interactive carousels powered by the Jikan API.",
        stack: ["React", "Vite", "JavaScript", "Jikan API"],
        src: missing,
        github: "https://github.com/JasonLouie/MangaDB",
        demo: "https://manga-db-site.netlify.app/",
        overview: "A React single-page app for discovering manga, manhwa, manhua, and light novels, powered by the Jikan API. It offers search, rich detail pages, and a client-side account system.",
        features: [
            "Search and browse titles across multiple formats",
            "Detailed information pages per title",
            "Interactive carousels",
            "Client-side accounts and favorites"
        ],
        highlights: [
            "Front-end-only authentication and favorites persisted in localStorage (no backend)",
            "State managed with React Context and useReducer",
            "Jikan API integration for live title data",
            "Built with Vite and deployed on Netlify"
        ]
    },
    {
        slug: "aniguesser",
        name: "AniGuesser",
        description: "An interactive web app where users guess anime characters from their photos — character data from the Jikan API, progress persisted via localStorage, built with class-based vanilla JS modules.",
        stack: ["JavaScript", "HTML", "CSS", "Axios", "Jikan API"],
        src: missing,
        github: "https://github.com/JasonLouie/AniGuesser",
        overview: "An interactive browser game where players guess anime characters from their photos, with character data pulled from the Jikan API and progress saved locally.",
        features: [
            "Photo-based character guessing",
            "Persistent progress and user data",
            "Settings and overlay controls",
            "Image slideshow"
        ],
        highlights: [
            "Class-based vanilla-JS architecture (Game, User, Overlay, Settings, Slideshow modules)",
            "Jikan API integration via axios",
            "localStorage persistence with no backend or framework"
        ]
    },
    {
        slug: "wordle-clone",
        name: "Wordle Clone",
        description: "A web-based recreation of Wordle with an on-screen keyboard, local game-state persistence, and result tracking with elapsed-time stats.",
        stack: ["JavaScript", "HTML", "CSS"],
        src: missing,
        github: "https://github.com/JasonLouie/Wordle-Clone",
        overview: "A browser recreation of Wordle, built entirely with vanilla JavaScript, HTML, and CSS — no framework or backend.",
        features: [
            "Interactive on-screen keyboard",
            "Game-state and result tracking with elapsed-time stats",
            "Client-side user accounts"
        ],
        highlights: [
            "Front-end-only implementation in vanilla JS/HTML/CSS",
            "User credentials and game results persisted in localStorage"
        ]
    },
    {
        slug: "chatforge",
        name: "ChatForge",
        description: "A Python desktop chat application for real-time text, voice, and video over TCP/UDP sockets with multithreading — an early solo project built before AI coding tools.",
        stack: ["Python", "Tkinter", "Socket Programming"],
        src: chatforge,
        github: "https://github.com/JasonLouie/ChatForge",
        overview: "A Python desktop chat application delivering real-time text, voice, and video over the network — one of my earliest solo projects, built before AI coding tools.",
        features: [
            "Real-time text, voice, and video channels",
            "Real-time network-quality monitoring"
        ],
        highlights: [
            "TCP/UDP sockets with multithreading for simultaneous transmission",
            "20–80ms latency over metropolitan-area networks",
            "47% reduction in key-function execution time via cProfile optimization"
        ]
    }
];

export const contacts = [
    {
        id: 0, tip: "LinkedIn", href: "https://www.linkedin.com/in/JasonLouie614",
    },
    {
        id: 1, tip: "GitHub", href: "https://github.com/JasonLouie",
    },
    {
        id: 2, tip: "Gmail", href: "mailto:jason.louie.614@gmail.com"
    }
];

// Resume data
export const summary = "Full-Stack Developer specializing in the MERN stack with expertise in building responsive, persistent web applications using React, Node.js, and MongoDB. Skilled in architecting state management systems with Zustand, implementing secure authentication flows (JWT/Passport.js), and designing RESTful APIs. Hands-on experience with Python, C#/.NET, and PHP, alongside a strong focus on database modeling and performance optimization. Seeking to contribute technical expertise and problem-solving skills to innovative full-stack development teams.";
