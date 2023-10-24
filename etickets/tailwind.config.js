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
        'telegram-bg': 'var(--tg-theme-bg-color)',
        'telegram-text': 'var(--tg-theme-text-color)',
        'telegram-hint': 'var(--tg-theme-hint-color)',
        'telegram-link': 'var(--tg-theme-link-color)',
        'telegram-primary': 'var(--tg-theme-button-color)',
        'telegram-primary-text': 'var(--tg-theme-button-text-color)',
        'telegram-secondary-bg': 'var(--tg-theme-secondary-bg-color)',
        'vtd-primary': 'var(--tg-theme-button-color)',
        'vtd-secondary': 'var(--tg-theme-secondary-bg-color)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
