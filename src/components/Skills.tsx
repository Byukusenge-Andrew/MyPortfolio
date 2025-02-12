import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Cloud, 
  Server, 
  Cog, 
  Brain, 
  Shield, 
  Layout, 
  Laptop, 
  Smartphone,
  GitBranch 
} from 'lucide-react';

// Remove unused interfaces
interface BaseSkill {
  name: string;
  level: number;
}

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
  color: string;
  detailedSkills: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    name: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    level: 90,
    color: "from-blue-500 to-blue-600",
    detailedSkills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "Rust", level: 65 }
    ]
  },
  {
    name: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    level: 85,
    color: "from-purple-500 to-purple-600",
    detailedSkills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Angular", level: 75 },
      { name: "Tailwind CSS", level: 88 },
      { name: "SASS/SCSS", level: 85 }
    ]
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    level: 80,
    color: "from-green-500 to-green-600",
    detailedSkills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "Redis", level: 75 },
      { name: "Firebase", level: 82 }
    ]
  },
  {
    name: "DevOps",
    icon: <Cog className="w-6 h-6" />,
    level: 75,
    color: "from-red-500 to-red-600",
    detailedSkills: [
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 88 }
    ]
  },
  {
    name: "Cloud Computing",
    icon: <Cloud className="w-6 h-6" />,
    level: 82,
    color: "from-cyan-500 to-cyan-600",
    detailedSkills: [
      { name: "AWS Services", level: 85 },
      { name: "Azure", level: 80 },
      { name: "Google Cloud", level: 75 },
      { name: "Serverless", level: 82 },
      { name: "Cloud Security", level: 78 }
    ]
  },
  {
    name: "Backend Systems",
    icon: <Server className="w-6 h-6" />,
    level: 88,
    color: "from-indigo-500 to-indigo-600",
    detailedSkills: [
      { name: "Node.js", level: 90 },
      { name: "Django", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "GraphQL", level: 78 },
      { name: "RESTful APIs", level: 88 }
    ]
  },
  {
    name: "Mobile Dev",
    icon: <Smartphone className="w-6 h-6" />,
    level: 78,
    color: "from-orange-500 to-orange-600",
    detailedSkills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "iOS Development", level: 70 },
      { name: "Android Native", level: 72 },
      { name: "Mobile UI/UX", level: 80 }
    ]
  },
  {
    name: "AI/ML",
    icon: <Brain className="w-6 h-6" />,
    level: 72,
    color: "from-rose-500 to-rose-600",
    detailedSkills: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "Machine Learning", level: 72 },
      { name: "Data Science", level: 68 },
      { name: "Neural Networks", level: 65 }
    ]
  },
  {
    name: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    level: 76,
    color: "from-teal-500 to-teal-600",
    detailedSkills: [
      { name: "Network Security", level: 78 },
      { name: "Penetration Testing", level: 75 },
      { name: "Security Protocols", level: 80 },
      { name: "Encryption", level: 76 },
      { name: "Security Auditing", level: 72 }
    ]
  },
  {
    name: "UI/UX Design",
    icon: <Layout className="w-6 h-6" />,
    level: 84,
    color: "from-pink-500 to-pink-600",
    detailedSkills: [
      { name: "Figma", level: 88 },
      { name: "Adobe XD", level: 82 },
      { name: "Wireframing", level: 85 },
      { name: "Prototyping", level: 80 },
      { name: "User Research", level: 78 }
    ]
  },
  {
    name: "System Design",
    icon: <Laptop className="w-6 h-6" />,
    level: 86,
    color: "from-violet-500 to-violet-600",
    detailedSkills: [
      { name: "Architecture", level: 85 },
      { name: "Scalability", level: 82 },
      { name: "Performance", level: 88 },
      { name: "Microservices", level: 84 },
      { name: "System Integration", level: 86 }
    ]
  },
  {
    name: "Version Control",
    icon: <GitBranch className="w-6 h-6" />,
    level: 88,
    color: "from-amber-500 to-amber-600",
    detailedSkills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "GitLab", level: 85 },
      { name: "Branching Strategies", level: 86 },
      { name: "Code Review", level: 88 }
    ]
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section className="py-20 bg-gray-50 relative" id="skills">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedSkill(skill)}
              className="cursor-pointer"
            >
              <div className={`bg-gradient-to-r ${skill.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-white hover:scale-105`}>
                <div className="flex items-center justify-between mb-4">
                  {skill.icon}
                  <span className="text-lg font-semibold">{skill.level}%</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-white h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Popup for detailed skills */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedSkill(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-[90%] max-w-[600px] bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedSkill.color} text-white`}>
                      {selectedSkill.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSkill(null);
                    }}
                    className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
                  {selectedSkill.detailedSkills.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 font-medium">{detail.name}</span>
                        <span className="text-gray-600">{detail.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${detail.level}%` }}
                          transition={{ duration: 1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${selectedSkill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills; 