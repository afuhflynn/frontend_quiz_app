/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#A729F5",
          "dark-navy": "#313E51",
          navy: "#3B4D66",
          "grey-navy": "#626C7F",
          "light-bluish": "#ABC1E1",
          "light-grey": "#F4F6FA",
          "pure-white": "#FFFFFF",
          green: "#26D782",
          red: "#EE5454",
        },
        "orange-100": "#FFF1E9",
        "green-100": "#E0FDEF",
        "blue-100": "#EBF0FF",
        "purple-100": "#F6E7FF",
        secondary: {
          button: {
            idle: "#A729F5",
            hover: {
              bg: "#A729F5",
              opacity: "50%",
            },
          },
        },
        toggle: {
          bg: "#A729F5",
          thumb: "#FFFFFF",
          "gray-navy": "#626C7F",
          "pure-white": "#FFFFFF",
        },
        "multi-selection-element": {
          idle: {
            bg: "#FFFFFF",
            color: "#313E51",
            "letter-bg": "#F4F6FA",
            "letter-color": "#626C7F",
          },
          hover: {
            bg: "#FFFFFF",
            color: "#313E51",
            "letter-bg": "#F6E7FF",
            "letter-color": "#A729F5",
          },
          active: {
            bg: "#FFFFFF",
            color: "#313E51",
            "letter-bg": "#A729F5",
            "letter-color": "#FFFFFF",
            border: "#A729F5",
          },
          answer: {
            bg: "#FFFFFF",
            color: "#313E51",
            "correct-answer": {
              check: "#26D782",
              "letter-bg": "#F4F6FA",
              "letter-color": "#626C7F",
            },
            "picked-correctly": {
              check: "#26D782",
              "letter-bg": "#26D782",
              "letter-color": "#F4F6FA",
              border: "#26D782",
            },
            "picked-incorrectly": {
              check: "#EE5454",
              "letter-bg": "#EE5454",
              "letter-color": "#F4F6FA",
              border: "#EE5454",
            },
          },
        },
      },
      fontFamily: {
        "rubik-italic": "Rubik Italic",
        "rubik-medium": "Rubik Medium",
        "rubik-regular": "Rubik",
      },
      backgroundImage: {
        "pattern-bg-dark": "var(--bg-pattern-dark)",
        "pattern-bg-light": "var(--bg-pattern-light)",
      },
      padding: {
        large: "6rem",
        medium: "4rem",
        small: "2rem",
      },
      fontSize: {
        regular: "12px",
        h1: "144px",
        h2: "64px",
        h3: "36px",
        h4: "28px",
      },
    },
  },
  plugins: [],
};
