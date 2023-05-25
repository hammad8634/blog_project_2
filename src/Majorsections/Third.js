import React from 'react'
import Card2 from '../Components/Cards2';
// import Card3 from '../Components/Cards3';

import "./Third.css"
export default function Third() {
  return (
    <div className="container3">
        <Card2
          title2="About Roche"
          description2="We focus on finding new medicines and diagnostics and utilising data-based insights to evolve the practice of medicine and help patients live longer, better lives."
          image2="https://assets.cwp.roche.com/f/126832/1920x1080/191b85adf7/about-roche-qualitytest.png/m/768x0/filters:format(webp):quality(90)/"
        /> 
        <Card2
          title2="Solutions"
          description2="Since the founding of our company, we have been developing innovative medicines, treatments and diagnostics that continue to revolutionise healthcare."
          image2="https://assets.cwp.roche.com/f/126832/1920x1080/8c6398ecc6/solutions-teaser.png/m/768x0/filters:format(webp):quality(90)/"
        /> 
        <Card2
          title2="Innovation"
          description2="Driven by our passion for what we do, our autonomy in how we find solutions, and the strength of our R&D structure we can take on the most complex challenges in healthcare."
          image2="https://assets.cwp.roche.com/f/126832/1440x961/e795ab9014/innovation-overview-teaser.jpg/m/768x0/filters:format(webp):quality(90)/"
        /> </div>
   
  )
}
