module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Intello-n5", "Helvetica", "Arial", "sans-serif"],
      "sans-bold": ["Intello-n7", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
    
      fontSize: {
        "4xl": "5rem",
      },
      colors: {
        midnight: "##26233B",
        appBlue: "#604BF3",
        cyan: "#6BE6FD",
        background: "#F1F0FA",
        lavender: "#A3B7FC",
        lightLavender: {
          light: "#A387FC",
          dark: "#6E63FB",
        },
        darkLavender: {
          light: "#8C4AE4",
          dark: "#5240CF",
        },
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};
