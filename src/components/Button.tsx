import { MouseEventHandler } from "react";
import Link from "next/link";

interface ButtonProps {
    className: string;
    href?: string;
    onClick?: MouseEventHandler;
    children: React.ReactNode;
    px?: string;
    white?: string;
    buttonType?: string;
    download?: string;
}

export default function Button({
    className,
    href,
    onClick,
    children,
    px,
    white,
    buttonType,
    download,
}: ButtonProps) {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
        px || "px-7"
    } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
    const spanClasses = "relative z-10";

    const renderButton = () => {
        return (
            <button
                className={classes}
                onClick={onClick}
                {...(buttonType && { buttonType })}
            >
                <span className={spanClasses}>{children}</span>
            </button>
        );
    };

    const renderLink = () => {
        return (
            <Link href={href!} className={classes}>
                <span className={spanClasses}>{children}</span>
            </Link>
        );
    };

    const renderDownload = () => {
        return (
            <a href={href!} className={classes} download={download}>
                <span className={spanClasses}>{children}</span>
            </a>
        );
    };

    return href ? (download ? renderDownload() : renderLink()) : renderButton();
}
