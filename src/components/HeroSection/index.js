import React from "react";
import "./style.css";
import familyShop from "../../assets/images/image/familyShop.jpg";
import { NavLink } from "react-router-dom";
function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <div className="herosection-container">
      <div className="hero-section-data">
        <p>Welcome to</p>
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          fuga totam laudantium consectetur itaque placeat ea fugiat ipsa
          debitis, quisquam incidunt, in natus iusto veniam atque adipisci
          numquam eaque repellendus.
        </p>
        <NavLink>
          <button className="btn btn-success">show now</button>
        </NavLink>
      </div>
      <div className="hero-section-image">
        <img
          src={familyShop}
          alt="familyshop-banner"
          className="hero-section-img"
        />
      </div>
    </div>
  );
}

export default HeroSection;
