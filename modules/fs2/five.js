const fs = require('fs')

fs.readFile('user.json','utf-8',(err,data)=>{

    if(err) throw err 

    fs.writeFile('employees.json',data,(err)=>{
        if(err) throw err 
        console.log("written successfully")
    })
})
