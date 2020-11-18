import React from "react";
import "./Bio-body.css";
import Footer from "../footer/footer";

const BioBody = (props) => (
  <div className="background">
    <div className="bio-body">
      <div className="bio-body_backgroundinformation">
        <div className="bio-body_title">
          <h1>Background Information</h1>
          <hr />
        </div>
        <div className="bio-body_backgroundinformation_body">
          <div className="bio-body_backgroundinformation_body_general">
            <p>
              <strong>Origin : </strong>Beirut, Lebanon
              <br />
              <strong>Genres : </strong>Thrash / Death Metal
              <br />
              <strong>Years Active : </strong>2016-Present
              <br />
              <strong>Discography : </strong>1 EP
              <br />
              <strong>Label : </strong>None
            </p>
          </div>
          <div className="bio-body_backgroundinformation_body_influences">
            <p>
              <strong>Influences : </strong>Slayer, At The Gates, Kreator,
              <span className="Band-team-names"> Gojira,Necrophobic</span>
            </p>
          </div>
          <div className="bio-body_backgroundinformation_body_members">
            <p>
              <strong>Members :</strong>
              <br />
              <span className="Band-team-names">Maya Khairallah</span>{" "}
              <span className="text">( Vocals )</span>
              <br />
              <span className="Band-team-names"> Lilas Mayassi</span>{" "}
              <span className="text">( Guitars )</span>
              <br />
              <span className="Band-team-names">Shery Bechara</span>{" "}
              <span className="text">( Guitars )</span>
              <br />
              <span className="Band-team-names"> Alma Doumani </span>
              <span className="text">( Bass )</span>
              <br />
              <span className="Band-team-names"> Tatyana Boughaba </span>
              <span className="text">( Drums )</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mini-logo">☣</div>
      <div className="mini-logo">☣</div>
      <div className="mini-logo">☣</div>
      <div className="bio-body_biography">
        <div className="bio-body_title centerd">
          <h1>Biography</h1>
          <hr />
        </div>
        <div className="bio-body_biography_body">
          <p>
            In the summer of 2015, Lilas Mayassi and Shery Bechara met during a
            riot out-break and protest against the government regarding the
            garbage crisis in Lebanon. They discussed their interests and both
            having been in and out of bands, decided to try something new -an
            all female metal band. The hunt for fellow female musicians was
            futile, but Lilas (Guitars) managed to find Alma Doumani (Bass)
            through facebook, and Tatyana Boughaba (Drums) was previously in a
            death metal band with Shery (Guitars). Maya Khairallah had recently
            parted ways with her previous band, and joined S2S on vocals soon
            after, and everything fell in the right place. The members have
            different musical backgrounds, ranging from blues to black and
            groove metal, reaching death and thrash metal, which is a major part
            of their sound.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    {/* <div className = "copyright">
      <p>CopyRight Ⓒ 2020 Code Stellars .All Rights Reserved</p>
      </div> */}
  </div>
);
export default BioBody;
