import React from "react";
// import "./style/meetDetailSection.scss"

const MeetDetailSection = () => {
  return (
    <section className="ltn__feature-area  section-bg-1--- pt-115 pb-90 mb-120---">
      <div className="container">
        <div className="row ltn__custom-gutter---  justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="meet-section-image">
              <img src="images/about-photo.jpg" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="ltn__feature-info pt-115">
              <h2 className="section-title text-center">Meet Holden Lau</h2>
              <p>
                Holden Lau represents the region s finest properties with
                exceptional skill using the most innovative technologies
                currently available.
              </p>

              <p>
                Holden Lau offers ultimate privacy and security, speed, and
                efficiency. Their years of full-time experience have given them
                a clear understanding of the mindset of home buyers and sellers
                and a thorough understanding of the regional marketplace.
              </p>
              <div className="btn-wrapper  mt-0">
                <a
                  href="shop-right-sidebar.html"
                  className="btn theme-btn-1 theme-btn-2 btn-effect-1 text-uppercase"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDetailSection;
