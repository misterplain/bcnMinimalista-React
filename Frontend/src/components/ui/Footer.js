import React from "react";
import "bootstrap-social/bootstrap-social.css";
import "../../styles/ui/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__content">
        <div className="footer__icon">
          <a href="http://instagram.com/" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram fa-3x"></i>
          </a>
        </div>
        <div className="footer__icon">
          <a href="http://facebook.com/" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook fa-3x"></i>
          </a>
        </div>
        <div className="footer__icon">
          <a href="http://twitter.com/" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter fa-3x"></i>
          </a>
        </div>
        <div className="footer__icon">
          <a href="http://youtube.com/" target="_blank" rel="noreferrer">
            <i className="fa fa-envelope fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
