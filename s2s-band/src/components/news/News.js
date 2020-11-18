import React from "react";
import SideNav from "../SideNav/SideNav";
import "./News.css";
import Footer from "../footer/footer";
import vimage from "../../images/News/press1.png";
import timage from "../../images/News/press2.png";
import gimage from "../../images/News/v2.png";

function Images() {
  return (
    <div className="imagecontainer-news">
      <a href="https://bit.ly/2B0AX9h" target="_blank" className="image1">
        <img src={vimage} alt="press"></img>
        <span className="caption">The National</span>
      </a>
      <a href="https://bit.ly/2n21qvM" target="_blank" className="image2">
        <img src={timage} alt="press2"></img>
        <span className="caption">
          Featured in Revolver Magazine BBC
          <br />
          Jan 2019 Issue
        </span>
      </a>
      <a href="https://bbc.in/2MrIDGd" target="_blank" className="image3">
        <img src={gimage} alt="press3"></img>
        <span className="caption">BBC Jan 2019 Issue </span>
      </a>
    </div>
  );
}

function News() {
  return (
    <div className="background-position Events">
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="resonsive-overflow">
        <div className="container">
          <div className="background">
            <h1 className = "news">NEWS</h1>
            <hr />
            <Images />

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
