import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Shapes3D from './Shapes3D';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-50 via-purple-50 to-white pt-16">
      <div className="absolute inset-0 z-0">
        <Shapes3D />
      </div>
      <div className="container relative z-10 mx-auto px-6 py-12 flex items-center min-h-screen">
        <div className="text-center w-full">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Andrew</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Creative Developer & 3D Enthusiast
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg hover:bg-blue-500 hover:text-white hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 animate-bounce text-purple-600" />
        </motion.div>
      </div>
    </section>
  );
}