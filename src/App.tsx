import { Github, Linkedin, Twitter, ArrowUp, Code2 } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import TableOfContents from './components/TableOfContents';

const socials = [
  { href: 'https://github.com/Byukusenge-Andrew', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/andre-byukusenge-a0100021a', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
  { href: 'https://x.com/drefa4lt', icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
];

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-zinc-100 overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <TableOfContents />

      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-white/[0.08] bg-[#07080c] py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-zinc-500">
              <span className="font-mono">
                &copy; {new Date().getFullYear()} Andre Byukusenge.
              </span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Rwanda Coding Academy &bull; Software Engineer</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-8 h-8 rounded-md border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors ml-2"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
