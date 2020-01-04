const firebase = require("firebase/app");
const firebase_admin=require('firebase-admin')
require("firebase/auth");
global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
const {firebaseConfig}=require('./config')

const fire = firebase.initializeApp(firebaseConfig)


const fireadmin=firebase_admin.initializeApp(firebaseConfig)
  

module.exports={fire,firebase,fireadmin}




