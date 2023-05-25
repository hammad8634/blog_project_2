import React from 'react';
import './Cards.css'; // Create a separate CSS file for styling

const Card = ({ title, description, image }) => {
  
  return (
    <div className="card rounded-0 border-0 ms-3 imgsize">
   <div className='image-container'>
                            <img src={image} className="card-img-top rounded-0 img-size img-fluid" alt="..." /> </div>
                            <div className="card-body border-0">
                            <div className='d-flex justify-content-between'>
                                <div className='fs-3 mb-4 '><h5>{title}</h5></div>
                               
                            </div>
                            <p className="card-text">{description}</p>
                        </div>
    </div>
  );
};

export default Card;
