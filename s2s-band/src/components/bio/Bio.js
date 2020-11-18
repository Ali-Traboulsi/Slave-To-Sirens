import React from "react";
import "./Bio.css";
import SideNav from "../SideNav/SideNav";
import BioHeader from "./Bio-header";
import BioBody from "./Bio-body";

function Bio() {
  return (
    <div className="background-position">
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="container">
        <BioHeader />
        <BioBody />
      </div>
    </div>
  );
}

export default Bio;
