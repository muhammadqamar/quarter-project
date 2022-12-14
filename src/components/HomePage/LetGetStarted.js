/* eslint-disable @next/next/no-img-element */
import React from "react";

const getStart = [
  {
    image: "images/cta-3.jpg",
    heading: "Our Condo Guide",
    para: "Find the home you love, for the right price!",
  },
  {
    image: "images/cta-2.jpg",
    heading: "Selling A Home",
    para: "Get the most out of your home sale!",
  },
  {
    image: "images/cta-1.jpg",
    heading: "Market Reports",
    para: "See the latest market information in your neighborhood!",
  },
];

const featured_communities = [
  {
    image: "images/search-walnutcreek.jpg",
    heading: "Kalae",
  },
  {
    image: "images/area-anaha.jpg",
    heading: "Anaha",
  },
  {
    image: "images/area-aalii.jpg",
    heading: "Aalii",
  },
];
const LetGetStarted = ({ title, data }) => {
  return (
    <section className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h1 className="section-title">
                {/* {`Let's Get Started`} */}
                {data?.startedSectionTitle}
              </h1>
            </div>
          </div>
        </div>
        {/* List */}
        <div className="row">
          {data?.startedSectionCardsDetail?.map((_data, index) => {
            return (
              <div
                key={index}
                className="col-lg-4 col-sm-6 col-12 col_house h-100 "
              >
                <div className="bg-cutome-img-lg-parent overlay_link">
                  <div className="overlay_2">
                    <h3 className="right_heading started_heading">
                      {_data?.fields?.cardTitle}
                    </h3>
                    <p className="right_para started_para">
                      {_data?.fields?.cardDec}
                    </p>
                    <a
                      href="#javascript"
                      className="btn theme-btn-1 theme-btn-2 theme-btn-2 btn-effect-1 text-uppercase"
                    >
                      <span className="inner_link">
                        {_data?.fields?.cardBtnTxt}
                      </span>
                    </a>
                  </div>
                  <img
                    src={_data?.fields?.cardImg?.fields?.file.url}
                    className="featured_logo text-center bg-cutome-img-lg"
                    alt="house logo"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Featured Communities*/}
        <div className="pt-115">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h1 className="section-title">
                  {data?.featuredCommunitiesTitle}
                </h1>
              </div>
            </div>
          </div>
          {/* List */}
          <div className="row">
            {data?.featuredCommunitieCard?.map((_data, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-4 col-sm-6 col-12 col_house h-100 "
                >
                  <div className="bg-cutome-img-lg-parent-2 overlay_link">
                    <div className="overlay_2">
                      <h3 className="right_heading started_heading">
                        {_data?.fields?.cardTitle}
                      </h3>
                      {/* <p className="right_para">{item.para}</p> */}
                      <a
                        href="#javascript"
                        className="btn theme-btn-1 theme-btn-2 theme-btn-2 btn-effect-1 text-uppercase"
                      >
                        <span className="inner_link">
                          {_data?.fields?.cardBtnTxt}
                        </span>
                      </a>
                    </div>
                    <img
                      src={_data?.fields?.cardImg?.fields?.file.url}
                      className="featured_logo text-center bg-cutome-img-lg"
                      alt="house logo"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetGetStarted;
