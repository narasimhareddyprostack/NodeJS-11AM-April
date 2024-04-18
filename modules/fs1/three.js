//read data.txt and write data in user.txt - using sync methods

import fs from 'fs'

let data = fs.readFileSync('data.txt','utf-8')
console.log(data)

fs.writeFileSync('user.txt',data)
console.log("Data Written Successfully!")