import React from "react";
import Card2 from "../Components/Cards2";
// import Card3 from '../Components/Cards3';

import "./Third.css";

export default function Third() {
  return (
    <div className="container3">
      <Card2
        title2="About Roche"
        description2="We focus on finding new medicines and diagnostics and utilising data-based insights to evolve the practice of medicine and help patients live longer, better lives."
        image2="https://assets.cwp.roche.com/f/126832/1920x1080/191b85adf7/about-roche-qualitytest.png/m/768x0/filters:format(webp):quality(90)/"
      />
      <div className="pt-5 pb-5">
        <div className="container4 mt-4">
          <div className="card2 mb-3">
            <div className="row g-0">
              <div className="col-lg-6 col-md-12 col-sm-6 order-sm-2">
                <div className="img-container">
                  <img
                    className="img-fluid img-rectangle"
                    src="https://assets.cwp.roche.com/f/126832/1920x1080/8c6398ecc6/solutions-teaser.png/m/768x0/filters:format(webp):quality(90)/"
                    alt="/"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-6 order-sm-1">
                <div className="card-body2">
                  <p className="card2-title mt-3">Solutions</p>
                  <p className="card2-text lead">
                    Since the founding of our company, we have been developing
                    innovative medicines, treatments, and diagnostics that
                    continue to revolutionize healthcare.
                  </p>
                  <div className="my-5">
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card2
        title2="Innovation"
        description2="Driven by our passion for what we do, our autonomy in how we find solutions, and the strength of our R&D structure we can take on the most complex challenges in healthcare."
        image2="https://assets.cwp.roche.com/f/126832/1440x961/e795ab9014/innovation-overview-teaser.jpg/m/768x0/filters:format(webp):quality(90)/"
      />
    </div>
  );
}
