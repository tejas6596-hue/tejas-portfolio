import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import ResumeCTA from '@/components/ResumeCTA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <ResumeCTA />
      <Contact />
    </div>
  );
}