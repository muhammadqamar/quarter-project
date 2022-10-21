import React from "react";
import "./style/dreamHome.scss";

const DreamHome = () => {
  return (
    <div
      className="ltn__call-to-action-area call-to-action-6 before-bg-bottom"
      data-bs-bg="img/1.jpg--"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
              <div className="coll-to-info text-color-white">
                <h1>Looking for a dream home?</h1>
                <p>We can help you realize your dream of a new home</p>
              </div>
              <div className="btn-wrapper">
                <a className="btn btn-effect-3 btn-white" href="contact.html">
                  Explore Properties <i className="icon-next"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamHome;
