import React from "react";

const featureLogo = [
  {
    logo: "/images/homeworthOne.jpg",
    heading: "What's Your Home Worth?",
    para: "Wondering what your home is worth? Receive your instant home value report today!",
    btn: "get a custom report",
  },
  {
    logo: "/images/homeworth.jpg",
    heading: "Get Pre-Approved For A Home Loan",
    para: "Would you like to know your home's estimated value? Our FREE service provides you with your property's current market value and suggested selling price!",
    btn: "get a custom report",
  },
  {
    logo: "/images/homeworth_two.jpg",
    heading: "Stay Updated!",
    para: "Register to gain access to 1000's of Listings, Open Houses, exclusive Email Reports, and more!",
    btn: "join today",
  },
];

const FeaturedCommunities = () => {
  return (
    <div className="main_feature">
      {featureLogo.map((item, index) => (
        <div
          key={index}
          className="featured_logo"
          style={{
            backgroundImage: `url(${item.logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="content_right"
            style={{
              marginLeft: (index === 1 && "0") || "50%",
            }}
          >
            <h3 className="right_heading">{item.heading}</h3>
            <p className="right_para">{item.para}</p>
            <a href="javascript:void(0)" className="feature_link_btn">
              <span className="inner_link">{item.btn}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCommunities;
