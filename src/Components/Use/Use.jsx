/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AlwaysImg from "../../assets/images/alwalysonline.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

const Use = () => {
  return (
    <section className="always-section">
      <div className="container mx-auto">
        <div className="always">
          <div className="desc">
            <h2>Alwalys online</h2>
            <h3>Real-time support with cloud</h3>
            <p>
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
              eget ut.
            </p>
            <a className="read-more" href="#">
              Learn more <img src={arrowRight} alt="Arrow Right" />
            </a>
          </div>
          <div className="image">
            <img src={AlwaysImg} alt="Always Online" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Use;
