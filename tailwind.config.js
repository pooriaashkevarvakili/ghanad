/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '360px',
      '5xl': '412px',
      '4xl': '540px',
      'sm': '640px',
      'md': '785px',
      'lg': '1024px',
      'xl': '1280px',
      '3xl': '1350px',
      '2xl': '1536px'
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
