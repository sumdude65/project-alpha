/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), //@tailwind/typography adds built-in nice styling for html from cms
    require('daisyui') //this order allows daisy inherit styling from typography
  ],
  daisyui: {
    themes: ["garden","business"],  //first theme is the default
    //darkTheme: "business"
  }
}

