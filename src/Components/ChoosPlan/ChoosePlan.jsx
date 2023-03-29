/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import starterPlan from "../../assets/images/starter-plan.svg";
import SilverPlan from "../../assets/images/silver-plan.svg";
import diamondPlan from "../../assets/images/diamond-plan.svg";
import arrowRight from "../../assets/images/arrow-right-orange.svg";

const ChoosePlan = () => {
  return (
    <section className="choosePlan-section">
      <div className="container mx-auto">
        <div className="row">
          <h1>Choose your flexible plan.</h1>
        </div>

        <div className="chooseList">
          <ul className="cList">
            <li>
              <a href="javascript://">
                <div>
                  <img src={starterPlan} alt="Cloud Image" />
                </div>
                <h5>Starter Plan</h5>
                <ul className="cLists">
                  <li>Store unlimited data</li>
                  <li>Export to pdf, xls, csv</li>
                  <li>Cloud server support</li>
                </ul>
                <div className="cPrice">
                  <p>
                    $9.99/<span>year</span>
                  </p>
                  <small>up to 3 user + 1.99 per user</small>
                </div>
                <button>
                  Get this <img src={arrowRight} alt="Arrow" />
                </button>
              </a>
            </li>
            <li>
              <a href="javascript://">
                <div>
                  <img src={SilverPlan} alt="Cloud Image" />
                </div>
                <h5>Sliver Plan</h5>
                <ul className="cLists">
                  <li>Store unlimited data</li>
                  <li>Export to pdf, xls, csv</li>
                  <li>Cloud server support</li>
                </ul>
                <div className="cPrice">
                  <p>
                    $19.99/<span>year</span>
                  </p>
                  <small>up to 3 user + 1.99 per user</small>
                </div>
                <button>
                  Get this <img src={arrowRight} alt="Arrow" />
                </button>
              </a>
            </li>
            <li>
              <a href="javascript://">
                <div>
                  <img src={diamondPlan} alt="Cloud Image" />
                </div>
                <h5>Diamond Plan</h5>
                <ul className="cLists">
                  <li>Store unlimited data</li>
                  <li>Export to pdf, xls, csv</li>
                  <li>Cloud server support</li>
                </ul>
                <div className="cPrice">
                  <p>
                    $29.99/<span>year</span>
                  </p>
                  <small>up to 3 user + 1.99 per user</small>
                </div>
                <button>
                  Get this <img src={arrowRight} alt="Arrow" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
