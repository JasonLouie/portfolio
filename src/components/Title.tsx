"use client";
import React, { useRef, useEffect, useState } from "react";

interface TitleProps {
    titleClass?: string;
    lineClass?: string;
    children?: React.ReactNode;
    lineWidth?: string;
    lineColor?: string;
    dangerouslySetInnerHTML?: string;
}

export default function Title({
    titleClass,
    lineClass,
    children,
    lineWidth,
    lineColor,
    dangerouslySetInnerHTML,
}: TitleProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [calculatedWidth, setCalculatedWidth] = useState<string | undefined>(
        lineWidth
    );
    useEffect(() => {
        if (titleRef.current && !lineWidth) {
            const titleElement = titleRef.current;
            const originalWhiteSpace = titleElement.style.whiteSpace;

            // Temporarily set white-space to nowrap
            titleElement.style.whiteSpace = "nowrap";

            // Get the width of the full content without wrapping
            const fullWidth = titleElement.getBoundingClientRect().width;

            // Restore the original white-space style
            titleElement.style.whiteSpace = originalWhiteSpace;

            setCalculatedWidth(`${fullWidth * 0.55}px`); // 55% of the longest line width
        }
    }, [lineWidth]);

    const titleClasses = `h2 mb-[0.5rem] inline-block ${titleClass || ""}`;
    const lineClasses = `border-none h-[0.25rem] mb-[1.25rem] ${
        lineColor || "bg-n-5"
    } ${lineClass || ""}`;

    const spacing = (
        <div>
            <h2
                ref={titleRef}
                className={titleClasses}
                dangerouslySetInnerHTML={{
                    __html: dangerouslySetInnerHTML
                        ? dangerouslySetInnerHTML
                        : "",
                }}
            ></h2>
            <hr
                className={lineClasses}
                style={{
                    width: lineWidth || calculatedWidth,
                }}
            />
        </div>
    );

    const regular = (
        <div>
            <h2 ref={titleRef} className={titleClasses}>
                {children}
            </h2>
            <hr
                className={lineClasses}
                style={{
                    width: lineWidth || calculatedWidth,
                }}
            />
        </div>
    );

    return dangerouslySetInnerHTML ? spacing : regular;
}
