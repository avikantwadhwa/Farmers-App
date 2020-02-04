const express = require('express')
const router = express.Router()
const controller = require('../controllers/loginotp')

router.post("/", controller.loginotp)

module.exports = router
