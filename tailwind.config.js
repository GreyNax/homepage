const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './**/*.html',
    './assets/js/index.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'crimson': {
          DEFAULT: '#971F0C',
          '50': '#F37B68',
          '100': '#F16A55',
          '200': '#EE492F',
          '300': '#E32F12',
          '400': '#BD270F',
          '500': '#971F0C',
          '600': '#631408',
          '700': '#2F0A04',
          '800': '#000000',
          '900': '#000000'
        },
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: "0",
              color: "#1F2933",
              backgroundColor: "#F3F3F3"
            },
            code: {
              padding: "0.2em 0.4em",
              backgroundColor: "#F3F3F3",
              color: "#DD1144",
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": false,
            "code::after": false,
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('preline/plugin')
  ],
}
