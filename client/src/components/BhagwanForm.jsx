import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function BhagwanForm() {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) {
      toast.warning("Arre bhakt, sawal toh pooch! 😐");
      return;
    }
     setLoading(true);

     setLoading(true); 
  setResponse("");    

  try {
    const res = await axios.post("http://localhost:3000/ask", { question });

   
    setTimeout(() => {
      setResponse(res.data.answer);
      setLoading(false);
     
    }, 1500); 
    setQuestion('');
  } catch (err) {
    toast.error("Bhagwan is angry. Try again later 😡");
    setLoading(false);
  }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadwow-md ">
      <h1 className="text-2xl font-bold text-center text-purple-400 mb-4">
        🙏 Ask Bhagwan
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 ">
        <textarea
          rows={3}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type ur Question to Bhagwan..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
        {loading ? (
          <div className="text-center mt-4 animate-pulse text-indigo-600 font-bold">
            Asking Bhagwan... 🕉️
          </div>
        ) : (
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-300"
          >
            Ask Bhagwan
          </button>
        )}
      </form>
      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md text-center ">
          <span className="text-gray-700 font-medium ">Bhagwan Says:</span>
          <p className="text-xl text-purple-700 mt-2">{response}</p>
        </div>
      )}
    </div>
  );
}

export default BhagwanForm;
