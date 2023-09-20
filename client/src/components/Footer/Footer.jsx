import React from "react";
import "./Footer.css";
import { FaGripfire } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexBetween f-container">
        {/* // ! left side */}
        <div className="flexColStart f-left">
          <Link to="/" className="linkTitle">
            <FaGripfire color="orange" size={25} />
            <h3 className="keipyTitle">
              <span>The</span>&nbsp;Keipy <span>Estate</span>
            </h3>
          </Link>

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* // ! right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span>123 Auckland CBD, Auckland, NZ</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
