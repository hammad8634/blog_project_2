import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../Store/DisplayNav";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faTimes,
  faChevronDown,
  faChevronUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Snavbar = () => {
  const dispatch = useDispatch();
  const [aboutRocheOpen, setAboutRocheOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [innovationOpen, setInnovationOpen] = useState(false);

  const showNavHandler = () => {
    dispatch(displayAction.displayNav());
  };

  const toggleAboutRoche = (e) => {
    e.preventDefault();
    setAboutRocheOpen((prevState) => !prevState);
    setSolutionsOpen(false);
    setInnovationOpen(false);
  };

  const toggleSolutions = (e) => {
    e.preventDefault();
    setSolutionsOpen((prevState) => !prevState);
    setAboutRocheOpen(false);
    setInnovationOpen(false);
  };

  const toggleInnovation = (e) => {
    e.preventDefault();
    setInnovationOpen((prevState) => !prevState);
    setAboutRocheOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-6 worldwide-button">
            <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
            <div className="worldwide-text">Worldwide</div>
          </div>
          <div className="col-6 text-end">
            <FontAwesomeIcon
              icon={faTimes}
              className="cross-icon"
              onClick={showNavHandler}
            />
          </div>
          <div className="mt-3">
          </div>
            <hr />
        </div>

        <div className="row">
          <div className="dropdown col-12 col-sm-3">
            <a
              className="nav-link"
              role="button"
              href="/"
              onClick={toggleAboutRoche}
            >
              <div className="d-flex align-items-center justify-content-between dropdown-main-menus">
                <span>About Roche</span>
                <FontAwesomeIcon
                  icon={aboutRocheOpen ? faChevronUp : faChevronDown}
                  className="dropdown-icon"
                />
              </div>
            </a>
            <ul className={`dropdown-menu ${aboutRocheOpen ? "show" : ""}`}>
              <div className="d-flex align-items-center explore-button">
                <span>Explore</span>
                <FontAwesomeIcon icon={faArrowRight} className="explore-icon" />
              </div>
              <div className="dropdown-menu-border">
                <div className="dropdown-menu-div">
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Strategy</text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Business</text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Sustainability</text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Leadership</text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Governance</text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">History</text>
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          <div className="dropdown col-12 col-sm-3">
            <a
              className="nav-link"
              role="button"
              href="/"
              onClick={toggleSolutions}
            >
              <div className="d-flex align-items-center justify-content-between dropdown-main-menus">
                <span>Solutions</span>
                <FontAwesomeIcon
                  icon={solutionsOpen ? faChevronUp : faChevronDown}
                  className="dropdown-icon"
                />
              </div>
            </a>
            <ul className={`dropdown-menu ${solutionsOpen ? "show" : ""}`}>
              <div className="d-flex align-items-center explore-button">
                <span>Explore</span>
                <FontAwesomeIcon icon={faArrowRight} className="explore-icon" />
              </div>
              <div className="dropdown-menu-border">
                <div className="dropdown-menu-div">
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Solutions</text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Focus Areas</text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">
                        Pharma Solutions
                      </text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">
                        Diagnostic Solutions
                      </text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Pipeline</text>
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          <div className="dropdown col-12 col-sm-3">
            <a
              className="nav-link"
              role="button"
              href="/"
              onClick={toggleInnovation}
            >
              <div className="d-flex align-items-center justify-content-between dropdown-main-menus">
                <span>Innovation</span>
                <FontAwesomeIcon
                  icon={innovationOpen ? faChevronUp : faChevronDown}
                  className="dropdown-icon"
                />
              </div>
            </a>
            <ul className={`dropdown-menu ${innovationOpen ? "show" : ""}`}>
              <div className="d-flex align-items-center explore-button">
                <span>Explore</span>
                <FontAwesomeIcon icon={faArrowRight} className="explore-icon" />
              </div>
              <div className="dropdown-menu-border">
                <div className="dropdown-menu-div">
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Innovation</text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">
                        Team & Structure
                      </text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">
                        Innovation Process
                      </text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">
                        Ethical Standards
                      </text>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <text className="dropdown-item-one">Partnering</text>
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          <ul className="list-unstyled list-inline col-12 col-sm-3">
            <li>
              <a className="nav-link" href="/">
                <div className="nav-linkss">Stories</div>
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="row">
          <ul className="list-unstyled list-inline col-12 col-sm-4">
            <li>
              <a href="/" className="nav-link">
                <div className="nav-linkss">Media</div>
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                <div className="nav-linkss">Investors</div>
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                <div className="nav-linkss">Careers</div>
              </a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Snavbar;
