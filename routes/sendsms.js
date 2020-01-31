const express = require('express')
const request = require('request')
const config = require('config')
var FormData = require('form-data');
const router = express.Router()
const api_key = config.get('api_key')

router.post("/", async (req, res) => {
  let { phone_number, sms } = req.body
  try {
    var url = `http://2factor.in/API/V1/${api_key}/ADDON_SERVICES/SEND/PSMS`
    //console.log(url)
    var form = {
      From: "Farmersapp",
      To: phone_number,
      Msg: sms
    }
    // console.log(form)
    request.post({ url, form: form }, function (err, response, body) {
      body = JSON.parse(body)
      if (err)
        return res.json(err)
      res.json(body)
    })
  }
  catch (err) {
    return res.json(err.message)
  }
})
module.exports = router
