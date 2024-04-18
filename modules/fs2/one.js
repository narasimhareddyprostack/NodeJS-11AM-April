const fs= require('fs')

var data=fs.readFileSync('emp.json','utf-8')
console.log(typeof data)
console.log(data)