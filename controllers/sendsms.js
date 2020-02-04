const request = require('request')
const FormData = require('form-data');
const config = require('config')
const api_key = config.get('api_key')

const sendsms = async (req, res) => {
    let { phone_number, sms } = req.body
    try {
        var url = `http://2factor.in/API/V1/${api_key}/ADDON_SERVICES/SEND/PSMS`
        //console.log(url)
        var form = {
            From: "Farmersapp",
            To: phone_number,
            Msg: sms
        }
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
}
exports.sendsms = sendsms