const fs=require('fs')

//read json file , print employee name
fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err 
    console.log(typeof data)
    let emp=JSON.parse(data)
    console.log(emp)
    console.log(emp.name)
})