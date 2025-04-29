const express=require('express');

const app=express();

// sequence is matter when you created route handlers
app.use("/user",(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})