module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main':'#131316',
        'sub':'#1c1c21',
        'light':'#9CA3AF',
        'hover':'#4b4c52',
        'accent':'#5865F2',
      },
      borderRadius: ['hover'],
      screens:{
        'ns': '520px'
      }
    },
  },
  plugins: [],
}