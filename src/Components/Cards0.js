import React, { useState } from "react";
import "./Cards0.css";
import girlImage from "./images/girl.png";
import homeImage from "./images/home.png";
import womenImage from "./images/women.png";

function Cards() {
  const array = [
    {
      id: 1,
      title: "Supporting Commuity Health",
      imag1: womenImage,
      date: "May 23, 2022",
      hovertext:
        "Why helping to bolster primary care services on the ground in Africa is a priority for Roche.",
    },
    {
      id: 2,
      title:
        "Planning for the future: a new framework for improving health outcomes worldwide ",
      imag1: homeImage,
      date: "October 10, 2022",
      hovertext:
        "This collection of stories provides a vision for the future, with tangible examples of how healthcare systems are shifting away from traditional delivery frameworks towards sustainable, resilient pathways that provide better and more efficient care for all",
    },
    {
      id: 3,
      title: "Women in leadership: paving the way for equal health",
      imag1: girlImage,
      date: "December 07, 2022",
      hovertext:
        "Greater representation of women in leadership positions can help prioritise women’s health issues, helping to close the data gap and improve their outcomes.",
    },
  ];

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-lg-between justify-content-center my-5">
        {array.map((item) => {
          const [hovered, setHovered] = useState(false);

          const handleMouseEnter = () => {
            setHovered(true);
          };

          const handleMouseLeave = () => {
            setHovered(false);
          };

          return (
            <div
              className={`card card3 rounded-0 mt-3 shadow border-0 ${hovered ? "hovered" : ""
                }`}
              key={item.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {hovered ? (
                <>
                  <div className="hover-content">
                    <h4 className="hover-title">{item.title}</h4>
                    <p className="hover-text">{item.hovertext}</p>
                    <p className="hover-date">{item.date}</p>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={item.imag1}
                    className="card-img-top rounded-0 brdr"
                    alt="..."
                  />
                  <div className="card-body border-0 pb-5">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-date ">{item.date}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
