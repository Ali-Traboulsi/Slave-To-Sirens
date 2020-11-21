import React from "react";
import "./Home.css";
import Nav from "../Navigations/nav";
import SideNav from "../SideNav/SideNav";

function Home() {
  return (
    <div className="Home_bg">
      <div className="Navigation">
        <Nav />
      </div>
      <div className="SideNav">
        <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </div>
      <div className = "copyright">
      <p>CopyRight Ⓒ 2020 <a target="_blank"   rel="noreferrer" href= "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=codestalers@gmail.com">Code Stellars.</a>All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Home;
