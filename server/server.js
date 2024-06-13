const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const job_collection=require("./Models/Jobs")
const user_collection=require("./Models/User")

const bodyParser = require('body-parser');

const app=express();
app.use(cors({
    origin:["*"],
    methods:["POST","GET"],
    credentials:true
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://job-portal-mu-tawny.vercel.app');
    next();
  });
app.use(bodyParser.json());
const PORT = 5000;
const URI="mongodb+srv://skrsumit250:MymongoDB250%40%23@jobportal.irzd0no.mongodb.net/?retryWrites=true&w=majority&appName=JobPortal"
const connect=mongoose.connect(URI);
connect.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log("DB Not Connected",err);
})

app.get('/Jobs',async(req,res)=>{
    try{
        const jobs =await job_collection.find();
        res.json(jobs);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
app.get('/',(req,res)=>{
    res.send("server is running");
})
app.post('/postjobs', async (req, res) => {
    const newJob = new job_collection({
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

app.post('/apply', async (req, res) => {
    const newForm = new user_collection({
        key_id: req.body.key_id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        education: req.body.education,
        experience: req.body.experience,
        projects: req.body.projects,
        skills: req.body.skills,
        about: req.body.about
    });
    console.log(newForm);
    try{
      await newForm.save();
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