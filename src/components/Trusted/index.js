import React from "react";
import "./style.css";
import bhim from "../../assets/images/image/bhim.png";
import gokwik from "../../assets/images/image/gokwik.png";
import googlepay from "../../assets/images/image/googlepay.png";
import mamaearth from "../../assets/images/image/mamaearth.png";
import phonepe from "../../assets/images/image/phonepe.png";
const Trusted = () => {
  return (
    <div className="trusted-container">
      <h3>Trusted by 1000+ companies</h3>
      <div className="brand-section-slider">
        <div className="slide">
          <img src={bhim} alt="bhim" className="slider-img bhim" />
          <span>bhim</span>
        </div>
        <div className="slide">
          <img src={gokwik} alt="gokwik" className="slider-img gokwik" />
          <span>gokwik</span>
        </div>
        <div className="slide">
          <img src={googlepay} alt="googlepay" className="slider-img bhim" />
          <span>googlepay</span>
        </div>
        <div className="slide">
          <img
            src={mamaearth}
            alt="mamaearth"
            className="slider-img mamaearth"
          />
          <span>mamaearth</span>
        </div>
        <div className="slide">
          <img src={phonepe} alt="phonepe" className="slider-img bhim" />
          <span>phonepe</span>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
