/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeCost from "../../assets/images/free-cost.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

const Free = () => {
  return (
    <section id="about" className="always-section">
      <div className="container mx-auto">
        <div className="always">
          <div className="image">
            <img src={FreeCost} alt="free some cost" />
          </div>
          <div className="desc">
            <h2>free some cost</h2>
            <h3>Save cost for you and family</h3>
            <p>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
              eget ut.
            </p>
            <a className="read-more" href="#">
              Learn more <img src={arrowRight} alt="Arrow Right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Free;
