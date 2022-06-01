module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#FDBA74',
        'background': '#EEEEEE',
        'cards': '#DDDDDD'
      },
      gridTemplateRows: {
        'packages': '2rem repeat(3, 1fr)'
      }
    },
  },
  plugins: [],
}
