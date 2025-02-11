import localFont from "next/font/local";

export const fontGotham = localFont({
  src: [
    {
      path: "./gotham/gotham-black-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./gotham/gotham-bold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./gotham/gotham-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./gotham/gotham-book-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--ff-primary",
});

export const fontMadeOuterSans = localFont({
  src: [
    {
      path: "./madeOuterSans/made_outer_sans_black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./madeOuterSans/made_outer_sans_bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./madeOuterSans/made_outer_sans_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./madeOuterSans/made_outer_sans_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./madeOuterSans/made_outer_sans_light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--ff-secondary",
});
