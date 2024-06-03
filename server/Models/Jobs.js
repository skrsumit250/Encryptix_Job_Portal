const mongoose=require('mongoose')
const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgURL:{
        type:String,
        required:true
    },
})

const colletion=new mongoose.model("job",JobSchema);
module.exports=colletion;