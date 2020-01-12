var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:5000/loginotp',
  headers: 
   { 'postman-token': '8299572e-c8a5-52dd-667b-b21a52f1a352',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: { phone_number: '9811204579' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
