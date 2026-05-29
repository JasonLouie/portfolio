import { IconType } from "react-icons";

interface Logo {
    icon: IconType,
    color: string
}

interface Detail {
    name: string,
    icon: IconType,
    color: string
}

interface SkillCardProps {
    name: string,
    details: Detail[],
    logo: Logo
}

export default function SkillCard({ name, details, logo }: SkillCardProps) {
    return (
        <div className="group rounded-lg border border-fg/10 bg-surface p-5 transition-colors hover:border-accent/40">
            <div className="mb-4 flex items-center gap-3 border-b border-fg/10 pb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 ring-1 ring-accent/30">
                    <logo.icon className="h-5 w-5 text-accent" />
                </span>
                <h2 className="font-mono text-sm font-semibold tracking-wide text-fg">{name}</h2>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-4">
                {details.map((detail) => (
                    <div key={detail.name} className="flex w-14 flex-col items-center gap-1.5">
                        <detail.icon className={`h-7 w-7 ${detail.color}`} />
                        <span className="text-center font-mono text-[0.7rem] leading-tight text-muted">{detail.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
