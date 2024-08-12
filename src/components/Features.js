import React from "react";
import { FaPlane } from "react-icons/fa";

const Features = () => {
  return (
    <section
      data-bs-version="5.1"
      className="features10 cid-ukKlCD5O2w"
      id="features010-2j"
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 mb-0 content-head">
            <h3 className="mbr-section-title mbr-fonts-style align-center display-2">
              What We Offer
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="item features-without-image col-12 col-md-6 col-lg-3 active">
            <div className="item-wrapper">
              <div className="card-box align-left">
                <div className="iconfont-wrapper mb-3">
                  <span className="mbr-iconfont mobi-mbri-calendar mobi-mbri"></span>
                </div>
                <h5 className="card-title mbr-fonts-style display-5">
                  Itineraries
                </h5>
                <p className="card-text mbr-fonts-style mb-3 display-7">
                  Design your ideal trip with personalized itineraries.
                </p>
              </div>
            </div>
          </div>
          <div className="item features-without-image col-12 col-md-6 col-lg-3">
            <div className="item-wrapper">
              <div className="card-box align-left">
                <div className="iconfont-wrapper mb-3">
                  <span className="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                </div>
                <h5 className="card-title mbr-fonts-style display-5">Budget</h5>
                <p className="card-text mbr-fonts-style mb-3 display-7">
                  Monitor your spending and stick to your budget with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="item features-without-image col-12 col-md-6 col-lg-3">
            <div className="item-wrapper">
              <div className="card-box align-left">
                <div className="iconfont-wrapper mb-3">
                  <span className="mbr-iconfont mbri-rocket">
                    <FaPlane size={25} />
                  </span>
                </div>
                <h5 className="card-title mbr-fonts-style display-5">
                  Destinations
                </h5>
                <p className="card-text mbr-fonts-style mb-3 display-7">
                  Discover and add top destinations to your travel list with
                  just a click.
                </p>
              </div>
            </div>
          </div>
          <div className="item features-without-image col-12 col-md-6 col-lg-3">
            <div className="item-wrapper">
              <div className="card-box align-left">
                <div className="iconfont-wrapper mb-3">
                  <span className="mbr-iconfont mobi-mbri-sun mobi-mbri"></span>
                </div>
                <h5 className="card-title mbr-fonts-style display-5">
                  Weather Forecast
                </h5>
                <p className="card-text mbr-fonts-style mb-3 display-7">
                  Access up-to-date weather forecasts for your destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
