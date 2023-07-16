import React, { useState, useEffect } from 'react';
import './CardOverlay.css';
import ImgCard from './ImgCard';

const CardOverlay = () => {
  const words = ['Science', 'Partnership', 'Culture', 'Patients', 'Society'];
  const colors = ['#a1695d', '#a8776c', 'purple', 'blue', '#0B41CD'];

  const [currentWord, setCurrentWord] = useState(0);
  const [currentColor, setCurrentColor] = useState('#EDC6BE');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
      setCurrentColor(colors[currentWord]);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentWord]);
  return (
    <>
      <div className='mt-5'>
        <div className='txt1-size mb-5'>
          <text className='discover-text'>          Discover great stories about
          </text>
          <br />
          <span className="changing-words " style={{ color: currentColor }}>{words[currentWord]}</span>
        </div>
        <ImgCard></ImgCard>
      </div>
    </>
  )
}

export default CardOverlay;

