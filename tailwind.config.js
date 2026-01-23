/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                primary: {
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
                    foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent) / <alpha-value>)",
                    foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted) / <alpha-value>)",
                    foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
                },
                card: {
                    DEFAULT: "hsl(var(--card) / <alpha-value>)",
                    foreground: "hsl(var(--card-foreground) / <alpha-value>)"
                }
            },
            fontFamily: {
                serif: ["Ovo", "serif"],
                sans: ["DM Sans", "sans-serif"]
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in-out",
                "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "bounce-subtle": "bounce 2s ease-in-out infinite",
                "float-slow": "float 20s ease-in-out infinite",
                "float-medium": "float 15s ease-in-out infinite",
                "float-fast": "float 10s ease-in-out infinite"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" }
                },
                pulse: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.7" }
                },
                bounce: {
                    "0%, 100%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
                    },
                    "50%": {
                        transform: "translateY(-10%)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
                    }
                },
                float: {
                    "0%, 100%": {
                        transform: "translate(0, 0)"
                    },
                    "25%": {
                        transform: "translate(30px, -20px)"
                    },
                    "50%": {
                        transform: "translate(-20px, -40px)"
                    },
                    "75%": {
                        transform: "translate(-30px, -10px)"
                    }
                }
            }
        }
    },
    plugins: []
};
