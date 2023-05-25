import React from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../Store/DisplayNav";
const Snavbar = () => {
  const dispatch = useDispatch();
  const showNavHandler = () => {
    dispatch(displayAction.displayNav());
  };
  return (
    <>
      <div className="container ">
        <div className="row mt-3">
          <div className="col-sm-6">
            <i className="fa-solid fa-globe">Worldwide</i>
          </div>
          <div className="col-sm-6 text-end">
            <i className="fa-solid fa-xmark" onClick={showNavHandler}></i>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="dropdown">
            <a
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              href="/"
            >
              About Roche
            </a>
            <ul
              className="dropdown-menu"
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
          </div>
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              role="button"
              href="/"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Solutions
            </a>
            <ul
              className="dropdown-menu"
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
          </div>
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              role="button"
              href="/"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Innovation
            </a>
            <ul
              className="dropdown-menu"
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
          </div>
          <ul className="list-unstyled list-inline">
            <li>
              <a className="nav-link" href="/">
                Stories
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="row"></div>
        <ul className="list-unstyled list-inline">
          <li>
            <a href="/" className="nav-link">
              Media
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Investors
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Snavbar;
