/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#0f172a",
                primary: "#14b8a6", // Teal accent
            },
            animation: {
                "pulse-slow": "pulse 6s ease-in-out infinite",
            },
        },

    },
    plugins: [],
};