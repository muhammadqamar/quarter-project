import React from "react";
import Slider from "react-slick";
// import "./style/clientsLogoSlider.scss";

const ClientsLogoSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    // prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    // nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-110 pb-110 plr--9 d-none---">
      <div className="container-fluid">
        <div className="row ltn__brand-logo-active">
          <Slider {...settings}>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src="images/1_1.png" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src="images/2_1.png" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src="images/3_1.png" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src="images/4_1.png" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src="images/5.png" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <img src="images/3_1.png" alt="Brand Logo" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogoSlider;
