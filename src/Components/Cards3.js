import React from 'react'
import "./Cards3.css"
 const Card3 = ({ title3, description3, image3}) => {
  return (
    <div className='container mt-4'>
        <div class="card3 mb-3">
  <div class="row g-0">
   
    <div class="col-lg-6 col-md-12 col-sm-12 ">
      <div class="card-body3">
        <h7 class="card3-title">{title3}</h7>
        <p class="card3-text lead">{description3}</p>
        <div className="my-5">
            <a href="/" className="button">Learn More</a>
            </div>
         
      </div>
      
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 ">
      <img className='img-fluid' img src={image3}/>
    </div>
  </div>
</div>
    </div>
  )
};
export default Card3;