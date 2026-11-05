import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Star } from 'lucide-react';

type Category = 'All' | 'AI/ML & Systems' | 'Full Stack' | 'Backend' | 'Frontend';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
  category: Category[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Rights Navigator — Offline Multilingual Legal AI",
    description: "An offline legal assistant running on CPU-only hardware (ADTC 2026). Fine-tuned with QLoRA on Qwen3-4B, quantized to GGUF for llama.cpp execution, featuring a 2-stage similarity-gated FAISS RAG pipeline covering Rwanda, Kenya, Nigeria, and Tanzania with Swahili, Yoruba, French, and Kinyarwanda support.",
    image: "/Screenshot 2025-02-12 085305.png",
    github: "https://github.com/Byukusenge-Andrew/law",
    tags: ["Python", "Qwen3-4B", "llama.cpp", "FAISS", "QLoRA", "RAG"],
    category: ["AI/ML & Systems"],
    featured: true,
  },
  {
    title: "Cachedb — In-Memory Database Engine",
    description: "A Redis-like high-performance in-memory database built in C++. Features multi-database architectures, LRU, LFU, and Adaptive Replacement Cache (ARC) eviction policies, HyperLogLog cardinality estimation, and Pub/Sub message broker.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/Engdb",
    tags: ["C++", "In-Memory Engine", "LRU/ARC Cache", "HyperLogLog", "Pub/Sub"],
    category: ["AI/ML & Systems", "Backend"],
    featured: true,
  },
  {
    title: "SMMS — Multi-Channel Social Hub",
    description: "Full-featured social media platform for post scheduling, audience analytics, influencer collaborations, notifications, and cross-network integrations with a Django backend and React/Next.js frontend.",
    image: "/keativ.png",
    github: "https://github.com/Byukusenge-Andrew/SMMS",
    demo: "https://keativ.netlify.app/",
    tags: ["Next.js", "React", "Python", "Django", "PostgreSQL"],
    category: ["Full Stack", "Backend"],
  },
  {
    title: "BUSGO — Transit Booking API Engine",
    description: "Backend architecture for bus ticket reservation, real-time vehicle routes, and payment processing. Implemented layered controller-service-repository patterns with JWT role-based access control.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/BUSGO_frontend",
    tags: ["Java 17", "Spring Boot 3", "MySQL", "JWT Auth", "REST API"],
    category: ["Backend"],
  },
  {
    title: "Recovery Credit — Portfolio Debt Platform",
    description: "Comprehensive financial system engineered for lenders to manage credit portfolios, assess risk metrics, and orchestrate overdue debt recovery campaigns.",
    image: "/charity.png",
    github: "https://github.com/Byukusenge-Andrew/recovery-credit-6",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: ["Full Stack", "Frontend"],
  },
  {
    title: "ModelVerse — 3D Graphics Visualization",
    description: "Interactive 3D visualization studio using Three.js and WebGL. Manipulate, inspect, and render complex geometric meshes directly in the browser.",
    image: "/Screenshot 2025-02-12 085513.png",
    github: "https://github.com/Byukusenge-Andrew/ModelVerse",
    demo: "https://modelverse.netlify.app/",
    tags: ["Three.js", "WebGL", "React", "TypeScript"],
    category: ["Frontend"],
  },
  {
    title: "Kredita — Debt & Credit Ledger System",
    description: "Multi-client platform enabling retail shops to manage customer lines of credit and debt ledgers. Built across mobile client, desktop app, and a hosted backend API.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    tags: ["Mobile", "Desktop", "Hosted Backend", "PostgreSQL"],
    category: ["Full Stack"],
  },
  {
    title: "JobMatch — Recruitment Platform Frontend",
    description: "Job-matching candidate discovery platform frontend engineered for an international freelance client on Upwork, prioritizing dense scannable data layouts and smart filtering.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/JobMatch",
    tags: ["Angular", "TypeScript", "REST API", "Freelance Upwork"],
    category: ["Frontend"],
  },
  {
    title: "offline-edu — Low-Connectivity Education",
    description: "Research project engineering offline-first architectures to deliver interactive educational curriculum in low-connectivity and intermittent power settings.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Offline-First", "PWA", "Local Storage"],
    category: ["Frontend", "Full Stack"],
  },
];

const categories: Category[] = ['All', 'AI/ML & Systems', 'Full Stack', 'Backend', 'Frontend'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-[#0c0e15] border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
              <span className="w-2 h-px bg-indigo-500" />
              <span>CV Portfolio Repository</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Real projects highlighted on my CV, spanning edge AI/ML, custom in-memory databases, and production web services.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className={`group flex flex-col justify-between rounded-xl bg-zinc-900/60 border ${
                  project.featured ? 'border-indigo-500/30 ring-1 ring-indigo-500/10' : 'border-zinc-800/80'
                } hover:border-zinc-700 overflow-hidden transition-colors`}
              >
                <div>
                  <div className="relative overflow-hidden aspect-video bg-zinc-950 border-b border-zinc-800/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                    {project.featured && (
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-indigo-600 text-white flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-white" />
                        <span>Flagship Project</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white leading-snug mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-zinc-800/60 mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 pt-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-indigo-300 hover:text-white bg-indigo-500/10 border border-indigo-500/20 hover:border-indigo-500/40 rounded transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 pt-3">
                    {project.category[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Byukusenge-Andrew?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-800 bg-zinc-900/60 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <FolderGit2 className="w-4 h-4 text-indigo-400" />
            <span>Explore all repositories on GitHub (@Byukusenge-Andrew)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
