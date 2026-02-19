import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { Code2, Users, Globe, Coffee } from 'lucide-react';

const stats = [
  { icon: <Code2 className="w-5 h-5" />, value: '25+', label: 'Projects Built' },
  { icon: <Users className="w-5 h-5" />, value: '15+', label: 'Happy Clients' },
  { icon: <Globe className="w-5 h-5" />, value: '3+', label: 'Years Coding' },
  { icon: <Coffee className="w-5 h-5" />, value: '∞', label: 'Cups of Coffee' },
];

const About = () => {
  return (
    <section className="py-24 bg-gray-900/50" id="about">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Decorative border */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform rotate-3 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl transform -rotate-2 opacity-40" />
              <img
                src="/student image.webp"
                alt="Byukusenge Andre"
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = 'https://api.dicebear.com/8.x/initials/svg?seed=AB&backgroundColor=6366f1';
                }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Hello! I'm{' '}
              <span className="gradient-text">Byukusenge Andre</span>
            </h3>

            <p className="text-slate-300 leading-relaxed">
              I'm a passionate <span className="text-indigo-400 font-medium">Full Stack Developer</span> with
              a keen eye for creating elegant solutions in the least amount of time. I specialize in building
              robust, scalable applications that meet real business needs while delivering the best possible
              user experience.
            </p>

            <p className="text-slate-400 leading-relaxed">
              With a diverse skill set spanning frontend, backend, cloud, and AI/ML, I excel at leading teams
              and tackling complex technological challenges. My experience with languages like JavaScript, Python,
              C++, and Java gives me a strong foundation to deliver innovative solutions in high-pressure environments.
            </p>

            {/* Download button */}
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="/cisc_2_2.pdf"
                download
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaDownload />
                Download Resume
              </motion.a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-indigo-500/40 text-indigo-300 px-6 py-3 rounded-xl font-medium hover:bg-indigo-500/10 transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-2xl p-6 text-center border border-indigo-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;