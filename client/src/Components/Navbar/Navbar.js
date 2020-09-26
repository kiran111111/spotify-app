import React from 'react';
import {FaItunesNote , FaUser ,FaHistory } from "react-icons/fa";
import {GiMicrophone} from "react-icons/gi";
import {RiPlayListFill , RiSpotifyFill} from "react-icons/ri";
import "./Navbar.css";

export default function Navbar() {
 return (
  <div className="navbar">

   <div className="navLogo">
    <a href="/">
     <RiSpotifyFill className="spotify__logo" />
    </a>
   </div>

   <ul className="navMenu">
    <li className="navMenu__item">
      <a>
        <FaUser  className="symbols"/>
        <div>Profile</div>
     </a>
    </li>
    <li className="navMenu__item">
    <a>
     <GiMicrophone className="symbols" />
     <div>Top Artists</div>
     </a>
    </li>
    <li className="navMenu__item">
    <a>
     <FaItunesNote className="symbols" />
     <div>Top Tracks</div>
     </a>
    </li>
    <li className="navMenu__item">
    <a>
      <FaHistory className="symbols" />
       <div>Recent</div>
       </a>
    </li>
    <li className="navMenu__item">
    <a>
      <RiPlayListFill className="symbols" />
      <div>Playlits</div>
      </a>
    </li>
   </ul>
     
  

     
  </div>
 )
}
