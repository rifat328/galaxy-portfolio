import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Skills from "@/components/layout/Skills";
import Experience from "@/components/layout/Experience";
import Achievements from "@/components/layout/Achievements";
import Projects from "@/components/layout/Projects";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/layout/Contact";
import ScrollToTop from "@/components/sub/ScrollToTop";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <section className="snap-start w-full">
          <Hero />
        </section>
        <section className="snap-start w-full ">
          <About />
        </section>
        <section className="snap-start w-full">
          <Skills />
        </section>
        <section className="snap-start w-full">
          <Experience />
        </section>
        <section className="snap-start w-full">
          <Projects />
        </section>
        <section className="snap-start w-full">
          <Achievements />
        </section>
        <section className="snap-start w-full">
          <Contact />
        </section>
        <section className="snap-start w-full">
          <Footer />
        </section>
        <ScrollToTop />
      </div>
    </main>
  );
}
