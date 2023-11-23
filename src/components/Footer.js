import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="group">
        <div className="carditek-medicle">
          Carditek Medicle Device
          <br />
          Pvt Ltd.
        </div>
      </div>
      <div className="div">
        <div className="text-wrapper">Important Links</div>
        <div className="group-2">
          <div className="text-wrapper-2">Registration</div>
          <div className="text-wrapper-3">ECG Report</div>
          <div className="text-wrapper-4">Products</div>
          <div className="text-wrapper-5">About Us</div>
        </div>
      </div>
      <div className="group-3">
        <div className="text-wrapper">Contact Us</div>
        <div className="group-4">
          <div className="text-wrapper-2">Call: (237) 681-812-255</div>
          <div className="text-wrapper-3">Email: fildineesoe@gmail.com</div>
          <div className="text-wrapper-4">Address: 0123 Some place</div>
          <div className="text-wrapper-5">Some country</div>
        </div>
      </div>
      <div className="group-5">
        <div className="text-wrapper">Newsletter</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="vector.svg" />
            <div className="text-wrapper-6">Enter your email address</div>
          </div>
        </div>
      </div>
      <img className="img" alt="Vector" src="vector-1.svg" />
      <img className="vector-2" alt="Vector" src="image.svg" />
      <img className="vector-3" alt="Vector" src="vector-2.svg" />
      <img className="vector-4" alt="Vector" src="vector-3.svg" />
      <p className="p">
        © 2023 Carditek Medicle Device Pvt ltd. All Rights Reserved--
      </p>
      <img className="rectangle" alt="Rectangle" src="rectangle-85.png" />
    </div>
  );
};
export default Footer;
