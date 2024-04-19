const http =require('http')
let server=http.createServer((req,resp)=>{
    resp.end("<h1>Good Afternoon!...</h1> ")
})
server.listen(8080,(err)=>{
   if(err) throw err
   
   console.log(`Server Running on port : 8080`)
})
