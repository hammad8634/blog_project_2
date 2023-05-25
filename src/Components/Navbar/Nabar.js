import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../Store/DisplayNav";
import "./Navbar.css";

const Navbar = () => {
  
  const dispatch = useDispatch();
  const showNavHandler = ()=>{
    dispatch(displayAction.displayNav());}

  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 40) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-transparent pt-4 navbar sticky-top ${
          scrolled ? "scrolled" : ""
        } ${navbarVisible ? "" : "hidden"}`}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="./images/log.png"
              alt=""
              className="img-fluid navbar-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showNavHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item hovr2">
                <a className="nav-link active" aria-current="page" href="/">
                  Investors
                </a>
              </li>
              <li className="nav-item ms-4 hovr2">
                <a className="nav-link active" href="/">
                  Career
                </a>
              </li>
              <li className="nav-item ms-4 hovr2">
                <a className="nav-link active" href="/">
                  Media
                </a>
              </li>
              <div className="d-flex mt-2 ms-3" style={{height: "25px"}}>
                <div className="vr"></div>
              </div>
              <li className="nav-item ms-4 pt-2 hovr1">
                <i className="fa-solid fa-globe"></i>
              </li>
              <li className="nav-item ms-4 pt-2">
                <i className="fa-solid fa-magnifying-glass hovr1 pb-2"></i>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hovr3"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Roche
                </a>
                <ul
                  className="dropdown-menu shadow border-0 overflow-auto"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ position: "absolute", zIndex: "9999" }}
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Strategy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Business
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Governance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      History
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-5 hovr3"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <ul
                  className="dropdown-menu shadow border-0"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ position: "absolute", zIndex: "9999" }}
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Focus areas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Pharma solution
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Diagnostic solution
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Pipeline
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-5 hovr3"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Innovation
                </a>
                <ul
                  className="dropdown-menu shadow border-0 active"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ position: "absolute", zIndex: "9999" }}
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Innovation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Team & Structure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Innovation process
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Ethical standards
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Partnering
                    </a>
                  </li>
                </ul>
              </li>
              <div className="d-flex mt-2 ms-5" style={{height: "25px"}}>
                <div className="vr"></div>
              </div>
              <li className="nav-item ms-5">
                <a
                  className="nav-link active hovr3"
                  aria-current="page"
                  href="/"
                >
                  Stories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
