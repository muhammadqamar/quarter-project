import React from "react";
import Slider from "react-slick";

const AreaProperties = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow:
    //   '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    // nextArrow:
    //   '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70"
      data-bs-bg="img/bg/20.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Area Properties
              </h6>
              <h1 className="section-title">Properties By Location</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__search-by-place-slider-1-active slick-arrow-1">
          <Slider {...settings}>
            <div className="col-lg-4">
              <div className="ltn__search-by-place-item">
                <div className="search-by-place-img">
                  <a href="product-details.html">
                    <img src="images/1.jpg" alt="#" />
                  </a>
                  <div className="search-by-place-badge">
                    <ul>
                      <li>2 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className="search-by-place-info">
                  <h6>
                    <a href="locations.html">San Francisco</a>
                  </h6>
                  <h4>
                    <a href="product-details.html">Mission District Area</a>
                  </h4>
                  <div className="search-by-place-btn">
                    <a href="product-details.html">
                      View Property <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__search-by-place-item">
                <div className="search-by-place-img">
                  <a href="product-details.html">
                    <img src="images/2_1.jpg" alt="#" />
                  </a>
                  <div className="search-by-place-badge">
                    <ul>
                      <li>5 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className="search-by-place-info">
                  <h6>
                    <a href="locations.html">New York</a>
                  </h6>
                  <h4>
                    <a href="product-details.html">Pacific Heights Area</a>
                  </h4>
                  <div className="search-by-place-btn">
                    <a href="product-details.html">
                      View Property <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__search-by-place-item">
                <div className="search-by-place-img">
                  <a href="product-details.html">
                    <img src="images/3_1.jpg" alt="#" />
                  </a>
                  <div className="search-by-place-badge">
                    <ul>
                      <li>9 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className="search-by-place-info">
                  <h6>
                    <a href="locations.html">Sedona, Arizona</a>
                  </h6>
                  <h4>
                    <a href="product-details.html">Noe Valley Zones</a>
                  </h4>
                  <div className="search-by-place-btn">
                    <a href="product-details.html">
                      View Property <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__search-by-place-item">
                <div className="search-by-place-img">
                  <a href="product-details.html">
                    <img src="images/2_1.jpg" alt="#" />
                  </a>
                  <div className="search-by-place-badge">
                    <ul>
                      <li>5 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className="search-by-place-info">
                  <h6>
                    <a href="locations.html">New York</a>
                  </h6>
                  <h4>
                    <a href="product-details.html">Pacific Heights Area</a>
                  </h4>
                  <div className="search-by-place-btn">
                    <a href="product-details.html">
                      View Property <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AreaProperties;
