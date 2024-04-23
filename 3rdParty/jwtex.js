const jwt = require('jsonwebtoken')
const dotenv=require('dotenv')

dotenv.config({'path':'./dev.env'})
let skey = process.env.SKEY

let payload={
    'email':"rahul@gmail.co",
    'password':'123'
}

let token=jwt.sign(payload,skey)
console.log(token)

let user_Payload=jwt.verify(token,skey)
console.log(user_Payload)