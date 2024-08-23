import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
import { Config } from "tailwindcss/types/config";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            textShadow: {
                sm: "1px 1px 0 #96D198, 1px -1px 0 #96D198, -1px 2px 0 #96D198, -1px -1px 0 #96D198, 1px 0px 0 #96D198, 0px 1px 0 #96D198, -1px 0px 0 #96D198, 0px -1px 0 #96D198",
                md: "1.5px 1.5px 0 #96D198, 1.5px -1.5px 0 #96D198, -1.5px 1.5px 0 #96D198, -1.5px -1.5px 0 #96D198, 1.5px 0px 0 #96D198, 0px 1.5px 0 #96D198, -1.5px 0px 0 #96D198, 0px -1.5px 0 #96D198",
                lg: "2px 2px 0 #96D198, 2px -2px 0 #96D198, -2px 2px 0 #96D198, -2px -2px 0 #96D198, 2px 0px 0 #96D198, 0px 2px 0 #96D198, -2px 0px 0 #96D198, 0px -2px 0 #96D198",
            },
            colors: {
                color: {
                    1: "#96D198",
                    2: "#E0E8E0",
                    3: "#FFBABA",
                    4: "#FF776F",
                    5: "#C51244",
                    6: "#FF98E2",
                    7: "none",
                },
                n: {
                    1: "#FFFFFF",
                    2: "#CADDC6",
                    3: "#ADC3A8",
                    4: "#758571",
                    5: "#3F523A",
                    6: "#253421",
                    7: "#151D13",
                    8: "#0E150C",
                    9: "#476040",
                    10: "#435C43",
                    11: "#1B2E1B",
                    12: "#2A412E",
                    13: "#6C7572",
                },
            },
            fontFamily: {
                sans: ["var(--font-sora)", ...fontFamily.sans],
                code: "var(--font-code)",
                grotesk: "var(--font-grotesk)",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities, theme }) {
            const textShadow = theme("textShadow", {}) as Record<
                string,
                string
            >;
            const newUtilities = Object.entries(textShadow).map(
                ([key, value]) => ({
                    [`.text-shadow-${key}`]: {
                        textShadow: value,
                    },
                })
            );

            addUtilities(newUtilities);
        }),
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({});
            addComponents({
                ".container": {
                    "@apply px-[1.25rem] sm:px-[1.75rem] md:px-[4rem] lg:px-[6.5rem] xl:px-[8.5rem]":
                        {},
                },
                ".h1": {
                    "@apply font-semibold text-[2.0rem] leading-[3rem] md:text-[3.25rem] md:leading-[4.25rem] lg:text-[4.75rem] lg:leading-[5.5625rem] xl:text-[5.75rem] xl:leading-[6.5rem]":
                        {},
                },
                ".h2": {
                    "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
                        {},
                },
                ".h3": {
                    "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
                },
                ".h4": {
                    "@apply text-[2rem] leading-normal": {},
                },
                ".h5": {
                    "@apply text-2xl leading-normal": {},
                },
                ".h6": {
                    "@apply font-semibold text-lg leading-8": {},
                },
                ".body-1": {
                    "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
                        {},
                },
                ".body-2": {
                    "@apply font-light text-[0.875rem] leading-6 md:text-base":
                        {},
                },
                ".caption": {
                    "@apply text-sm": {},
                },
                ".tagline": {
                    "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
                        {},
                },
                ".quote": {
                    "@apply font-code text-lg leading-normal": {},
                },
                ".button": {
                    "@apply font-code text-xs font-bold uppercase tracking-wider":
                        {},
                },
                ".image-gradient": {
                    "@apply relative w-full h-auto": {},
                },
                ".input": {
                    "@apply bg-n-5 w-[18rem] sm:w-[22rem] md:w-[25rem] h-[3.125rem] border-none outline-none pl-2 rounded-md focus:ring-2 focus:ring-n-3":
                        {},
                },
                ".error": {
                    "@apply inline-block flex items-center text-left text-color-5 bg-color-3 h-[3rem] border-[2px] border-color-4 outline-none pl-2 pr-6 text-[14px]":
                        {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
                ".image-gradient": {
                    "@apply relative w-full h-auto": {},
                    "mask-image":
                        "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                    "-webkit-mask-image":
                        "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                },
                ".box-gradient": {
                    "@apply border-transparent": {},
                    "border-image-slice": "1",
                    "border-image-source":
                        "linear-gradient(to right, #183629, #1F7A43, #0F4D42)",
                },
                ".autofill": {
                    "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus":
                        {
                            "@apply border-n-3": {},
                            "-webkit-text-fill-color": "n-5",
                            "-webkit-box-shadow":
                                "0 0 0px 1000px rgba(var(--background)) inset",
                            transition: "background-color 5000s ease-in-out 0s",
                        },
                },
                ".no-scrollbar": {
                    "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
                },
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none" /* Safari and Chrome */,
                },
            });
        }),
    ],
};
export default config;
