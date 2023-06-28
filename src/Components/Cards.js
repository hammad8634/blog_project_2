import React from "react";
import "./Cards.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card rounded-0 border-0 ms-2 imgsize">
      <div className="image-container">
        <img
          src={image}
          className="card-img-top rounded-0 img-size img-fluid"
          alt="..."
        />
      </div>
      <div className="mt-3 border-0">
        <div className="d-flex justify-content-between">
          <div className="fs-3 mb-4 ">
            <h5 ><a className="card-title" href="#">{title}</a></h5>
          </div>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
