/* eslint-disable @next/next/no-img-element */
import React from "react";

const condoDetail = [
  {
    detailPara: "Developer:",
    detailLink: "Howard Hughes Corp",
  },
  {
    detailPara: "Architect:",
    detailLink: "Solomon Cordwell Buenz",
  },
  {
    detailPara: "Landscape Architect:",
    detailLink: " Vita| Planning and Landscape Architecture",
  },
  {
    detailPara: "Interior Design:",
    detailLink: " Nicole Hollis",
  },
  {
    detailPara: "Page Directory:",
    detailLink: " Amenities",
  },
];

const groundAmenities = [
  {
    SubHeading: "Ground Floor Amenities",
    DownList: [
      {
        innerList: "Lobby",
      },
      {
        innerList: "Front Desk",
      },
      {
        innerList: "Security Office",
      },
      {
        innerList: "Mail Room",
      },
      {
        innerList: "Parcel Storage",
      },
      {
        innerList: "Secured Bicycle Storage",
      },
      {
        innerList: "Secured Surfboard Storage",
      },
      {
        innerList: "Dog Run",
      },
      {
        innerList: "4 Courtyard terraces",
      },
      {
        innerList: "Port Cochere",
      },
    ],
  },
  {
    SubHeading: "5th Floor Amenities",
    DownList: [
      {
        innerList: "Owner's Lounge",
      },
      {
        innerList: "Resort Pool",
      },
      {
        innerList: "25 Meter Lap Pool",
      },
      {
        innerList: "Spa",
      },
      {
        innerList: "Great Lawn",
      },
      {
        innerList: "Fitness Studio",
      },
      {
        innerList: "Personal Training Room",
      },
      {
        innerList: "BBQ area with Pizza Oven",
      },
    ],
  },
];

const wardRightVillage = [
  {
    title: "Ward Village Condos",
    Downward: [
      {
        wardList: "Kalae",
      },
      {
        wardList: "Ko'ula",
      },
      {
        wardList: "'A'ali'i",
      },
      {
        wardList: "Anaha",
      },
      {
        wardList: "Ae'o",
      },
      {
        wardList: "Waiea",
      },
      {
        wardList: "Victoria Place",
      },
      {
        wardList: "The Park on Ward",
      },
    ],
  },
];
const wardRightVillage2 = [
  {
    title: "Midtown Ala Moana Condos",
    Downward: [
      {
        wardList: "The Park on Keeaum...",
      },
      {
        wardList: "Sky Ala Moana",
      },
      {
        wardList: "Azure Ala Moana",
      },
      {
        wardList: "The Central Ala M",
      },
      {
        wardList: "Mandarin Oriental",
      },
      {
        wardList: "Kapiolani Reside...",
      },
    ],
  },
];
const wardRightVillage3 = [
  {
    title: "New Honolulu Condos",
    Downward: [
      {
        wardList: "The Park on Keeaum...",
      },
      {
        wardList: "Ko'ula",
      },
      {
        wardList: "Azure Ala Moana",
      },
      {
        wardList: "'A'ali'i",
      },
      {
        wardList: "Ililani",
      },
      {
        wardList: "Ae'o",
      },
      {
        wardList: "Alia Kaka'ako",
      },
      {
        wardList: "Sky Ala Moana",
      },
      {
        wardList: "Kahuina Condo in...",
      },
      {
        wardList: "The Collection H...",
      },
    ],
  },
];
const checkMark = [
  {
    title: "Buying & Selling Made Easy",
    checkward: [
      {
        checkImg: "/images/CheckMark.png",
        checkList: "Freshest Data Available",
      },
      {
        checkImg: "/images/CheckMark.png",
        checkList: "Active Listings Only",
      },
      {
        checkImg: "/images/CheckMark.png",
        checkList: "Customizable Search Options",
      },
      {
        checkImg: "/images/CheckMark.png",
        checkList: "New Listing Alerts",
      },
      {
        checkImg: "/images/CheckMark.png",
        checkList: "Instant Home Value Assessments",
      },
    ],
  },
];

