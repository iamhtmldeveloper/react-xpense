import React from "react";
import BannerImg from "../../assets/images/banner.svg";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container mx-auto">
        <div className="banner">
          <div className="leftSide">
            <h1>Track your Expenses to Save Money</h1>
            <p>Helps you to organize your income and expenses</p>
            <ul>
              <li>
                <button>Try free demo</button>
              </li>
              <li>— Web, iOs and Android</li>
            </ul>
          </div>
          <div className="rightSide">
            <img src={BannerImg} alt="Banner Img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
