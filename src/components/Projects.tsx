import { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Cpu, Database, CheckCircle2, Shield } from 'lucide-react';

type Category = 'All' | 'Systems & AI' | 'Full Stack & APIs' | 'Frontend & 3D';

interface SupportingProject {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
  category: Category;
}

const supportingProjects: SupportingProject[] = [
  {
    title: "CryptoChain — Distributed Blockchain & Mining Engine",
    description: "Distributed blockchain architecture implemented in Python featuring cryptographic SHA-256 proof-of-work mining, UTXO transaction ledger validation, and peer-to-peer verification protocols.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/CryptoChain",
    tags: ["Python", "Cryptography", "Blockchain", "P2P", "SHA-256", "Distributed Systems"],
    category: "Systems & AI",
  },
  {
    title: "ArcFace & MediaPipe Biometric Security Lock",
    description: "Real-time facial landmark detection (468 3D landmarks), deep 512-dimensional vector embedding extraction using ArcFace, anti-spoofing liveness verification, and biometric security locking.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/Face_recognition_with_Arcface",
    tags: ["Python", "OpenCV", "ArcFace", "MediaPipe", "Computer Vision"],
    category: "Systems & AI",
  },
  {
    title: "ModelVerse — Interactive 3D Visualization",
    description: "In-browser 3D model inspector and geometry studio powered by Three.js and WebGL. Render, rotate, and interact with complex 3D meshes with real-time lighting shaders.",
    image: "/Screenshot 2025-02-12 085305.png",
    github: "https://github.com/Byukusenge-Andrew/ModelVerse",
    demo: "https://modelverse.netlify.app/",
    tags: ["Three.js", "WebGL", "React", "TypeScript"],
    category: "Frontend & 3D",
  },
  {
    title: "TutorialHub — Computer Science & DSA Platform",
    description: "Curated learning repository for computer science tutorials, interactive DSA problem sets, typing practice, and code challenge walkthroughs.",
    image: "/Screenshot 2025-02-12 085513.png",
    github: "https://github.com/Byukusenge-Andrew/TutorialHub",
    demo: "https://tutorial-hub-01.vercel.app/",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack & APIs",
  },
  {
    title: "SMMS — Multi-Channel Social Orchestrator",
    description: "Multi-tenant social media platform covering post dispatching, audience metric aggregation, influencer collaborations, and notification pipelines. Django REST backend with Next.js frontend.",
    image: "/keativ.png",
    github: "https://github.com/Byukusenge-Andrew/SMMS",
    demo: "https://keativ.netlify.app/",
    tags: ["Next.js", "React", "Python", "Django", "PostgreSQL"],
    category: "Full Stack & APIs",
  },
  {
    title: "Urukundo Charity Foundation",
    description: "Community platform for non-profit initiative management, donor tracking, and community development campaign reports with secure donation flows.",
    image: "/charity.png",
    demo: "https://urukundo.echo-solution.com/",
    tags: ["React", "Django", "PostgreSQL", "Next.js"],
    category: "Full Stack & APIs",
  },
  {
    title: "BUSGO — Transit Booking API Engine",
    description: "Online bus ticketing backend architecture implementing layered controller-service-repository patterns, route & schedule scheduling, seat state reservation, and JWT role-based access control.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/BUSGO_frontend",
    tags: ["Java 17", "Spring Boot 3", "MySQL", "JWT Auth", "REST API"],
    category: "Full Stack & APIs",
  },
  {
    title: "Recovery Credit — Portfolio Debt Platform",
    description: "Financial software for lenders to monitor credit portfolios, assess delinquency probability, and manage overdue recovery communication workflows.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/recovery-credit-6",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Full Stack & APIs",
  },
  {
    title: "Kredita — Debt Ledger Ecosystem",
    description: "Unified ecosystem for retail merchants to record customer debts and manage customer lines of credit across mobile client, desktop client, and cloud-hosted API.",
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
    tags: ["Mobile", "Desktop", "Hosted Backend", "PostgreSQL"],
    category: "Full Stack & APIs",
  },
  {
    title: "JobMatch — Recruitment Candidate Portal",
    description: "Candidate discovery and skill evaluation frontend built for an international freelance client on Upwork, prioritizing dense scannable records and fast filtering.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Byukusenge-Andrew/JobMatch",
    tags: ["Angular", "TypeScript", "REST API", "Freelance Upwork"],
    category: "Frontend & 3D",
  },
  {
    title: "offline-edu — Resilient Offline Learning",
    description: "Research into local-first caching patterns and PWA storage to deliver interactive educational curriculum in intermittent-power, zero-connectivity schools.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Offline-First", "Local-First Architecture"],
    category: "Systems & AI",
  },
];

