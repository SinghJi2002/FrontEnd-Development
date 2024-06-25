/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      placeholderColor: {
        'primary': '#808080',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ['focus', 'hover'],
    },
  },
  plugins: [],
}

