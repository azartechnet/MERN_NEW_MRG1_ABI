const express=require('express')
const axios=require('axios')
const app=express()
const PORT=3000;

//Middleware
app.use(express.json())

//Get single user by id

app.get("/users/:id",async(req,res)=>{
    try
    {
        const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`);
        res.json(response.data)
    }catch(error)
    {
        res.status(404).json({message:"User not found"})
    }
})


//Get posts 

app.get("/posts",async(req,res)=>{
    try
    {
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        res.json(response.data)
    }
    catch(error)
    {
        res.status(500).json({message:"Error fetching posts"})
    }
})

app.listen(PORT,()=>{
    console.log("Server Running...")
})