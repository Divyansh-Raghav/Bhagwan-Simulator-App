import express from 'express';
import cors from 'cors';
import Question from './models/Question.js';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv'; 

dotenv.config();


const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=> console.log("MongoDB connected "))
.catch((err)=>console.log('falied to connect MongoDB',err));


app.post('/ask', async(req, res) => {
  const {question}=req.body;

  if(!question) return res.status(400).json({error:"Question is required"});


  const randomAnswers=[
  "Meditate on it and you shall know 🌌",
  "Yes. But only if your karma is clean 🧘‍♂️",
  "Bhagwan is busy. Try again later 😂",
  "Trust your intuition 🧠✨",
  "Chill. Everything will be okay 😌",
  "Ask again after lighting 3 agarbattis 🕯️",
  "Yeh toh kaal batayega... 🔮",
  "Main kya tumhare papa lagta hoon? 😒",
  "Your vibes are off. Fix them first 🌈",
  "Ask your pet. Even they know better 🐶",
  "Sanyaas le lo, sab dukh khatam ho jayenge 🧘‍♀️",
  "Tu khud hi dekhle, mujhe kya har kaam mein ghusna hai? 😐",
  "Yes, but only on a full moon 🌕",
  "Consult your astrologer, not me 😅",
  "Karma is watching you 👀",
  "Yeh toh script mein likha tha. 🤷‍♂️",
  "Why so much curiosity, my child? 🤨",
  "No hope, only cope 😶",
  "Bhai tu toh already cursed hai ☠️",
  "Acha khaana kha, aur so ja 😴",
  "Life is a simulation. Try rebooting. 🔁",
  "Shuddh desi ghee kha, sab thik hoga 🧈",
  "Aisa sawaal toh Swami Nithyananda bhi nahi puchta 😵‍💫",
  "Answer is in the stars... or maybe Netflix 📺✨",
  "Stop asking and go touch some grass 🌿",
  "Kabhi toh khud se faisla le le bhai 🤯",
  "Bhagwan bhi confuse hai iss sawal se 😳",
  "LOL. Next question please. 😆",
  ];


  const answer=randomAnswers[Math.floor(Math.random()*randomAnswers.length)];

  try{
    const saved=await Question.create({question,answer});
    return res.status(200).json({answer:saved.answer});
  }catch(error){
    console.error("❌ Error saving to DB:", error);

    // Send a server error response to frontend
    return res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