const Index = () => {
  return (
    <div className="main_content">
      <div className="container">
        <div className="row">
          <div className="col-md-8 left_col">
            <ul className="item_scope">
              <li className="item_list">
                <a href="javascript:void(0)" className="list_link">
                  Home
                </a>
              </li>
              <li className="item_list item_current">
                <a href="javascript:void(0)" className="list_link">
                  Condo
                </a>
              </li>
              <li className="item_list item_current">Kalae</li>
            </ul>
            <h1 className="left_col_heading">Kalae at Ward Village</h1>
            <p className="left_col_para">
              Kalae represents the latest component of Ward Village, utilizing
              architecture that draws inspiration from classic buildings of
              early 20th century Honolulu- particularly the Honolulu Museum of
              Art, The Halekulani Hotel, and Shangri La. These buildings are
              exceptional examples of Honolulu’s first modern regional style,
              which takes influences from the California Mission style of
              architecture, and its own lineage in turn from Spain.
            </p>
            {condoDetail.map((item, index) => (
              <p key={index} className="left_col_para detail_links">
                {item.detailPara}
                <a
                  href="javascript:void(0)"
                  className={
                    (index === 3 && "detail_link mb_link") ||
                    (index === 4 && "detail_link mb_link") ||
                    "detail_link"
                  }
                >
                  {item.detailLink}
                </a>
              </p>
            ))}
            <img
              className="left_col_Img"
              src="images/condoDetail_Img.png"
              alt="left image"
            />
            <p className="left_col_para">
              This building houses a variety of well-crafted and luxurious
              features, including 330 residential units, ground-floor commercial
              space, retail kiosks, landscaping and sculptural hardscape
              elements, lyric sidewalks, limited curb cuts, and public art.
            </p>
            <p className="left_col_para">
              The immediate draw for the building is the front row location
              featuring unobstructed Diamond Head and ocean views. Most of the
              buildings in Ward Village will have stunning ocean views but
              it&apos;s the Diamond Head views that will be a rare sight in most
              buildings. The buildings location looking over Kewalo Hardbor,
              beyond Ala Moana Beach Park and Magic Island and ultimately to
              Diamond Head is why the building has garnered so much initial
              interest. The buildings and the grounds will be stunning as well
              with courtyards and pavilions providing intimate gathering spaces
              for residents, offering a unique private backyard amenity for
              residents.
            </p>
            <img
              className="left_col_Img"
              src="images/kalaeDetail_Img.png"
              alt="left image"
            />
            <p className="left_col_para">
              The building’s material treatments hearken back to the antique
              white plaster walls, golden wood details, and rich bronze
              metalwork of its predecessors, modernized into a refined, regional
              palette. The liner of the parking garage breaks down the scale of
              the podium by wrapping two levels in aesthetically pleasing
              metallic louvered screens with vertical and horizontal elements,
              utilizing materiality and patterning that references the motifs
              used throughout all elements of Kalae.
            </p>
            <p className="left_col_para">
              The Kalae tower facade uses a grid of frames to give it both scale
              and a proportion appropriate to its urban location. The tower’s
              prominence near the ocean allows ample, unobstructed views of
              Diamond Head and makai. Its massing and central siting allow for
              the expansive pools and outdoor fitness facilities of the
              surrounding amenity level. The richly layered materiality
              reinforces these relationships within the residence, while
              distinguishing it from its neighbors.
            </p>
            <img
              className="left_col_Img"
              src="images/Kalae_Harbor_View.png"
              alt="left image"
            />
            <img
              className="left_col_Img"
              src="images/Kalae_Lobby_Entrance.png"
              alt="left image"
            />
            <h2 className="left_col_subheading">The Amenities</h2>
            <p className="left_col_para">
              The amenities at Kalae will be some of the best in Ward Village.
              With every project the masterplan developer completes, they learn
              and curate future projects based on the amenities that are most
              used and loved by residents. What makes Kalae so unique are
              it&apos;s ground floor pavilions that were a popular draw at
              Howard Hughes&apos; most recent front row project, Victoria Place.
              In that project, they created just one ground floor pavilion, at
              Kalae there will be 4, which will be a perfect place for small or
              large gatherings with friends and family.
            </p>
          </div>
          <div className="col-md-4 right_col">
            <div className="right_box">
              <p className="right_col_para">Like or Share</p>
              <div className="">
                <img
                  className="linked_logo link_logo_One"
                  src="images/facebook.png"
                  alt="facebook logo"
                />
                <img
                  className="linked_logo"
                  src="images/twitter.png"
                  alt="twitter logo"
                />
              </div>
            </div>
            <div className="right_box link_effect">
              {wardRightVillage.map((item, index) => (
                <>
                  <p key={index} className="title">
                    {item.title}
                  </p>
                  <ul className="box_content">
                    {item.Downward.map((item, index) => (
                      <li key={index} className="box_list">
                        <a href="" className="box_list_link">
                          {item.wardList}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
            <div className="right_box link_effect">
              {wardRightVillage2.map((item, index) => (
                <>
                  <p key={index} className="title">
                    {item.title}
                  </p>
                  <ul className="box_content">
                    {item.Downward.map((item, index) => (
                      <li key={index} className="box_list">
                        <a href="" className="box_list_link">
                          {item.wardList}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
            <div className="right_box link_effect">
              {wardRightVillage3.map((item, index) => (
                <>
                  <p key={index} className="title">
                    {item.title}
                  </p>
                  <ul className="box_content">
                    {item.Downward.map((item, index) => (
                      <li key={index} className="box_list">
                        <a href="" className="box_list_link">
                          {item.wardList}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
            <div className="right_box link_effect">
              {wardRightVillage3.map((item, index) => (
                <>
                  <p key={index} className="title">
                    {item.title}
                  </p>
                  <ul className="box_content">
                    {item.Downward.map((item, index) => (
                      <li key={index} className="box_list">
                        <a href="" className="box_list_link">
                          {item.wardList}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
            <div className="right_box link_effect">
              {checkMark.map((item, index) => (
                <>
                  <p key={index} className="title check_title">
                    {item.title}
                  </p>
                  <div className="check_content">
                    {item.checkward.map((item, index) => (
                      <div key={index} className="checkbx_flx">
                        <img
                          src={item.checkImg}
                          className="checkImg"
                          alt="check logo"
                        />
                        <p className="check_list">{item.checkList}</p>
                      </div>
                    ))}
                    <div className="check_btn_bx">
                      <button className="check_btn">sign up now</button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
