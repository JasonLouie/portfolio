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
            colors: {
                color: {
                    1: "#96D198",
                    2: "#E0E8E0",
                    3: "#FF776F",
                    4: "#7ADB78",
                    5: "#858DFF",
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
            textShadow: {
                name1: "1px 1px 0 #96D198, 1px -1px 0 #96D198, -1px 2px 0 #96D198, -1px -1px 0 #96D198, 1px 0px 0 #96D198, 0px 1px 0 #96D198, -1px 0px 0 #96D198, 0px -1px 0 #96D198",
                name2: "1.5px 1.5px 0 #96D198, 1.5px -1.5px 0 #96D198, -1.5px 1.5px 0 #96D198, -1.5px -1.5px 0 #96D198, 1.5px 0px 0 #96D198, 0px 1.5px 0 #96D198, -1.5px 0px 0 #96D198, 0px -1.5px 0 #96D198",
                name3: "2px 2px 0 #96D198, 2px -2px 0 #96D198, -2px 2px 0 #96D198, -2px -2px 0 #96D198, 2px 0px 0 #96D198, 0px 2px 0 #96D198, -2px 0px 0 #96D198, 0px -2px 0 #96D198",
            },
        },
    },
    plugins: [
        require("tailwindcss-textshadow"),
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({});
            addComponents({
                ".container": {
                    "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
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
                    "@apply bg-n-5 w-[25rem] h-[3.125rem] border-none outline-none pl-2 rounded-md focus:ring-2 focus:ring-n-3":
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
            });
        }),
    ],
};
export default config;
