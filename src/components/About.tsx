import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-xl transform rotate-6"></div>
              <img
                src="/student image.webp" 
                alt="Byukusenge Andre"
                className="relative z-10 rounded-xl shadow-lg w-full object-cover aspect-[4/5]"
              />
              
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
           <span className='text-xl'>Hello! I'm </span> 
            <strong><b className='text-blue-600 '> Byukusenge Andre</b></strong>
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I'm  
                passionate Full Stack Developer with a keen eye for creating 
              elegant solutions in the least amount of time. I specialize in building robust applications 
              that meet business needs while ensuring the best user experience.
            </p>

            <p className="text-gray-600 leading-relaxed">   
            Possessing a diverse skill set in software development, I excel in managing and leading
teams to success. My education and experience in programming languages like C++
and Java serve as a solid backbone in tackling complex technological challenges. I’m
dedicated to delivering innovative solutions by leveraging my critical thinking and
problem-solving abilities in high-pressure environments.
            </p>
            

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/cisc_2_2.pdf" 
                download
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Resume
              </motion.a>
              
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 