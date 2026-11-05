import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Database, Globe, Cloud, Server,
  Brain, Shield, Cpu, Layers, X,
  Workflow
} from 'lucide-react';

interface DetailSkill {
  name: string;
  level: number;
}

interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
  description: string;
  detailedSkills: DetailSkill[];
}

const skills: Skill[] = [
  {
    name: 'Programming Languages',
    icon: <Code2 className="w-4 h-4 text-indigo-400" />,
    level: 90,
    description: 'Systems-level C/C++, Python, Java, Ruby, JavaScript, TypeScript',
    detailedSkills: [
      { name: 'C / C++', level: 88 },
      { name: 'Python', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'Java', level: 82 },
      { name: 'Ruby', level: 75 },
    ],
  },
  {
    name: 'Backend Engineering',
    icon: <Server className="w-4 h-4 text-indigo-400" />,
    level: 88,
    description: 'NestJS, Django, Spring Boot, REST APIs, and JWT authentication',
    detailedSkills: [
      { name: 'NestJS', level: 90 },
      { name: 'Django / Python', level: 88 },
      { name: 'Spring Boot (Java 17)', level: 82 },
      { name: 'REST APIs & JWT Auth', level: 92 },
      { name: 'RBAC Access Control', level: 86 },
    ],
  },
  {
    name: 'Applied AI / ML & RAG',
    icon: <Brain className="w-4 h-4 text-indigo-400" />,
    level: 86,
    description: 'QLoRA fine-tuning, GGUF quantization, llama.cpp, FAISS vector RAG',
    detailedSkills: [
      { name: 'FAISS Vector Search & RAG', level: 90 },
      { name: 'GGUF & llama.cpp (CPU inference)', level: 88 },
      { name: 'QLoRA Fine-Tuning', level: 84 },
      { name: 'Similarity-Gated Retrieval', level: 86 },
      { name: 'Qwen & LLM Pipelines', level: 85 },
    ],
  },
  {
    name: 'Frontend Engineering',
    icon: <Globe className="w-4 h-4 text-indigo-400" />,
    level: 85,
    description: 'React, Next.js, Angular, Three.js 3D visualization, Tailwind CSS',
    detailedSkills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Three.js / WebGL', level: 82 },
      { name: 'Angular', level: 80 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    name: 'Databases & In-Memory Engines',
    icon: <Database className="w-4 h-4 text-indigo-400" />,
    level: 85,
    description: 'PostgreSQL, MySQL, Redis-like custom C++ engines (LRU/LFU/ARC)',
    detailedSkills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 84 },
      { name: 'In-Memory DB Architectures (C++)', level: 85 },
      { name: 'LRU/ARC Eviction & HyperLogLog', level: 84 },
    ],
  },
  {
    name: 'Cybersecurity & Code Audit',
    icon: <Shield className="w-4 h-4 text-indigo-400" />,
    level: 84,
    description: 'Code review, vulnerability analysis, ethical hacking & network defense',
    detailedSkills: [
      { name: 'Vulnerability Analysis', level: 85 },
      { name: 'Secure Code Reviews', level: 88 },
      { name: 'Network Security Protocols', level: 84 },
      { name: 'Defensive Cyber Strategies', level: 82 },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    icon: <Cloud className="w-4 h-4 text-indigo-400" />,
    level: 80,
    description: 'AWS EC2 provisioning, service scaling, Linux environment & CI/CD',
    detailedSkills: [
      { name: 'AWS EC2 Services', level: 84 },
      { name: 'Linux System Administration', level: 85 },
      { name: 'Docker Containerization', level: 80 },
      { name: 'CI/CD Pipelines', level: 78 },
    ],
  },
  {
    name: 'Embedded Systems & IoT',
    icon: <Cpu className="w-4 h-4 text-indigo-400" />,
    level: 82,
    description: 'Microcontroller programming, hardware-software interfacing & sensors',
    detailedSkills: [
      { name: 'C/C++ Embedded Programming', level: 84 },
      { name: 'IoT Fundamentals', level: 80 },
      { name: 'Hardware Interfacing', level: 78 },
      { name: 'Robotics & Control Logic', level: 82 },
    ],
  },
];

const techPills = [
  'C / C++', 'Python', 'NestJS', 'PostgreSQL', 'TypeScript', 'JavaScript',
  'Java 17', 'Spring Boot 3', 'Django', 'Ruby', 'llama.cpp', 'GGUF', 'FAISS',
  'QLoRA', 'React', 'Next.js', 'Angular', 'Three.js', 'AWS EC2', 'MySQL',
  'Linux', 'Docker', 'JWT', 'Git'
];

type Tab = 'categories' | 'stack';

function SkillModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="relative w-full max-w-lg bg-[#11131a] border border-white/10 rounded-xl p-6 shadow-xl z-10"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">{skill.name}</h3>
              <p className="text-xs text-zinc-400">Proficiency index: {skill.level}%</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1.5 hover:bg-white/[0.05] rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mb-5">
          <div className="flex justify-between text-xs text-zinc-400 mb-1.5 font-mono">
            <span>Overall Proficiency</span>
            <span className="text-indigo-400 font-semibold">{skill.level}%</span>
          </div>
          <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
            <div
              style={{ width: `${skill.level}%` }}
              className="h-full bg-indigo-500 rounded-full"
            />
          </div>
        </div>

        <div className="space-y-3.5 max-h-[50vh] overflow-y-auto pr-1">
          {skill.detailedSkills.map((detail, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1 font-mono">
                <span className="text-zinc-200">{detail.name}</span>
                <span className="text-zinc-400">{detail.level}%</span>
              </div>
              <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden">
                <div
                  style={{ width: `${detail.level}%` }}
                  className="h-full bg-zinc-400 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-between items-center text-xs text-zinc-500">
          <span>Press ESC or click outside to dismiss</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded border border-zinc-800 hover:bg-zinc-800 text-zinc-300 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('categories');

  return (
    <section className="py-20 bg-[#090a0f] border-t border-white/[0.06]" id="skills">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
              <span className="w-2 h-px bg-indigo-500" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills &amp; Expertise</h2>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Curated capabilities verified by coursework at Rwanda Coding Academy, production internships, and independent engineering projects.
            </p>
          </div>

          <div className="flex rounded-lg border border-white/10 p-1 bg-zinc-900/80 gap-1 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('categories')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'categories'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Domain Disciplines</span>
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'stack'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Full Tech Stack</span>
            </button>
          </div>
        </div>

        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <button
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className="group p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 text-left transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-mono font-semibold text-zinc-400 group-hover:text-indigo-400 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 leading-snug">{skill.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{skill.description}</p>
                </div>

                <div>
                  <div className="w-full bg-zinc-950 rounded-full h-1 overflow-hidden mb-2">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="h-full bg-indigo-500 rounded-full"
                    />
                  </div>
                  <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300 font-mono transition-colors">
                    Inspect breakdown &rarr;
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">Core Toolset &amp; Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">Domain Proficiency Matrix</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-900">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="text-zinc-300 font-medium truncate pr-2">{skill.name}</span>
                      <span className="font-mono text-zinc-500 text-[11px]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="h-full bg-zinc-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
