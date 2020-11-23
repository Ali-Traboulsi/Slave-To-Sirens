import React from "react";
import SideNav from "../SideNav/SideNav";
import Footer from "../footer/footer";
import "./Events.css";
import fimage from "../../images/Events/pink.jpg";
import simage from "../../images/Events/blue.jpg";
import timage from "../../images/Events/green.png";

function Images() {
  return (
    <div className="imagecontainer">
      <img className="image1" src={fimage} alt="band on stage"></img>

      <img className="image2" src={simage} alt="Metal Fest 2013"></img>

      <img className="image3" src={timage} alt="Metal United World Wide"></img>
    </div>
  );
}

function Events() {
  return (
    <div className="background-position">
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="resonsive-overflow">
        <div className="container">
          <div className="background">
            <div className="wraper">
              <header className="Events-header">
                <h1>BAND HIGHLIGHTS</h1>
                <hr />
                <div className="overall">
                  <div className="Events-text">
                    <ul>
                      <li>
                        <a href="#">
                          <span className="spin">
                            Opening Band for “Metal Gathering” Nader Sadek{" "}
                          </span>
                          <br />
                          <span className="position-text">
                            ft. Derek Roddy Concert
                          </span>
                          <br />
                          <span className="date">(Lebanon - 02.11.2016)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="spin">
                            Supporting Act for Onslaught (LB)
                          </span>
                          <br />
                          <span className="date">(Lebanon - 06.10.2016)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="spin">
                            {" "}
                            Terminal Leeches EP release (LB)
                          </span>
                          <br />
                          <span className="date">(03.11.2018)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="spin">
                            {" "}
                            Wacken Metal Battle 2018 Lebanon
                          </span>
                          <br />
                          <span className="date">(04.27.2018)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="spin">Beirut Metal Fest (LB)</span>
                          <br />
                          <span className="date">(09.08.18)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="spin">
                            {" "}
                            Glastonbury Festival (UK)
                          </span>
                          <br />
                          <span className="date">(27,29,30.06.19)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="spin">
                            W:O:A Wacken Warm Up Hamburg (DE)
                          </span>
                          <br />
                          <span className="date">(27.07.19)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="spin">W:O:A Wack</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Images />
                </div>
              </header>
            </div>
            <div className='upcoming'>
              <h1>UPCOMING SHOWS</h1>
              <hr/>
              <a href="#">
                   <span className="spin">
                            {" "}
                             Festival L'Boulevard (MAR) (29.09.19)
                   </span>
              </a>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
