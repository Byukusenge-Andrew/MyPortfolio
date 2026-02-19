import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
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

const socials = [
  { href: 'https://github.com/Byukusenge-Andrew', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/andre-byukusenge-a0100021a', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
  { href: 'https://x.com/drefa4lt', icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
];

function App() {
  return (
    <div className="relative overflow-x-hidden bg-gray-950 text-white">
      <ParticlesBackground />
      <Header />
      <TableOfContents />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="achievements"><Achievements /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/5 bg-gray-950 py-10"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-400 text-sm flex items-center gap-1.5">
              © {new Date().getFullYear()} Byukusenge Andre. Built with{' '}
              <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> &amp; React.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;