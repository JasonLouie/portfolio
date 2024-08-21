interface TitleProps {
    titleClass?: string;
    lineClass?: string;
    children: React.ReactNode;
    lineWidth?: string;
    lineColor?: string;
}

export default function Title({
    titleClass,
    lineClass,
    children,
    lineWidth,
    lineColor,
}: TitleProps) {
    const titleClasses = `h2 mb-[0.5rem] ${titleClass || ""}`;
    const lineClasses = `border-none h-[0.25rem] mb-[1.25rem] ${
        lineWidth || "w-[55%]"
    } ${lineColor || "bg-n-5"} ${lineClass || ""}`;
    return (
        <div>
            <h2 className={titleClasses}>{children}</h2>
            <hr className={lineClasses} />
        </div>
    );
}
