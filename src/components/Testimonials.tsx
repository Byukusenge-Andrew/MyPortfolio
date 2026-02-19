import { motion } from 'framer-motion';

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
    role: "Fellow Student",
    image: "https://i.pravatar.cc/150?img=11",
    text: "Byukusenge is a great developer and an even better person to collaborate with. Always willing to help, a natural team player, and an excellent problem solver who finds a way to get the job done no matter the challenge.",
    stars: 5,
  },
  {
    id: 2,
    name: "Kivugo Fignole",
    role: "Friend & Collaborator",
    image: "https://i.pravatar.cc/150?img=2",
    text: "Having known Byukusenge for years, I can confidently say he brings great personality and dedication to everything he does. He lifts those around him and approaches every challenge with positivity and creativity.",
    stars: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-slate-600'} fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-950">
      <div className="absolute inset-x-0 top-0 h-px section-separator" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What People Say</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Words from people I've had the privilege of working and collaborating with.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 border border-white/5 hover:border-indigo-500/20 transition-all relative"
            >
              {/* Decorative quote */}
              <span className="absolute top-4 right-6 text-7xl text-indigo-500/10 font-serif leading-none select-none">
                "
              </span>

              {/* Stars */}
              <Stars count={testimonial.stars} />

              {/* Quote */}
              <p className="text-slate-300 leading-relaxed mt-4 mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-indigo-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;