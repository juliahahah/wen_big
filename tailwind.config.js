/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// const backgroundImage = require('tailwindcss/backgroundImage')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
 theme: {
    screens: {  
      'sm': '360px',
      'md': '768px',
      'lg': '1440px',
    },
    container: {
      center: true
    },
    fontFamily: {
      sans: ['TaipeiSansTCBeta'],
      serif: ['TaipeiSansTCBeta']
    },
    extend: {
      colors:{
      white: '#FFFFFF',
      text:'#FFFFFF98',
      text_black:'#253D47',
      gray: '#D6D6D650',
      green_1: '#05AC87',
      green_2:'#74E7B685',
      green_3:'#04C082',
      blue_1: '#031214',
      blue_2:'#1C6472',
      blue_3:'#39BDD7',
      indigo:'#1A2C33',
      column:'#131E23',
      column_2:'#192930',
      ring:'#05Ac8780'
    }, 
  
    backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      variants: { // all the following default to ['responsive']
      backgroundImage: ['responsive'],
      backgroundClip: ['responsive'],
      backgroundOrigin: ['responsive'],
    },
  
}
},

plugins: [
    require('@tailwindcss/forms','preline/plugin'),
    require('tailwindcss-background-extended')
  ]
}