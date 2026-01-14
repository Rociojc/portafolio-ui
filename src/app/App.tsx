import { Navbar } from './components/portfolio/Navbar';
import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Projects } from './components/portfolio/Projects';
import { Curriculum } from './components/portfolio/Curriculum';
import { Contact } from './components/portfolio/Contact';

export default function App() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Curriculum />
      <Contact />
    </main>
  );
}
