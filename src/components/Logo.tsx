const Logo = () => {
  return (
    <a href="#hero" className="flex items-center gap-2.5 group cursor-pointer focus:outline-none">
      <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
        <span className="font-mono text-sm font-semibold tracking-tighter select-none">&gt;_</span>
      </div>
      <div className="flex items-baseline tracking-tight font-semibold text-base">
        <span className="text-white group-hover:text-indigo-300 transition-colors">Andre</span>
        <span className="text-zinc-500 font-mono text-xs ml-0.5">.dev</span>
      </div>
    </a>
  );
};

export default Logo;
