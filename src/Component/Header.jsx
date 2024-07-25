import React from "react";
import "./style/Header.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


const Header = () => {
  const navigate=useNavigate();
  return (
    <div id="headhome">
      <h2 id="header">TravelMedia.in</h2>
      <div id="headmenu">
       
          <Button onClick={()=>{
navigate("/")
          }} ><HomeIcon style={{ color: "#F9DDCF" }} /></Button>
          <Button><NotificationsIcon style={{ color: "#F9DDCF" }}/></Button>
          <Button><BookmarkIcon style={{ color: "#F9DDCF" }}/></Button>
          <Button><PersonIcon style={{ color: "#F9DDCF" }}/></Button>
          
          
        
      </div>
    </div>
  );
};

export default Header;
