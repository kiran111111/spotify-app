import React from 'react';
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home"
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import "./profile.css"
import Artist from "../Artist/Artist";
import TrackItem from "../TrackItem/TrackItem"

class Profile extends React.Component{


  render(){


    localStorage.setItem('token',this.props.token);

    return (
      <div className="main__Container">
         
         <Router >
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/artists" component={Artist}/>
            <Route path="/track/:id" component={TrackItem} />
          </Switch>
        
        </Router>
      </div>
    )
  }
}


export default Profile;
