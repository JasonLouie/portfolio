import { skills } from "../../constants";
import Section from "../Section";
import SkillCard from "../SkillCard";

export default function SkillsSection() {
    return (
        <Section id="skills" title="Skills Overview">
            <p className="mb-10 text-center font-mono text-sm text-muted">
                // the stack I build with
            </p>
            <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-center gap-5">
                {skills.map((skill, i) => (
                    <div
                        key={`skill-${i}`}
                        className="w-full sm:w-[calc(50%-0.625rem)] xl:w-[calc(25%-0.9375rem)]"
                    >
                        <SkillCard {...skill} />
                    </div>
                ))}
            </div>
        </Section>
    );
}
