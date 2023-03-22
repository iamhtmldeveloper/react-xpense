import React from "react";
import BannerImg from "../../assets/images/banner.svg";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container mx-auto">
        <div className="banner">
          <div className="leftSide">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
            >
              Track your Expenses to Save Money
            </motion.h1>
            <p>Helps you to organize your income and expenses</p>
            <ul>
              <li>
                <button>Try free demo</button>
              </li>
              <li>
                <TypeAnimation
                  sequence={[
                    "Front End Developer",
                    2000,
                    "JavaScript",
                    2000,
                    "React",
                    2000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </li>
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
