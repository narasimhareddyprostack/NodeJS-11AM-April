import fs from 'fs'

let file_Name = 'F:/Batch24/NodeJS-11AM/modules/path/com/htdc/user/users.json'
fs.readFile(file_Name,'utf-8',(err,data)=>{
    if(err) throw err 
    console.log(data)
})