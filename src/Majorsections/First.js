import React from 'react'
import Card from '../Components/Cards';
import "./Firsr.css"

const First = ()=> {
  return (
    <div>
        <div className="container1">
        <div className="col-lg-4 col-md-4 col-sm-12">
       <h1>In the spotlight</h1>
       </div>
    <div className="row">
    
      <div className="col-lg-6 col-md-4 col-sm-12">
      

  <Card
          title="Roche reports strong sales growth in base business of both divisions in the first quarter; Group sales decline due to expected drop in demand for COVID-19 tests"
          description="Commenting on the Group’s sales, Roche CEO Thomas Schinecker said: “We saw strong growth in the first quarter in both divisions’ base business, which largely compensated for the expected drop in sales of COVID-19 tests.”"
          image="https://assets.cwp.roche.com/f/126832/1920x1281/442cf88726/roche-quarterly-results-q1.png/m/768x0/filters:format(webp):quality(90)/"
        /> </div>
          <div className="col-lg-6 col-md-4 col-sm-12">
         <Card
          title="XProject & tackling inequalities in women's health"
          description="XProject is our long-term commitment to drive meaningful change through partnerships, funding and action to help close the gaps in women’s health for better health outcomes for everyone."
          image="https://assets.cwp.roche.com/f/126832/8192x5464/87adfb6fce/roche-xproject.jpg/m/768x0/filters:format(webp):quality(90)/"
        />
     </div>
    </div>
  </div></div>
  )
}
export default First;