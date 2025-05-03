const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://yadavravin69:rav123@cluster0.rf4fz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
}

connectDB().then(()=>{
    console.log("Database connection successful")
}).catch((err)=>{
    console.error("Database connection failed")
})