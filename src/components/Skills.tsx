import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Code2, Database, Globe, Cloud, Server,
  Cog, Brain, Shield, Layout, Laptop,
  Smartphone, GitBranch, X,
} from 'lucide-react';

/* ─── Types ───────────────────────────────────────── */
interface DetailSkill { name: string; level: number }
interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
  color: string;
  accent: string;          // tailwind text color for badge
  detailedSkills: DetailSkill[];
}

/* ─── Skill data ──────────────────────────────────── */
const skills: Skill[] = [
  {
    name: 'Programming',
    icon: <Code2 className="w-5 h-5" />,
    level: 90,
    color: 'from-blue-500 to-blue-700',
    accent: 'text-blue-400',
    detailedSkills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 82 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'Rust', level: 55 },
    ],
  },
  {
    name: 'Web Dev',
    icon: <Globe className="w-5 h-5" />,
    level: 88,
    color: 'from-purple-500 to-purple-700',
    accent: 'text-purple-400',
    detailedSkills: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 86 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 72 },
      { name: 'SASS/SCSS', level: 80 },
      { name: 'Angular', level: 65 },
    ],
  },
  {
    name: 'Backend',
    icon: <Server className="w-5 h-5" />,
    level: 85,
    color: 'from-indigo-500 to-indigo-700',
    accent: 'text-indigo-400',
    detailedSkills: [
      { name: 'Node.js', level: 88 },
      { name: 'Django', level: 84 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 72 },
      { name: 'Spring Boot', level: 65 },
    ],
  },
  {
    name: 'Database',
    icon: <Database className="w-5 h-5" />,
    level: 80,
    color: 'from-green-500 to-green-700',
    accent: 'text-green-400',
    detailedSkills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 83 },
      { name: 'MySQL', level: 78 },
      { name: 'Firebase', level: 80 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    name: 'DevOps',
    icon: <Cog className="w-5 h-5" />,
    level: 75,
    color: 'from-red-500 to-red-700',
    accent: 'text-red-400',
    detailedSkills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 78 },
      { name: 'AWS', level: 74 },
      { name: 'Kubernetes', level: 60 },
    ],
  },
  {
    name: 'Cloud',
    icon: <Cloud className="w-5 h-5" />,
    level: 78,
    color: 'from-cyan-500 to-cyan-700',
    accent: 'text-cyan-400',
    detailedSkills: [
      { name: 'AWS Services', level: 78 },
      { name: 'Azure', level: 75 },
      { name: 'Serverless', level: 80 },
      { name: 'Google Cloud', level: 68 },
      { name: 'Cloud Security', level: 72 },
    ],
  },
  {
    name: 'AI / ML',
    icon: <Brain className="w-5 h-5" />,
    level: 72,
    color: 'from-rose-500 to-rose-700',
    accent: 'text-rose-400',
    detailedSkills: [
      { name: 'TensorFlow', level: 72 },
      { name: 'PyTorch', level: 68 },
      { name: 'OpenCV', level: 78 },
      { name: 'Machine Learning', level: 70 },
      { name: 'NLP', level: 65 },
    ],
  },
  {
    name: 'Cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    level: 76,
    color: 'from-teal-500 to-teal-700',
    accent: 'text-teal-400',
    detailedSkills: [
      { name: 'Network Security', level: 78 },
      { name: 'Penetration Testing', level: 72 },
      { name: 'Encryption', level: 76 },
      { name: 'Security Protocols', level: 78 },
      { name: 'Security Auditing', level: 68 },
    ],
  },
  {
    name: 'UI / UX',
    icon: <Layout className="w-5 h-5" />,
    level: 82,
    color: 'from-pink-500 to-pink-700',
    accent: 'text-pink-400',
    detailedSkills: [
      { name: 'Figma', level: 86 },
      { name: 'Wireframing', level: 84 },
      { name: 'Prototyping', level: 80 },
      { name: 'Adobe XD', level: 75 },
      { name: 'User Research', label: 'User Research', level: 72 },
    ].map(s => ({ name: s.name, level: s.level })),
  },
  {
    name: 'Mobile',
    icon: <Smartphone className="w-5 h-5" />,
    level: 74,
    color: 'from-orange-500 to-orange-700',
    accent: 'text-orange-400',
    detailedSkills: [
      { name: 'React Native', level: 82 },
      { name: 'Flutter', level: 70 },
      { name: 'Mobile UI/UX', level: 78 },
      { name: 'Android Native', level: 60 },
    ],
  },
  {
    name: 'System Design',
    icon: <Laptop className="w-5 h-5" />,
    level: 83,
    color: 'from-violet-500 to-violet-700',
    accent: 'text-violet-400',
    detailedSkills: [
      { name: 'Architecture', level: 84 },
      { name: 'Microservices', level: 80 },
      { name: 'Performance', level: 86 },
      { name: 'Scalability', label: 'Scalability', level: 82 },
    ].map(s => ({ name: s.name, level: s.level })),
  },
  {
    name: 'Version Control',
    icon: <GitBranch className="w-5 h-5" />,
    level: 90,
    color: 'from-amber-500 to-amber-700',
    accent: 'text-amber-400',
    detailedSkills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 82 },
      { name: 'Branching Strategies', level: 85 },
      { name: 'Code Review', level: 88 },
    ],
  },
];

