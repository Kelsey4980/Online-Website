import type { Config } from "tailwindcss";
import plugin from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}", // adjust to your project structure
    ],
    theme: {
        extend: {
            keyframes: {
                animateGradient: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
            backgroundSize: {
                "300%": "300%",
            },
            animation: {
                gradient: "animateGradient 6s ease infinite alternate",
            },
        },
    },
    plugins: [plugin],
};

export default config;
