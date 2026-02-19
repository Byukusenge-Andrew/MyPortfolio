import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

type Category = 'All' | 'Frontend' | 'Backend' | 'AI/ML' | 'Full Stack';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
  category: Category[];
}

const projects: Project[] = [
  {
    title: "3D Visualization Platform — ModelVerse",
    description: "Interactive 3D data visualization using Three.js and WebGL. Explore and manipulate complex 3D models in the browser.",
    image: "/Screenshot 2025-02-12 085305.png",
    github: "https://github.com/Byukusenge-Andrew/ModelVerse",
    demo: "https://modelverse.netlify.app/",
    tags: ["Three.js", "WebGL", "React"],
    category: ["Frontend"],
  },
  {
    title: "TutorialHub",
    description: "A modern platform for sharing tutorials, DSA exercises, code challenges, and learning resources.",
    image: "/Screenshot 2025-02-12 085513.png",
    github: "https://github.com/Byukusenge-Andrew/TutorialHub",
    demo: "https://tutorial-hub-01.vercel.app/",
    tags: ["React", "TypeScript", "Framer Motion"],
    category: ["Frontend", "Full Stack"],
  },
  {
    title: "SMMS — Social Media Management",
    description: "Schedule posts, analyze performance, and engage with audiences across multiple social channels from one dashboard.",
    image: "/keativ.png",
    github: "https://github.com/Byukusenge-Andrew/SMMS",
    demo: "https://keativ.netlify.app/",
    tags: ["React", "Next.js", "Django", "Python"],
    category: ["Full Stack", "Backend"],
  },
  {
    title: "BUSGO — Bus Booking System",
    description: "A full-featured bus ticket booking platform with real-time seat selection and payment integration.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/BUSGO_frontend",
    tags: ["React", "TypeScript", "REST API"],
    category: ["Frontend", "Full Stack"],
  },
  {
    title: "JobMatch",
    description: "Intelligent job matching platform that connects candidates with relevant opportunities using smart filtering.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/JobMatch",
    tags: ["React", "Node.js", "MongoDB"],
    category: ["Full Stack", "Backend"],
  },
  {
    title: "Engdb — Custom DB Engine",
    description: "A lightweight custom database engine built from scratch, featuring query parsing, indexing, and caching.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/Engdb",
    tags: ["Python", "NLP", "Database"],
    category: ["Backend", "AI/ML"],
  },
  {
    title: "Face Recognition + AI Locking",
    description: "Real-time face detection, recognition, identity locking, and action logging using ArcFace and MediaPipe.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/Face_recognition_with_Arcface",
    tags: ["Python", "OpenCV", "ArcFace", "MediaPipe"],
    category: ["AI/ML"],
  },
  {
    title: "Urukundo Charity Foundation",
    description: "A charity organization website focused on providing support and resources to communities in need.",
    image: "/charity.png",
    demo: "https://urukundo.echo-solution.com/",
    tags: ["React", "Django", "Next.js"],
    category: ["Full Stack"],
  },
];

const categories: Category[] = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-px section-separator" />
      <div className="absolute bottom-0 inset-x-0 h-px section-separator" />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-purple-950/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            A curated selection of work spanning full-stack apps, AI/ML research, 3D visualization, and open source.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'border border-slate-700 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <Folder className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <h3 className="text-white font-semibold text-sm leading-snug line-clamp-1">{project.title}</h3>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Byukusenge-Andrew?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-indigo-500 transition-all text-sm"
          >
            <Github className="w-4 h-4" />
            View all 68 repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}