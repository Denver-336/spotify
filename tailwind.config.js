/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
]
export const theme = {
  extend: {
    screens: {
      '3xl': '1920px',
    },
    colors: {
      'green': {
        'primary': '#1DCF5D',
        'secondary': '#1FDC62',
      },
      'light': {
        'primary': '#fff',
        'secondary': '#a7a7a7',
      },
      'dark': {
        'darker': '#121212',
        DEFAULT: '#181818',
        'light': '#282828',
        'lighter': '#3E3E3E',
      },
    },
    fontFamily: {
      'sans': ['Roboto', ..._fontFamily.sans],
    },
  },
}
export const plugins = []
