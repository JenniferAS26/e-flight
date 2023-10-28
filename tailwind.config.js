/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,js}', 
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}

