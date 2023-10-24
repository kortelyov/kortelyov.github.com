/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-tailwind-datepicker/**/*.js'
  ],

  theme: {
    extend: {
      colors: {
        'telegram-bg': 'var(--telegram-bg-color, #fff)',
        'telegram-text': 'var(--telegram-text-color, #000)',
        'telegram-hint': 'var(--telegram-hint-color, #888)',
        'telegram-link': 'var(--telegram-link-color, #0088cc)',
        'telegram-primary': 'var(--telegram-button-color, #0088cc)',
        'telegram-primary-text': 'var(--telegram-button-text-color)',
        'telegram-secondary-bg': 'var(--telegram-secondary-bg-color, #aaa)',
        'vtd-primary': 'var(--telegram-button-color, #0088cc)',
        'vtd-secondary': 'var(--telegram-hint-color, #888)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
