console.log("Start")
setTimeout(()=>{
    console.log("Inside setTimeout (callback in Queue)")
},5000)
console.log("End")
for(i=0;i<5;i++)
{
    console.log(i)
}