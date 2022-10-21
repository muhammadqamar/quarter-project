import React from "react";
import "./style/ourMainFocus.scss";

const OurMainFocus = () => {
  return (
    <div className="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Our Services
              </h6>
              <h1 className="section-title">Our Main Focus</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__custom-gutter---  justify-content-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
              <div className="ltn__feature-icon">
                <span>
                  <i className="flaticon-house"></i>
                </span>
                <img src="images/21.png" alt="#" />
              </div>
              <div className="ltn__feature-info">
                <h3>
                  <a href="service-details.html">Buy a home</a>
                </h3>
                <p>
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a className="ltn__service-btn" href="service-details.html">
                  Find A Home <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
              <div className="ltn__feature-icon">
                <span>
                  <i className="flaticon-house-3"></i>
                </span>
                <img src="images/22.png" alt="#" />
              </div>
              <div className="ltn__feature-info">
                <h3>
                  <a href="service-details.html">Rent a home</a>
                </h3>
                <p>
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a className="ltn__service-btn" href="service-details.html">
                  Find A Home <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
              <div className="ltn__feature-icon">
                <span>
                  <i className="flaticon-deal-1"></i>
                </span>
                <img src="images/23.png" alt="#" />
              </div>
              <div className="ltn__feature-info">
                <h3>
                  <a href="service-details.html">Sell a home</a>
                </h3>
                <p>
                  over 1 million+ homes for sale available on the website, we
                  can match you with a house you will want to call home.
                </p>
                <a className="ltn__service-btn" href="service-details.html">
                  Find A Home <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMainFocus;
