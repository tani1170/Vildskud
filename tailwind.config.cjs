/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      ladydance:
        "url('/img/ladydance.svg')",
      ladyread:
        "url('/img/ladyread.svg')",
      ladydrink:
        "url('/img/ladydrink.svg')",
      twobike:
        "url('/img/twobike.svg')",
    },
    fontSize: {
      h6: ["59px"],

      // DESK STØRRELSER
      h1desk: ["60px"],
      h2desk: ["38px"],
      h3desk: ["28px"],
      h4desk: ["48px"],
      h5desk: ["48px"],
      navdesk: ["59px"],
      undernavdesk: ["36px"],
      bodydesk: ["20px"],
      inputdesk: ["24px"],
      footerdesk: ["20px"],
      stepsdesk: ["200px"],

      // MOBIL STØRRELSER
      h1: ["48px"],
      h2: ["25px"],
      h3: ["25px"],
      h4: ["25px"],
      h5: ["36px"],
      btnp: ["20px"],
      btns: ["20px"],
      nav: ["25px"],
      undernav: ["20px"],
      body: ["16px"],
      input: ["16px"],
      footer: ["20px"],
      steps: ["150px"],
    },
    colors: {
      blue: "#1c4efe",
      pink: "#f2d8d8",
      red: "#de1f1f",
      footerpink: "#e1dbdb",
      card: "#efefef",
      white: "#ffffff",
      black: "#000000",
    },

    fontFamily: {
      h1: ["Londrina Solid "],
      h2: ["Kodchasan"],
      h3: ["Kodchasan"],
      h4: ["Kodchasan"],
      h5: ["Londrina Solid"],
      h6: ["Londrina Solid"],
      btnpri: ["Inter"],
      btnsek: ["Inter"],
      nav: ["Times New Roman"],
      input: ["Kodchasan"],
      linkfooter: ["Times New Roman"],
      link: [""],
      bodyfooter: ["Times New Roman"],
      body: ["Kodchasan"],
      step: ["Londrina Solid"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  
};
