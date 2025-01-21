/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'serif'],
        Montserrat: ['Montserrat', 'serif'],
        OpenSans: ['Open Sans', 'serif',]
      },
      colors: {
        primary: "#9C6644",
        secondary: "#7F5539",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
