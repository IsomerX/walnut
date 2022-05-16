module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                helv: [
                    "HelveticaNeue-Light",
                    "Helvetica Neue Light",
                    "Helvetica Neue",
                    "Helvetica",
                    "Arial",
                    "Lucida Grande",
                    "sans-serif",
                ],
                ald: ["Aldrich", "sans-serif"],
                aleg: ["Alegreya Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
