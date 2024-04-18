import fs from 'fs'

fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw err 
    console.log(typeof data)

    fs.writeFile('user.txt',data,(err)=>{
        if(err) throw err 
        console.log("Data Written Successfully")
    })
})