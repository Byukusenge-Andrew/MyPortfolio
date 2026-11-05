import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: string | JSX.Element;
}

export default function TerminalDrawer({ isOpen, onClose }: TerminalDrawerProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs font-mono text-zinc-300">
          <p className="text-emerald-400 font-semibold">
            Andre.dev [Version 2.4.0-sys] &bull; Rwanda Coding Academy
          </p>
          <p className="text-zinc-400">
            Type <span className="text-indigo-400 font-bold">help</span> to view available system commands, or try <span className="text-indigo-400 font-bold">arch</span> or <span className="text-indigo-400 font-bold">bench</span>.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: string | JSX.Element = '';

    if (cmd.startsWith('auraui ')) {
      const sub = cmd.replace('auraui ', '').trim();
      if (sub === 'dev') {
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1 bg-zinc-950 p-2.5 rounded border border-zinc-800">
            <p className="text-emerald-400 font-semibold">[AuraUI CLI] Starting local development session...</p>
            <p className="text-zinc-400">&bull; Initializing native OS webview (Evergreen WebView2)...</p>
            <p className="text-zinc-400">&bull; Binding in-process IPC bridge: window.__aura_ipc</p>
            <p className="text-zinc-400">&bull; Zero-Trust capability validator: ACTIVE (aura.config.json)</p>
            <p className="text-emerald-300">&check; Application launched in 14ms (Memory: 22.4 MB). 0 open TCP ports.</p>
          </div>
        );
      } else if (sub.startsWith('new')) {
        const appName = sub.replace('new', '').trim() || 'my-app';
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1 bg-zinc-950 p-2.5 rounded border border-zinc-800">
            <p className="text-emerald-400 font-semibold">[AuraUI CLI] Scaffolding new application: {appName}</p>
            <p className="text-zinc-400">&bull; Generating CMakeLists.txt (C++20 presets)...</p>
            <p className="text-zinc-400">&bull; Generating aura.config.json (Zero-Trust security manifest)...</p>
            <p className="text-zinc-400">&bull; Generating src/main.cpp &amp; web/index.html...</p>
            <p className="text-emerald-300">&check; Project {appName} created! Run `auraui dev` to start.</p>
          </div>
        );
      } else if (sub === 'build') {
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1 bg-zinc-950 p-2.5 rounded border border-zinc-800">
            <p className="text-emerald-400 font-semibold">[AuraUI CLI] Compiling production release...</p>
            <p className="text-zinc-400">&bull; Invoking CMake with -O3 -flto...</p>
            <p className="text-zinc-400">&bull; Applying binary hardening: /guard:cf, /DYNAMICBASE, /NXCOMPAT...</p>
            <p className="text-zinc-400">&bull; Stripping debug symbols...</p>
            <p className="text-emerald-300">&check; Hardened standalone binary ready: dist/app.exe (782 KB)</p>
          </div>
        );
      } else {
        output = <p className="text-xs font-mono text-zinc-400">AuraUI CLI: unknown option '{sub}'. Try 'auraui dev', 'auraui new my-app', or 'auraui build'.</p>;
      }
    } else {
      switch (cmd) {
        case 'help':
          output = (
            <div className="space-y-1 text-xs font-mono text-zinc-300">
              <p className="text-zinc-500">// Available system commands</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 py-1">
                <div><span className="text-indigo-400 font-semibold">whoami</span> - Identity &amp; Academy background</div>
                <div><span className="text-indigo-400 font-semibold">projects</span> - List flagship engineering works</div>
                <div><span className="text-indigo-400 font-semibold">auraui</span> - AuraUI 2 C++20 framework specs &amp; CLI</div>
                <div><span className="text-indigo-400 font-semibold">arch</span> - Rights Navigator RAG pipeline</div>
                <div><span className="text-indigo-400 font-semibold">bench</span> - Cachedb ARC vs LRU eviction metrics</div>
                <div><span className="text-indigo-400 font-semibold">stack</span> - Systems and AI tech layers</div>
                <div><span className="text-indigo-400 font-semibold">cv</span> - Download official curriculum vitae</div>
                <div><span className="text-indigo-400 font-semibold">contact</span> - Phone, email &amp; location</div>
                <div><span className="text-indigo-400 font-semibold">clear</span> - Flush terminal buffer</div>
              </div>
            </div>
          );
          break;

        case 'auraui':
          output = (
            <div className="text-xs font-mono text-zinc-300 space-y-2 bg-zinc-950 p-3 rounded border border-zinc-800">
              <p className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>AuraUI 2 &bull; Secure C++20 Desktop Application Framework with Web UI</span>
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Cross-platform desktop engine combining HTML/CSS/JS interfaces with high-performance C++20 backend logic without opening localhost network ports. Features Zero-Trust capability scopes, cryptographic Powerbox tokens, in-process IPC, and an ultra-lean ~800KB binary footprint (&lt;25MB idle RAM vs 150MB+ in Electron).
              </p>
              <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800/80 text-[11px] space-y-1">
                <div className="text-zinc-400 font-semibold">// CLI Commands &amp; Architecture:</div>
                <div><span className="text-emerald-400">auraui new &lt;app&gt;</span> <span className="text-zinc-500">- Scaffold C++20 core + Web UI + aura.config.json</span></div>
                <div><span className="text-emerald-400">auraui dev</span> <span className="text-zinc-500">- Launch hot-reload dev session with in-process IPC bridge</span></div>
                <div><span className="text-emerald-400">auraui build</span> <span className="text-zinc-500">- Compile CMake 3.20+ with ASLR, DEP &amp; Control Flow Guard</span></div>
              </div>
              <p>
                <a
                  href="https://github.com/Byukusenge-Andrew/auraui"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 underline font-semibold inline-flex items-center gap-1"
                >
                  <span>&rarr; Open github.com/Byukusenge-Andrew/auraui</span>
                </a>
              </p>
            </div>
          );
          break;

        case 'whoami':
          output = (
            <div className="text-xs font-mono text-zinc-300 space-y-1">
              <p className="text-white font-semibold">Andre Byukusenge &bull; Software Engineer</p>
              <p className="text-zinc-400">Institution: Rwanda Coding Academy (Software Engineering &amp; Embedded Systems)</p>
              <p className="text-zinc-400">Specialization: Low-level C++, NestJS Backend Services, Edge AI / RAG</p>
              <p className="text-emerald-400">Honors: 2nd Place Nationwide Cybersecurity Competition, FIRST Lego League Morocco</p>
            </div>
          );
          break;

        case 'projects':
          output = (
            <div className="text-xs font-mono text-zinc-300 space-y-2">
              <div className="border-l-2 border-indigo-500 pl-2">
                <p className="text-white font-semibold">1. Rights Navigator [ADTC 2026 Submission]</p>
                <p className="text-zinc-400">Offline legal AI assistant fine-tuned with QLoRA on Qwen3-4B, quantized to GGUF (llama.cpp on CPU), similarity-gated 2-stage FAISS RAG across 4 African jurisdictions.</p>
                <p className="text-indigo-400 text-[11px]">github.com/Byukusenge-Andrew/law</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-2">
                <p className="text-white font-semibold">2. AuraUI 2 [Secure C++20 Desktop Application Framework]</p>
                <p className="text-zinc-400">Cross-platform desktop engine bridging Web UI with C++20 backend via zero-port in-process IPC (__aura_ipc), Zero-Trust capability scopes, and Powerbox tokens (~800KB binary, &lt;25MB idle RAM).</p>
                <p className="text-emerald-400 text-[11px]">github.com/Byukusenge-Andrew/auraui</p>
              </div>
              <div className="border-l-2 border-sky-500 pl-2">
                <p className="text-white font-semibold">3. Cachedb [C++ In-Memory Database]</p>
                <p className="text-zinc-400">Redis-like engine with Adaptive Replacement Cache (ARC), HyperLogLog cardinality estimation, and Pub/Sub message broker.</p>
                <p className="text-sky-400 text-[11px]">github.com/Byukusenge-Andrew/Engdb</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-2">
                <p className="text-white font-semibold">4. CryptoChain [Python Distributed Blockchain]</p>
                <p className="text-zinc-400">SHA-256 proof-of-work mining, UTXO ledger verification, and peer-to-peer transaction protocol.</p>
                <p className="text-purple-400 text-[11px]">github.com/Byukusenge-Andrew/CryptoChain</p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-2">
                <p className="text-white font-semibold">5. SMMS, BUSGO, ModelVerse, TutorialHub</p>
                <p className="text-zinc-400">Django + Next.js platform &bull; Java 17 transit API &bull; Three.js 3D viewer &bull; CS / DSA platform.</p>
              </div>
            </div>
          );
          break;

      case 'arch':
        output = (
          <pre className="text-[11px] font-mono text-emerald-300 bg-zinc-950 p-3 rounded border border-zinc-800 leading-tight overflow-x-auto">
{`[User Input: Legal Question]
           │
           ▼
[Multilingual Language Classifier: Swahili, Yoruba, French, Kinyarwanda]
           │
           ▼
[Stage 1: FAISS Similarity-Gated Vector Index Retrieval]
           │
           ├── Similarity Score < Threshold? ──► [Hallucination Fallback: "No source found"]
           │
           ▼
[Stage 2: Grounding Validator & Context Augmenter]
           │
           ▼
[llama.cpp Engine: 4-bit Quantized GGUF Qwen3-4B]
           │
           ▼
[Deterministic Offline Grounded Legal Answer (0 MB Cloud Transfer)]`}
          </pre>
        );
        break;

      case 'bench':
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1 bg-zinc-950 p-3 rounded border border-zinc-800">
            <p className="text-indigo-400 font-semibold">// Cachedb: Eviction Algorithm Hit-Ratio Under Mixed Workload (1M ops)</p>
            <p>Standard LRU (Least Recently Used):      <span className="text-amber-400 font-bold">58.4%</span> hit ratio</p>
            <p>Standard LFU (Least Frequently Used):    <span className="text-amber-400 font-bold">64.1%</span> hit ratio</p>
            <p className="text-emerald-400 font-semibold">
              ARC (Adaptive Replacement Cache):          79.8% hit ratio (+15.7% advantage)
            </p>
            <p className="text-[11px] text-zinc-500 mt-1">Memory overhead per HyperLogLog key: &lt;1.5 KB with 1.04/sqrt(m) precision.</p>
          </div>
        );
        break;

      case 'stack':
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1.5">
            <p><span className="text-indigo-400 font-bold">[Layer 0 - Systems]:</span> C, C++, POSIX APIs, Microcontrollers, Cache Policies</p>
            <p><span className="text-indigo-400 font-bold">[Layer 1 - Edge AI]:</span> llama.cpp, GGUF, QLoRA, FAISS Vector Search, Qwen</p>
            <p><span className="text-indigo-400 font-bold">[Layer 2 - Backend]:</span> NestJS, PostgreSQL, Django, Spring Boot, Redis, REST APIs</p>
            <p><span className="text-indigo-400 font-bold">[Layer 3 - Client]:</span> React, Next.js, Three.js / WebGL, Angular, TypeScript</p>
          </div>
        );
        break;

      case 'cv':
        output = (
          <div className="text-xs font-mono text-emerald-400">
            <p>Dispatching curriculum vitae download...</p>
            <a
              href="/cisc_2_2.pdf"
              download
              className="text-indigo-400 underline hover:text-indigo-300 mt-1 inline-block"
            >
              Click here if download does not start automatically &rarr;
            </a>
          </div>
        );
        window.open('/cisc_2_2.pdf', '_blank');
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p>Email:    <a href="mailto:andrebyukusenge9@gmail.com" className="text-indigo-400">andrebyukusenge9@gmail.com</a></p>
            <p>Phone:    <a href="tel:+250741522244" className="text-indigo-400">+250 741 522 244</a></p>
            <p>Location: Nyabihu, Rwanda</p>
            <p>GitHub:   <a href="https://github.com/Byukusenge-Andrew" target="_blank" rel="noreferrer" className="text-indigo-400">github.com/Byukusenge-Andrew</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="text-xs font-mono text-red-400">
            Command not recognized: "{cmd}". Type <span className="text-white underline">help</span> for valid options.
          </p>
        );
        break;
    }
  }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-2xl bg-[#0b0d13] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[520px] z-10"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#11131a] border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-3 w-px bg-zinc-800 mx-1.5" />
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>andre@rca-sys: ~/portfolio</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">Press ESC to exit</span>
                <button
                  onClick={onClose}
                  className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded"
                  aria-label="Close terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Logs Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  {item.command && (
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="text-emerald-400">&gt;</span>
                      <span className="text-zinc-200 font-semibold">{item.command}</span>
                    </div>
                  )}
                  <div className="text-zinc-300 pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Command Input Row */}
            <form
              onSubmit={handleCommand}
              className="flex items-center gap-2 px-4 py-3 bg-[#0e1017] border-t border-zinc-800"
            >
              <span className="text-emerald-400 font-mono text-xs font-bold">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help', 'arch', 'bench', 'projects'..."
                className="flex-1 bg-transparent border-0 text-white font-mono text-xs placeholder-zinc-600 focus:outline-none"
              />
              <button
                type="submit"
                className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-[11px] font-mono flex items-center gap-1 transition-colors"
              >
                <CornerDownLeft className="w-3 h-3" />
                <span>Run</span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
