// src/components/ResultCard.jsx
import { motion } from 'framer-motion';

const ResultCard = ({ answer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="bg-white text-center text-lg p-6 rounded-2xl shadow-lg mt-6 max-w-md mx-auto"
    >
      <p className="text-2xl font-semibold">{answer}</p>
    </motion.div>
  );
};

export default ResultCard;
