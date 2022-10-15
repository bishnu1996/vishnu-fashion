import React from 'react'

const MyImage = ({imgs}) => {
  console.log(imgs);
  return (
    <div className='myImage-container'>
      <div className="four-imgs">
      {/* {imgs.map((currElem,index) =>{
      return(
        <div className="first-image">
            <img src={currElem.url} alt={currElem.filename}  key={index} className="box-img"/>            
          </div>
      )})} */}
      {/* <div className='box'>
      <img src={imgs[0].url} alt="" />
      </div>
      <div className='box'>
      <img src={imgs[1].url} alt="" />
      </div>
      <div className='box'>
      <img src={imgs[2].url} alt="" />
      </div>
      <div className='box'>
      <img src={imgs[3].url} alt="" />
      </div>
      </div>
      <div className="single-imgs">
        */}
      </div>
    </div>
  )
}

export default MyImage;
