import Link from "next/link";
import { CSSProperties, MouseEventHandler } from "react";

interface ButtonProps {
  id?: string;
  className: string;
  href?: string;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
  buttonType?: "button" | "submit" | "reset";
  download?: string;
  disabled?: boolean;
  hoverEffect?: string;
  style?: CSSProperties;
}

export default function Button({
  id,
  className,
  href,
  onClick,
  children,
  buttonType,
  download,
  disabled,
  hoverEffect,
  style,
}: ButtonProps) {
  const classes = `${className} ${
    disabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
  }`;

  const renderButton = () => {
    return (
      <button
        id={id}
        className={classes}
        style={style}
        onClick={onClick}
        disabled={disabled}
        type={buttonType ? buttonType : "button"}
      >
        {children}
      </button>
    );
  };

  const renderLink = () => {
    return (
      <Link href={href!} className={classes} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  };

  const renderDownload = () => {
    return (
      <a href={href!} className={classes} style={style}>
        {children}
      </a>
    );
  };

  return href ? (download ? renderDownload() : renderLink()) : renderButton();
}
