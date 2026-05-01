import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { SideProjects } from "@/components/sections/SideProjects";
import { Affiliations } from "@/components/sections/Affiliations";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <SideProjects />
        <Affiliations />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50 text-sm">
        <p>© {new Date().getFullYear()} Dr. David Andai. All rights reserved.</p>
      </footer>
    </div>
  );
}