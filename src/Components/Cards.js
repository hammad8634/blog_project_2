import React from 'react';
import './Cards.css'; // Create a separate CSS file for styling

const Card = ({ title, description, image }) => {
  
  return (
    <div className="card border-0 shadow-sm rounded-0">
    <img src={image} className="card-img-top rounded-0" alt="Card" />
      <div className="card-body">
     <div className="title"><h5 className="card-title">{title}</h5><div><i className="fa fa-external-link" aria-hidden="true" style={{color:"rgb(11, 65, 205)"}}></i></div></div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
