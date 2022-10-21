import React from "react";
import './style.css';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarRating = ({ stars, reviews }) => {
  let starPring = Array.from({ length: 5 }, (currElem, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill className="starPring" />
        ) : stars >= numbers ? (
          <BsStarHalf className="starPring" />
        ) : (
          <BsStar className="starPring" />
        )}
      </span>
    );
  });
  return <div>
   <p>{starPring} &ensp;({reviews}<span> customer reviews</span>)</p> 
  </div>;
};

export default StarRating;
