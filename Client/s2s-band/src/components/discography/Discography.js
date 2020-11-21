import React from "react";
import Footer from "../footer/footer";
import ReactPlayer from "react-player";
import "./Discography.css";
import SideNav from "../SideNav/SideNav";
import TerminalLeachesHeader from './TerminalLeachesHeader';
import SliderTrack from './SliderTrack'
// import './slider.scss'

function Discography() {

  return (
    <div className="background-position">
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="resonsive-overflow">
        <div className="container">
          <div className="background Slider-Player">
            <TerminalLeachesHeader/>
            <div className="slide-track-container">
              <SliderTrack/>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discography;
