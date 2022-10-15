import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import PageNavigation from "../PageNavigation";
import MyImage from "../MyImage";
import FormatPrice from '../Helpers/FormatPrice';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri"
import './style.css';
//const URL = "https://api.pujakaitem.com/api/products?id=thapaserialnol"


const URL = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
  const {id} = useParams() 
  const {id:vishnu,name,company,price,description,category,stock,stars,reviews,image} = singleProduct;
  console.log(name);
 console.log("images",image);
  useEffect(()=>{
    getSingleProduct(`${URL}?id=${id}`);
  },[]);

  if(isSingleLoading){
    return <div className="page_loading">Loading....</div>
  }
  return(
    <>
    <PageNavigation  title = {name}/>
    <div className="single-container">
      <div className="single-image">
          {/* <MyImage imgs = {image}/> */}
          {/* <img src={image[0].url} alt="abckwdfwfw" srcset="" /> */}
         
      </div>
      <div className="single-details">
        <h3>{name}</h3>
        <p>{stars}</p>
        <p>{reviews}</p>
        <p className="product-price-data">
          MRP:<del>
            <FormatPrice price ={price + 250000} />
          </del>
        </p>
        <p className="product-price-real">
          Deal of day:  <FormatPrice price ={price + 250000} />
        </p>
        <p>{description}</p>
        <div className="product-details-warranty">
          <div className="product-warranty-details">
          <TbTruckDelivery />
          </div>
          <div className="product-warranty-details">
          <MdOutlineSecurity />
          </div>
          <div className="product-warranty-details">
          <GiReceiveMoney />
          </div>
          <div className="product-warranty-details">
          <RiSecurePaymentLine />
          </div>
        </div>
        <p>Available : <span> {stock > 0 ?"In Stock" : "Not Available"} </span> </p>
        <p className="id">id: {id}</p>
        <p>brand: <span>{company}</span></p>
      </div> 
    </div>
    </> 
  );
};

export default SingleProduct;
