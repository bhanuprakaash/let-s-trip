import React from 'react';
import { Link } from 'react-router-dom';

const TopDestinations = () => {
  return (
    <section data-bs-version="5.1" className="gallery09 cid-ukK1WqS1TV" id="gallery09-25">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-4 main-text">
            <div className="">
              <h5 className="mbr-section-title mbr-fonts-style mt-0 mb-4 display-2">Our Top<br />Destinations</h5>
              <h6 className="mbr-section-subtitle mbr-fonts-style mt-0 mb-4 display-7">
                Explore some of India's most popular destinations.<br /><br />From vibrant cities and landscapes to unique escapes, our top picks will inspire your next adventure across India.
              </h6>
              <div className="mbr-section-btn mt-3 main-button">
                <Link to="/destinations" className="btn item-btn btn-warning display-7">Explore More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 side-features row">
            <div className="item features-image col-12 col-md-6 col-lg-6 active">
              <div className="item-wrapper">
                <div className="item-img">
                  <img src="assets/images/aerial-shot-rice-hills-surrounded-by-greens-trees-815x1088.jpg" alt="Kerala" title="" data-slide-to="0" data-bs-slide-to="0" />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mt-3 mb-3 display-7"><strong>Kerala</strong></h5>
                </div>
              </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-6">
              <div className="item-wrapper">
                <div className="item-img">
                  <img src="assets/images/ancient-building-india-815x1223.jpeg" alt="Jaipur" title="" data-slide-to="1" data-bs-slide-to="1" />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mt-3 mb-3 display-7"><strong>Jaipur</strong></h5>
                </div>
              </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-6">
              <div className="item-wrapper">
                <div className="item-img">
                  <img src="assets/images/beautiful-vertical-shot-taj-mahal-building-agra-india-with-trees-nearby-815x1223.jpg" alt="Agra" title="" data-slide-to="2" data-bs-slide-to="2" />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mt-3 mb-3 display-7"><strong>Agra</strong></h5>
                </div>
              </div>
            </div>
            <div className="item features-image col-12 col-md-6 col-lg-6">
              <div className="item-wrapper">
                <div className="item-img">
                  <img src="assets/images/swimming-pool-815x1223.jpg" alt="Goa" title="" data-slide-to="3" data-bs-slide-to="3" />
                </div>
                <div className="item-content align-left">
                  <h5 className="item-title mbr-fonts-style mt-3 mb-3 display-7"><strong>Goa</strong></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
