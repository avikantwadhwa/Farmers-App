const express = require('express')
const request = require('request')
const config = require('config')
const nodemailer = require('nodemailer')
const router = express.Router()

const controller = require('../controllers/mail')

router.post("/", controller.mail)

module.exports = router
