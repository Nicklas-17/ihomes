import localfont from "next/font/local";

const applegaramond = localfont({
  src: [
    {
      path: "/fonts/AppleGaramond-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export { applegaramond };
