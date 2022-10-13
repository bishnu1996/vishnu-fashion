//import React, { useContext } from "react";
//import { AppContext } from "../context/productContext";
import HeroSection from "../HeroSection";
import { useProductContext } from "../context/productContext";

const About = () => {
  //const { myName } = useContext(AppContext);
  const { myName } = useProductContext();
  const data = {
    name: "Vishnu Ecommerce",
  };
  return (
    <div>
      {myName}
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
