const express=require('express')
const app=express()
const PORT=3000;

//Multiple Routing
const r1=express.Router()
const r2=express.Router()
const r3=express.Router()

r1.get("/user",function(req,res){
    console.log("UserRouting...")
    res.end()
})
r2.get("/admin",function(req,res){
    console.log("Admin Routing...")
})
r3.get("/student",function(req,res){
    console.log("Student Routing Working..")
    res.end()
})
app.use(r1)
app.use(r2)
app.use(r3)

app.listen(PORT,function(err){
    if(err)console.log(err)
        console.log("Server is Running...")
})