const {fireadmin}=require('../config/firebase')

module.exports=async function (req,res,next){

   //console.log(req)
   const token = req.header("x-auth-token");
   
   if(!token)
    return res.status(401).json({ msg: "authorizationn denied" })

   try
   {
   
    const user= await fireadmin.auth().verifyIdToken(token)
    
    }
   catch(err)
   {
       //console.log(err)
       return res.status(401).json({"message":"Invalid token"})
   }
  

  
}