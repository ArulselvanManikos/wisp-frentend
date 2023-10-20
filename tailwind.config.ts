/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wispskyblue': '#1FD7D7',
        'wispblue': '#17CF83',
        'wispgreen': '#93CC57',
      },
    },
  },
  plugins: [],
};

// background: linear-gradient(111.51deg, #1FD7D7 23.53%, #17CF83 49.84%, #93CC57 102.95%);
