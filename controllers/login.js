const { fire, firebase, fireadmin } = require('../config/firebase.js')
const auth = require('../middleware/auth.js')

const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await fire.auth().signInWithEmailAndPassword(email, password)
        if (!user.user.emailVerified)
            return res.json("Email not verified")
        const token = await user.user.getIdToken()
        return res.json(email)
    }
    catch (err) {
        return res.json(err.message)
    }
}

exports.login = login