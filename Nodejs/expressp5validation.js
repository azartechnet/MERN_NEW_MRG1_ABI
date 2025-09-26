const express=require('express')
const app=express()
app.use(express.json())
app.post("/user",(req,res)=>{
    const {name,age}=req.body;
    if(!name||!age)
    {
        return res.status(400).json({error:"Name and Age are required"});
    }
    res.json({message:`Hello ${name},your age is:: ${age}`})
})
app.listen(3001,()=>console.log("Server is Running..."))