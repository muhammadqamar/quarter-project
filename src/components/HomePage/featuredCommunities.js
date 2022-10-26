import React from "react";

const FeaturedCommunities = () => {
  return (
    <div className="main_feature">
      <div className="flx_bx">
        <div className="left_featured_logo"></div>
        <div className="right_featured_logo">
          <div className="overlay"></div>
          <div className="content_right">
            <h3 className="right_heading">What&apos;s Your Home Worth?</h3>
            <p className="right_para">
              Wondering what your home is worth? Receive your instant home value
              report today!
            </p>
            <a href="javascript:void(0)" className="feature_link_btn">
              <span className="inner_link">get a custom report</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flx_bx">
        <div className="right_featured_logo">
          <div className="overlay"></div>
          <div className="content_right">
            <h3 className="right_heading">Get Pre-Approved for a Home Loan</h3>
            <p className="right_para">
              Would you like to know your home&apos;s estimated value? Our FREE
              service provides you with your property&apos;s current market
              value and suggested selling price!
            </p>
            <a href="javascript:void(0)" className="feature_link_btn">
              <span className="inner_link">get a custom report</span>
            </a>
          </div>
        </div>
        <div className="left_featured_logo"></div>
      </div>
      <div className="flx_bx">
        <div className="left_featured_logo"></div>
        <div className="right_featured_logo">
          <div className="overlay"></div>
          <div className="content_right">
            <h3 className="right_heading">Stay Updated!</h3>
            <p className="right_para">
              Register to gain access to 1000&apos;s of Listings, Open Houses,
              exclusive Email Reports, and more!
            </p>
            <a href="javascript:void(0)" className="feature_link_btn">
              <span className="inner_link">join today</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCommunities;
