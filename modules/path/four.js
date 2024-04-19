import fs from 'fs'
import path from 'path'
let file_Name = path.join(process.cwd(),"com","hdfc","user","users.json")
fs.readFile(file_Name,'utf-8',(err,data)=>{
    if(err) throw err 

    fs.writeFile(path.join(process.cwd(),"com","sbi","emp","emp.json"),data,(err)=>{
        if(err) throw err 
        console.log("success!")
    })
})