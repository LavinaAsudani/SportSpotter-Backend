const express= require('express')
const app= express()

require('dotenv').config()
const PORT=process.env.PORT;

const DbConnect=require("./config/database");

DbConnect();

app.use(express.json());

app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
})
