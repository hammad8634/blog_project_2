import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [aboutRocheVisible, setAboutRocheVisible] = useState(false);
  const [solutionsVisible, setSolutionsVisible] = useState(false);
  const [innovationVisible, setInnovationVisible] = useState(false);

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

  const toggleAboutRoche = () => {
    setAboutRocheVisible(!aboutRocheVisible);
  };

  const toggleSolutions = () => {
    setSolutionsVisible(!solutionsVisible);
  };

  const toggleInnovation = () => {
    setInnovationVisible(!innovationVisible);
  };

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
              <div className="d-flex mt-2 ms-3" style={{ height: "25px" }}>
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
                  className={`nav-link dropdown-toggle hovr3 ${
                    aboutRocheVisible ? "active" : ""
                  }`}
                  href="/"
                  id="aboutRocheDropdown"
                  role="button"
                  onMouseEnter={toggleAboutRoche}
                  onMouseLeave={toggleAboutRoche}
                  onClick={(e) => e.preventDefault()}
                >
                  About Roche
                </a>
                <ul
                  className={`dropdown-menu shadow border-0 overflow-auto ${
                    aboutRocheVisible ? "show" : ""
                  }`}
                  aria-labelledby="aboutRocheDropdown"
                  style={{ position: "absolute", zIndex: "9999" }}
                  onMouseEnter={toggleAboutRoche}
                  onMouseLeave={toggleAboutRoche}
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
                  className={`nav-link dropdown-toggle ms-5 hovr3 ${
                    solutionsVisible ? "active" : ""
                  }`}
                  href="/"
                  id="solutionsDropdown"
                  role="button"
                  onMouseEnter={toggleSolutions}
                  onMouseLeave={toggleSolutions}
                  onClick={(e) => e.preventDefault()}
                >
                  Solutions
                </a>
                <ul
                  className={`dropdown-menu shadow border-0 ${
                    solutionsVisible ? "show" : ""
                  }`}
                  aria-labelledby="solutionsDropdown"
                  style={{ position: "absolute", zIndex: "9999" }}
                  onMouseEnter={toggleSolutions}
                  onMouseLeave={toggleSolutions}
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
                  className={`nav-link dropdown-toggle ms-5 hovr3 ${
                    innovationVisible ? "active" : ""
                  }`}
                  href="/"
                  id="innovationDropdown"
                  role="button"
                  onMouseEnter={toggleInnovation}
                  onMouseLeave={toggleInnovation}
                  onClick={(e) => e.preventDefault()}
                >
                  Innovation
                </a>
                <ul
                  className={`dropdown-menu shadow border-0 active ${
                    innovationVisible ? "show" : ""
                  }`}
                  aria-labelledby="innovationDropdown"
                  style={{ position: "absolute", zIndex: "9999" }}
                  onMouseEnter={toggleInnovation}
                  onMouseLeave={toggleInnovation}
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
              <div className="d-flex mt-2 ms-5" style={{ height: "25px" }}>
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
