if(process.env.NODE_ENV !== 'production'){
 require('dotenv').config()
}

const express = require("express");
const app = express();
const request = require("request")
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const querystring = require("querystring")
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


const authUrl = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "3e287836f844456cb5e3e19ceba464da";
const CLIENT_SECRET = "25c3d672592b4140b1794dcc03c39a61";
const REDIRECT_URI = "http://localhost:5000/callback";
const FRONTEND_URI = "http://localhost:3000"

const scopes = [
 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public'
];


app.get("/login",(req,res)=>{
  res.redirect(
   `${authUrl}?${querystring.stringify({
     response_type: 'code',
     client_id: CLIENT_ID,
     scope: scopes,
     redirect_uri: REDIRECT_URI,
     state: 34546556,
   })}`,
  );
})


// const REDIRECT_URI = "http://localhost:3000/";
const postUri = "https://accounts.spotify.com/api/token";
const grant = "authorization_code";


app.get('/callback', function (req, res) {

 // const token = req.headers.token;

 const token = req.query.code || null;

 const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  form: {
    code: token,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
  },
  headers: {
    Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      'base64',
    )}`,
  },
  json: true,
};


    request.post(authOptions, function (error, response, body) {
       const access_token = body.access_token;
       const refresh_token = body.refresh_token;

       console.log(body)
       // we can also pass the token to the browser to make requests from there
       res.redirect(
         `${FRONTEND_URI}/#${querystring.stringify({
           access_token,
           refresh_token,
         })}`,
       );
     });
 
 });



app.listen(PORT ,()=>{
 console.log(`App is running at port : ${PORT}`)
})



