import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'achievements', 'testimonials', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                      ? 'text-indigo-400'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              );
            })}

            <a
              href="https://github.com/Byukusenge-Andrew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="ml-4 w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <a
                  href="https://github.com/Byukusenge-Andrew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;