import "./globals.css";
import StarsCanvas from "@/components/canvas/StarBackground";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/sub/SmoothScroll";

export const metadata = {
  title: "3D Galaxy Portfolio",
  description: "Immersive 3D Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <SmoothScroll />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
