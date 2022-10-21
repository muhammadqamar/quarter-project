import React from "react";
import Slider from "react-slick";

const ClientsFeedback = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    // nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Our Testimonial
              </h6>
              <h1 className="section-title">Clients Feedback</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1">
              <Slider {...settings}>
                <div className="ltn__testimonial-item-5">
                  <div className="ltn__quote-icon">
                    <i className="far fa-comments"></i>
                  </div>
                  <div className="ltn__testimonial-image">
                    <img src="images/1_1.jpg" alt="quote" />
                  </div>
                  <div className="ltn__testimonial-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud ullamco
                      laboris nisi ut aliquip ex ea commodo.{" "}
                    </p>
                    <h4>Jacob William</h4>
                    <h6>Manager</h6>
                  </div>
                </div>
                <div className="ltn__testimonial-item-5">
                  <div className="ltn__quote-icon">
                    <i className="far fa-comments"></i>
                  </div>
                  <div className="ltn__testimonial-image">
                    <img src="images/2.jpg" alt="quote" />
                  </div>
                  <div className="ltn__testimonial-info">
                    <p>
                      Quidem Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      ullamco laboris nisi ut aliquip ex ea.{" "}
                    </p>
                    <h4>Ethan James</h4>
                    <h6>Admin</h6>
                  </div>
                </div>

                <div className="ltn__testimonial-item-5">
                  <div className="ltn__quote-icon">
                    <i className="far fa-comments"></i>
                  </div>
                  <div className="ltn__testimonial-image">
                    <img src="images/3.jpg" alt="quote" />
                  </div>
                  <div className="ltn__testimonial-info">
                    <p>
                      Dolor Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      ullamco nisi ut aliquip ex ea commodo.{" "}
                    </p>
                    <h4>Noah Alexander</h4>
                    <h6>Professor</h6>
                  </div>
                </div>

                <div className="ltn__testimonial-item-5">
                  <div className="ltn__quote-icon">
                    <i className="far fa-comments"></i>
                  </div>
                  <div className="ltn__testimonial-image">
                    <img src="images/4.jpg" alt="quote" />
                  </div>
                  <div className="ltn__testimonial-info">
                    <p>
                      Amet Ipsum Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud nisi ut aliquip ex ea commodo.{" "}
                    </p>
                    <h4>Liam Mason</h4>
                    <h6>Officer</h6>
                  </div>
                </div>
              </Slider>
            </div>
            <ul className="ltn__testimonial-quote-menu d-none d-lg-block">
              <li>
                <img src="images/1_1.jpg" alt="Quote image" />
              </li>
              <li>
                <img src="images/2.jpg" alt="Quote image" />
              </li>
              <li>
                <img src="images/3.jpg" alt="Quote image" />
              </li>
              <li>
                <img src="images/4.jpg" alt="Quote image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;
