import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section className="team2 cid-ukLgGMFYSR" id="team2-2p">
      <div className="container">
        <div className="item features-image">
          <div className="item-wrapper">
            <div className="row align-items-center">
              <div className="col-12 col-md-4">
                <div className="image-wrapper">
                  <img
                    src="assets/images/mbr-815x815.png"
                    alt="Mobirise Website Builder"
                  />
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="card-box">
                  <h5 className="card-title mbr-fonts-style m-0 mb-3 display-5">
                    <p>
                      <strong>@hq-</strong>
                      <strong>lets-trip</strong>
                    </p>
                  </h5>
                  <h6 className="card-subtitle mbr-fonts-style mb-3 display-4">
                    <strong>HQ of Let's Trip</strong>
                  </h6>
                  <p className="mbr-text mbr-fonts-style display-7">
                    Welcome to Let's Trip HQ! At Let's Trip, our mission is to
                    make travel planning seamless, enjoyable, and personalized.
                    Our platform empowers travelers to discover new
                    destinations, create custom itineraries, and manage their
                    travel plans effortlessly.
                  </p>
                  <div className="social-row display-7">
                    <div className="soc-item">
                      <Link to="/profile" aria-label="Facebook">
                        <FaFacebook size={25} color="black" />
                      </Link>
                    </div>
                    <div className="soc-item">
                      <Link to="/profile" aria-label="Twitter">
                        <FaTwitter size={25} color="black" />
                      </Link>
                    </div>
                    <div className="soc-item">
                      <Link to="/profile" aria-label="Instagram">
                        <FaInstagram size={25} color="black" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
