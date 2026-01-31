import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Skills from "@/components/layout/Skills";
import Experience from "@/components/layout/Experience";
import Projects from "@/components/layout/Projects";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/layout/Contact";
import ScrollToTop from "@/components/sub/ScrollToTop";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}
