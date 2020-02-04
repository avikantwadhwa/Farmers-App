const express = require('express')
const request = require('request')
const config = require('config')

const router = express.Router()

const api_key = config.get('api_key')
const controller = require('../controllers/verifyotp')

router.post("/", controller.verifyotp)

module.exports = router
