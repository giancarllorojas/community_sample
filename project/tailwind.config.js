/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '1060px',
      lg: '1280px',
      xl: '1440px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: "2rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem"
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1048px",
        xl: "1048px"
      }
    },

    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    
    extend: {
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)'
      },

      colors: {
        primary: '#33404F',
        secondary: '#00E2A6',
        accent: '#2b315b'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
