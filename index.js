if(process.env.NODE_ENV !== 'production'){
 require('dotenv').config()
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
// Get router file 
const router = require("./routes/routes")

// Connect to the database with the function made--
connectDB();


const PORT = 5000 || process.env.PORT;

// Middleware for the body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


// Middleware for parsing cors
app.use(cors())

// Route to expres router
app.use('/',router);



app.listen(PORT ,()=>{
 console.log(`App is running at port : ${PORT}`)
})



