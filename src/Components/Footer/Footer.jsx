/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/images/x.svg";
import sFacebook from "../../assets/images/social-facebook.svg";
import sLinkedin from "../../assets/images/social-linkedin.svg";
import sTwitter from "../../assets/images/social-twitter.svg";

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
            <div className="subscribe">
              <input type="text" placeholder="Enter your email" class="" />
              <button>Subscribe</button>
            </div>
            <small> We don’t sell your email and spam</small>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="footer-bottom">
          <div>
            <ul>
              <li>
                <a href="#">Privacy & Terms</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <p>Copyright @ 2022 xpence</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">
                  <img src={sFacebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={sLinkedin} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={sTwitter} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
