import http from 'http'
import dotenv from 'dotenv'

dotenv.config({'path':'./config/config.env'})
let port = process.env.PORT 
let host= process.env.HOSTNAME

let server=http.createServer((req,resp)=>{
    resp.end("Good Afternoon")
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 

    console.log(`Server Running : http://127.0.0.1:8080`)
})

