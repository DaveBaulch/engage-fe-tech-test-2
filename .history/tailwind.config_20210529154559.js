module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Intello-n5", "Helvetica", "Arial", "sans-serif"],
      "sans-bold": ["Intello-n7", "Helvetica", "Arial", "sans-serif"],
    },
    theme: {
      container: {
        padding: {
          lg: "4rem",
          xl: "5rem",
        },
      },
    },    
    extend: {
      container: {
        "xl": "1240px",
        "2xl": "1240px",
      },      
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
