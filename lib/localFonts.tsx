import localFont from "next/font/local";
import { Mulish } from "next/font/google";

export const catComic = localFont({
  display: "swap",
  src: "../public/assets/fonts/Cat Comic.otf",
  weight: "400",
  variable: "--font-cat-comic",
});

export const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});
