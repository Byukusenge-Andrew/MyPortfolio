import { Trophy, ShieldCheck, Award, Users, Lightbulb } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-4 h-4 text-amber-400" />,
    title: "2nd Place — Nationwide Cybersecurity Competition",
    organization: "National Cybersecurity Training",
    date: "2024",
    type: "National Award",
    description: "Competed in high-intensity defensive and offensive cybersecurity challenges, placing 2nd across Rwanda.",
  },
  {
    icon: <Award className="w-4 h-4 text-sky-400" />,
    title: "FIRST Lego League Morocco",
    organization: "FIRST Robotics International",
    date: "2023",
    type: "International Award",
    description: "Received award for team collaboration while representing Rwanda in international robotics competitions.",
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    title: "Cyberium Cybersecurity Training",
    organization: "Cyberium Academy",
    date: "2025",
    type: "Certificate",
    description: "Rigorous certification covering ethical hacking, defensive security strategies, and network security labs.",
  },
  {
    icon: <Lightbulb className="w-4 h-4 text-indigo-400" />,
    title: "Ideation & Design Thinking Workshop",
    organization: "Innovation Labs",
    date: "Sep 2024",
    type: "Certificate",
    description: "Design thinking, rapid prototyping, and creative problem solving for technological product development.",
  },
  {
    icon: <Users className="w-4 h-4 text-purple-400" />,
    title: "RCA Brainiacs Mentor",
    organization: "Rwanda Coding Academy",
    date: "2024 – 2025",
    type: "Leadership",
    description: "Mentored junior students in low-level programming, software design principles, and competitive coding.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#090a0f] border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
            <span className="w-2 h-px bg-indigo-500" />
            <span>Honors &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Achievements &amp; Certificates</h2>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            Recognitions, cybersecurity tournament awards, and specialized training highlighted in my curriculum vitae.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
                    {item.date}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                  {item.type}
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-indigo-400 font-medium mb-3">
                  {item.organization}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Credential Status</span>
                <span className="text-emerald-400">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
