//read user.json file and print all user names
const fs = require('fs')
fs.readFile('user.json','utf-8',(err,data)=>{
    if(err) throw err 
    let users=JSON.parse(data)

    console.log(typeof data)
    console.log(typeof users)

    for(user of users){
        console.log(user.name)
    }

})