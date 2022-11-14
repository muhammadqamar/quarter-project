/* eslint-disable @next/next/no-img-element */
import React from "react";

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
        wardList: "The Park on Keeaum",
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
        wardList: "Kapiolani Reside",
      },
    ],
  },
];
const wardRightVillage3 = [
  {
    title: "New Honolulu Condos",
    Downward: [
      {
        wardList: "The Park on Keeaum",
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
        wardList: "Kahuina Condo in",
      },
      {
        wardList: "The Collection H",
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
    <div className="col-md-4 right_col">
      <div className="right_box">
        <p className="right_col_para">Like or Share</p>
        <div className="">
          <img
            className="linked_logo link_logo_One"
            src="../images/facebook.png"
            alt="facebook logo"
          />
          <img
            className="linked_logo"
            src="../images/twitter.png"
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
      <div className="right_box link_effect">
        <p className="title">Mortgage Calculator</p>
        <div className="check_btn_bx">
          <button className="check_btn">calculate your mortage!</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
