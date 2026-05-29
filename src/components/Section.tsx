interface SectionProps {
    id?: string,
    title?: string,
    className?: string,
    children: React.ReactNode
}

export default function Section({
    id,
    title,
    className,
    children
} : SectionProps) {
    const classes = `px-8 py-10 ${className ? className : ""}`;

    return (
        <section id={id} className={classes}>
            {title && <h1 className="mb-8 text-center font-mono text-2xl font-bold text-fg md:text-3xl">{title}</h1>}
            {children}
        </section>
    );
}