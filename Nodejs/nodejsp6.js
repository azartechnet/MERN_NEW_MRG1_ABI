// var fs=require('fs')
// //synchrous read
// var data=fs.readFileSync('f1.txt','utf8')
// console.log(data.toString())

//Asynchrouse read
var fs=require('fs')
console.log("Start")
setTimeout(()=>{
    console.log("Inside setTimeout (callback in Queue)")
    fs.readFile('f1.txt','utf-8',function(err,data){
    if(err)console.log(err)
    else
{
    console.log(data.toString())
}
    })
},5000)

console.log("Done!!!")