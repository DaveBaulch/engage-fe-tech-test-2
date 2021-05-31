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
      spacing: {
        5.5
        22: "5.1875rem",
        skew: "62.5%",
        850: "850px",
      },
      fontSize: {
        "5.5xl": "3.125rem",
        "7.5xl": "5rem",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3.375rem",
      },
      letterSpacing: {
        minus2Percent: "-0.02rem",
      },
      width: {
        1.625: "1.625rem",
        9.5623: "9.5623rem",
        12.125: "12.125rem",
        97.5: "97.5rem",
      },
      height: {
        1.625: "1.625rem",
        1.578125: "1.578125rem",
        27.625: "27.625rem",
      },
      borderRadius: {
        baseLink: "2.375rem",
        basePill: "1.4375rem",
        featureSkew: "2.5rem",
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
