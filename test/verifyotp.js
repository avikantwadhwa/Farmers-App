var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:5000/verifyotp',
  headers: 
   { 'postman-token': 'e78212f9-ed4c-480a-fe41-e1e2ce5c7da0',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: 
   { otp: '702078',
     session_id: 'e2280cba-fee2-413c-b5fd-c17edbff9b0f' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
