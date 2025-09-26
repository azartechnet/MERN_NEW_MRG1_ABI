const e1=require('express')
const app=e1()
app.get("/",function(req,res){
    res.send("helloworld")
}).listen(3001)
console.log("Server is Running...")