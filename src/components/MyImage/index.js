import React, { useState } from "react";
import './style.css';
const MyImage = ({ imgs }) => {
console.log(imgs);
const [mainImage,setMainImage] = useState(imgs?imgs[0]:null);

  return (
    <div className="myImage-container">
      <div className="four-imgs">
        {imgs?(imgs.map((currElem,index) =>{
      return(
        <div className="box-pro">
            <img src={currElem.url} alt={currElem.filename}  key={index} className="box-image-product" onClick={()=>setMainImage(currElem)} />            
          </div>
      )})):null}
        
      </div>
      <div className="single-imgsss">
        <img src={imgs ? mainImage.url : null} alt={imgs ? mainImage.url : null} className="box-image-product"/>
      </div>
    </div>
  )
    // <div className="myImage-container">
    // <div className="four-imgs">
    //   {imgs?(imgs.map((currElem,index) =>{
    // return(
    //   <div className="box-pro">
    //       <img src={currElem.url} alt={currElem.filename}  key={index} className="box-image-product" />            
    //     </div>
    // )})):""}
  
  //   </div>
  //   <div className="single-imgsss">
  //     <img src={imgs ? imgs[0].url : ""} alt={imgs ? imgs[0].url : ""} className="box-image-product"/>
  //   </div>
  // </div>
  //);
};

export default MyImage;
