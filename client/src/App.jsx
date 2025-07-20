// src/App.jsx
import React, { useState } from "react";
import BhagwanForm from "./components/BhagwanForm";
import ResultCard from "./components/ResultCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const App = () => {
  const [answer, setAnswer] = useState(""); 

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-100 to-purple-200 px-4 py-12">
      
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-indigo-700 text-center mb-6"
      >
        🕉️ Bhagwan Simulator
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg text-gray-700 mb-8 text-center max-w-md"
      >
        Ask your divine question and get spiritual (and sometimes savage) answers from Bhagwan.
      </motion.p>

      {/* Question Input + Submit */}
      <BhagwanForm setAnswer={setAnswer} />

      {/* Animated Answer Card */}
      {answer && <ResultCard answer={answer} />}

      {/* Toast Messages */}
      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default App;
