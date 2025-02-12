import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
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