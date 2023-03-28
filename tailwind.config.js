module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}',
   './public/index.html',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple keyboard
        'keyboard': 'repeat(auto-fit, minmax(75px, 1fr))',
        //responsive
        'responsive': 'repeat(auto-fit, minmax(30px, 1fr))',
      }
  }
},
  variants: {
    extend: {},
  },
  plugins: [],
}
