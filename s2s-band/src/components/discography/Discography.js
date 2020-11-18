import React from "react";
import SideNav from "../SideNav/SideNav";
import Footer from "../footer/footer";
import ReactPlayer from "react-player";
import "./Discography.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Discography() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="background-position">
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="resonsive-overflow">
        <div className="container">
          <div className="background Slider-Player">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discography;
