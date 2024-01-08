import type { Config } from "tailwindcss";
const colors = require("./colors.config");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            'nunito' : ['Nunito', 'sans-serif']
        },
        extend: {
            colors: { ...colors },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.1rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "2.2rem",
                "2xl": "2.5rem",
            },
        },
    },
    plugins: [],
};
export default config;
