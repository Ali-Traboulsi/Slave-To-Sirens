import React from "react";
import SideNav from "../SideNav/SideNav";
import "./Gallery.css";
import Footer from "../footer/footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../images/gallery/image1.png";
import img2 from "../../images/gallery/image2.png";
import img3 from "../../images/gallery/image3.png";
import img4 from "../../images/gallery/image4.png";
import img5 from "../../images/gallery/image5.png";
import img6 from "../../images/gallery/image6.png";
import img7 from "../../images/gallery/image7.png";
import img8 from "../../images/gallery/image8.png";
import img9 from "../../images/gallery/image9.jpg";
import img10 from "../../images/gallery/image10.jpg";
import img11 from "../../images/gallery/image11.jpg";
import img12 from "../../images/gallery/image12.jpg";
import img13 from "../../images/gallery/image13.jpg";
import img14 from "../../images/gallery/image14.jpg";

function Gallery() {
  return (
    <div className="background-position">
      <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="resonsive-overflow">
        <div className="container">
          <div className="background">
            <div className="Gallery">
              <h1>Gallery</h1>
              <hr />
            </div>
            <Carousel autoPlay autoPlayInterval="5000" className="Carousel">
              <div>
                <img src={img1} alt="bandimage" />
              </div>
              <div>
                <img src={img2} alt="bandimage" />
              </div>
              <div>
                <img src={img3} alt="bandimage" />
              </div>
              <div>
                <img src={img4} alt="bandimage" />
              </div>
              <div>
                <img src={img5} alt="bandimage" />
              </div>
              <div>
                <img src={img6} alt="bandimage" />
              </div>
              <div>
                <img src={img7} alt="bandimage" />
              </div>
              <div>
                <img src={img8} alt="bandimage" />
              </div>
              <div>
                <img src={img9} alt="bandimage" />
              </div>
              {/* <div>
              <img src={img10} alt="bandimage" />
            </div>
            <div>
              <img src={img11} alt="bandimage" />
            </div> */}
              <div>
                <img src={img12} alt="bandimage" />
              </div>
              <div>
                <img src={img13} alt="bandimage" />
              </div>
              <div>
                <img src={img14} alt="bandimage" />
              </div>
            </Carousel>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
