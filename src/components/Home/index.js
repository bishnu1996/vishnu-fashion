import React from "react";
import Contact from "../Contact";
import FeatureProduct from "../FeatureProduct";
import HeroSection from "../HeroSection";
import Services from "../Services";
import Trusted from "../Trusted";

const Home = () => {
  const data = {
    name: "Vishnu Fashion",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
      <Contact />
    </>
  );
};

export default Home;
