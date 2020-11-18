import React from "react";
import SideNav from "../SideNav/SideNav";
import "./Reviews.css";
import Footer from "../footer/footer";
import Collapse from "rc-collapse";

var Panel = Collapse.Panel;
const Reviews = (props) => {
  return (
    <div className="background-position">
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="resonsive-overflow">
        <div className="container">
          <div className="background">
            <Collapse
              accordion={false}
              destroyInactivePanel={true}
              defaultActiveKey={"0"}
            >
              <Panel
                header="REVIEWS"
                headerClass="my-header-class"
                className="reviews_reviews"
              >
                <p className="reviews_odd">
                  “The first thing that blew me away when I listened to it was
                  just how professional it was...Maya S. Khairallah manages a
                  really unique feat, which is that the vocals are still harsh,
                  they're still agressive, but they still sound distinctly
                  female.” 4/5
                  <br />
                  <a href="https://bit.ly/2WeSSSD" target="_blank" alt = {`BangerTV`}  rel="noreferrer">
                    <small>(BangerTV - Featuring Blayne)</small>
                  </a>
                </p>
                <p className="reviews_even">
                  “What impressed me most throughout the audition was the
                  extreme creativity in being able to do so many different parts
                  within each song, showing a lot of technique of all the
                  members. Excellent debut.”
                  <br />
                  <a href="https://bit.ly/2AZjnTf" target="_blank" alt ={`Metal Na Lata Magazine`}  rel="noreferrer">
                    <small>
                      (Google translated from Metal Na Lata Magazine - Brazil)
                    </small>
                  </a>
                </p>
                <p className="reviews_odd">
                  “...the compositions are surprisingly well handled, individual
                  riffs and passages follow each other smoothly...”
                  <br />
                  <a href="https://bit.ly/2Uev4N9" target="_blank" alt = {`Necrosphere Webzine`}  rel="noreferrer">
                    <small>
                      (Google translated from Necrosphere Webzine - Slovakia)
                    </small>
                  </a>
                </p>
              </Panel>
              <Panel
                header="TESTIMONIES"
                headerClass="my-header-class"
                className="reviews_testimonies"
              >
                <p className="reviews_odd">
                  “I'm really amazed by the work you've done. Excellent job
                  ladies!!”
                  <br />
                  <small>Walid Choughary (Kaoteon band)</small>
                </p>
                <p className="reviews_even">
                  “This music is powerful, well written and well produced! I can
                  only see you all going very far indeed.”
                  <br />
                  <small>Giles Lavery (DragonsClaw band)</small>
                </p>
                <p className="reviews_odd">
                  “Right away I was hooked by the killer heavy thrash riffs, and
                  sick vocals from Maya Khairallah awesome guitar tones killer
                  drumming! It’s an all-around solid album!”
                  <br />
                  <small>Denis Franco (Torso band)</small>
                </p>
                <p className="reviews_even">
                  “The all-female Lebanese band did a great job!! It’s already
                  hard enough to form a band over there, but you have no idea
                  what it’s like being a girl in this scene in that country!”
                  <br />
                  <small>Alexy Khoury (London based sound engineer)</small>
                </p>
                <p className="reviews_odd">
                  “Horns up high, sounds fantastic!!!! You gonna be rocking a
                  lot of big stages, come to America!”
                  <br />
                  <small>Denis Franco (Torso band)</small>
                </p>
              </Panel>
            </Collapse>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
