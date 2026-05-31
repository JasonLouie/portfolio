import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import { projects } from "@/src/constants";
import missing from "@/src/assets/missing.png";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    const isPlaceholder = project.src === missing;

    return (
        <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <Link
                href="/projects"
                className="mb-8 inline-block font-mono text-sm text-muted transition-colors hover:text-accent"
            >
                ← all projects
            </Link>

            <h1 className="font-mono text-3xl font-bold text-fg md:text-4xl">
                <span className="text-accent">›&nbsp;</span>{project.name}
            </h1>

            {project.description && (
                <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
            )}

            {(project.github || project.demo) && (
                <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-sm">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-fg/15 px-4 py-2 text-muted transition-colors hover:border-accent/50 hover:text-accent"
                        >
                            <SiGithub className="h-4 w-4" /> github
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-accent/50 px-4 py-2 text-accent transition-colors hover:bg-accent/10"
                        >
                            <LuExternalLink className="h-4 w-4" /> live demo
                        </a>
                    )}
                </div>
            )}

            <div className="mt-8 overflow-hidden rounded-lg border border-fg/10 bg-bg">
                <div className="relative aspect-video w-full">
                    <Image
                        src={project.src}
                        alt={isPlaceholder ? `${project.name} — no preview yet` : `${project.name} preview`}
                        className={
                            isPlaceholder
                                ? "h-full w-full object-contain p-16 opacity-25"
                                : "h-full w-full object-cover"
                        }
                        priority
                    />
                </div>
            </div>

            {project.overview && (
                <section className="mt-10">
                    <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wide text-accent">Overview</h2>
                    <p className="leading-relaxed text-muted">{project.overview}</p>
                </section>
            )}

            {project.features && project.features.length > 0 && (
                <section className="mt-8">
                    <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wide text-accent">Key Features</h2>
                    <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                            <li key={`feature-${i}`} className="flex gap-2 leading-relaxed text-muted">
                                <span className="text-accent">›</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {project.highlights && project.highlights.length > 0 && (
                <section className="mt-8">
                    <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wide text-accent">Technical Highlights</h2>
                    <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                            <li key={`highlight-${i}`} className="flex gap-2 leading-relaxed text-muted">
                                <span className="text-accent">›</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {project.stack.length > 0 && (
                <div className="mt-8">
                    <h2 className="mb-3 font-mono text-sm font-semibold text-fg">tech stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((s, i) => (
                            <span
                                key={`${s}-${i}`}
                                className="rounded-md border border-fg/10 bg-fg/5 px-2.5 py-1 font-mono text-xs text-muted"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
