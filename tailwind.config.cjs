/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      ladydance:
        "url('/img/ladydance.png')",
      ladyread:
        "url('/img/ladyread.png')",
      ladydrink:
        "url('/img/ladydrink.png')",
      twobike:
        "url('/img/twobike.png')",
    },
    fontSize: {
      h6: ["59px"],

      // DESK STØRRELSER
      h1desk: ["96px"],
      h2desk: ["48px"],
      h3desk: ["38px"],
      h4desk: ["38px"],
      h5desk: ["48px"],

      btnpdesk: ["40px"],
      btnsdesk: ["30px"],
      navdesk: ["59px"],
      undernavdesk: ["36px"],
      bodydesk: ["25px"],
      inputdesk: ["24px"],
      footerdesk: ["20px"],

      // MOBIL STØRRELSER
      h1: ["48px"],
      h2: ["25px"],
      h3: ["25px"],
      h4: ["25px"],
      h5: ["36px"],
      btnp: ["24px"],
      btns: ["24px"],
      nav: ["25px"],
      undernav: ["20px"],
      body: ["16px"],
      input: ["16px"],
      footer: ["20px"],
    },
    colors: {
      blue: "#1c4efe",
      pink: "#f2d8d8",
      red: "#de1f1f",
      footerpink: "#e1dbdb",
      card: "#efefef",
      white: "#ffffff",
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
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
