const express=require('express')
var bodyParser=require('body-parser')

var registeruser=require('./routes/register')
var loginuser=require('./routes/login')

const app=express();
const connectDB=require('./db/db')
connectDB();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use("/registeruser",registeruser)
app.use("/loginuser",loginuser)


const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})

