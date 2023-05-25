import React from "react";
import Navbar from "./Components/Navbar/Nabar";
import TopHeading from "./Components/TopHeading/TopHeading";
import Info from "./Components/Info/Info";
import Video from "./Components/Video/Video";
import First from "./Majorsections/First";
import Second from "./Majorsections/Second";
import Third from "./Majorsections/Third";
import CardOverlay from "./Components/CardOverlay";
import Cards from "./Components/Cards0";
import Profcards from "./Components/Profcards";
import "./App.css";
import Snavbar from "./Components/Navbar/Snavbar";
import { useSelector } from "react-redux";

function App() {
  const showNav = useSelector((state) => state.display.display);
  return (
    <>
      {showNav && <Snavbar />}
      {!showNav && ( <>
      <div className="grad-color">
        <Navbar />
        <TopHeading />
        <Video />
        <Info />
      </div>
      <div className="container">
        <First></First>
        <Second></Second>
        <Third></Third>
      </div>
      <div className="back-clr container-fluid">
        <div className="container">
          <CardOverlay></CardOverlay>
          <Cards></Cards>
          <div className="text-center">
            <button className="btn btn-primary p-3 rounded-0 my-5">
              Explore more stories
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="fs-1 container my-5 text-center text-lg-start ">
          For professionals
        </div>
        <Profcards></Profcards>
      </div>
      <hr className="border border-dark border-1 opacity-100 mb-0" />
      <div className="grad container-fluid pt-5">
        <div className="container d-flex justify-content-between flex-wrap">
          <div className="hovr1 my-5">
            <div className="d-flex justify-content-sm-between hovr">
              <div className="fs-6">Contact</div>
              <div className="d-flex align-items-center ms-lg-5  margo">
                <i className="fa-solid fa-greater-than"></i>
              </div>
            </div>
            <hr className="border border-dark border-1 opacity-25 hovr" />
            <div className="my-5">
              <div className="d-flex justify-content-sm-between hovr">
                <div className="fs-6">Locations</div>
                <div className="d-flex align-items-center margo">
                  <i className="fa-solid fa-greater-than"></i>
                </div>
              </div>
              <hr className="border border-dark border-1 opacity-25 hovr" />
            </div>
          </div>
          <div className="d-flex flex-column my-3">
            <small className="opacity-50 mb-3">Helpful links</small>
            <div className="mb-3 hovr">Covid-19</div>
            <div className="mb-3 hovr">Pharma solutions</div>
            <div className="mb-3 hovr">Roche Careers</div>
            <div className="mb-3 hovr">Media Library</div>
            <div className="mb-3 hovr">Annual report 2022</div>
          </div>
          <div className="d-flex flex-column my-3">
            <div className="opacity-50 hovr1">Share price</div>
            <div>
              {" "}
              <span className="fs-3 hovr1">286.40</span>{" "}
              <span className="opacity-50">CHF</span>{" "}
            </div>
            <div className="fs-5 hovr1">
              <span>
                <i className="fa-solid fa-arrow-trend-down text-danger"></i>
              </span>{" "}
              <span className=" opacity-50">- 1.85 (-0.64%) Today</span>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <hr className="border border-dark border-1 opacity-25 hovr" />
        </div>
        <div className="container ">
          <div className="container mt-5 pb-5 row text-center">
            <div className="d-flex flex-column flex-wrap col-md-4 col-12">
              <div>
                <i className="fa-brands fa-linkedin opacity-75  hovr"></i>
                <i className="fa-brands fa-facebook-f mt-3 mt-sm-0 ms-5 opacity-75 hovr"></i>
                <i className="fa-brands fa-twitter ms-5 mt-3 mt-sm-0 opacity-75 hovr"></i>
                <i className="fa-brands fa-square-instagram ms-5 mt-3 mt-sm-0 opacity-75 hovr"></i>
                <i className="fa-brands fa-youtube ms-5 opacity-75 mt-3 mt-sm-0 hovr"></i>
              </div>
              <small className="opacity-75 mt-5">
                © 2023 F. Hoffmann-La Roche Ltd 5/22/2023
              </small>
            </div>
            <div className="d-flex flex-column  col-md-8 col-12">
              <div className="container d-flex mt-3 mt-sm-0 justify-content-center">
                <small className="opacity-50 hovr mt-3 mt-sm-0">
                  Privacy policy
                </small>
                <small className="opacity-50 ms-4 hovr mt-3 mt-sm-0">
                  Legal statement
                </small>
                <small className="opacity-50 ms-4 hovr mt-3 mt-sm-0">
                  Cookies
                </small>
              </div>
              <small className="opacity-100 mt-5 txt-size23 fw-semibold">
                This website contains information on products which is targeted
                to a wide range of audiences and could contain product details
                or information otherwise not accessible or valid in your
                country. Please be aware that we do not take any responsibility
                for accessing such information which may not comply with any
                legal process, regulation, registration or usage in the country
                of your origin.
              </small>
            </div>
          </div>
        </div>
      </div>
      </> ) }
    </>
  );
}

export default App;
