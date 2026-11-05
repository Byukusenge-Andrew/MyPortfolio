import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Download, Twitter, MapPin, Terminal, Briefcase, Sparkles } from 'lucide-react';
import Shapes3D from './Shapes3D';

const roles = [
  'Software Engineer',
  'Backend Engineer (NestJS / PostgreSQL)',
  'Embedded & Systems Developer (C / C++)',
  'Applied AI / ML & RAG Specialist',
];

interface HeroProps {
  onOpenTerminal?: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: number;

    if (!isDeleting && displayed.length < current.length) {
      timeout = window.setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = window.setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#090a0f] flex items-center pt-24 pb-16">
      {/* Revolving Programming Language Rings */}
      <Shapes3D />

      <div className="container relative z-10 mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
        {/* Main Content */}
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-900/90 border border-zinc-800 text-zinc-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for new projects &amp; collaborations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
            Andre <span className="text-white">Byukusenge</span>
          </h1>

          {/* Typewriter role */}
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-indigo-400 font-mono mb-6 h-7">
            <Terminal className="w-4 h-4 text-zinc-500" />
            <span>{displayed}</span>
            <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse ml-0.5" />
          </div>

          {/* Bio from CV */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 mx-auto">
            Software Engineer across <span className="text-white font-medium">embedded systems</span>,{' '}
            <span className="text-white font-medium">backend engineering</span>, and{' '}
            <span className="text-white font-medium">applied AI/ML</span>. Experienced in production
            NestJS/PostgreSQL services, low-level systems programming in C/C++, and independent research into offline, CPU-only RAG pipelines (ADTC 2026).
          </p>

          {/* Location & Key CV Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-md">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>Nyabihu, Rwanda</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-md">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Rwanda Coding Academy</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Rights Navigator · ADTC 2026</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="px-4 py-2.5 rounded-md bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 hover:text-emerald-200 text-sm font-mono font-medium transition-colors flex items-center gap-2 shadow-sm"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Launch CLI Console</span>
                <span className="text-[10px] text-emerald-500 border border-emerald-800/60 px-1 rounded">⌘K</span>
              </button>
            )}
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/cisc_2_2.pdf"
              download
              className="px-5 py-2.5 rounded-md border border-white/10 hover:border-white/20 bg-zinc-900/80 text-zinc-200 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-2.5">
            {[
              { href: 'https://github.com/Byukusenge-Andrew', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/andre-byukusenge-a0100021a', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { href: 'https://x.com/drefa4lt', icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
            ].map((s) => (
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
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-zinc-300 transition-colors">
        <a href="#about" aria-label="Scroll to About section" className="p-2 inline-block">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
