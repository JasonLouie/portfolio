<!--
Welcome to resume.lol!

This is the template you can use to get started.

Full credit for this template goes to Jake. Original template is in LaTeX here:

https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs

------

Easily remove personal info by using a variable follow with a second value and "||":

@NAME=Real Name||Hidden Name

and change @REDACTED to be true

@REDACTED=true
-->
@REDACTED=false
@NAME=Jason Louie
@EMAIL=jason.louie.614@gmail.com
@PHONE=(917) 847-2469
@LINKEDIN=JasonLouie614||linkedin.com/in/JasonLouie614
@GITHUB=JasonLouie||fake
@LOCATION= New York, NY
@CITIZEN=U.S Citizen

# {NAME}

<div class="section headerInfo">

- {LOCATION}
- {CITIZEN}
- [{EMAIL}](mailto:{EMAIL})
- [LinkedIn](https://linkedin.com/in/{LINKEDIN})
- [GitHub](https://github.com/{GITHUB})
- [Portfolio](https://jlouie-portfolio.vercel.app/)

</div>

## Professional Summary
Full-Stack Software Engineer who ships production web and mobile applications end-to-end with **React**, **Next.js**, **TypeScript**, **Node.js/Express**, and **MongoDB**. Has built **AI-powered features** that integrate the **Anthropic Claude API** with **prompt engineering** and multi-stage **LLM pipelines**, alongside core strengths in **RESTful API** design, **authentication**, **state management**, and **performance optimization**. Seeking full-stack or AI-focused roles to own features from architecture to deployment.

## Education
### **Georgia Institute of Technology**&nbsp;|&nbsp;*Master of Science in Computer Science*&nbsp;| Atlanta, GA <span class="spacer"></span><span class="normal">Jan. 2026 &ndash; Present</span>
- Current Coursework: Introduction to Information Security, Software Analysis

### **Per Scholas**&nbsp;|&nbsp;*Certificate in Software Engineering*&nbsp;| Remote <span class="spacer"></span><span class="normal">Aug. 2025 &ndash; Nov. 2025</span>
- Completed an intensive, hands-on training program in full-stack web development using the MERN stack

### **CUNY Hunter College**&nbsp;|&nbsp;*Bachelor of Arts in Computer Science*&nbsp;| New York, NY <span class="spacer"></span><span class="normal">Aug. 2019 &ndash; Jan. 2023</span>
- Minor in Mathematics | GPA: 3.7

## Experience

### **Freelance Web Developer**&nbsp;| Family Buddies | Remote <span class="spacer"></span><span class="normal"> Apr. 2026 &ndash; Present </span>
- Designed, built, and **shipped a responsive production website end-to-end** for a New York elderly-care service using **Next.js**, **TypeScript**, and **Tailwind CSS**, achieving a perfect **100 Lighthouse Performance and SEO** score
- Built a server-side contact pipeline that persists submissions to **Google Sheets** via a service account, hardened against spam with **Cloudflare Turnstile** and a honeypot
- Delivered accessible, mobile-first layouts with **Framer Motion** animations, ensuring smooth interactions and fast load times for users on all devices; deployed and maintained on **Vercel**

### **Software Engineering Intern**&nbsp;| GTechFin Inc. | Remote <span class="spacer"></span><span class="normal"> Apr. 2026 &ndash; Present </span>
- Independently designed, built, and **shipped a full-stack web application end-to-end** (architecture to production) with **Next.js**, **TypeScript**, **Node.js/Express**, and **MongoDB**, deployed on **Vercel** and **Render**, with minimal oversight
- Took ownership of and shipped a **cross-platform mobile app** built with **React Native** and **Expo**, backed by **Supabase** (Postgres) with **AI features** powered by the **Anthropic Claude API**
- Owned the full development lifecycle (**coding, testing with Playwright/Jest, debugging**), using **Claude Code** to scaffold features, tests, and refactors, while collaborating with **cross-functional teams** and writing **technical documentation**

### **AI Model Quality Analyst**&nbsp;| Data Annotation | Remote <span class="spacer"></span><span class="normal"> Apr. 2024 &ndash; Jul. 2024 </span>
- Evaluated AI-generated **Python**, **Java**, and **C++** code for correctness, efficiency, and adherence to **best practices**, ensuring functional output through **unit testing**
- Debugged and validated **multi-language outputs**, ensuring **functional** and **optimized solutions**
- Ranked competing model responses against a **multi-criteria rubric** (correctness, efficiency, readability, security) and documented precise, actionable feedback used to refine the model's code generation

## Technical Skills
<span class="indent"></span>**Languages**: Python, JavaScript (ES6+), TypeScript, C#, C++, Java, SQL, HTML5, CSS3

<span class="indent"></span>**Frameworks & Libraries**: React, React Native, Redux, Zustand, Node.js, Express.js, Next.js, Tailwind CSS, Passport.js, Mongoose

<span class="indent"></span>**AI / LLM**: Claude Code, Gemini, Anthropic Claude API, Prompt Engineering

<span class="indent"></span>**Tools & Databases**: Git, GitHub, Postman, VS Code, Vercel, Render, Netlify, Supabase, MySQL, PostgreSQL, MongoDB

<span class="indent"></span>**Software Testing**: Unit Testing, Performance Testing, Code Profiling, Jest, Playwright, Pytest, JUnit


## Projects
### [AI Humanizer App](https://text-humanizer-client.vercel.app/) <span class="tech-stack">&nbsp;| *Next.js, TypeScript, Express, MongoDB, Anthropic Claude API*</span><span class="spacer"></span><span class="normal">Apr. 2026 &ndash; Jun. 2026</span>
- Built a 3-stage, detector-aware text-rewriting pipeline (diagnose, rewrite, then chained re-humanization of borderline outputs) on **Anthropic Claude**; **100% of outputs scored human-leaning (under 50% AI on ZeroGPT)** across a 66-case benchmark, with roughly **85% under 30% AI**
- Refined output through iterative **prompt engineering** with **Claude Code** and **deterministic post-processing**
- Engineered the **Next.js** and **Express** application with **Clerk authentication**, **Stripe** usage-based billing, and per-user rate limiting on **MongoDB**

### [PokéGuesser](https://pokeguesser-frontend.onrender.com/) <span class="tech-stack">&nbsp;| *React, Node.js, Express, MongoDB, Zustand, Passport.js, JWT, Fuse.js*</span><span class="spacer"></span><span class="normal">Nov. 2025 &ndash; Dec. 2025</span>
- Built a responsive **React** app with **Zustand** middleware to sync complex game state across **local storage** and a **cloud database**
- Secured user sessions with a **Node.js/Express** API using **Passport.js** strategies and **JWTs** stored in cookies
- Achieved near-instant search on a **1,000+ item dataset** with memoized fuzzy search via **Fuse.js**
