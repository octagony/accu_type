import { motion } from 'framer-motion';

export const InputLine = () => {
  return (
    <motion.div
      area-hidden={true}
      className="inline-block bg-yellow-700 w-0.5 h-7"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
    />
  );
};
