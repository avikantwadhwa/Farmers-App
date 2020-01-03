const express=require('express')
const router=express.Router()
const {fire,firebase}=require('./firebase.js')

router.post("/", async( req, res) => {

   const {email,password}=req.body;

   try
   {
     await fire.auth().createUserWithEmailAndPassword(email,password)
     return res.status(200).send("Sucessfully created")
  
  
  }
  catch(err)
  {
    return res.status(400).send(err.message)
  }
  
  
  
})

module.exports=router