import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HD from "./style/Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={HD.headhome}>
      <h2 className={HD.header}>TravelMedia.in</h2>
      <div className={HD.headmenu}>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeIcon style={{ color: "#F9DDCF" }} />
        </Button>
        <Button>
          <NotificationsIcon style={{ color: "#F9DDCF" }} />
        </Button>
        <Button>
          <BookmarkIcon style={{ color: "#F9DDCF" }} />
        </Button>
        <Button>
          <PersonIcon style={{ color: "#F9DDCF" }} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
