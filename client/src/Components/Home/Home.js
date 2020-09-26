import React,{useState} from 'react';
import "./Home.css";
import  Audio from "./Audio/Audio";
import Track from "./Audio/Track";
import {getUser,getFollowing,getTopArtistsLong,getTopTracksLong} from "../../spotify"

class Home extends React.Component {

 constructor(props){
  super(props);
  this.state ={
   name :'',
   followers :'',
   imageuri : '',
   following :'',
   artist :'',
   tracks :''
  }

  this.handleUser = this.handleUser.bind(this);
 }


 componentDidMount(){
  this.handleUser()
 }

 handleUser(){
  getUser().then(res => {
   this.setState({
    name : res.data.display_name,
    imageuri : res.data.images[0].url,
    followers : res.data.followers.total
   })
  })

 getFollowing().then(res =>{
  this.setState({
   following : res.data.artists.total
  })
 })


  getTopArtistsLong().then(res=>{
   this.setState({
    artists : res.data.items
   })
  })


  getTopTracksLong().then(res=>{
   console.log(res.data)
   this.setState({
     tracks : res.data.items
   })
  })

 }



render(){
 return (
  <div className="home__container">
   <div className="profile__contatiner">
    <div className="profile__image">
      <img src={this.state.imageuri}></img>
    </div>
    <div className="profile__name">
     <p>{this.state.name}</p>
    </div>
    <div className="profile__stats">
     <ul>
      <li>
       <p className="profile__num">{this.state.following}</p><br></br>
       <p className="profile__stat">Following</p>
      </li>
      <li>
       <p className="profile__num">{this.state.followers}</p><br></br>
       <p className="profile__stat">Followers</p>
      </li>
      <li>
       <p className="profile__num">0</p><br></br>
       <p className="profile__stat">playlists</p>
      </li>
     </ul>

     <div>
      <button className="spotify__button"> <a href="/">Logout</a> </button>
     </div>
    </div>
   </div>
   <div className="audiolist__container">
    {/* audio list components */}
    <Audio title={"Artists"}  getTopList={this.state.artists} />
    <Track  title={"Tracks"} getTopList={this.state.tracks}/>
   </div>
  </div>
  )
 }
}



export default Home;
