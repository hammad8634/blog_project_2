import React from 'react'
import "./Second.css"
const Second = () => {
  return (
    <div className='p-4'>
      <div className="container2">
        <div className="row">

          <div className="col-lg-1 col-md-2 col-sm-12 icon">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </div>
          <div className="col-lg-11 col-md-10 col-sm-12 data ">
            <h5 className='text-break text-right text-sm-left '>Global hotline for healthcare providers and patients in Ukraine</h5>
            <p className='text-break text-right text-sm-left '><text className='oppacity-data'>Roche has established a multi-lingual global hotline </text> (<b>tel: +36 146 182 58; WhatsApp/SMS +36 707 177 394</b>)<text className='oppacity-data'> and an email address</text> (<b>patientcare@roche.com</b>) <text className='oppacity-data'>for patients and healthcare providers in or from Ukraine. We will do our best to provide everyone who is in need with the appropriate information and support.</text><br></br></p>
            <a href="/" className='custom-link'><text className='text-privacy'>Privacy Notice</text></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Second;