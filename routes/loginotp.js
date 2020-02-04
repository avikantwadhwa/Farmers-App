const express = require('express')
const request = require('request')
const config = require('config')

const router = express.Router()

const api_key = config.get('api_key')
const template = config.get('template')
const controller = require('../controllers/loginotp')

router.post("/", controller.loginotp)

module.exports = router
