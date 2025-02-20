import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy, Star, Target, Lightbulb } from 'lucide-react';

const achievements = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2023",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "1st Place - National Hackathon",
    organization: "Tech Innovation Challenge",
    date: "2023",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Google Cloud Professional",
    organization: "Google Cloud",
    date: "2023",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Best Student Developer",
    organization: "University of Rwanda",
    date: "2022",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Microsoft Certified: Azure Developer",
    organization: "Microsoft",
    date: "2023",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation Award",
    organization: "Rwanda ICT Chamber",
    date: "2023",
    color: "from-amber-500 to-orange-500"
  }
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition and certifications that showcase my commitment to excellence and continuous learning in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${achievement.color} p-4 text-white flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  {achievement.icon}
                  <h3 className="font-semibold truncate">{achievement.title}</h3>
                </div>
                <span className="text-sm opacity-80 whitespace-nowrap ml-2">{achievement.date}</span>
              </div>
              <div className="p-4">
                <p className="text-gray-600 truncate">{achievement.organization}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-1 mt-4 bg-gradient-to-r ${achievement.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden">
          {[
            { label: "Certifications", value: "6+" },
            { label: "Awards Won", value: "8+" },
            { label: "Projects Completed", value: "25+" },
            { label: "Happy Clients", value: "15+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 