import fs from 'fs'
import path from 'path'

//console.log(path.join(process.cwd()))

let file_Name = path.join(process.cwd(),"com","hdfc","user","users.json")
console.log(file_Name)

fs.readFile(file_Name,'utf-8',(err,data)=>{
    if(err) throw err 
    console.log(data)
})