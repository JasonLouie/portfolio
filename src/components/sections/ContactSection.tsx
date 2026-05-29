import Section from "../Section";
import ContactForm from "../ContactForm";

export default function ContactSection() {
    return (
        <Section id="contact" title="Contact">
            <p className="mb-10 text-center font-mono text-sm text-muted">
                // let&apos;s build something
            </p>
            <div className="mx-auto max-w-xl">
                <ContactForm />
                <p className="mt-6 text-center font-mono text-xs text-muted">
                    or email me directly at{" "}
                    <a
                        href="mailto:jason.louie.614@gmail.com"
                        className="text-accent transition-colors hover:text-accent-hover"
                    >
                        jason.louie.614@gmail.com
                    </a>
                </p>
            </div>
        </Section>
    );
}
