const express = require('express')
const router = express.Router()
const controller = require('../controllers/verifyotp')

router.post("/", controller.verifyotp)

module.exports = router
