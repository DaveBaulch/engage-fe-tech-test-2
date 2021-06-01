module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Intello-n5", "Helvetica", "Arial", "sans-serif"],
      "sans-bold": ["Intello-n7", "Helvetica", "Arial", "sans-serif"],
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
      },
    },
    extend: {
      fontSize: {
        "4xl": "5rem",
      },
      lineHeight: {
        "leading-11": "3.375rem",
        "leading-12": "3.75rem",
      },
      width: {
        97.5: "97.5rem",
      },
      height: {
        27.625: "27.625rem",
      },
      colors: {
        midnight: "#26233B",
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
