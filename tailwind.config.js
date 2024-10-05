/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter font here
      },
      container: {
        center: true, // Centers the container on the page
        padding: '1rem', // Adds padding to the container at all screen sizes
        screens: {
          sm: '100%',  // Full width for small devices
          md: '100%',  // Full width for medium devices
          lg: '1024px', // Set a max-width for large devices
          xl: '1280px', // Max-width for extra-large screens
          '2xl': '1536px', // Max-width for very large screens
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
