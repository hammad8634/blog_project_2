import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../Store/DisplayNav";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const dispatch = useDispatch();
  const showNavHandler = () => {
    dispatch(displayAction.displayNav());
  };
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [aboutRocheOpen, setAboutRocheOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [innovationOpen, setInnovationOpen] = useState(false);

  const handleAboutRocheHover = () => {
    setAboutRocheOpen(true);
  };

  const handleAboutRocheLeave = () => {
    setAboutRocheOpen(false);
  };

  const handleSolutionsHover = () => {
    setSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    setSolutionsOpen(false);
  };

  const handleInnovationHover = () => {
    setInnovationOpen(true);
  };

  const handleInnovationLeave = () => {
    setInnovationOpen(false);
  };

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
      <div className={`navbar-container ${navbarVisible ? "" : "hidden"}`}>
        <nav
          className={`navbar-container-1 active ${
            show && "hidden"
          } navbar navbar-expand-lg navbar-light bg-transparent sticky-top ${
            scrolled ? "scrolled" : ""
          } `}
        >
          <a className="navbar-brand" href="/">
            <img
              src="./images/log.png"
              alt=""
              className="img-fluid navbar-logo"
            />
          </a>

          <div className="search-snav ">
            <div className="search-icon-sm">
              <AiOutlineSearch />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={showNavHandler}
              style={{ border: "none" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item hovr2">
                <a className="nav-link active" aria-current="page" href="/">
                  Media
                </a>
              </li>
              <li className="nav-item ms-4 hovr2">
                <a className="nav-link active" href="/">
                  Investors
                </a>
              </li>
              <li className="nav-item ms-4 hovr2">
                <a className="nav-link active" href="/">
                  Career
                </a>
              </li>
              <div className="d-flex mt-3 ms-4" style={{ height: "20px" }}>
                <div className="vr"></div>
              </div>
              <li className="nav-item  hovrr1">
                <i className="fa-solid fa-globe"></i>
              </li>
              <li className="nav-item hovrr1">
                <i className="fa-solid fa-magnifying-glass  "></i>
              </li>
            </ul>
          </div>
        </nav>

        <div className="navbar-container-2">
          <nav
            className={` active ${
              show && "hidden"
            } navbar navbar-expand-lg  navbar-light bg-transparent pt-3 navbar sticky-top ${
              scrolled ? "scrolled" : ""
            } `}
          >
            <div className="d-flex " id="navbarNav">
              <ul className="navbar-nav  ms-auto">
                <li
                  className="nav-item dropdown "
                  onMouseEnter={handleAboutRocheHover}
                  onMouseLeave={handleAboutRocheLeave}
                >
                  <a
                    className="nav-link hovr3 fs-6 "
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    aria-expanded={aboutRocheOpen ? "true" : "false"}
                  >
                    <text className="hover3"> About Roche</text>
                  </a>
                  <ul
                    className={`dropdown-menu shadow border-0 overflow-auto ${
                      aboutRocheOpen ? "show" : ""
                    }`}
                    aria-labelledby="navbarDropdownMenuLink"
                    // style={{ position: "absolute", zIndex: "9999" }}
                  >
                    <div className="aboutRoche-dropdown-menu strategy-menu">
                      <li>
                        <a className="dropdown-item " href="/">
                          <text className="my-3 main-sub-heading">
                            About Roche
                            <BsArrowRightShort className="arrow" />
                          </text>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Strategy
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3 " href="/">
                          Business
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Sustainability
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Leadership
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Governance
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          History
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleSolutionsHover}
                  onMouseLeave={handleSolutionsLeave}
                >
                  <a
                    className="nav-link ms-4 hovr3"
                    href="/"
                    id="navbarDropdownMenuLink2"
                    role="button"
                    aria-expanded={solutionsOpen ? "true" : "false"}
                  >
                    <text className="hover3"> Solutions</text>
                  </a>
                  <ul
                    className={`dropdown-menu shadow border-0 overflow-auto ${
                      solutionsOpen ? "show" : ""
                    }`}
                    aria-labelledby="navbarDropdownMenuLink"
                    // style={{ position: "absolute", zIndex: "9999" }}
                  >
                    <div className="aboutRoche-dropdown-menu strategy-menu">
                      <li>
                        <a className="dropdown-item " href="/">
                          <text className="my-3 main-sub-heading">
                            Solutions
                            <BsArrowRightShort className="arrow" />
                          </text>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Focus areas
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Pharma solution
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Diagnostic solution
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Pipeline
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleInnovationHover}
                  onMouseLeave={handleInnovationLeave}
                >
                  <a
                    className="nav-link ms-4 hovr3"
                    href="/"
                    id="navbarDropdownMenuLink3"
                    role="button"
                    aria-expanded={innovationOpen ? "true" : "false"}
                  >
                    <text className="hover3">Innovation</text>
                  </a>
                  <ul
                    className={`dropdown-menu shadow border-0 active overflow-auto ${
                      innovationOpen ? "show" : ""
                    }`}
                    aria-labelledby="navbarDropdownMenuLink"
                    // style={{ position: "absolute", zIndex: "9999" }}
                  >
                    <div className="aboutRoche-dropdown-menu strategy-menu">
                      <li>
                        <a className="dropdown-item " href="/">
                          <text className="my-3 main-sub-heading">
                            Innovation
                            <BsArrowRightShort className="arrow" />
                          </text>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Team & Structure
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Innovation process
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Ethical standards
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item my-3" href="/">
                          Partnering
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <div
                  className="d-flex ms-4 second-vr-line"
                  style={{ height: "25px" }}
                >
                  <div className="vr"></div>
                </div>
                <li className="nav-item ms-4">
                  <a
                    className="nav-link active hovr3"
                    aria-current="page"
                    href="/"
                  >
                    <text className="hover3">Stories</text>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
