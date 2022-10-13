import React from "react";
import "./style.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <div className="services-container">
      <div className="service1 box">
        <TbTruckDelivery />
        <p>Super fast and free delivery</p>
      </div>
      <div className="service2">
        <div className="service1-one">
          <MdOutlineSecurity />
          <p>Non-Contact shipping</p>
        </div>
        <div className="service1-two">
          <GiReceiveMoney />
          <p>Money Back Guaranteed</p>
        </div>
      </div>
      <div className="service3 box">
        <RiSecurePaymentLine />
        <p>Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Services;
