import { Download, GraduationCap, CheckCircle2 } from 'lucide-react';

const coreHighlights = [
  'Embedded systems & low-level systems programming in C / C++',
  'Production backend services using NestJS, PostgreSQL & AWS EC2',
  'Offline, CPU-only edge AI: QLoRA fine-tuning, GGUF/llama.cpp & FAISS RAG',
  'Cybersecurity code review, vulnerability auditing & network defense',
];

const extracurriculars = [
  { title: "RCA Brainiacs Mentor", desc: "Mentored junior students in programming and software development." },
  { title: "Reading, Chess & CodeTech Clubs", desc: "Active member in computational thinking and strategy groups." },
  { title: "FIRST Lego League Morocco", desc: "Award for team collaboration representing Rwanda in robotics." },
  { title: "Football Team Member", desc: "Rwanda Coding Academy weekly training and competitive matches." },
];

const About = () => {
  return (
    <section className="py-20 bg-[#0c0e15] border-t border-white/[0.06]" id="about">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
            <span className="w-2 h-px bg-indigo-500" />
            <span>Profile &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            Software engineer across embedded systems, backend infrastructure, and applied AI/ML.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Education */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio summary */}
            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Systems-level rigor paired with modern full-stack &amp; applied AI.
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                I am a software engineer with a comprehensive background in embedded systems, backend engineering, and applied machine learning. My technical capabilities are best represented by{' '}
                <span className="text-white font-medium">Rights Navigator</span>, an offline legal AI assistant fine-tuned and quantized for CPU-only execution across four African jurisdictions (Rwanda, Kenya, Nigeria, Tanzania).
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I have developed and shipped production backend services in NestJS and PostgreSQL on AWS EC2, conducted independent research into novel similarity-gated RAG indexing techniques, and performed vulnerability analysis and cybersecurity code reviews.
              </p>

              {/* Core capabilities list */}
              <div className="pt-2 border-t border-zinc-800/80">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">Core Engineering Competencies</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {coreHighlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Rwanda Coding Academy</h4>
                  <p className="text-xs text-indigo-400 font-medium">High School Diploma, Software Engineering &amp; Embedded Systems &bull; 2026</p>
                </div>
              </div>
              <ul className="text-xs text-zinc-400 space-y-1.5 list-disc list-inside pl-1">
                <li>Studied software engineering together with low-level embedded hardware systems.</li>
                <li>Completed specialized cybersecurity training and placed 2nd in a nationwide cybersecurity competition.</li>
                <li>Active in coding tournaments, mentored junior developers in coding practices, and organized STEM sessions.</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/cisc_2_2.pdf"
                download
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column: Specs & Extracurriculars */}
          <div className="lg:col-span-5 space-y-5">
            {/* Professional Specs */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">Professional Attributes</h4>
              <dl className="divide-y divide-zinc-800/60 text-xs">
                <div className="py-2 flex justify-between">
                  <dt className="text-zinc-500">Location</dt>
                  <dd className="text-zinc-200 font-medium">Nyabihu, Rwanda</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="text-zinc-500">Specialization</dt>
                  <dd className="text-zinc-200 font-medium">Backend, Embedded &amp; Applied AI</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="text-zinc-500">Institution</dt>
                  <dd className="text-zinc-200 font-medium">Rwanda Coding Academy</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="text-zinc-500">Languages</dt>
                  <dd className="text-zinc-200 font-medium">English (Expert), Kinyarwanda (Expert), French (Int.)</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="text-zinc-500">Flagship Work</dt>
                  <dd className="text-indigo-400 font-medium">Rights Navigator (ADTC 2026)</dd>
                </div>
              </dl>
            </div>

            {/* Extracurriculars from CV */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">Extracurricular Leadership</h4>
              <div className="space-y-3">
                {extracurriculars.map((e, idx) => (
                  <div key={idx} className="pb-2.5 border-b border-zinc-800/50 last:border-0 last:pb-0">
                    <p className="text-xs font-semibold text-white mb-0.5">{e.title}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
