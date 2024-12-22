// const express= require('express');
// //router middleware
// const router=express.Router();
// const signUpTemplateCopy=require('../Model/SignUpModel');


// router.post("/signup",(request,response)=>{
//     const sam= new signUpTemplateCopy({
//         name:request.body.name,//fullname(frontEnd and form name=fullname)
//         email:request.body.email,
//         contact:request.body.contact,
//         age:request.body.age,
//         jobRole:request.body.jobRole
//     })
//     sam.save().then(data=>{
//             response.json(data);
//             console.log('data added successfully');
//     }).catch(error=>{
// response.json(error);
//     })

    
// })
// module.exports=router;
const express=require('express');
const router=express.Router()
const signupCopy=require('../Model/SignUpModel')

router.post('/toyota',(request,response)=>
{
    const form_data=new signupCopy(
        {
            name:request.body.name,
            email:request.body.email,
            contact:request.body.contact,
            age:request.body.age,
            jobRole:request.body.jobRole,
            gender:request.body.gender
    })
    form_data.save().then   (data=>
    {
        response.json(data);
        console.log("Data added successfully") 
    }).catch(error=>
    {
        response.json(error);
    })
})

module.exports=router;