import React from "react";
import Slider from "react-slick";

import OurMainFocus from "./ourMainFocus";
import AreaProperties from "./areaProperties";
import FeaturedListings from "./featuredListings";
import ClientsFeedback from "./clientsFeedback";
import ClientsLogoSlider from "./clientsLogoSlider";
import NewsBlog from "./newsBlogs";
import CallToAction from "./CallToAction";
import VideoPopup from "./VideoPopup";
import FeaturedCommunities from "./featuredCommunities";
import MeetDetailSection from "./MeetDetailSection";
import LetGetStarted from "./LetGetStarted";

const Index = () => {
  const settings = {
    dots: false /* slider left or right side pagination count with line */,
    arrows: true /* slider arrow  */,
    // appendDots: ".ltn__slider-11-pagination-count",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    // asNavFor: ".ltn__slider-11-img-slide-arrow-active",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <a class="slick-prev slick-arrow">
        <i class="fas fa-arrow-left" alt="Arrow Icon"></i>
      </a>
    ),
    nextArrow: (
      <a class="slick-next slick-arrow">
        <i class="fas fa-arrow-right" alt="Arrow Icon"></i>
      </a>
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="ltn__slider-area ltn__slider-3  section-bg-2">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          <Slider {...settings}>
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- bg-overlay-theme-black-60">
              <div className="ltn__slide-item-inner text-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play"></i>
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home"></i>
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="shop.html"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              Make An Enquiry
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ltn__slide-item --> */}
            {/* <div
              className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
              data-bs-bg="img/slider/12.jpg"
            >
              <div className="ltn__slide-item-inner  text-right text-end">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home"></i>
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="shop.html"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              Make An Enquiry
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <!-- ltn__slide-item --> */}
            {/* <div
              className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
              data-bs-bg="img/slider/13.jpg"
            >
              <div className="ltn__slide-item-inner  text-left">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home"></i>
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="shop.html"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              Make An Enquiry
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
      {/* <!-- CAR DEALER FORM AREA START --> */}
      <div className="ltn__car-dealer-form-area pb-115---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__car-dealer-form-tab">
                <div className="ltn__tab-menu  text-uppercase d-none">
                  <div className="nav">
                    <a
                      className="active show"
                      data-bs-toggle="tab"
                      href="#ltn__form_tab_1_1"
                    >
                      <i className="fas fa-car"></i>Find A Car
                    </a>
                    <a data-bs-toggle="tab" href="#ltn__form_tab_1_2" className>
                      <i className="far fa-user"></i>Get a Dealer
                    </a>
                  </div>
                </div>
                <div className="tab-content bg-white box-shadow-1 ltn__border position-relative pb-10">
                  <div
                    className="tab-pane fade active show"
                    id="ltn__form_tab_1_1"
                  >
                    <div className="car-dealer-form-inner">
                      <form action="#" className="ltn__car-dealer-form-box row">
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Choose Area</option>
                            <option>chicago</option>
                            <option>London</option>
                            <option>Los Angeles</option>
                            <option>New York</option>
                            <option>New Jersey</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Property Status</option>
                            <option>Open house</option>
                            <option>Rent</option>
                            <option>Sale</option>
                            <option>Sold</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Co-op</option>
                            <option>Condo</option>
                            <option>Single Family Home</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                          <div className="btn-wrapper text-center mt-0">
                            {/* <button
                              type="submit"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Search Inventory
                            </button> */}
                            <a
                              href="shop-right-sidebar.html"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Find Now
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="ltn__form_tab_1_2">
                    <div className="car-dealer-form-inner">
                      <form action="#" className="ltn__car-dealer-form-box row">
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Choose Area</option>
                            <option>chicago</option>
                            <option>London</option>
                            <option>Los Angeles</option>
                            <option>New York</option>
                            <option>New Jersey</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Property Status</option>
                            <option>Open house</option>
                            <option>Rent</option>
                            <option>Sale</option>
                            <option>Sold</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Co-op</option>
                            <option>Condo</option>
                            <option>Single Family Home</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                          <div className="btn-wrapper text-center mt-0">
                            <button
                              type="submit"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Search Inventory
                            </button>
                            <a
                              href="shop-right-sidebar.html"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Search Properties
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MeetDetailSection/>
      {/* <OurMainFocus /> */}
      <LetGetStarted/>
      {/* <AreaProperties /> */}
      {/* <FeaturedListings /> */}
      {/* <NewsBlog /> */}
      <FeaturedCommunities />
      {/* <ClientsFeedback /> */}
      <VideoPopup />
      {/* <ClientsLogoSlider /> */}
      <CallToAction />
    </>
  );
};

export default Index;
