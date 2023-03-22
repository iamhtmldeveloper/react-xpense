/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import UseAnytime from "../../assets/images/use-anytime.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

const Use = () => {
  return (
    <section id="pricing" className="always-section">
      <div className="container mx-auto">
        <div className="always">
          <div className="desc">
            <h2>Use anytime</h2>
            <h3>Use anytime when you need</h3>
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
            <img src={UseAnytime} alt="Use anytime" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Use;
