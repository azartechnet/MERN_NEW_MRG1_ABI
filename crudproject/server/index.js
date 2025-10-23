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
//Read the data
app.get("/read",async(req,res)=>{
    try
    {
        const food=await FoodModel.find();
        res.send(food)
    }
    catch(err)
    {
        res.send("Error")
    }
})
//Updating the data
app.put("/update",async(req,res)=>{
    const {newFoodName,id}=req.body;
    try
    {
        const updateFood=await FoodModel.findById(id);
        if(!updateFood)
        {
            return res.status(404).send("Data not found")
        }
        updateFood.foodName=newFoodName;
        await updateFood.save();
        res.send("Data Inserted...")
    }
    catch(err)
    {
        console.log(err)
    }
})
//Delete the data
app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    try
    {
        const result=await FoodModel.findByIdAndDelete(id)
        if(!result)
        {
            return res.status(404).send("Data not found")
        }
        res.send("Data Deleted")
    }
    catch(err)
    {
        console.log(err)
    }
})

app.listen(3001,()=>{
    console.log("Server is Running...")
})