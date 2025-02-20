import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import ParticlesBackground from './components/ParticlesBackground';
import TableOfContents from './components/TableOfContents';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <TableOfContents />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-8"
      >
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()}  Byukusenge Andre. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;