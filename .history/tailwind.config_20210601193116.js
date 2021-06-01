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
        1.125: "1.125rem",
        4.125: "1.03125rem",
        5.5: "1.59375rem",
        21.25: "21.25rem",
        22.5: "22.5rem",
        22: "5.1875rem",
        25: "25rem",
        71: "71rem",
        87.5: "87.5rem",
        skew: "62.5%",
        120: "120%",
        135: "130%",
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
        basePill: "2.0625rem",
        featureSkew: "2.5rem",
      },
      scale: {
        55: ".55",
        62: ".62",
        63: ".63",
        66: ".66",
        68: ".68",
        80: ".80",
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
