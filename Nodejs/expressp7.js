const express=require('express')
const axios=require('axios')
const app=express()
const PORT=3000;

//Middleware
app.use(express.json())

//get fake users from jsonplaceholder
app.get("/user",async(req,res)=>{
    try
    {
        const response=await axios.get("https://jsonplaceholder.typicode.com/users")
        res.json(response.data)
    }
    catch(error)
    {
        res.status(500).json({message:"Error"})
    }
})
app.listen(PORT,()=>{
    console.log("Server Running...")
})