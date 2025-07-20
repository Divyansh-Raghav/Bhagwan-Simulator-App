import mongoose from 'mongoose';

const quesSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    answer:{
        type:String,
        required:true,
    },
    },{
    timestamps:true,
    },
    
);

const Question=mongoose.model("Question",quesSchema);

export default Question;