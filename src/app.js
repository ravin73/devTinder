const express = require('express');
const { adminAuth } = require('./middleware/auth.js');

const app = express();

// sequence is matter when you created route handlers
app.use("/admin",adminAuth)
app.get("/admin/getAllData",(req,res)=>{
    
    res.send("Get all data from admin route")
})
app.get("/admin/deleteAllData",(req,res)=>{
    res.send("Delete all data from admin route")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})