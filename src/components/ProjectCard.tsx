import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import missing from "@/src/assets/missing.png";
import type { Project } from "../constants";

export default function ProjectCard({
  slug,
  name,
  description,
  stack,
  src,
  github,
  demo,
  fit,
  date,
}: Project) {
  const isPlaceholder = src === missing;
  const detailHref = `/projects/${slug}`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-fg/10 bg-surface transition duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_14px_36px_-16px_rgba(34,197,94,0.35)]">
      <Link
        href={detailHref}
        aria-label={`${name} details`}
        className="block w-full overflow-hidden bg-bg"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={src}
            alt={isPlaceholder ? `${name} — no preview yet` : `${name} preview`}
            className={
              isPlaceholder
                ? "h-full w-full object-contain p-12 opacity-25"
                : `h-full w-full ${
                    fit === "contain" ? "object-contain" : "object-cover"
                  } transition-transform duration-300 group-hover:scale-105`
            }
            loading="eager"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link
          href={detailHref}
          className="mb-1 font-mono text-base font-semibold text-fg transition-colors hover:text-accent"
        >
          <span className="text-accent">›&nbsp;</span>
          {name}
        </Link>

        {date && (
          <p className="mb-2 font-mono text-xs text-muted">{date}</p>
        )}

        {description && (
          <p className="mb-3 text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}

        {stack.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {stack.map((s, i) => (
              <span
                key={`${name}-${s}-${i}`}
                className="rounded-md border border-fg/10 bg-fg/5 px-2 py-0.5 font-mono text-[0.7rem] text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-4 pt-1 font-mono text-xs">
          <Link
            href={detailHref}
            className="text-accent transition-colors hover:text-accent-hover"
          >
            details →
          </Link>
          <span className="ml-auto flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on GitHub`}
                className="text-muted transition-colors hover:cursor-pointer hover:text-fg"
              >
                <SiGithub className="h-4 w-4" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} live demo`}
                className="text-muted transition-colors hover:cursor-pointer hover:text-fg"
              >
                <LuExternalLink className="h-4 w-4" />
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
