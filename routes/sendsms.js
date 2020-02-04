const express = require('express')
const config = require('config')
const router = express.Router()
const api_key = config.get('api_key')
const controller = require('../controllers/sendsms')

router.post("/", controller.sendsms)
module.exports = router
