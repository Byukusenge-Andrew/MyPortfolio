import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "3D Visualization Platform 'ModelVerse'",
    description: "Interactive 3D data visualization using Three.js and WebGL",
    image: "/Screenshot 2025-02-12 085305.png",
    github: "https://github.com/Byukusenge-Andrew/ModelVerse.git",
    demo: "https://modelverse.netlify.app/",
    tags: ["Three.js", "WebGL", "React"]
  },
  {
    title: "TutorialHub",
    description: "A platform for sharing tutorials,DSA Exercises and many more",
    image: "/Screenshot 2025-02-12 085513.png",
    github: "https://github.com/Byukusenge-Andrew/TutorialHub.git",
    demo: "https://tutorial-hub-01.vercel.app/",
    tags: ["React", "typescript","Framer Motion", "SVG"]
  },
  {
    title: "Modern Project Management Platform",
    description: "ProjectHub is a powerful, intuitive project management platform designed to streamline team collaboration and task management.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/Byukusenge-Andrew/M.git",
    tags: ["React", "typescript","Framer Motion", "SVG"]
  }
 
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transform transition-transform"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transform transition-transform"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}