const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

app.use(cors({
    origin:'http://localhost:3000',
    methods:['PUT','GET','POST','DELETE']
}))

app.use(express.json())



const FoodModel=require("./models/Food")
mongoose.connect("mongodb://localhost:27017/food")
.then(()=>console.log('Connected'))
.catch(err=>console.log(err))

//inserted the data

app.post("/insert",async(req,res)=>{
    const {foodName,description}=req.body;
    const food=new FoodModel({
        foodName:foodName,
        description:description
    })
    try
    {
       const result=await food.save();
       res.send(result);
       console.log(result);
    }
    catch(err)
    {
          console.log(err)
    }
})


app.listen(3001,()=>{
    console.log("Server is Running...")
})