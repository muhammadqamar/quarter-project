import React from "react";
import Slider from "react-slick";

const FeaturedListings = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
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
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          // arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          // arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <>
      <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Properties
                </h6>
                <h1 className="section-title">Featured Listings</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__product-slider-item-three-active slick-arrow-1">
            <Slider {...settings}>
              {/* <!-- ltn__product-item --> */}
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-4 text-center---">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="images/1.jpg" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge bg-green">For Rent</li>
                      </ul>
                    </div>
                    <div className="product-img-location-gallery">
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <a href="locations.html">
                              <i className="flaticon-pin"></i> Belmont Gardens, Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-gallery">
                        <ul>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title">
                      <a href="product-details.html">New Apartment Nice View</a>
                    </h2>
                    <div className="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of <br />
                        Westbury. Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="ltn__list-item-2 ltn__list-item-2-before">
                      <li>
                        <span>
                          3 <i className="flaticon-bed"></i>
                        </span>
                        Bedrooms
                      </li>
                      <li>
                        <span>
                          2 <i className="flaticon-clean"></i>
                        </span>
                        Bathrooms
                      </li>
                      <li>
                        <span>
                          3450{" "}
                          <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                        </span>
                        square Ft
                      </li>
                    </ul>
                  </div>
                  <div className="product-info-bottom">
                    <div className="real-estate-agent">
                      <div className="agent-img">
                        <a href="team-details.html">
                          <img src="images/author.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="agent-brief">
                        <h6>
                          <a href="team-details.html">William Seklo</a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                    <div className="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                          >
                            <i className="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                          >
                            <i className="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <a href="product-details.html" title="Product Details">
                            <i className="flaticon-add"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ltn__product-item --> */}
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-4 text-center---">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="images/2_1.jpg" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge bg-green---">For Sale</li>
                      </ul>
                    </div>
                    <div className="product-img-location-gallery">
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <a href="locations.html">
                              <i className="flaticon-pin"></i> Belmont Gardens, Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-gallery">
                        <ul>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title">
                      <a href="product-details.html">Modern Apartments</a>
                    </h2>
                    <div className="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of <br />
                        Westbury. Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="ltn__list-item-2 ltn__list-item-2-before">
                      <li>
                        <span>
                          3 <i className="flaticon-bed"></i>
                        </span>
                        Bedrooms
                      </li>
                      <li>
                        <span>
                          2 <i className="flaticon-clean"></i>
                        </span>
                        Bathrooms
                      </li>
                      <li>
                        <span>
                          3450{" "}
                          <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                        </span>
                        square Ft
                      </li>
                    </ul>
                  </div>
                  <div className="product-info-bottom">
                    <div className="real-estate-agent">
                      <div className="agent-img">
                        <a href="team-details.html">
                          <img src="images/author.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="agent-brief">
                        <h6>
                          <a href="team-details.html">William Seklo</a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                    <div className="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                          >
                            <i className="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                          >
                            <i className="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <a href="product-details.html" title="Product Details">
                            <i className="flaticon-add"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ltn__product-item --> */}
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-4 text-center---">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="images/3_1.jpg" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge bg-green">For Rent</li>
                      </ul>
                    </div>
                    <div className="product-img-location-gallery">
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <a href="locations.html">
                              <i className="flaticon-pin"></i> Belmont Gardens, Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-gallery">
                        <ul>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title">
                      <a href="product-details.html">Comfortable Apartment</a>
                    </h2>
                    <div className="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of <br />
                        Westbury. Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="ltn__list-item-2 ltn__list-item-2-before">
                      <li>
                        <span>
                          3 <i className="flaticon-bed"></i>
                        </span>
                        Bedrooms
                      </li>
                      <li>
                        <span>
                          2 <i className="flaticon-clean"></i>
                        </span>
                        Bathrooms
                      </li>
                      <li>
                        <span>
                          3450{" "}
                          <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                        </span>
                        square Ft
                      </li>
                    </ul>
                  </div>
                  <div className="product-info-bottom">
                    <div className="real-estate-agent">
                      <div className="agent-img">
                        <a href="team-details.html">
                          <img src="images/author.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="agent-brief">
                        <h6>
                          <a href="team-details.html">William Seklo</a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                    <div className="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                          >
                            <i className="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                          >
                            <i className="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <a href="product-details.html" title="Product Details">
                            <i className="flaticon-add"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ltn__product-item --> */}
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-4 text-center---">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="images/4_1.jpg" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge bg-green">For Rent</li>
                      </ul>
                    </div>
                    <div className="product-img-location-gallery">
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <a href="locations.html">
                              <i className="flaticon-pin"></i> Belmont Gardens, Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-gallery">
                        <ul>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title">
                      <a href="product-details.html">Luxury villa in Rego Park </a>
                    </h2>
                    <div className="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of <br />
                        Westbury. Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="ltn__list-item-2 ltn__list-item-2-before">
                      <li>
                        <span>
                          3 <i className="flaticon-bed"></i>
                        </span>
                        Bedrooms
                      </li>
                      <li>
                        <span>
                          2 <i className="flaticon-clean"></i>
                        </span>
                        Bathrooms
                      </li>
                      <li>
                        <span>
                          3450{" "}
                          <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                        </span>
                        square Ft
                      </li>
                    </ul>
                  </div>
                  <div className="product-info-bottom">
                    <div className="real-estate-agent">
                      <div className="agent-img">
                        <a href="team-details.html">
                          <img src="images/author.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="agent-brief">
                        <h6>
                          <a href="team-details.html">William Seklo</a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                    <div className="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                          >
                            <i className="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                          >
                            <i className="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <a href="product-details.html" title="Product Details">
                            <i className="flaticon-add"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ltn__product-item --> */}
              <div className="col-lg-12">
                <div className="ltn__product-item ltn__product-item-4 text-center---">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img src="images/5.jpg" alt="#" />
                    </a>
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge bg-green">For Rent</li>
                      </ul>
                    </div>
                    <div className="product-img-location-gallery">
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <a href="locations.html">
                              <i className="flaticon-pin"></i> Belmont Gardens, Chicago
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-gallery">
                        <ul>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-camera"></i> 4
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              <i className="fas fa-film"></i> 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-price">
                      <span>
                        $34,900<label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title">
                      <a href="product-details.html">Beautiful Flat in Manhattan </a>
                    </h2>
                    <div className="product-description">
                      <p>
                        Beautiful Huge 1 Family House In Heart Of <br />
                        Westbury. Newly Renovated With New Wood
                      </p>
                    </div>
                    <ul className="ltn__list-item-2 ltn__list-item-2-before">
                      <li>
                        <span>
                          3 <i className="flaticon-bed"></i>
                        </span>
                        Bedrooms
                      </li>
                      <li>
                        <span>
                          2 <i className="flaticon-clean"></i>
                        </span>
                        Bathrooms
                      </li>
                      <li>
                        <span>
                          3450{" "}
                          <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                        </span>
                        square Ft
                      </li>
                    </ul>
                  </div>
                  <div className="product-info-bottom">
                    <div className="real-estate-agent">
                      <div className="agent-img">
                        <a href="team-details.html">
                          <img src="images/author.jpg" alt="#" />
                        </a>
                      </div>
                      <div className="agent-brief">
                        <h6>
                          <a href="team-details.html">William Seklo</a>
                        </h6>
                        <small>Estate Agents</small>
                      </div>
                    </div>
                    <div className="product-hover-action">
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#quick_view_modal"
                          >
                            <i className="flaticon-expand"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Wishlist"
                            data-bs-toggle="modal"
                            data-bs-target="#liton_wishlist_modal"
                          >
                            <i className="flaticon-heart-1"></i>
                          </a>
                        </li>
                        <li>
                          <a href="product-details.html" title="Product Details">
                            <i className="flaticon-add"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedListings;
