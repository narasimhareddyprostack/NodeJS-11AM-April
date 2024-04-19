//read users.json file and write all male usrs into male_usrs.json
const fs = require('fs')
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err 
    let users= JSON.parse(data)

    let male_users=users.filter((user)=>{
        return user.gender==="Male"
    })
    //console.log(male_users.length)
    let male_Users_str=JSON.stringify(male_users);

    fs.writeFile('male_users.json',male_Users_str,(err)=>{
        if(err) throw err 
        console.log("success!")
    })
})