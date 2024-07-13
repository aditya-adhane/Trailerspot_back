const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")
const path = require("path");
const { dirname } = require("path");
require('dotenv').config(); 

const DB=process.env.URI;


const app = express();

app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', false);
mongoose.connect(DB,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log("db connected");
}).catch((err) => console.log(err));

app.use("/api/user",userRoutes);

//static files
const PORT=process.env.PORT || 5000 


app.listen(PORT,console.log("server started"))