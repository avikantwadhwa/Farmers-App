const express = require('express')
const router = express.Router()
const { fire, firebase } = require('../config/firebase.js')
const User_db = require('../models/user')

router.post("/", async(req, res) => {
    let { email, password, name } = req.body;
    if (!name)
        return res.status(400).send("Name Required")

    try {
        await fire.auth().createUserWithEmailAndPassword(email, password)
        var user = fire.auth().currentUser
        await user.sendEmailVerification();
        var new_user = new User_db({
            email,
            name
        })
        await new_user.save()
        return res.status(200).send("Email link sent to verify email")
    } catch (err) {
        console.log(err)
        return res.status(400).send(err.message)
    }
})
module.exports = router