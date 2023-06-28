import React from "react";
import "./TopHeading.css";
// import { useRef } from "react";

const TopHeading = () => {
  //   const videoRef = useRef(null);
  //   const playVideo = () => {
  //     videoRef.current.play();
  //   };
  //   const pauseVideo = () => {
  //     videoRef.current.pause();
  //   };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="txt-size mt-5">
            <h1 className="display-1">
              Doing now what patients need <br /> next
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <video
          // ref={videoRef}
          className="size vid shadow"
        // onMouseEnter={playVideo}
        // onMouseLeave={pauseVideo}
        >
          <source src="./images/video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Info section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 bordr mt-5">
            <div className="fs-1 top_heading">
              We're revolutionising <br /> personalised healthcare
            </div>
            <div className="mt-3 lead">
              We bring the right treatments to the right patients at the right
              time. With our combined strengths in pharmaceuticals and
              diagnostics, we are better equipped to drive personalised
              healthcare forward.
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-8 top_h1">
                  <div className="my-5 ">
                    <a type="button" href="/" className="button1 p-3 text-center">
                      More about personalised healtcare
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 ps-md-5 ps-2 mt-5">
            <div className="fs-1">
              We’re delivering sustainable <br /> value
            </div>
            <div className="mt-3 lead">
              Our ambition lies not only in transforming healthcare through
              innovative solutions, but also in our contributions to
              environmental protection, supply chain sustainability and social
              commitment.
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6  top_h1">
                  <div className="my-5 ">
                    <a type="button" href="/" className="button1 p-3 text-center">
                      More about sustainable
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeading;
