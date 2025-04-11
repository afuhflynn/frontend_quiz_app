/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "*.{js,ts,jsx,tsx,mdx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors
        quiz: {
          // Primary colors
          purple: {
            DEFAULT: "#A729F5", // RGB: 167, 41, 245, HSL: 277°, 91%, 56%
            light: "#D394FA", // Light purple for hover states
            dark: "#8710E0", // Darker purple for dark mode
          },
          blue: {
            dark: "#313E51", // RGB: 49, 62, 81, HSL: 219°, 25%, 25%
            DEFAULT: "#3B4D66", // RGB: 59, 77, 102, HSL: 219°, 27%, 32%
            light: "#4A5567", // RGB: 74, 85, 103, HSL: 219°, 16%, 35%
            lighter: "#ABC1E1", // RGB: 171, 193, 225, HSL: 215°, 47%, 78%
          },
          gray: {
            DEFAULT: "#626C7F",
            light: "#F4F6FA", // RGB: 244, 246, 250, HSL: 220°, 33%, 97%
          },
          green: {
            DEFAULT: "#26D782", // RGB: 38, 215, 130, HSL: 151°, 70%, 50%
            dark: "#1AAC67", // Darker green for dark mode
          },
          red: {
            DEFAULT: "#EE5454", // RGB: 238, 84, 84, HSL: 0°, 82%, 63%
            dark: "#D23C3C", // Darker red for dark mode
          },
          white: "#FFFFFF", // RGB: 255, 255, 255, HSL: 0°, 0%, 100%
        },

        // shadcn/ui system colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      fontSize: {
        // Custom font sizes based on the design system
        "heading-xl": ["144px", { lineHeight: "1" }],
        "heading-1": ["64px", { lineHeight: "1" }],
        "heading-2": ["40px", { lineHeight: "1" }],
        "heading-3": ["32px", { lineHeight: "1" }],
        "heading-4": ["28px", { lineHeight: "1" }],
        "body-m": ["12px", { lineHeight: "1.5" }],
        "body-s": ["12px", { lineHeight: "1.5", fontStyle: "italic" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "pattern-bg": "var(--pattern-background)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
