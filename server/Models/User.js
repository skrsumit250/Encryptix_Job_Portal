const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    key_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    education:{
        type:String,
    },
    experience:{
        type:String,
    },
    project:{
        type:String,
    },
    about:{
        type:String,
    },

});

const colletion = new mongoose.model('user',UserSchema);
module.exports = colletion;