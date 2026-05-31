import missing from "@/src/assets/missing.png";
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
    github?: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        slug: "family-buddies",
        name: "Family Buddies",
        description: "A custom website for a New York elderly-care coordination service — case management, home visits, wellness check-ins, and help navigating benefit programs like MLTC and NHTD.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google APIs"],
        src: missing,
        demo: "https://www.familybuddies.net/"
    },
    {
        slug: "ai-humanizer",
        name: "AI Humanizer App",
        description: "An AI-text humanizer built during my internship — a multi-stage, prompt-engineered LLM pipeline that rewrites AI-assisted drafts to read naturally and evade detectors, with authentication and usage-based billing.",
        stack: ["Next.js", "TypeScript", "Express", "MongoDB", "Clerk", "Tailwind CSS"],
        src: missing,
        demo: "https://text-humanizer-client.vercel.app/"
    },
    {
        slug: "angular-chat",
        name: "Angular Chat",
        description: "",
        stack: ["Angular", "TypeScript"],
        src: missing
    },
    {
        slug: "pokeguesser",
        name: "PokéGuesser",
        description: "A full-stack MERN game that challenges users to identify Pokémon from visual clues and stats, featuring secure authentication, optimistic UI updates, and a responsive design.",
        stack: ["MongoDB", "Express", "React", "Node.js", "Zustand", "Passport.js", "JWT"],
        src: missing,
        github: "https://github.com/JasonLouie/PokeGuesser",
        demo: "https://pokeguesser-frontend.onrender.com/"
    },
    {
        slug: "mangadb",
        name: "MangaDB",
        description: "A React app for browsing manga, manhwa, manhua, and light novels — search, detail pages, client-side accounts, favorites, and interactive carousels powered by the Jikan API.",
        stack: ["React", "Vite", "JavaScript", "Jikan API"],
        src: missing,
        github: "https://github.com/JasonLouie/MangaDB",
        demo: "https://manga-db-site.netlify.app/"
    },
    {
        slug: "aniguesser",
        name: "AniGuesser",
        description: "An interactive web app where users guess anime characters from their photos — character data from the Jikan API, progress persisted via localStorage, built with class-based vanilla JS modules.",
        stack: ["JavaScript", "HTML", "CSS", "Axios", "Jikan API"],
        src: missing,
        github: "https://github.com/JasonLouie/AniGuesser"
    },
    {
        slug: "wordle-clone",
        name: "Wordle Clone",
        description: "A web-based recreation of Wordle with an on-screen keyboard, local game-state persistence, and result tracking with elapsed-time stats.",
        stack: ["JavaScript", "HTML", "CSS"],
        src: missing,
        github: "https://github.com/JasonLouie/Wordle-Clone"
    },
    {
        slug: "chatforge",
        name: "ChatForge",
        description: "A Python desktop chat application for real-time text, voice, and video over TCP/UDP sockets with multithreading — an early solo project built before AI coding tools.",
        stack: ["Python", "Tkinter", "Socket Programming"],
        src: missing,
        github: "https://github.com/JasonLouie/ChatForge"
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
