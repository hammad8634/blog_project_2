import React from 'react';
import image from './proj.png';
import './ImageCard.css';

const ImageCard = () => {
    return (
        <div>
            <div className="card text-bg-dark border-0 rounded-0">
                <img src={image} className="card-img opacity-50 rounded-0" alt="..." />
                <div className="card-img-overlay ms-sm-5 marg">
                    <div className="fs-md-1 mb-3 mb-md-4 text-light txt-size-on-img card-text">Looking beyond for vision...</div>
                    <div className="card-text txt34 fs-md-6 text-light">With millions of people worldwide living with retinal conditions <br /> vision loss....</div>
                    <button className='btn btn-primary butt border-0 rounded-0 p-sm-3 pad mt-4 '> Read the story</button>
                </div>
            </div>
        </div>


    )
}

export default ImageCard;
