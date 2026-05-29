import missing from "@/src/assets/missing.png";
import { SiFramework, SiPython, SiJavascript, SiTypescript, SiDotnet, SiCplusplus, SiMysql, SiHtml5, SiCss3, SiMongoose, SiPassport, SiNextdotjs, SiReact, SiRedux, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiPostman, SiVercel, SiRender, SiNetlify, SiPytest, SiTestinglibrary, SiJunit5, SiJest } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaLaptopCode } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { LuFlaskConical, LuWrench } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";

export const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
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
    }
];

export const projects = [
    {
        name: "PokéGuesser", href: "/projects/pokeguesser", description: "A", stack: ["MongoDB", "Express", "React", "Node.js", "Zustand", "Passport.js", "JWT"], src: missing
    },
    {
        name: "MangaDB", href: "/projects/mangadb", description: "A", stack: ["MongoDB", "Express", "React", "Node.js"], src: missing
    },
    {
        name: "AniGuesser", href: "/projects/aniguesser", description: "A", stack: ["MongoDB", "Express", "React", "Node.js"], src: missing
    },
    {
        name: "Wordle Clone", href: "/projects/wordle-clone", description: "An", stack: ["MongoDB", "Express", "React", "Node.js"], src: missing
    },
    {
        name: "WebChat", href: "/projects/webchat", description: "A", stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"], src: missing
    },
    {
        name: "ChatForge", href: "/projects/chatforge", description: "An", stack: ["Python", "Tkinter", "Socket Programming"], src: missing
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
