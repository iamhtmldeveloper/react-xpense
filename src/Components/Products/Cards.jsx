/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import cloudImg from "../../assets/images/cloud-server.svg";
import arrowRight from "../../assets/images/arrow-right-black.svg";

const Cards = () => {
  return (
    <section className="cards-section">
      <div className="container mx-auto">
        <div className="cards">
          <ul>
            <li>
              <a href="javascript://">
                <div>
                  <img src={cloudImg} alt="Cloud Image" />
                </div>
                <h5>Cloud server</h5>
                <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                <span>
                  <img src={arrowRight} alt="Arrow" />
                </span>
              </a>
            </li>
            <li>
              <a href="javascript://">
                <div>
                  <img src={cloudImg} alt="Cloud Image" />
                </div>
                <h5>Cloud server</h5>
                <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                <span>
                  <img src={arrowRight} alt="Arrow" />
                </span>
              </a>
            </li>
            <li>
              <a href="javascript://">
                <div>
                  <img src={cloudImg} alt="Cloud Image" />
                </div>
                <h5>Cloud server</h5>
                <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
                <span>
                  <img src={arrowRight} alt="Arrow" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cards;
