import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/constants";

export default function Projects() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <h1 className="mb-10 text-center font-mono text-2xl font-bold text-fg md:text-3xl">
                All Projects
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => <ProjectCard key={project.slug} {...project} />)}
            </div>
        </section>
    );
}
