const express=require('express');

const app=express();

// sequence is matter when you created route handlers
app.get("/user",(req,res)=>{
    res.send({firstName:"ravin",lastName:"tt"})
})

app.post("/user",(req,res)=>{
    // saving data to db
    console.log("data saved to db")
    res.send("database sucessfully saved to the databse")
})

app.delete("/user",(req,res)=>{
    res.send("delted successfully")
})

// this will match all the HTTP methods (GET, POST, PUT, DELETE, etc.)
app.use("/test",(req,res)=>{
    res.send('Hello from the server!')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})