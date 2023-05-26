import React from "react";
import "./Profcards.css";
import i1Image from "./images/i1.jpg";
import i2Image from "./images/i2.jpg";
import i3Image from "./images/i3.jpg";

const Profcards = () => {
  const array1 = [
    {
      id: 1,
      title: "Media",
      imag: i1Image,
      para: "Access a wide range of materials relating to our company, our people, innovation, solutions and diagnostics tools or get in touch with us.",
    },
    {
      id: 2,
      title: "Investors",
      imag: i2Image,
      para: "We are committed to delivering value for all our stakeholders through continuous innovation, groundbreaking solutions, trust and sustainable business practices.",
    },
    {
      id: 3,
      title: "Careers",
      imag: i3Image,
      para: "Find jobs and learn more about exciting career opportunities at Roche, one of the world's leading research-based healthcare companies.",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-lg-between justify-content-center container my-5">
      {array1.map((item) => {
        return (
          <div
            className="profcard-container card rounded-0 border-0 ms-3 imgsize3 "
            key={item.id}
          >
            <div className="image-container">
              <img
                src={item.imag}
                className="card-img-top rounded-0 img-size"
                alt="..."
              />
            </div>
            <div className="card-body border-0">
              <div className="d-flex justify-content-between">
                <div className="fs-3 mb-4 profcard-title">{item.title}</div>
                <div>
                  <i className="fa-solid fa-arrow-right text-primary"></i>
                </div>
              </div>
              <p className="card-text profcard-container ">{item.para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profcards;
