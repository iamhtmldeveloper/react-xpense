import React from "react";
import overviewImg from "../../assets/images/overview.svg";
import facebookImg from "../../assets/images/facebook.svg";
import googleImg from "../../assets/images/google.svg";
import cocaColaImg from "../../assets/images/coca-cola.svg";
import linkdeinImg from "../../assets/images/linkedin.svg";
import samsungImg from "../../assets/images/samsung.svg";

const Overview = () => {
  return (
    <div>
      <section className="section-overview">
        <div className="container mx-auto">
          <img src={overviewImg} alt="Overview" />
        </div>
      </section>

      <section className="brands">
        <div className="container mx-auto">
          <ul>
            <li>
              <img src={facebookImg} alt="Overview" />
            </li>
            <li>
              <img src={googleImg} alt="Overview" />
            </li>
            <li>
              <img src={cocaColaImg} alt="Overview" />
            </li>
            <li>
              <img src={linkdeinImg} alt="Overview" />
            </li>
            <li>
              <img src={samsungImg} alt="Overview" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Overview;
