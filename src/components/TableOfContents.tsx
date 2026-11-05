import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListOrdered, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Table of Contents"
        className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg border border-zinc-800 shadow-sm transition-colors"
      >
        {isOpen ? <X size={16} /> : <ListOrdered size={16} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.15 }}
            className="absolute right-12 top-1/2 -translate-y-1/2 bg-[#11131a] rounded-xl shadow-xl p-3 min-w-[180px] border border-white/10"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-3 py-1 mb-1 border-b border-white/[0.06]">
              Navigation
            </div>
            <nav>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`block py-1.5 px-3 rounded text-xs font-medium transition-colors ${
                        activeSection === section.id
                          ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TableOfContents;