/* ─── Tech pill cloud data ────────────────────────── */
const techPills = [
  { name: 'React', color: 'bg-blue-500/10 text-blue-300 border-blue-500/30' },
  { name: 'TypeScript', color: 'bg-blue-400/10 text-blue-200 border-blue-400/30' },
  { name: 'Next.js', color: 'bg-slate-500/10 text-slate-200 border-slate-500/30' },
  { name: 'Node.js', color: 'bg-green-500/10 text-green-300 border-green-500/30' },
  { name: 'Python', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30' },
  { name: 'Django', color: 'bg-green-600/10 text-green-400 border-green-600/30' },
  { name: 'PostgreSQL', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' },
  { name: 'MongoDB', color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
  { name: 'Docker', color: 'bg-blue-400/10 text-blue-300 border-blue-400/30' },
  { name: 'AWS', color: 'bg-orange-500/10 text-orange-300 border-orange-500/30' },
  { name: 'Tailwind CSS', color: 'bg-teal-500/10 text-teal-300 border-teal-500/30' },
  { name: 'Framer Motion', color: 'bg-purple-500/10 text-purple-300 border-purple-500/30' },
  { name: 'C++', color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' },
  { name: 'Java', color: 'bg-red-400/10 text-red-300 border-red-400/30' },
  { name: 'React Native', color: 'bg-blue-600/10 text-blue-300 border-blue-600/30' },
  { name: 'TensorFlow', color: 'bg-orange-600/10 text-orange-300 border-orange-600/30' },
  { name: 'OpenCV', color: 'bg-green-700/10 text-green-400 border-green-700/30' },
  { name: 'GraphQL', color: 'bg-pink-500/10 text-pink-300 border-pink-500/30' },
  { name: 'Firebase', color: 'bg-yellow-600/10 text-yellow-300 border-yellow-600/30' },
  { name: 'Git', color: 'bg-red-500/10 text-red-300 border-red-500/30' },
  { name: 'Figma', color: 'bg-purple-400/10 text-purple-300 border-purple-400/30' },
  { name: 'Three.js', color: 'bg-slate-400/10 text-slate-300 border-slate-400/30' },
  { name: 'Flutter', color: 'bg-cyan-600/10 text-cyan-300 border-cyan-600/30' },
  { name: 'Redis', color: 'bg-red-600/10 text-red-400 border-red-600/30' },
];

type Tab = 'categories' | 'tech';

/* ─── Modal ───────────────────────────────────────── */
function SkillModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        className="relative w-full max-w-lg glass-card border border-indigo-500/20 rounded-2xl p-8 shadow-2xl z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
              {skill.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              <p className="text-slate-400 text-sm">Overall proficiency: {skill.level}%</p>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="text-slate-400 hover:text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overall bar */}
        <div className="mb-6">
          <div className="w-full bg-white/5 rounded-full h-2 mb-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
            />
          </div>
        </div>

        {/* Detailed skills */}
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
          {skill.detailedSkills.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="flex justify-between mb-1.5">
                <span className="text-slate-200 text-sm font-medium">{detail.name}</span>
                <span className={`text-sm font-semibold ${skill.accent}`}>{detail.level}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${detail.level}%` }}
                  transition={{ duration: 0.8, delay: i * 0.07 }}
                  className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-slate-600 text-xs text-center mt-6">Click outside to close</p>
      </motion.div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────── */
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('categories');

  return (
    <section className="py-24 bg-gray-900/40 relative" id="skills">
      <div className="absolute inset-x-0 top-0 h-px section-separator" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills &amp; Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto">
            A broad technical toolkit — click any category to see detailed proficiency.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex rounded-xl border border-white/10 p-1 bg-white/5 gap-1">
            {(['categories', 'tech'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize ${activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                {tab === 'categories' ? '📂 Categories' : '🏷️ Tech Stack'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ── Categories view ── */}
          {activeTab === 'categories' && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative glass-card rounded-2xl p-5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 text-left overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {skill.icon}
                  </div>

                  {/* Name + % */}
                  <p className="text-white font-semibold text-sm mb-1 leading-snug">{skill.name}</p>
                  <p className={`text-xs font-bold ${skill.accent} mb-3`}>{skill.level}%</p>

                  {/* Mini progress bar */}
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                      className={`h-1 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>

                  {/* Click hint */}
                  <p className="text-slate-600 text-[10px] mt-2 group-hover:text-slate-400 transition-colors">
                    Click to expand →
                  </p>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* ── Tech Stack pill cloud ── */}
          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                {techPills.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className={`px-4 py-2 rounded-full border text-sm font-medium cursor-default select-none transition-all ${tech.color}`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>

              {/* Proficiency legend */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 glass-card rounded-2xl p-6 border border-white/5"
              >
                <p className="text-slate-400 text-sm text-center mb-6">Skill proficiency overview</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1 text-xs">
                        <span className="text-slate-300 font-medium flex items-center gap-1.5">
                          <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-br ${skill.color}`} />
                          {skill.name}
                        </span>
                        <span className={skill.accent}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;