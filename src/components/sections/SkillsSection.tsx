import { skills } from "../../constants";
import Section from "../Section";
import SkillCard from "../SkillCard";

export default function SkillsSection() {
    return (
        <Section id="skills" title="Skills Overview">
            <p className="mb-10 text-center font-mono text-sm text-muted">
                // the stack I build with
            </p>
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {skills.map((skill, i) => <SkillCard key={`skill-${i}`} {...skill} />)}
            </div>
        </Section>
    );
}
