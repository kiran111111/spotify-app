import React,{useState,useEffect} from 'react';
import './App.css';
import Profile from "./Components/Profile/Profile"
import {token as accesstoken} from "./spotify";


function App() {

  const [token,setToken]  = useState("");

  useEffect(() => {
    setToken(accesstoken)
  })

  return (
    <div className="App">
       {token ? 
          <Profile /> 
       :
          <div className="login">
          <a href={"http://localhost:5000/login"} > Log In</a>
          </div>
        }
    </div>
  );
}

export default App;
