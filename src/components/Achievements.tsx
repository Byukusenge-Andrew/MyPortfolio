import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Target, Award } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "2nd Place — National Hackathon",
    organization: "National Cybersecurity Authority",
    date: "2024",
    color: "from-yellow-500 to-orange-500",
    glow: "shadow-yellow-500/20",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Microsoft Certified: Azure Developer",
    organization: "Microsoft",
    date: "2024",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Cyberium Graduate",
    organization: "Cyberium Academy",
    date: "2025",
    color: "from-green-500 to-teal-500",
    glow: "shadow-green-500/20",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Full Stack Developer Certification",
    organization: "ALX Africa",
    date: "2024",
    color: "from-purple-500 to-indigo-500",
    glow: "shadow-purple-500/20",
  },
];

const stats = [
  { label: "Certifications", value: "5+" },
  { label: "Awards Won", value: "3+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Happy Clients", value: "15+" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-gray-900/60 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px section-separator" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Recognition and certifications that reflect my commitment to excellence and continuous growth in technology.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/30 shadow-xl ${achievement.glow} transition-all duration-300`}
            >
              {/* Header gradient */}
              <div className={`bg-gradient-to-r ${achievement.color} p-5`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    {achievement.icon}
                  </div>
                  <span className="text-white/80 text-sm font-medium bg-white/10 px-2 py-0.5 rounded-full">
                    {achievement.date}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">{achievement.title}</h3>
              </div>
              {/* Body */}
              <div className="p-4">
                <p className="text-slate-400 text-sm">{achievement.organization}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-0.5 mt-4 bg-gradient-to-r ${achievement.color} rounded-full opacity-50`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center border border-indigo-500/10"
            >
              <h3 className="text-3xl font-extrabold gradient-text">{stat.value}</h3>
              <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;