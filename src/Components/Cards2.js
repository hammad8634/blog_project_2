import React from "react";
import "./Cards2.css";
const Card2 = ({ title2, description2, image2 }) => {
  // Get the button element

  return (
    
    <div className="container4 mt-4">
      <div className="card2 mb-1">
        <div className="row g-0">
          <div className="col-lg-6 col-md-12 col-sm-10">
            <img className="img-fluid" src={image2} alt="/" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-0">
            <div className="card-body2">
              <p className="card2-title mt-3">{title2}</p>
              <p className="card2-text lead">{description2}</p>
              <div className="my-5">
                <a href="/" className="button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card2;
