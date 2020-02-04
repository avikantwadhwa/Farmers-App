const express = require('express')
const request = require('request')
const config = require('config')
const FormData = require('form-data');
const router = express.Router()
const api_key = config.get('api_key')
const controller = require('../controllers/sendsms')

router.post("/", controller.sendsms)
module.exports = router
