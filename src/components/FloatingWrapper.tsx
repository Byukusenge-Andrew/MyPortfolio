import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingWrapperProps {
  children: ReactNode;
  delay?: number;
}

const FloatingWrapper = ({ children, delay = 0 }: FloatingWrapperProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="animate-float"
    >
      {children}
    </motion.div>
  );
};

export default FloatingWrapper; 