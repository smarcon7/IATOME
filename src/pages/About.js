import React from "react";
import MedicalGrade from "../components/MedicalGrade";
import SubHead from "../components/SubHead";
import company from "../company.png";

const About = () => {
  return (
    <div>
      <div>
        <SubHead imageSrc={company} />
      </div>

      <MedicalGrade />
    </div>
  );
};

export default About;
