/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

const mobileMenuList = [
  {
    list: "Search",
    list_link: "https://www.kakaako.com/property-search/search-form/",
    dropDownList: [
      {
        taglink: "https://www.kakaako.com/ward-village/",
        taglist: "Ward Village",
      },
      {
        taglink:
          "https://www.hawaiiliving.com/oahu/honolulu/metro/kakaako-condos/",
        taglist: "Active Listings",
      },
      {
        taglink: "https://www.kakaako.com/property-search/search-form/",
        taglist: "Advanced Search",
      },
    ],
  },
  {
    list: "Condo",
    list_link: "",
    dropDownList: [
      {
        taglink: "/condo/kotla",
        taglist: "Kalae",
      },
      {
        taglink: "/condo/jaipur",
        taglist: "Ko'ula",
      },
      {
        taglink: "https://www.kakaako.com/condo/aalii/",
        taglist: "'A'ali'i",
      },
      { taglink: "https://www.kakaako.com/condo/anaha/", taglist: "Anaha" },
      { taglink: "https://www.kakaako.com/condo/aeo/", taglist: "Ae'o" },
      { taglink: "https://www.kakaako.com/condo/waiea/", taglist: "Waiea" },
      {
        taglink: "https://www.kakaako.com/condo/victoria-place/",
        taglist: "Victoria Place",
      },
      {
        taglink: "https://www.kakaako.com/condo/park-ward/",
        taglist: "The Park on Ward",
      },
    ],
  },
  {
    list: "Blog",
    list_link: "https://corcoranpacific.com/blog/",
    dropDownList: [
      {
        taglink: "https://www.kakaako.com/condo/popular-condos/",
        taglist: "Popular Condos in 2022",
      },
      { taglink: "", taglist: "Friend and Family Sale" },
    ],
  },
  {
    list: "Buyers",
    list_link: "https://www.kakaako.com/buyers/",
    dropDownList: [
      {
        taglink: "https://www.kakaako.com/buyers/mortgage-calculator/",
        taglist: "Mortgage Calculator",
      },
      { taglink: "", taglist: "Mortgage Pre-Approval" },
      { taglink: "", taglist: "Affordable Housing" },
      { taglink: "", taglist: "First Time Buyers" },
      { taglink: "", taglist: "Personalized Home Search" },
    ],
  },
  {
    list: "Sellers",
    list_link: "https://www.kakaako.com/sellers/",
    dropDownList: [
      {
        taglink: "https://www.kakaako.com/sellers/",
        taglist: " Selling A Home",
      },
      { taglink: "", taglist: "Pricing Your Home" },
      { taglink: "", taglist: "Flat Fee Listing" },
      { taglink: "", taglist: "Virtual Staging" },
      { taglink: "", taglist: "Free Market Analysis" },
    ],
  },
  {
    list: "Property Management",
    list_link: "",
    dropDownList: [
      {
        taglink: "https://www.happydoorspropertymanagement.com/pricing/",
        taglist: "Our Process",
      },
      {
        taglink: "https://www.happydoorspropertymanagement.com/pricing/",
        taglist: "Pricing",
      },
    ],
  },
  {
    list: "Contact",
    list_link: "https://www.kakaako.com/contact/",
    dropDownList: [
      {
        taglink: "",
        taglist: "About",
      },
      {
        taglink: "",
        taglist: "Schedule a Showing",
      },
      {
        taglink:
          "https://www.coldwellbankerhomes.com/hi/honolulu/office/honolulu/oid_451/#",
        taglist: "Request a Home Valuation",
      },
    ],
  },
];

const Index = ({ headerBg }) => {
  const [chColor, setChColor] = useState(false);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const ScrollDown = () => {
    if (window.scrollY >= 90) {
      setChColor(true);
    } else {
      setChColor(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", ScrollDown);
    }
  }, []);

  return (
    <>
      <header
        style={{ background: headerBg }}
        className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---"
      >
        {/*  ltn__header-middle-area start */}
        <div
          className={`${
            chColor
              ? "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black sticky-active"
              : "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black"
          }`}
        >
          <div className="container">
            <div className="row header_row_wrap">
              <div className="col-2">
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <a href="">
                      <img src="/images/logo-2.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="get-support clearfix d-none">
                    <div className="get-support-icon">
                      <i className="icon-call"></i>
                    </div>
                    <div className="get-support-info">
                      <h6>Get Support</h6>
                      <h4>
                        <a href="tel:+123456789">123-456-789-10</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column menu-color-white">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        {mobileMenuList.map((item, index) => (
                          <>
                            <li key={index} className="menu-icon active">
                              <a href={item.list_link}>{item.list}</a>
                              <ul
                                className="sub-menu menu-pages-img-show"
                                style={{ display: show === "none" }}
                              >
                                {item.dropDownList.map((item, index) => (
                                  <li key={index}>
                                    <a href={item.taglink}>{item.taglist}</a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </>
                        ))}
                        <li className="special-link">
                          <a href="">Add Listing</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col d-none d-xl-block">
                <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                  <ul>
                    <li>
                      <a href="" className="dropdown-toggle">
                        <span className="active-currency">English</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Arabic</a>
                        </li>
                        <li>
                          <a href="#">Bengali</a>
                        </li>
                        <li>
                          <a href="#">Chinese</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Hindi</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col--- ltn__header-options ltn__header-options-2">
                {/*Mobile Menu Button*/}
                <div
                  onClick={() => setShow(true)}
                  className="mobile-menu-toggle d-xl-none"
                  style={{ display: show === false ? "block" : "none" }}
                >
                  <a
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  onClick={() => setShow(false)}
                  className="mobile-menu-toggle d-xl-none"
                  style={{ display: show === false ? "none" : "block" }}
                >
                  <a
                    href="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <img src="/images/close_mobile_menu.svg" alt="close icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__header-middle-area end*/}
      </header>
      {show === true && (
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu ltn__utilize-open"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="Logo" />
                </a>
              </div>
              <button
                onClick={() => setShow(false)}
                className="ltn__utilize-close"
              >
                ×
              </button>
            </div>
            <div className="ltn__utilize-menu-search-form">
              <form action="#">
                <input type="text" placeholder="Search..." />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div className="ltn__utilize-menu">
              <ul>
                {mobileMenuList.map((item, index) => (
                  <>
                    <li
                      onClick={() => setActive(index)}
                      key={index}
                      className="menu-icon"
                    >
                      <a className="active">{item.list}</a>
                      <ul
                        className="sub-menu"
                        style={{ display: active === index ? "block" : "none" }}
                      >
                        {item.dropDownList.map((item, index) => (
                          <li key={index}>
                            <a href={item.taglink}>{item.taglist}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                <li>
                  <a href="account.html" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="far fa-user"></i>
                    </span>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="wishlist.html" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart"></i>
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="cart.html" title="Shoping Cart">
                    <span className="utilize-btn-icon">
                      <i className="fas fa-shopping-cart"></i>
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="ltn__social-media-2">
              <ul>
                <li>
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
