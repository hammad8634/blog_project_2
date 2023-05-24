import React from 'react';
import './CardOverlay.css';
import ImgCard from './ImgCard';

const CardOverlay = () => {
  return (
    <>
      <div className='txt1-size '>
        Discover great stories about
        <br />
        <span className="text-primary">Society</span>
      </div>
      <ImgCard></ImgCard>
    </>
  )
}

export default CardOverlay;

