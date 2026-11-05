import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Migisha Ivan",
    role: "Engineering Peer & Collaborator",
    image: "https://i.pravatar.cc/150?img=11",
    text: "Byukusenge is a high-caliber engineer and an exceptional collaborator. He approaches complex architecture problems with methodical precision and consistently ensures technical tasks meet delivery benchmarks.",
    stars: 5,
  },
  {
    id: 2,
    name: "Kivugo Fignole",
    role: "Software Developer & Project Partner",
    image: "https://i.pravatar.cc/150?img=2",
    text: "Collaborating with Byukusenge across multiple sprint cycles showed his technical depth in both backend API design and frontend UI development. He remains calm under pressure and always delivers clean, well-tested code.",
    stars: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < count ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'}`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#0c0e15] border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
            <span className="w-2 h-px bg-indigo-500" />
            <span>Peer Recommendations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What People Say</h2>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            Feedback and observations from developers and teammates I have built software with.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Stars count={item.stars} />
                  <span className="text-[11px] font-mono text-zinc-500">Verified Teammate</span>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                />
                <div>
                  <p className="text-white text-sm font-semibold">{item.name}</p>
                  <p className="text-zinc-400 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
