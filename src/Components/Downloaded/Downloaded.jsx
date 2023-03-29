import React from "react";

import downloadLeft from "../../assets/images/download-left.svg";
import downloadRight from "../../assets/images/download-right.svg";
import downloadedBGRight from "../../assets/images/downloaded-bg-right.svg";
import downloadedBGLeft from "../../assets/images/downloaded-bg-left.svg";

const Downloaded = () => {
  return (
    <section className="section section-downloaded">
      <img
        className="downloadedBGRight"
        src={downloadedBGRight}
        alt="Downloaded"
      ></img>
      <div className="container mx-auto">
        <div className="downloaded-inner">
          <div className="downloaded-title">
            <h4>20M+ downloaded from 32 diffrent countires</h4>
            <p>Try demo for 7 days with full features.</p>
          </div>
          <div className="downloaded-img">
            <div>
              <img src={downloadLeft} alt="Downloaded"></img>
            </div>
            <div>
              <button>Try free demo</button>
            </div>
            <div>
              <img src={downloadRight} alt="Downloaded"></img>
            </div>
          </div>
        </div>
      </div>
      <img
        className="downloadedBGLeft"
        src={downloadedBGLeft}
        alt="Downloaded"
      ></img>
    </section>
  );
};

export default Downloaded;
