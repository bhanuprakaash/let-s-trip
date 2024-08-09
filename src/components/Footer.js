import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <section data-bs-version="5.1" className="footer2 cid-ukKhaUlJjD" id="footer02-2c" style={{backgroundColor:'#fef7ff',borderTop:'0.5px solid #E0E0E0'}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 center mt-2 mb-3">
            <p className="mbr-fonts-style copyright mb-0 display-7">
              © Copyright 2024 Let's Trip - All Rights Reserved
            </p>
          </div>
          <div className="col-12 col-lg-6 center">
            <div className="row-links mt-2 mb-3">
              <ul className="row-links-soc">
                <li className="row-links-soc-item mbr-fonts-style display-7" >
                  <Link to="/profile" className="text-primary">Instagram</Link>
                </li>
                <li className="row-links-soc-item mbr-fonts-style display-7">
                  <Link to="/profile" className="text-primary">FaceBook</Link>
                </li>
                <li className="row-links-soc-item mbr-fonts-style display-7">
                  <Link to="/profile" className="text-primary">YouTube</Link>
                </li>
                <li className="row-links-soc-item mbr-fonts-style display-7">
                  <Link to="/profile" className="text-primary">X</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
