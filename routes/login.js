const express=require('express')
const router=express.Router()
const {fire,firebase,fireadmin}=require('../config/firebase.js')
//const auth=require('../middleware/auth.js')

router.post("/",async( req,res) => {

  const {email,password}=req.body;

  try
{
  //await fire.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

  // the user signs in with email and password.
  const user=await fire.auth().signInWithEmailAndPassword(email,password)

   
    if(!user.user.emailVerified)
      return res.status(400).send("Email not verified")

      const token=await user.user.getIdToken()
      
      return res.json(token)
        //console.log(user.user.emailVerified)

}

catch(err)
{
  return res.status(400).send(err.message)
}
 


})

module.exports=router
