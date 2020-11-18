import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./SideNav.css";
import "./SideNavResponsive.css";


function SideNav(props) {
  return (
    <Menu {...props}>
      <Link className="menu-item a" to="/">
        Home
      </Link>
      <Link className="menu-item a" to="/bio">
        Bio
      </Link>
      <Link className="menu-item a" to="/news">
        News
      </Link>
      <Link className="menu-item a" to="/gallery">
        Gallery
      </Link>
      <Link className="menu-item a" to="/events">
        Events
      </Link>
      <Link className="menu-item a" to="/reviews">
        Reviews
      </Link>
      <Link className="menu-item a" to="/discography">
        Discography
      </Link>
    </Menu>
  );
}

export default SideNav;
