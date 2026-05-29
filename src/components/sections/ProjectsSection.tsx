import { projects } from "../../constants";
import Section from "../Section";
import ProjectCard from "../ProjectCard";
import Button from "../Button";

export default function ProjectsSection() {
    return (
        <Section id="projects" title="Featured Projects">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
                {projects.slice(0, 4).map((project, i) => <ProjectCard key={`project-card-${i}`} {...project} />)}
            </div>
            <Button
                className="mx-auto mt-10 block w-fit rounded-md border border-accent/50 px-5 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
                href="/projects"
            >
                view_all_projects
            </Button>
        </Section>
    );
}
