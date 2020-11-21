import React from "react";
import "./footer.css";
import Logo from "../../images/logo.png";
import FacebookLogo from "../../images/footer/facebook-icon.png";
import InstagramLogo from "../../images/footer/instagram-icon.png";
import WhatsappLogo from "../../images/footer/whatsapp-icon.png";
import MailLogo from "../../images/footer/mail-icon.png";

function footer() {
  return (
    <div className="footer">
      <div className="footer-postion footer-reviews">
        <div className="social-media social-media-facebook">
          <a target="_blank" href="https://www.facebook.com/Slavetosirens/">
            <img className="Facebook-logo" src={FacebookLogo} alt="Facebook" />
          </a>
        </div>
        <div className=" social-media social-media-instagram">
          <a
            target="_blank"
            href="https://www.instagram.com/slavetosirensband/"
          >
            <img
              className="Instagram-logo"
              src={InstagramLogo}
              alt="Instagram"
            />
          </a>
        </div>
        <div className=" social-media social-media-whatsapp">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+961 81 916 009"
          >
            <img className="Whatsapp-logo" src={WhatsappLogo} alt="Whatsapp" />
          </a>
        </div>
        <div className=" social-media social-media-mail">
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=slavetosirens@gmail.com"
          >
            <img className="Mail-logo" src={MailLogo} alt="Whatsapp" />
          </a>
        </div>
        <div className="Logo-position">
          <a href = "/" ><img className="Logo" src={Logo} alt="Logo" /></a> 
        </div>
      </div>
      <div className="copyright">
        <p>
          CopyRight Ⓒ 2020 .
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=codestalers@gmail.com"
          >
            Code Stellars.
          </a>
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default footer;
