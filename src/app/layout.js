import "./globals.css";
import StarsCanvas from "@/components/canvas/StarBackground";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/sub/SmoothScroll";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "3D Galaxy Portfolio",
  description: "Immersive 3D Portfolio Website",
};

const nicoMoji = localFont({
  src: "../../public/fonts/NicoMoji-Regular.ttf",
  variable: "--font-nico-moji",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#030014] overflow-y-scroll overflow-x-hidden ${nicoMoji.variable}`}>
        <SpeedInsights />
        <SmoothScroll />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
