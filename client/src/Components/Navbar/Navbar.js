import React from 'react';
import {FaItunesNote , FaUser ,FaHistory } from "react-icons/fa";
import {GiMicrophone} from "react-icons/gi";
import {RiPlayListFill , RiSpotifyFill} from "react-icons/ri";

export default function Navbar() {
 return (
  <div className="navbar">

   <div className="navLogo">
    <a href="/">
     <RiSpotifyFill />
    </a>
   </div>

   <ul className="navMenu">
    <li className="navMenu__item">
     <FaUser />
     <div>Profile</div>
    </li>
    <li className="navMenu__item">
     <GiMicrophone />
     <div>Top Artists</div>
    </li>
    <li className="navMenu__item">
     <FaItunesNote />
     <div>Top Tracks</div>
    </li>
    <li className="navMenu__item">
      <FaHistory />
       <div>Recent</div>
    </li>
    <li className="navMenu__item">
      <RiPlayListFill />
      <div>Playlits</div>
    </li>
   </ul>
     
  

     
  </div>
 )
}
