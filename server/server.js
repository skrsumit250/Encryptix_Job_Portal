const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const job_collection=require("./Models/Jobs")
const user_collection=require("./Models/User")

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
        const jobs =await job_collection.find();
        res.json(jobs);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
// app.get('/user',async(req,res) => {
//     try{
//         const user = await user_collection.find();
//         res.json(user);
//     }catch(err){
//         res.status(500).json({message:err.message});
//     }
// });

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

// app.post('/login', async (req, res) => {
  
//     const user = req.body;
//     user_collection.findOne({username:user.username})
//       .then(result => {
//         if(result){
//           if(result.password==user.password){
//             console.log(result)
//             res.json({success:true,result});
//           }
//           else{
//             res.json({success:false});
//           }
//         }
//         else{
//           const newUser = user_collection({
//             username:user.username,
//             password:user.password
//           });
//           newUser.save()
//           .then(savedUser => {
//             res.json({success:true,savedUser});
//             console.log("User created:", savedUser);
//           })
//           .catch(error => {
//             console.error("Error saving user:", error);
//           });
//         }
//       })
//       .catch(error => {
//         console.error("Error finding user:", error);
//       });
// });
  
  


app.listen(PORT,()=>{
    console.log(`App is listening on http://localhost:${PORT}`);
})