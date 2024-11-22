const express = require("express");
const app =express();
const morgan=require("morgan");
const dotenv=require("dotenv");
const  cors = require('cors');
const appError =require("./utils/apiError");
const globelError = require("./middelware/globelError");
const mainRoute = require("./Routes/mainRoute");
const dbConnection = require("./config/DbConnection");


dotenv.config({path:"config.env"})
app.use(cors())
app.use(express.json())
dbConnection();

app.listen(process.env.PORT,(req,res)=>{
    console.log("app listen",process.env.PORT)
})



mainRoute(app)

app.use("*",(req,res,next)=>{
    next(new appError(`cant find the url ${req.originalUrl}`,400))
  
  })

  app.use(globelError)








