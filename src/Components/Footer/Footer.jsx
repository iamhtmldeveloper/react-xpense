/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/images/x.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="footer-section">
          <div className="column">
            <div className="logo">
              <a href="">
                <span>
                  <img src={Logo} alt="Logo" />
                </span>
                <p>pense</p>
              </a>
            </div>
          </div>
          <div className="column">
            <h6>Links</h6>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h6>Legal</h6>
            <ul>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Terms of conditions</a>
              </li>
              <li>
                <a href="#">Privecy policy</a>
              </li>
              <li>
                <a href="#">Cookie policy</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h6>Newsletter</h6>
            <p>Over 25000 people have subscribed</p>
            <span>We don’t sell your email and spam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
