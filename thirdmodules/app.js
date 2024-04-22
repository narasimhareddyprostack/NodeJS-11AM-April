import dotenv from 'dotenv'

dotenv.config({'path':'./fahad.env'})

let port = process.env.PORT 
let host =process.env.HOST 
let key = process.env.SKEY


console.log(port)
console.log(host)
console.log(key)