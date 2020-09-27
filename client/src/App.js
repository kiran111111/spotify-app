import React,{useState,useEffect} from 'react';
import './App.css';
import {Route,Switch,Redirect, BrowserRouter as Router} from "react-router-dom";
import Profile from "./Components/Profile/Profile"
import {token as accesstoken} from "./spotify";
// Components
import Track from "./Components/Track/Track";
import Artist from "./Components/Artist/Artist";
import Playlist from "./Components/Playlist/Playlist";
import Recent from "./Components/Recent/Recent";






function App() {

  const [token,setToken]  = useState("");


  useEffect(() => {
  
    setToken(accesstoken)
    
  })

  return (

    <div className="App">
   
       {token ? 
          <Profile  token={accesstoken} /> 
       :
          <div className="login">
            <a href={"http://localhost:5000/login"} > Log In</a>
          </div>
       }
   
  
    </div>
  );
}

export default App;
