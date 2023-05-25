import React from 'react'
import "./Cards2.css"
 const Card2 = ({ title2, description2, image2}) => {
  // Get the button element


  return (
    <div className='container4 mt-4'>
        <div className="card2 mb-3">
  <div className="row g-0">
    <div className="col-lg-6 col-md-12 col-sm-6">
      <img className='img-fluid'  src={image2} alt='/'/>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-6">
      <div className="card-body2">
        <h5 className="card2-title">{title2}</h5>
        <p className="card2-text lead">{description2}</p>
        <div className="my-5">
            <a href="/" className="button">Learn More</a>
            </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
};
export default Card2;