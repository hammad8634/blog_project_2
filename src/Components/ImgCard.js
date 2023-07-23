import React from "react";
import image from "./proj.png";
import "./ImageCard.css";

const ImageCard = () => {
  return (
    <div className="pt-3 ">
      <div className="card text-bg-dark border-0 rounded-0 ">
        <img src={image} className="card-img opacity-50 rounded-0 " alt="..." />
        <div className="card-img-overlay ms-sm-5 marg ">
          <div className="row ">
            <div className="look-beyond-text">
              <div className="fs-md mb-3  text-light txt-size-on-img card-text col-md-10 col-lg-10">
                Looking beyond the horizon to change the trajectory for vision
                loss
              </div>
              <div className="card-text txt34 fs-md-6 text-light col-md-8 col-lg-8 description">
                With millions of people worldwide living with retinal
                conditions, scientists at Roche have the ultimate goal to
                hopefully prevent, and even reverse, vision loss.
              </div>
              <button className="btn btn-primary butt border-0 rounded-0 p-3 mt-4 ">
                Read the story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
