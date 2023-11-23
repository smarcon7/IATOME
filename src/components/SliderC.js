import React, { useState } from "react";
import Slider from "react-slider";
import "./SliderC.css";
import { useEffect } from "react";

const images = [
  {
    id: 1,
    src: "phy.png",
    alt: "Image 1",
    caption:
      "We Believe in a world Where Mankind is Digitized, Connected and Screened for early Heart Disease Detection and Prevention",
  },
  {
    id: 2,
    src: "picture5.png",
    alt: "Image 2",
    caption: "This is Image 2",
  },
  {
    id: 3,
    src: "picture10.png",
    alt: "Image 3",
    caption: "This is Image 3",
  },
  {
    id: 4,
    src: "image4.jpg",
    alt: "Image 4",
    caption: "This is Image 4",
  },
];

const SliderC = () => {
  const [value, setValue] = useState(0); // Initial value

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    // Automatically slide every 30 seconds
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue < 3 ? prevValue + 1 : 0));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="image-container">
        <img
          src={images[value].src}
          alt={images[value].alt}
          className="slider-image"
        />
        <div className="image-caption">
          <p>{images[value].caption}</p>
        </div>
      </div>
      <Slider
        min={0}
        max={3}
        step={1}
        value={value}
        onChange={handleChange}
        className="image-slider"
      />
    </div>
  );
};

export default SliderC;
