import axios from "axios";
import {getHashParams} from "./utils";

// get the token from the url
export const getAccessToken = () => {
 const {  access_token } = getHashParams();
 return access_token;
}
        
// get the token from the url;
export const token = getAccessToken();
console.log(token)

// headers to pass in user requests
const headers = {
 Authorization: `Bearer ${token}`,
 'Content-Type': 'application/json',
};


// get user details
export const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });

getUser()
.then(res => {console.log(res)})




