import React from "react";
import "./SubHead.css";

const SubHead = ({ imageSrc, content, content2 }) => {
  return (
    <div className="sub-head">
      <div
        className="simage"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>

      <div>
        <div className="text-wrapper">{content}</div>
        <div className="text-wrapper-2">{content2}</div>
      </div>
    </div>
  );
};
export default SubHead;
