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
    list_link: "javascript:void(0)",
    dropDownList: [
      {
        taglink: "https://www.kakaako.com/condo/kalae/",
        taglist: "Kalae",
      },
      {
        taglink: "https://www.kakaako.com/condo/koula/",
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
      { taglink: "javascript:void(0)", taglist: "Friend and Family Sale" },
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
      { taglink: "javascript:void(0)", taglist: "Mortgage Pre-Approval" },
      { taglink: "javascript:void(0)", taglist: "Affordable Housing" },
      { taglink: "javascript:void(0)", taglist: "First Time Buyers" },
      { taglink: "javascript:void(0)", taglist: "Personalized Home Search" },
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
      { taglink: "javascript:void(0)", taglist: "Pricing Your Home" },
      { taglink: "javascript:void(0)", taglist: "Flat Fee Listing" },
      { taglink: "javascript:void(0)", taglist: "Virtual Staging" },
      { taglink: "javascript:void(0)", taglist: "Free Market Analysis" },
    ],
  },
  {
    list: "Property Management",
    list_link: "javascript:void(0)",
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
        taglink: "javascript:void(0)",
        taglist: "About",
      },
      {
        taglink: "javascript:void(0)",
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

const Index = () => {
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
      <header class="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
        {/*ltn__header-top-area start*/}
        {/* <div class="ltn__header-top-area top-area-color-white">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                <div class="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                        <i class="icon-mail"></i> info@webmail.com
                      </a>
                    </li>
                    <li>
                      <a href="locations.html">
                        <i class="icon-placeholder"></i> 15/A, Nest Tower, NYC
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-5">
                <div class="top-bar-right text-end">
                  <div class="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <div class="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                          <ul>
                            <li>
                              <a href="#" class="dropdown-toggle">
                                <span class="active-currency">English</span>
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
                      </li>
                      <li>
 
                        <div class="ltn__social-media">
                          <ul>
                            <li>
                              <a href="#" title="Facebook">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Twitter">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>

                            <li>
                              <a href="#" title="Instagram">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Dribbble">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* ltn__header-top-area end */}

        {/*  ltn__header-middle-area start */}
        <div
          class={`${
            chColor
              ? "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black sticky-active"
              : "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black"
          }`}
        >
          <div class="container">
            <div class="row header_row_wrap">
              <div class="col-2">
                <div class="site-logo-wrap">
                  <div class="site-logo">
                    <a href="javascript:void(0)">
                      <img src="images/logo-2.png" alt="Logo" />
                    </a>
                  </div>
                  <div class="get-support clearfix d-none">
                    <div class="get-support-icon">
                      <i class="icon-call"></i>
                    </div>
                    <div class="get-support-info">
                      <h6>Get Support</h6>
                      <h4>
                        <a href="tel:+123456789">123-456-789-10</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col header-menu-column menu-color-white">
                <div class="header-menu d-none d-xl-block">
                  <nav>
                    <div class="ltn__main-menu">
                      <ul>
                        {mobileMenuList.map((item, index) => (
                          <>
                            <li key={index} class="menu-icon active">
                              <a href={item.list_link}>{item.list}</a>
                              <ul
                                class="sub-menu menu-pages-img-show"
                                style={{ display: show === "none" }}
                              >
                                {item.dropDownList.map((item, index) => (
                                  <li key={index}>
                                    <a href={item.taglink}>{item.taglist}</a>
                                    {/* {index === 1 ? (
                                      <img src="images/home-1.jpg" alt="#" />
                                    ) : (
                                      ""
                                    )} */}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </>
                        ))}
                        <li class="special-link">
                          <a href="javascript:void(0)">Add Listing</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="col d-none d-xl-block">
                <div class="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                  <ul>
                    <li>
                      <a href="javascript:void(0)" class="dropdown-toggle">
                        <span class="active-currency">English</span>
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
              <div class="col--- ltn__header-options ltn__header-options-2">
                {/*Mobile Menu Button*/}
                <div
                  onClick={() => setShow(true)}
                  class="mobile-menu-toggle d-xl-none"
                  style={{ display: show === false ? "block" : "none" }}
                >
                  <a
                    href="#ltn__utilize-mobile-menu"
                    class="ltn__utilize-toggle"
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
                  class="mobile-menu-toggle d-xl-none"
                  style={{ display: show === false ? "none" : "block" }}
                >
                  <a
                    href="#ltn__utilize-mobile-menu"
                    class="ltn__utilize-toggle"
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
          class="ltn__utilize ltn__utilize-mobile-menu ltn__utilize-open"
        >
          <div class="ltn__utilize-menu-inner ltn__scrollbar">
            <div class="ltn__utilize-menu-head">
              <div class="site-logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="Logo" />
                </a>
              </div>
              <button onClick={() => setShow(false)} class="ltn__utilize-close">
                ×
              </button>
            </div>
            <div class="ltn__utilize-menu-search-form">
              <form action="#">
                <input type="text" placeholder="Search..." />
                <button>
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div class="ltn__utilize-menu">
              <ul>
                {mobileMenuList.map((item, index) => (
                  <>
                    <li
                      onClick={() => setActive(index)}
                      key={index}
                      class="menu-icon"
                    >
                      <a class="active">{item.list}</a>
                      <ul
                        class="sub-menu"
                        style={{ display: active === index ? "block" : "none" }}
                      >
                        {item.dropDownList.map((item, index) => (
                          <li key={index}>
                            <a href={item.taglink}>{item.taglist}</a>
                            {/* <img src="images/home-1.jpg" alt="#" /> */}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </>
                ))}
                {/* <li class="menu-icon">
                  <a href="">Condo</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.kakaako.com/condo/kalae/">Kalae</a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/koula/">
                        Ko&apos;ula
                      </a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/aalii/">
                        &apos;A&apos;ali&apos;i
                      </a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/anaha/">Anaha</a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/aeo/">Ae&apos;o</a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/waiea/">Waiea</a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/victoria-place/">
                        Victoria Place
                      </a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/park-ward/">
                        The Park on Ward
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="https://corcoranpacific.com/blog/">Blog</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.kakaako.com/condo/popular-condos/">
                        Popular Condos in 2022
                      </a>
                    </li>
                    <li>
                      <a href="">Friend and Family Sale</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="https://www.kakaako.com/buyers/">Buyers</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.kakaako.com/buyers/mortgage-calculator/">
                        Mortgage Calculator
                      </a>
                    </li>
                    <li>
                      <a href="">Mortgage Pre-Approval</a>
                    </li>
                    <li>
                      <a href="">Affordable Housing</a>
                    </li>
                    <li>
                      <a href="">First Time Buyers</a>
                    </li>
                    <li>
                      <a href="">Personalized Home Search </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="https://www.kakaako.com/sellers/">Sellers</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.kakaako.com/sellers/">
                        Selling A Home
                      </a>
                    </li>
                    <li>
                      <a href="">Pricing Your Home</a>
                    </li>
                    <li>
                      <a href="">Flat Fee Listing</a>
                    </li>
                    <li>
                      <a href="">Virtual Staging</a>
                    </li>
                    <li>
                      <a href="">Free Market Analysis</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="">Property Management</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.happydoorspropertymanagement.com/pricing/">
                        Our Process
                      </a>
                    </li>
                    <li>
                      <a href="https://www.happydoorspropertymanagement.com/pricing/">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="https://www.kakaako.com/contact/">Contact</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Schedule a Showing</a>
                    </li>
                    <li>
                      <a href="https://www.coldwellbankerhomes.com/hi/honolulu/office/honolulu/oid_451/#">
                        Request a Home Valuation
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              {/* <ul>
                <li class="menu-icon active">
                  <a href="https://www.kakaako.com/property-search/search-form/">
                    Search
                  </a>
                  <ul
                    class="sub-menu menu-pages-img-show"
                    style={{ display: show === "none" }}
                  >
                    <li>
                      <a href="https://www.kakaako.com/ward-village/">
                        Ward Village
                      </a>
                     
                    </li>
                    <li>
                      <a href="https://www.hawaiiliving.com/oahu/honolulu/metro/kakaako-condos/">
                        Active Listings
                      </a>
                      
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/property-search/search-form/">
                        Advanced Search
                      </a>
                      
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="">Condo</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.kakaako.com/condo/kalae/">Kalae</a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/koula/">
                        Ko&apos;ula
                      </a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/aalii/">
                        &apos;A&apos;ali&apos;i
                      </a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/anaha/">Anaha</a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/aeo/">Ae&apos;o</a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/waiea/">Waiea</a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/victoria-place/">
                        Victoria Place
                      </a>
                    </li>
                    <li>
                      <a href="https://www.kakaako.com/condo/park-ward/">
                        The Park on Ward
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="https://corcoranpacific.com/blog/">Blog</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.kakaako.com/condo/popular-condos/">
                        Popular Condos in 2022
                      </a>
                    </li>
                    <li>
                      <a href="">Friend and Family Sale</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="https://www.kakaako.com/buyers/">Buyers</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.kakaako.com/buyers/mortgage-calculator/">
                        Mortgage Calculator
                      </a>
                    </li>
                    <li>
                      <a href="">Mortgage Pre-Approval</a>
                    </li>
                    <li>
                      <a href="">Affordable Housing</a>
                    </li>
                    <li>
                      <a href="">First Time Buyers</a>
                    </li>
                    <li>
                      <a href="">Personalized Home Search </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="https://www.kakaako.com/sellers/">Sellers</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.kakaako.com/sellers/">
                        Selling A Home
                      </a>
                    </li>
                    <li>
                      <a href="">Pricing Your Home</a>
                    </li>
                    <li>
                      <a href="">Flat Fee Listing</a>
                    </li>
                    <li>
                      <a href="">Virtual Staging</a>
                    </li>
                    <li>
                      <a href="">Free Market Analysis</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="">Property Management</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="https://www.happydoorspropertymanagement.com/pricing/">
                        Our Process
                      </a>
                    </li>
                    <li>
                      <a href="https://www.happydoorspropertymanagement.com/pricing/">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-icon">
                  <a href="https://www.kakaako.com/contact/">Contact</a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Schedule a Showing</a>
                    </li>
                    <li>
                      <a href="https://www.coldwellbankerhomes.com/hi/honolulu/office/honolulu/oid_451/#">
                        Request a Home Valuation
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="special-link">
                  <a href="add-listing.html">Add Listing</a>
                </li>
              </ul> */}
            </div>
            <div class="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                <li>
                  <a href="account.html" title="My Account">
                    <span class="utilize-btn-icon">
                      <i class="far fa-user"></i>
                    </span>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="wishlist.html" title="Wishlist">
                    <span class="utilize-btn-icon">
                      <i class="far fa-heart"></i>
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="cart.html" title="Shoping Cart">
                    <span class="utilize-btn-icon">
                      <i class="fas fa-shopping-cart"></i>
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </a>
                </li>
              </ul>
            </div>
            <div class="ltn__social-media-2">
              <ul>
                <li>
                  <a href="#" title="Facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Linkedin">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram">
                    <i class="fab fa-instagram"></i>
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
