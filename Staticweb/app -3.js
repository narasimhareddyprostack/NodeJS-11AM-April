import http from 'http'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config({'path':'./config/config.env'})

let port = process.env.PORT 
let host= process.env.HOSTNAME


let server=http.createServer((req,resp)=>{
    console.log(req.url)
    fs.readFile(path.join(process.cwd(),"static","index.html"),'utf-8',(err,data)=>{
        if(err) throw err 
        resp.end(data)
    })
})

server.listen(port,host,(err)=>{
    if(err) throw err 

    console.log(`Server Running : http://${host}:${port}`)
})

