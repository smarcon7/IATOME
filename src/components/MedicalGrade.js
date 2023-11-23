import React from "react";
import "./MedicalGrade.css";
import Footer from "./Footer";

const MedicalGrade = () => {
  return (
    <div>
      <div className="group">
        <img className="humanbody" alt="Rectangle" src="humanbody.png" />

        <div className="label items">
          <p className="medical-grade-ecgs">
            Medical Grade ECGs
            <br />
            Developed by a Cardiologist <br />
            for cardiologists
          </p>
        </div>

        <div className="welcome-to-carditek">WELCOME TO CARDITEK ---</div>

        <p className="our-company">
          Our company is very unusual, in being founded by a cardiologist with
          engineering support and not vice versa.
          <br />
          <br />
          The Domain Knowledge has been so effectively used that the device
          overcome all the common challenges - from being green to eliminating
          learning curves to being in cutting edge technology!
          <br />
          <br />
          The Power of digital ECGs have unleashed the superb analytics to get
          high frequency high resolution tracings, color spectrograms and
          dyssynchrony ECGs.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MedicalGrade;
