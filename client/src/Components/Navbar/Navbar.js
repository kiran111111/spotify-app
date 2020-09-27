import React from 'react';
import {FaItunesNote , FaUser ,FaHistory } from "react-icons/fa";
import {GiMicrophone} from "react-icons/gi";
import {RiPlayListFill , RiSpotifyFill} from "react-icons/ri";
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";

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
     <NavLink to="/">
        <FaUser  className="symbols"/>
        <div>Profile</div>
     </NavLink>
    </li>
    <li className="navMenu__item">
    <NavLink to="/artists">
     <GiMicrophone className="symbols" />
     <div>Top Artists</div>
     </NavLink>
    </li>
    <li className="navMenu__item">
    <a href="/tracks">
     <FaItunesNote className="symbols" />
     <div>Top Tracks</div>
     </a>
    </li>
    <li className="navMenu__item">
    <a href="/recents">
      <FaHistory className="symbols" />
       <div>Recent</div>
       </a>
    </li>
    <li className="navMenu__item">
    <a href="/playlist">
      <RiPlayListFill className="symbols" />
      <div>Playlits</div>
      </a>
    </li>
   </ul>
     
  

     
  </div>
 )
}
