import "./FooterStyle.css";
import React from "react";

import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaPhone, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>4105 Ext1 Vukuzakhe </p>
              <p>VOLKSRUST </p>
              <p>2470</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              073 513 5428
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              chailock.sphe@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
          <h4>Copyright @2023 All Reserved by Chailock</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
