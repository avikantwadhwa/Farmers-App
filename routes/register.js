const express = require('express')
const router = express.Router()
const { fire, firebase } = require('../config/firebase.js')
const User_db = require('../models/user')

router.post("/", async (req, res) => {

    let { email, password, name } = req.body;
    if (!name)
        return res.json("Name Required")

    try {
        await fire.auth().createUserWithEmailAndPassword(email, password)
        var user = fire.auth().currentUser
        await user.sendEmailVerification();
        var new_user = new User_db({
            email,
            name
        })
        await new_user.save()
        return res.json("Email link sent to verify email")
    } catch (err) {
        console.log(err)
        return res.json(err.message)
    }

})
module.exports = router