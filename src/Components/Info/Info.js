import React from "react";
import "./Info.css";
const Info = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 bordr mt-5">
            <div className="fs-1">
              We’re revolutionising <br /> personalised healthcare
            </div>
            <div className="mt-3 lead">
              We bring the right treatments to the right patients at the right
              time. With our combined strengths in pharmaceuticals and
              diagnostics, we are better equipped to drive personalised
              healthcare forward.
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 mx-auto">
                  <div className="my-5 text-center">
                    <a type="button" href="/" className="button p-3">
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
                <div className="col-12 col-sm-6 mx-auto">
                  <div className="my-5 text-center">
                    <a type="button" href="/" className="button p-3" >
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
export default Info;
