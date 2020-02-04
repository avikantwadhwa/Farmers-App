const request = require('request')
const config = require('config')
const api_key = config.get('api_key')
const template = config.get('template')

const loginotp = async (req, res) => {
    let { phone_number } = req.body
    try {
        var url = `https://2factor.in/API/V1/${api_key}/SMS/${phone_number}/AUTOGEN`
        request.get(url, function (err, response, body) {
            body = JSON.parse(body)
            if (err)
                return res.json(err)
            return res.json(body.Details)
        })
    }
    catch (err) {
        return res.json(err.message)
    }
}
exports.loginotp = loginotp