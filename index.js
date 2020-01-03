const express=require('express')
var bodyParser=require('body-parser')

var loginuser=require('./routes.js')

const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use("/loginuser",loginuser)

const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})

