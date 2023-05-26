import React, { useState, useEffect } from 'react';
import './CardOverlay.css';
import ImgCard from './ImgCard';

const CardOverlay = () => {
  const words = ['Science', 'Society', 'Partnership', 'Culture'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
  const words = ['Science', 'Society', 'Partnership', 'Culture'];
 
  
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
      setCurrentColor(getRandomColor());
    }, 1000);
   
    return () => clearInterval(interval);
  }, []);
  const [currentColor, setCurrentColor] = useState('#000');
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;  };
  return (
    <>
      <div className='txt1-size '>
        Discover great stories about
        <br />
        <span className=""style={{ color: currentColor }}>{words[currentWord]}</span>
      </div>
      <ImgCard></ImgCard>
    </>
  )
}

export default CardOverlay;

