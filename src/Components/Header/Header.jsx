/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/images/x.svg";
import { headerData } from "./HeaderData";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="row">
          <div className="logo">
            <a href="">
              <span>
                <img src={Logo} alt="Logo" />
              </span>
              <p>pense</p>
            </a>
          </div>
          <div>
            <ul className="menu">
              {headerData.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.url} smooth={true} spy={true}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              {/*<li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Feedback</a>
  </li> */}
            </ul>
          </div>
          <div className="menu-button">
            <button>Request Button</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
