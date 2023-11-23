import React from "react";

import "./Innovation.css";

const Innovation = () => {
  return (
    <div>
      <div className="box">
        <div className="group">
          <div className="div">
            <div className="text-wrapper-2">USP AND INNOVATION</div>
            <div className="second-heading">WELCOME TO CARDITEK</div>
          </div>
          <div className="overlap-group">
            <p className="our-form-factor">
              Our form factor - takes our device into the remotest place and
              universally without any technical training !
              <br />
              Making our device wearable , so large swathes of data are
              collected making a good registry for future AI and ML analytics 
              <br />
              Accuracy - more data , low noise floor , ability to capture
              microvolts - so more accurate diagnosis of heart attacks and chest
              pain triages 
              <br />
              Predictive cardiology with color spectrograms - predicting heart
              failure adds immensely to usefulness 
              <br />
              Converting every ward bed , every ambulance into a continuously
              monitored bed
            </p>
          </div>
        </div>
      </div>

      <img className="image-display" src="backdoctors.jpg" alt="backimage" />
    </div>
  );
};
export default Innovation;
