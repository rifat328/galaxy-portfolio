import Hero from "@/components/layout/Hero";
import Skills from "@/components/layout/Skills";
import Projects from "@/components/layout/Projects";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
