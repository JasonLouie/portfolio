import { MouseEventHandler } from "react";
import Link from "next/link";

interface ButtonProps {
    id?: string;
    className: string;
    href?: string;
    onClick?: MouseEventHandler;
    children: React.ReactNode;
    px?: string;
    white?: string;
    buttonType?: "button" | "submit" | "reset";
    download?: string;
    disabled?: boolean;
    hoverEffect?: string;
}

export default function Button({
    id,
    className,
    href,
    onClick,
    children,
    px,
    white,
    buttonType,
    download,
    disabled,
    hoverEffect,
}: ButtonProps) {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors${
        disabled ? "bg-n-4 hover:cursor-not-allowed text-color-2 " : hoverEffect
    } ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
    const spanClasses = "relative z-10";

    const renderButton = () => {
        return (
            <button
                id={id}
                className={classes}
                onClick={onClick}
                type={buttonType}
                disabled={disabled}
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
