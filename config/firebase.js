const firebase = require("firebase/app");
const firebase_admin=require('firebase-admin')
const config=require('config')
require("firebase/auth");
global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
const firebaseConfig=config.get("firebaseConfig")

const fire = firebase.initializeApp(firebaseConfig)


const fireadmin=firebase_admin.initializeApp(firebaseConfig)
  

module.exports={fire,firebase,fireadmin}




