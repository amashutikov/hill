import {
  Inter as FontSans,
  PT_Serif,
  Questrial,
  Roboto_Mono,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const questrial = Questrial({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const ptSerif = PT_Serif({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});