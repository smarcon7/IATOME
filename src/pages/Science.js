import React from "react";
import SubHead from "../components/SubHead";
import graph from "../ecg.gif";
import "./Science.css";
const Science = () => {
  return (
    <div>
      <SubHead
        imageSrc={graph}
        content=" The 
        Science"
        content2="Home / Science"
        className="space-between"
      />
    </div>
  );
};

export default Science;
