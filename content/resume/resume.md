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
Full-Stack Software Engineer who ships production web applications end-to-end with **React**, **Next.js**, **TypeScript**, **Node.js/Express**, and **MongoDB**. Has built **AI-powered features** that integrate the **Anthropic Claude API** with **prompt engineering** and multi-stage **LLM pipelines**, alongside core strengths in **RESTful API** design, **authentication**, **state management**, and **performance optimization**. Seeking full-stack or AI-focused software engineering roles to own features from architecture to deployment.

## Education
### **Georgia Institute of Technology**&nbsp;|&nbsp;*Master of Science in Computer Science*&nbsp;| Atlanta, GA <span class="spacer"></span><span class="normal">Jan. 2026 - Present</span>
- Current Coursework: Introduction to Information Security, Software Analysis

### **Per Scholas**&nbsp;|&nbsp;*Certificate in Software Engineering*&nbsp;| Remote <span class="spacer"></span><span class="normal">Aug. 2025 &ndash; Nov. 2025</span>
- Completed an intensive, hands-on training program in full-stack web development using the MERN stack

### **CUNY Hunter College**&nbsp;|&nbsp;*Bachelor of Arts in Computer Science*&nbsp;| New York, NY <span class="spacer"></span><span class="normal">Aug. 2019 &ndash; Jan. 2023</span>
- Minor in Mathematics | GPA: 3.7

## Experience

### **Software Engineering Intern**&nbsp;| GTechFin | Remote <span class="spacer"></span><span class="normal"> Apr. 2026 &ndash; Present </span>
- Independently designed, built, and **shipped a full-stack web application end-to-end** (architecture through production deployment) with minimal oversight
- Owned the full development lifecycle across **coding, testing, and debugging**, collaborating with **cross-functional teams** and producing **technical documentation** as needed
- Leveraged AI tooling (**Claude Code**) to accelerate development and sustain delivery velocity as a solo developer

### **AI Model Quality Analyst**&nbsp;| Data Annotation | Remote <span class="spacer"></span><span class="normal"> Apr. 2024 &ndash; Jul. 2024 </span>
- Evaluated AI-generated **Python**, **Java**, and **C++** code for correctness, efficiency, and adherence to **best practices**, ensuring functional output through **unit testing**
- Debugged and validated **multi-language outputs**, ensuring **functional** and **optimized solutions**
- Provided technical feedback to improve AI code generation accuracy

## Technical Skills
<span class="indent"></span>**Languages**: Python, JavaScript (ES6+), TypeScript, C#, C++, Java, SQL, HTML5, CSS3

<span class="indent"></span>**Frameworks & Libraries**: React, Redux, Zustand, Node.js, Express.js, Next.js, Passport.js, Mongoose, .NET

<span class="indent"></span>**AI / LLM**: Claude Code, Gemini, Claude API, Prompt Engineering

<span class="indent"></span>**Tools & Databases**: Git, GitHub, Postman, VS Code, Vercel, Render, Netlify, MySQL, MongoDB

<span class="indent"></span>**Software Testing**: Unit Testing, Performance Testing, Code Profiling, Pytest, React Testing Lib, JUnit


## Projects
### [Family Buddies](https://www.familybuddies.net/) <span class="tech-stack">&nbsp;| *Next.js, TypeScript, Tailwind CSS, Framer Motion, Google Sheets API*</span><span class="spacer"></span><span class="normal">Apr. 2026 &ndash; Present</span>
- Designed and built a responsive company website for a New York elderly-care service using **Next.js**, **TypeScript**, and **Tailwind CSS**, achieving a perfect **100 Lighthouse Performance and SEO** score
- Built a server-side contact pipeline that persists submissions to **Google Sheets**, hardened against spam with **Cloudflare Turnstile** and a honeypot
- Polished the experience with **Framer Motion** animations and accessible, mobile-first layouts, deployed on **Vercel**

### [AI Humanizer App](https://text-humanizer-client.vercel.app/) <span class="tech-stack">&nbsp;| *Next.js, TypeScript, Express, MongoDB, Anthropic Claude API*</span><span class="spacer"></span><span class="normal">Apr. 2026 &ndash; June 2026</span>
- Built a 3-stage, detector-aware text-rewriting pipeline (diagnose, rewrite, then chained re-humanization of borderline outputs) on **Anthropic Claude**; **100% of outputs scored human-leaning (under 50% AI on ZeroGPT)** across a 66-case benchmark, with roughly **85% under 30% AI**
- Refined output through iterative **prompt engineering** with **Claude Code**, running measured cycles of targeted prompt changes and **deterministic post-processing**
- Engineered the **Next.js** and **Express** application with **Clerk authentication**, **Stripe** usage-based billing, and per-user rate limiting on **MongoDB**

### [PokéGuesser](https://pokeguesser-frontend.onrender.com/) <span class="tech-stack">&nbsp;| *React, Node.js, Express, MongoDB, Zustand, Passport.js, JWT, Fuse.js*</span><span class="spacer"></span><span class="normal">Nov. 2025 &ndash; Dec. 2025</span>
- Built a responsive **React** app with **Zustand** middleware to sync complex game state across **local storage** and a **cloud database**
- Secured user sessions with a **Node.js/Express** API using **Passport.js** strategies and **JWTs** stored in cookies
- Achieved near-instant search on a **1,000+ item dataset** with memoized fuzzy search via **Fuse.js**
