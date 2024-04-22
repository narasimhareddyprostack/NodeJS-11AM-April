import http from 'http'
import dotenv from 'dotenv'

dotenv.config({'path':'./config/config.env'})
let port = process.env.PORT 
let host= process.env.HOSTNAME

let server=http.createServer((req,resp)=>{
    resp.end("Good Afternoon")
})

server.listen(port,host,(err)=>{
    if(err) throw err 

    console.log(`Server Running : http://${host}:${port}`)
})

