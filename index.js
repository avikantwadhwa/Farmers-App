const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./db/db')
const cors = require('cors')
var registeruser = require('./routes/register')
var loginuser = require('./routes/login')
var loginotp=require('./routes/loginotp')
var verifyotp=require('./routes/verifyotp')

const app = express();
connectDB();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use("/registeruser", registeruser)
app.use("/loginuser", loginuser)
app.use("/loginotp",loginotp)
app.use("/verifyotp",verifyotp)


const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`Server Started on ${port}`)
})

