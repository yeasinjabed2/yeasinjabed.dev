import { Oxanium, Poppins } from "next/font/google";

export const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});
