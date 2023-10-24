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
        'telegram-bg': 'var(--telegram-bg-color)',
        'telegram-text': 'var(--telegram-text-color)',
        'telegram-hint': 'var(--telegram-hint-color)',
        'telegram-link': 'var(--telegram-link-color8cc)',
        'telegram-primary': 'var(--telegram-button-color8cc)',
        'telegram-primary-text': 'var(--telegram-button-text-color)',
        'telegram-secondary-bg': 'var(--telegram-secondary-bg-color)',
        'vtd-primary': 'var(--telegram-button-color8cc)',
        'vtd-secondary': 'var(--telegram-hint-color)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
