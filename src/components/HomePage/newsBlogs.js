import React from "react";
import Slider from "react-slick";

const NewsBlogs = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <a className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left" alt="Arrow Icon"></i>
      </a>
    ),
    nextArrow: (
      <a className="slick-next slick-arrow">
        <i className="fas fa-arrow-right" alt="Arrow Icon"></i>
      </a>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
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
        breakpoint: 575,
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
    <div className="ltn__blog-area pt-120 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                News & Blogs
              </h6>
              <h1 className="section-title">Leatest News Feeds</h1>
            </div>
          </div>
        </div>
        <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
          <Slider {...settings}>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="images/1_2.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Decorate
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      10 Brilliant Ways To Decorate Your Home
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="images/2_2.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      The Most Inspiring Interior Design Of 2021
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>July 23, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="images/3_2.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Estate
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Recent Commercial Real Estate Transactions
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>May 22, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="images/4_2.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Room
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Renovating a Living Room? Experts Share Their Secrets
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="images/5_1.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Trends
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      7 home trends that will shape your house in 2021
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
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

export default NewsBlogs;
