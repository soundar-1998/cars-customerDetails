const mongoose= require('mongoose')
const signUpTemplate= new mongoose.Schema({
    name:{type:String,
        required:true,
    },  
    email:{type:String,
        required:true,
    },
    contact:{type:String,
        required:true,
    },
    age:{type:String,
        required:true,
    },
    jobRole:{type:String,
        required:true,
    },
    gender:{type:String,
        required:true,
    },date:{
        type:Date,
        default:Date.now
    }
})
//colletion name:student_details
module.exports=mongoose.model('TOYOTA',signUpTemplate);
//db-router--app.js
//model(db) --->router(app.post)--->server.js