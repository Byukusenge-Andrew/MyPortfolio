import { useState } from 'react';
import {
  Globe, Server, Brain, Shield, Cpu, Terminal, CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface TechItem {
  name: string;
  detail: string;
  practicalApplication: string;
}

interface SystemLayer {
  layer: string;
  title: string;
  icon: JSX.Element;
  tagline: string;
  technologies: TechItem[];
}

const systemLayers: SystemLayer[] = [
  {
    layer: "Layer 0",
    title: "Low-Level Systems & Hardware Interfacing",
    icon: <Cpu className="w-4 h-4 text-emerald-400" />,
    tagline: "Memory architectures, algorithm design, POSIX sockets & microcontrollers",
    technologies: [
      {
        name: "C & C++ (Modern C++20)",
        detail: "Pointers, dynamic memory management, STL algorithms, RAII, hardened compilation",
        practicalApplication: "AuraUI 2 desktop runtime & Cachedb in-memory ARC database engine",
      },
      {
        name: "Native Desktop Runtime & In-Process IPC",
        detail: "Cross-platform WebView2 / WKWebView / WebKitGTK bindings, Zero-Trust powerbox capability security",
        practicalApplication: "Built AuraUI 2 framework with zero-port IPC and ~800KB stripped binary size",
      },
      {
        name: "Cache Eviction & Cardinality",
        detail: "ARC (Adaptive Replacement Cache), LRU, LFU, HyperLogLog algorithm",
        practicalApplication: "Sub-microsecond key lookups with bounded memory constraints",
      },
      {
        name: "Embedded Systems & IoT",
        detail: "Microcontroller logic, sensor telemetry, serial communication, hardware buses",
        practicalApplication: "Studied at Rwanda Coding Academy; robotics ideation at FIRST Lego League",
      },
      {
        name: "Low-Level Networking & Sockets",
        detail: "POSIX TCP/UDP socket programming, protocol serialization, Pub/Sub",
        practicalApplication: "Custom client-server TCP broker for multi-database instances",
      },
    ],
  },
  {
    layer: "Layer 1",
    title: "Edge AI, Quantization & Retrieval Systems",
    icon: <Brain className="w-4 h-4 text-indigo-400" />,
    tagline: "Offline CPU inference, vector search, parameter fine-tuning & hallucination gating",
    technologies: [
      {
        name: "llama.cpp & GGUF Quantization",
        detail: "4-bit quantization (Q4_K_M), offline CPU execution without GPU dependency",
        practicalApplication: "Rights Navigator offline legal intelligence runner",
      },
      {
        name: "FAISS Similarity-Gated Vector Search",
        detail: "Dense vector indexing, cosine similarity threshold gating, out-of-domain rejection",
        practicalApplication: "Grounding legal question-answering across 4 African legal codes",
      },
      {
        name: "QLoRA Parameter Fine-Tuning",
        detail: "Low-rank adaptation on small open models (Qwen3-4B), prompt template engineering",
        practicalApplication: "Fine-tuned multilingual models with zero cloud API reliance",
      },
      {
        name: "Multilingual Legal Corpora",
        detail: "Cross-lingual embedding search for Swahili, Yoruba, French, Kinyarwanda",
        practicalApplication: "ADTC 2026 legal assistance submission",
      },
    ],
  },
  {
    layer: "Layer 2",
    title: "Production Backend & Distributed Services",
    icon: <Server className="w-4 h-4 text-sky-400" />,
    tagline: "Production RESTful microservices, relational schemas, caching & security",
    technologies: [
      {
        name: "NestJS & Node.js",
        detail: "Modular architecture, dependency injection, async request handling, guards",
        practicalApplication: "Production microservices and enterprise API gateways",
      },
      {
        name: "PostgreSQL & Database Optimization",
        detail: "Relational schema modeling, B-Tree index tuning, transactional integrity, migrations",
        practicalApplication: "Optimized complex query execution paths and low-latency storage",
      },
      {
        name: "Spring Boot 3 & Java 17",
        detail: "Layered controller-service-repository patterns, Spring Security, Hibernate ORM",
        practicalApplication: "BUSGO transit booking and schedule reservation engine",
      },
      {
        name: "Django & Python Services",
        detail: "Django REST Framework, ORM, multi-tenant isolation, background jobs",
        practicalApplication: "SMMS social orchestration and account management backend",
      },
    ],
  },
  {
    layer: "Layer 3",
    title: "Visual Computing & Client Platforms",
    icon: <Globe className="w-4 h-4 text-purple-400" />,
    tagline: "In-browser 3D graphics, state management, design systems & cross-platform",
    technologies: [
      {
        name: "Three.js & WebGL",
        detail: "Scene graphs, camera frustums, procedural geometries, PBR materials, shaders",
        practicalApplication: "ModelVerse interactive 3D model studio directly in the browser",
      },
      {
        name: "React & Next.js",
        detail: "Server components, client hydration, dynamic routing, hook lifecycle tuning",
        practicalApplication: "Recovery Credit and SMMS responsive frontend architectures",
      },
      {
        name: "TypeScript & Strict Type Safety",
        detail: "Discriminated unions, generics, mapped types, compile-time contract enforcement",
        practicalApplication: "Standard across all client, service, and full-stack repositories",
      },
      {
        name: "Angular & Component Architecture",
        detail: "Directives, RxJS observables, reactive forms, modular client routing",
        practicalApplication: "JobMatch recruitment portal built for an Upwork international client",
      },
    ],
  },
  {
    layer: "Layer 4",
    title: "Cybersecurity & System Hardening",
    icon: <Shield className="w-4 h-4 text-amber-400" />,
    tagline: "Vulnerability analysis, secure authentication, defensive protocols & code review",
    technologies: [
      {
        name: "Vulnerability Auditing & Code Review",
        detail: "Static analysis, memory safety audit, OWASP Top 10 mitigation, sanitized inputs",
        practicalApplication: "Placed 2nd in nationwide cybersecurity competition",
      },
      {
        name: "JWT & Role-Based Access Control",
        detail: "Cryptographic token verification, refresh token rotation, granular permission trees",
        practicalApplication: "Secured enterprise auth boundaries in BUSGO and production services",
      },
      {
        name: "Ethical Hacking & Network Defense",
        detail: "Network packet inspection, security protocol audit, penetration lab practices",
        practicalApplication: "Cyberium Academy cybersecurity graduate certification",
      },
      {
        name: "AWS EC2 & Linux Hardening",
        detail: "Security groups, IAM policies, SSH bastion configs, container isolation",
        practicalApplication: "Deployed and maintained scalable services on AWS EC2",
      },
    ],
  },
];

export default function Skills() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const activeLayer = systemLayers[selectedLayerIndex];

  return (
    <section id="skills" className="py-24 bg-[#090a0f] border-t border-white/[0.08]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
            <span className="w-2 h-px bg-indigo-500" />
            <span>Systems Architecture &bull; Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Knowledge by System Layer
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
            Eliminating arbitrary percentage bars in favor of concrete architectural capabilities, from low-level memory allocation to edge AI inference and distributed backends.
          </p>
        </div>

        {/* Master-Detail Layer Switcher */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selection Nav (Left Column) */}
          <div className="lg:col-span-5 space-y-2">
            {systemLayers.map((layer, idx) => {
              const isSelected = selectedLayerIndex === idx;
              return (
                <button
                  key={layer.layer}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-zinc-900 border-indigo-500/50 shadow-md ring-1 ring-indigo-500/20'
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-400'
                          : 'bg-zinc-800 border border-zinc-700/60 text-zinc-400'
                      }`}
                    >
                      {layer.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                          {layer.layer}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white leading-tight mt-0.5">
                        {layer.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 leading-snug mt-1 line-clamp-1">
                        {layer.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 mt-1 transition-transform ${
                      isSelected ? 'text-indigo-400 translate-x-0.5' : 'text-zinc-600 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Layer Detail Specifications (Right Column) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0e1118] border border-zinc-800/90 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  {activeLayer.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
                    {activeLayer.layer} Specifications
                  </span>
                  <h3 className="text-lg font-bold text-white">{activeLayer.title}</h3>
                </div>
              </div>
              <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                Verified Skills
              </span>
            </div>

            <p className="text-xs text-zinc-400 font-mono mb-6 pb-2 border-b border-zinc-800/60">
              // {activeLayer.tagline}
            </p>

            <div className="space-y-4">
              {activeLayer.technologies.map((tech, tIdx) => (
                <div
                  key={tIdx}
                  className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{tech.name}</span>
                    </h5>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-2.5 pl-3.5">
                    {tech.detail}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/40 px-2.5 py-1 rounded w-fit">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Applied: {tech.practicalApplication}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Tech Strip */}
        <div className="mt-14 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>Complete verified toolset: C, C++, Python, Java 17, NestJS, React, Next.js, llama.cpp, FAISS, PostgreSQL, Docker, AWS EC2, Three.js, Linux</span>
          </div>
          <a
            href="#projects"
            className="text-xs font-mono text-indigo-400 hover:text-indigo-300 whitespace-nowrap flex items-center gap-1"
          >
            <span>Review implementation case studies</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
