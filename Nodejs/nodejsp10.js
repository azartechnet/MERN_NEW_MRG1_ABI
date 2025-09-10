// setInterval(()=>{
//     console.log("Welcome")
// },1000)

const intervalid=setInterval(()=>{
    console.log("This is keep running..")
},1000)

//stop after 5 seconds

setTimeout(()=>{
    clearInterval(intervalid)
    console.log("Intervel stopped")
},5000)