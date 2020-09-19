import axios from "axios";
import {getHashParams} from "./utils";


export const getAccessToken = () => {
 const {  token } = getHashParams();
 return token;
}
        

export const token = getAccessToken();
                     console.log(token)

const headers = {
 Authorization: `Bearer ${token}`,
 'Content-Type': 'application/json',
};


export const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });

getUser().then(res => {console.log(res)})


const REDIRECT_URI = "http://localhost:3000/";
const postUri = "https://accounts.spotify.com/api/token";
const grant = "authorization_code";
const CLIENT_ID = "3e287836f844456cb5e3e19ceba464da";
const CLIENT_SECRET = "25c3d672592b4140b1794dcc03c39a61";

// const getRefreshToken = () =>{
//     axios.post(`${postUri}&grant_type=${grant}&code=${token}&redirect_uri=${REDIRECT_URI}`)
//     .then(res=>{
//      console.log(res)
//     })
// }


const tokenHeaders = {
 token:token,
 Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
   'base64',
 )}`,
}

if(token){
 axios.get('http://localhost:5000/token', { headers : tokenHeaders })
}

