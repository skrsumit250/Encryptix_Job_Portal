const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const collection=require("./Models/Jobs")
const bodyParser = require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 5000;
const URI="mongodb://127.0.0.1:27017/Job_Portal"
const connect=mongoose.connect(URI);
connect.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log("DB Not Connected",err);
})

app.get('/Jobs',async(req,res)=>{
    try{
        const jobs =await collection.find();
        res.json(jobs);
    }catch(err){
        res.status(500).json({message:err.message});
    }
    
})
app.post('/postjobs', async (req, res) => {
    const newJob = new collection({
        company: req.body.company,
        role: req.body.role,
        experience: req.body.experience,
        location: req.body.location,
        skills: req.body.skills,
        description: req.body.description,
        imgURL: req.body.imgURL,
    });
    
    try{
      await newJob.save();
      res.json({ success: true });
    }
    catch (err) {
      console.error('Error saving job:', err);
      res.status(500).json({ error: 'Error posting job' });
    }
});


app.listen(PORT,()=>{
    console.log(`App is listening on http://localhost:${PORT}`);
})