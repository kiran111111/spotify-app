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
// use this function for displaying  the details on home page.
export const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });


//Get a List of Currnt User's Playlists
export const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers });


//Get the list of recently played songs
export const getRecentlyPlayed = () =>
  axios.get('https://api.spotify.com/v1/me/player/recently-played', {
    headers,
  });


//get list of followed artists: 
export const getFollowing = () =>
  axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });
 
  
// get the users top tracks:
export const getTopTracksLong = () =>
 axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', { headers });


// get the top artists checked by user
export const getTopArtistsLong = () =>
 axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', { headers });





