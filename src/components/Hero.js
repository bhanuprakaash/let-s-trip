import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      data-bs-version="5.1"
      className="header1 cid-ukJAGW8A1r"
      id="header01-1w"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-7 image-wrapper">
            <img
              className="w-100"
              src="assets/images/10009122-removebg-preview-612x408.png"
              alt="travel-person"
            />
          </div>
          <div className="col-12 col-lg col-md-12">
            <div className="text-wrapper align-left">
              <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                <strong>Plan </strong>&amp;
                <br />
                <strong> Explore...</strong>
                <br />
              </h1>
              <p className="mbr-text mbr-fonts-style mb-4 display-7">
                Discover new places and plan your trips effortlessly with Let's
                Trip.
                <br />
              </p>
              <div className="mbr-section-btn mt-3">
                <Link className="btn btn-warning display-7" to="/plan-trip">
                  <span className="mobi-mbri mobi-mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>
                  Start Planning Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
