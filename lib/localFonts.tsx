import localFont from "next/font/local";
import { Mulish, Open_Sans, Poppins } from "next/font/google";

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

export const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
