import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1 
          }}
          className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-45 flex items-center justify-center shadow-lg"
        >
          <span className="text-white font-bold text-xl transform -rotate-45">A</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full"
        />
      </div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold"
      >
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Andre
        </span>
        <span className="text-gray-700">
          .dev
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Logo; 