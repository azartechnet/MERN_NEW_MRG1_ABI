const fs=require('fs')
console.log("Write a file....")

fs.writeFileSync('output.txt',"This is synch...")

console.log("File write sucess!!!")