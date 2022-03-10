module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "lora": ["Lora", "serif"],
      "pt-sans": ["PT Sans", "sans-serif"]
    },
    extend: {
      colors: {
        'black': '#171010',
        'white': '#EEEEEE',
        'purple': '#DB29D5',
        'green': '#3DB46D'
      },
    },
  },
  plugins: [],
}
