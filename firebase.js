const firebase = require("firebase/app");
require("firebase/auth");
global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
const {firebaseConfig}=require('./config')

const fire = firebase.initializeApp(firebaseConfig)


  

module.exports={fire,firebase}




