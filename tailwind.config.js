/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                BricolageGrotesque: ["Bricolage Grotesque", "sans-serif"],
            },
            gridTemplateColumns: {
                autoFit: "repeat(auto-fit, minmax(18rem, 1fr))",
            },
            animation: {
                slideUpFadIn: "slide-up-fade-in 0.3s ease-out forwards",
            },
        },
    },
    plugins: [],
};
