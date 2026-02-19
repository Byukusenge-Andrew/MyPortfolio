import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Twitter } from 'lucide-react';
import Shapes3D from './Shapes3D';
import { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'AI / ML Enthusiast',
  '3D Visualization Engineer',
  'Open Source Contributor',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: number;

    if (!isDeleting && displayed.length < current.length) {
      timeout = window.setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = window.setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-900 flex items-center">
      {/* Rotating tech logo rings */}
      <div className="absolute inset-0 opacity-30">
        <Shapes3D />
      </div>

      {/* Animated blobs layered on top */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16 min-h-screen">
        {/* Text block */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 mb-6">
              👋 Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-white"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Andre</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 h-8"
          >
            <span className="typewriter-cursor">{displayed}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            Passionate developer based in <span className="text-indigo-400 font-medium">Kigali, Rwanda</span> — building
            elegant, high-performance web apps and AI-powered solutions that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-indigo-500/30"
            >
              View My Work
            </a>
            <a
              href="/cisc_2_2.pdf"
              download
              className="px-8 py-3.5 rounded-full border border-indigo-500/50 text-indigo-300 font-semibold hover:bg-indigo-500/10 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:-translate-y-0.5 transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            {[
              { href: 'https://github.com/Byukusenge-Andrew', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/andre-byukusenge-a0100021a', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
              { href: 'https://x.com/drefa4lt', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Avatar block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-40 animate-pulse" />
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img
                  src="/student image.webp"
                  alt="Byukusenge Andre"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">👨‍💻</div>';
                    }
                  }}
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass-card px-3 py-2 rounded-xl text-sm font-medium text-indigo-300 border border-indigo-500/20"
            >
              🚀 Open to work
            </motion.div>
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-4 -left-4 glass-card px-3 py-2 rounded-xl text-sm font-medium text-emerald-300 border border-emerald-500/20"
            >
              💻 Full Stack
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-indigo-400" />
        </a>
      </motion.div>
    </section>
  );
}