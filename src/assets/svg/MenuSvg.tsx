export default function MenuSvg({
    openNavigation,
}: {
    openNavigation: boolean;
}) {
    return (
        <svg
            className="overflow-visible"
            width="20"
            height="26"
            viewBox="0 0 20 12"
        >
            <rect
                className="transition-all origin-center"
                x="0"
                y="0"
                width="20"
                height="2"
                rx="1"
                fill="white"
                transform={`translate(${openNavigation ? "4" : "0"}, ${
                    openNavigation ? "-3.5" : "0"
                }) rotate(${openNavigation ? "45" : "0"})`}
            />
            <rect
                className="transition-all origin-center"
                x="0"
                y="10"
                width="20"
                height="2"
                rx="1"
                fill="white"
                transform={`translate(${openNavigation ? "-4" : "0"}, ${
                    openNavigation ? "3.5" : "0"
                }) rotate(${openNavigation ? "-45" : "0"})`}
            />
        </svg>
    );
}