const categories: Category[] = ['All', 'Systems & AI', 'Full Stack & APIs', 'Frontend & 3D'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? supportingProjects
    : supportingProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#0a0c12] border-t border-white/[0.08]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
            <span className="w-2 h-px bg-indigo-500" />
            <span>Engineering Portfolio &bull; Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Flagship Engineering Systems
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
            Architectural deep-dives into low-level systems programming and offline edge AI inference, followed by production web platforms.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* CASE STUDY 1: RIGHTS NAVIGATOR (ADTC 2026) */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-14 rounded-2xl bg-[#0f121a] border border-indigo-500/30 overflow-hidden shadow-xl">
          <div className="px-6 py-4 bg-indigo-950/30 border-b border-indigo-500/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                Case Study 01 &bull; Applied Edge AI &amp; Retrieval (ADTC 2026 Submission)
              </span>
            </div>
            <a
              href="https://github.com/Byukusenge-Andrew/law"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/Byukusenge-Andrew/law</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Rights Navigator — Fully Offline, CPU-Only Multilingual Legal AI
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                In many African jurisdictions, legal research is hampered by intermittent connectivity, prohibitively high cloud API expenses, and multilingual legal texts. Rights Navigator is an offline intelligence engine fine-tuned and quantized to run directly on standard commodity CPU hardware without internet access.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">QLoRA Fine-Tuning &amp; Quantization:</strong> Fine-tuned a compact parameter set on Qwen3-4B, quantized to 4-bit GGUF for sub-second token latency via llama.cpp on standard x86/ARM CPUs.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Two-Stage Similarity-Gated RAG:</strong> Vector indexing using FAISS. Implemented a strict cosine-similarity validation gate so answers remain strictly source-grounded; hallucination probability is minimized by rejecting out-of-corpus queries.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">4 Jurisdictions &bull; 4 Languages:</strong> Indexed and normalized legal statutes for Rwanda, Kenya, Nigeria, and Tanzania with multilingual querying across Swahili, Yoruba, French, and Kinyarwanda.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {["Python", "Qwen3-4B", "llama.cpp", "GGUF Quantization", "FAISS", "QLoRA", "Offline Edge AI"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 text-indigo-300 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Pipeline Visualizer */}
            <div className="lg:col-span-5 bg-zinc-950 p-4 sm:p-5 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-300 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-500">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Offline Pipeline Topology</span>
                </span>
                <span>0 MB Cloud Transfer</span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded bg-[#11131a] border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-400">1. Query Ingestion</span>
                  <span className="text-indigo-400 font-semibold">Swahili / French / Kinyarwanda</span>
                </div>
                <div className="text-center text-zinc-600">&darr;</div>
                <div className="p-2.5 rounded bg-[#11131a] border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-400">2. Vector Index</span>
                  <span className="text-sky-400 font-semibold">FAISS Similarity Gate (&ge;0.78)</span>
                </div>
                <div className="text-center text-zinc-600">&darr;</div>
                <div className="p-2.5 rounded bg-[#11131a] border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-400">3. Local Engine</span>
                  <span className="text-emerald-400 font-semibold">Qwen3-4B GGUF &bull; llama.cpp (CPU)</span>
                </div>
                <div className="text-center text-zinc-600">&darr;</div>
                <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-[11px]">
                  &check; Verified Statute Citation &bull; Deterministic Grounding
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* CASE STUDY 2: AURAUI 2 (C++20 DESKTOP APPLICATION FRAMEWORK) */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-14 rounded-2xl bg-[#0f121a] border border-emerald-500/30 overflow-hidden shadow-xl">
          <div className="px-6 py-4 bg-emerald-950/30 border-b border-emerald-500/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                Case Study 02 &bull; Desktop Runtime &amp; C++20 Systems Engineering
              </span>
            </div>
            <a
              href="https://github.com/Byukusenge-Andrew/auraui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/Byukusenge-Andrew/auraui</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                AuraUI 2 — Secure Cross-Platform C++20 Desktop Application Framework with Web UI
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                A high-performance desktop framework that bridges modern web interfaces (HTML/CSS/JS) with high-performance C++20 backend logic—without opening localhost network ports or exposing host services to local-origin attacks. AuraUI delivers an ultra-lean binary footprint (~800KB vs ~150MB+ in Electron) with a Zero-Trust capability security model.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Zero-Port In-Process IPC (__aura_ipc):</strong> Direct memory-safe messaging between WebView and native C++ dispatcher. Eliminates localhost TCP/HTTP socket exposure, preventing local port scanning, firewall alerts, and cross-site scripting/CORS attacks.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Zero-Trust Capability Guard &amp; Powerbox:</strong> Enforces granular capability scopes via <code className="text-emerald-300 bg-zinc-900 px-1 py-0.5 rounded">aura.config.json</code> (filesystem, shell, window, clipboard, notifications). Direct filesystem paths are shielded behind cryptographically signed Powerbox tokens.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Ultra-Lean Stripped Native Binaries:</strong> Integrates native OS web runtimes (Windows WebView2 Evergreen, macOS WKWebView, Linux WebKitGTK) achieving &lt;25MB idle memory usage and instant cold-boot startup times.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Modern CMake 3.20+ Toolchain &amp; CLI:</strong> Complete developer workflow with <code className="text-emerald-300 bg-zinc-900 px-1 py-0.5 rounded">auraui new</code>, <code className="text-emerald-300 bg-zinc-900 px-1 py-0.5 rounded">auraui dev</code> (hot reloading), and <code className="text-emerald-300 bg-zinc-900 px-1 py-0.5 rounded">auraui build</code> with ASLR, DEP, and Control Flow Guard binary hardening.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {["C++20", "C", "In-Process IPC", "WebView2", "WKWebView", "WebKitGTK", "Zero-Trust Security", "Powerbox Grants", "CMake 3.20+", "Python CLI"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 text-emerald-300 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Pipeline Visualizer */}
            <div className="lg:col-span-5 bg-zinc-950 p-4 sm:p-5 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-300 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-500">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>In-Process IPC Topology</span>
                </span>
                <span>0 Open TCP Ports</span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded bg-[#11131a] border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-400">1. Web UI Frontend</span>
                  <span className="text-emerald-400 font-semibold">window.__aura_ipc.postMessage()</span>
                </div>
                <div className="text-center text-zinc-600">&darr;</div>
                <div className="p-2.5 rounded bg-[#11131a] border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-400">2. Zero-Trust Gate</span>
                  <span className="text-sky-400 font-semibold">aura.config.json &bull; Powerbox Token</span>
                </div>
                <div className="text-center text-zinc-600">&darr;</div>
                <div className="p-2.5 rounded bg-[#11131a] border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-400">3. C++20 Core</span>
                  <span className="text-indigo-400 font-semibold">Aura::Dispatcher &bull; Win32/POSIX</span>
                </div>
                <div className="text-center text-zinc-600">&darr;</div>
                <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-[11px] flex justify-between">
                  <span>&check; Stripped Binary: ~800 KB</span>
                  <span className="text-zinc-400">Idle RAM: &lt;25 MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* CASE STUDY 3: CACHEDB (IN-MEMORY C++ DATABASE) */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-20 rounded-2xl bg-[#0f121a] border border-sky-500/30 overflow-hidden shadow-xl">
          <div className="px-6 py-4 bg-sky-950/30 border-b border-sky-500/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-sky-300 uppercase tracking-wider">
                Case Study 03 &bull; Systems Programming &amp; Memory Architecture
              </span>
            </div>
            <a
              href="https://github.com/Byukusenge-Andrew/Engdb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/Byukusenge-Andrew/Engdb</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Cachedb — Redis-Like In-Memory Database Engine in C++
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                A custom in-memory key-value engine engineered in modern C++ from first principles. Rather than relying on simple LRU eviction, Cachedb implements advanced Adaptive Replacement Cache (ARC) to dynamically self-tune under varying access patterns, alongside HyperLogLog cardinality estimation and Pub/Sub mechanics.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Adaptive Replacement Cache (ARC):</strong> Dynamically balances recency cache ($T_1$) and frequency cache ($T_2$) using ghost history tracking ($B_1$, $B_2$), achieving ~15.7% higher hit ratios than standard LRU on mixed workloads.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">HyperLogLog Cardinality Estimation:</strong> Estimates distinct elements across billions of events with &lt;1.5 KB register memory per key, maintaining a standard error rate bound by 1.04 / &radic;m.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Multi-Database &amp; Pub/Sub:</strong> Multi-tenant database partitioning, lock-free read paths, and publish/subscribe message dispatching over TCP sockets.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {["C++", "ARC Eviction", "HyperLogLog", "Pub/Sub", "Memory Allocation", "POSIX Sockets", "In-Memory Engine"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 text-sky-300 border border-sky-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ARC Memory Partitioning Diagram */}
            <div className="lg:col-span-5 bg-zinc-950 p-4 sm:p-5 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-300 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-500">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <Database className="w-3.5 h-3.5" />
                  <span>ARC Memory Partitioning</span>
                </span>
                <span>Self-Tuning Target `p`</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="p-2 rounded bg-[#11131a] border border-zinc-800">
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Recency Cache ($T_1$)</span>
                    <span className="text-sky-300">Size: `p`</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-1.5">
                    <div className="bg-sky-500 h-1.5 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>

                <div className="p-2 rounded bg-[#11131a] border border-zinc-800">
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Frequency Cache ($T_2$)</span>
                    <span className="text-indigo-300">Size: `c - p`</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-1.5">
                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '55%' }} />
                  </div>
                </div>

                <div className="p-2 rounded bg-[#11131a] border border-zinc-800">
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Ghost Cache History ($B_1 \cup B_2$)</span>
                    <span className="text-zinc-500">Metadata tracking</span>
                  </div>
                  <p className="text-[10px] text-zinc-500">
                    Hits in $B_1$ increase target `p` (favoring recency); hits in $B_2$ decrease `p` (favoring frequency).
                  </p>
                </div>

                <div className="p-2 bg-sky-950/20 border border-sky-800/30 rounded text-sky-300 text-[11px]">
                  Hit Ratio Benchmark: 79.8% vs Standard LRU 64.1%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* PRODUCTION & SUPPORTING PROJECTS GRID */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Production Web Platforms &amp; Client Projects
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Full-stack web applications, 3D graphics visualizations, and client-commissioned platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 overflow-hidden transition-colors"
            >
              <div>
                <div className="relative overflow-hidden aspect-video bg-zinc-950 border-b border-zinc-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter contrast-[1.02]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-semibold text-white leading-snug mb-2">
                    {project.title}
                  </h4>
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
                      <span>Demo</span>
                    </a>
                  )}
                </div>
                <span className="text-[10px] font-mono text-zinc-600 pt-3">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

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
