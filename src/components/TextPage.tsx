interface TextPageProps {
    children: React.ReactNode;
    classOuterDiv?: string;
    classInnerDiv?: string;
}

export default function TextPage({
    children,
    classInnerDiv,
    classOuterDiv,
}: TextPageProps) {
    return (
        <div
            className={
                classOuterDiv
                    ? classOuterDiv
                    : `p-4 relative w-full mb-[4rem] md:mb-[5rem] lg:mb:[6.25rem]`
            }
        >
            <div
                className={
                    classInnerDiv
                        ? classInnerDiv
                        : `px-[1.25rem] sm:px-[1.75rem] md:px-[4rem] lg:px-[6.5rem] xl:px-[8.5rem]`
                }
            >
                {children}
            </div>
        </div>
    );
}
