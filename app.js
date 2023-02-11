require('dotenv').config()   
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors")
const PORT=9002;
app.use(express.json());
app.use(cors());


// require('./models/Todo')
// require("./models/data")
require("./models/user")
require("./models/add")
app.use(require("./routes/auth"))
// app.use(require('./routes/task'))

// app.use(require("./routes/task"))

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongodb")
})
mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})


app.listen(PORT,"localhost",()=>{
    console.log("server running on " + PORT);
})