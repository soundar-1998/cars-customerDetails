const express =require('express');
const app=express();
const mongoose=require('mongoose');
const cors= require('cors');
const routerurl=require('./router/router')
app.use(express.json());
app.use(cors())
app.use("/app",routerurl);
//final25 is a database name
if(mongoose.connect("mongodb+srv://rkalai92:Kalai_12345@cluster0.ev42l.mongodb.net/Customer-details?retryWrites=true&w=majority&appName=Cluster0"));
//mongodb://127.0.0.1:27017/MERN

{
    console.log('database is connected ');

}   


app.listen(4000 ,()=>{
    console.log('server is running on port  4000');
})