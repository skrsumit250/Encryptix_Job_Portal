const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    highlight:{
        type:String,
    },
    experience:{
        type:String,
    },
    project:{
        type:String,
    },
    skills:{
        type:String,
    },
    education:{
        type:String,
    },
    links:{
        type:Array,
    },
});

const colletion = new mongoose.model('user',UserSchema);
module.exports = colletion;