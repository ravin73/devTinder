const express = require('express');

const app = express();

// sequence is matter when you created route handlers
app.use("/user",[(req,res,next)=>{
    res.send("Response")
    next()
},(req,res,next)=>{
    res.send("Response 2")
    
}])

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})