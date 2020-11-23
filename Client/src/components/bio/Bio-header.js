import React from "react";
import "./Bio-header.css";
import bioheaderimage from "../../images/bio/bio-header.jpg";
import bioheaderslogan from "../../images/logo.png";
const BioHeader = (props) => (
  <div className="bio-header">
    <img
      id="bio-header-image"
      className="bio-header-image"
      alt={`Slave to Sirens Group pic`}
      src={bioheaderimage}
    />
    <img
      id="bio-header-slogan"
      className="bio-header-slogan"
      alt="Slogan"
      src={bioheaderslogan}
    />
  </div>
);
export default BioHeader;
