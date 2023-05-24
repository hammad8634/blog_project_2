import React from 'react'
import "./Cards3.css"
 const Card3 = ({ title3, description3, image3}) => {
  return (
    <div className='container mt-4'>
        <div className="card3 mb-3">
  <div className="row g-0">
   
    <div className="col-lg-6 col-md-12 col-sm-12 ">
      <div className="card-body3">
        <h5 className="card3-title">{title3}</h5>
        <p className="card3-text lead">{description3}</p>
        <div className="my-5">
            <a href="/" className="button">Learn More</a>
            </div>
         
      </div>
      
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 ">
      <img className='img-fluid' alt='/' img src={image3}/>
    </div>
  </div>
</div>
    </div>
  )
};
export default Card3;