import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Designer() {

  const GraphicDesignImages = [
    {
      key: 1,
      imgSrc:"/images/designs-img/Yeatman_GD_2.png",
      alt:"pic",
    },
    {
      key: 2,
      imgSrc:"/images/designs-img/MiPonderosaV2_Final.png",
      alt:"pic",
    },
    {
      key: 3,
      imgSrc:"/images/designs-img/Yeatman_GD_3.png",
      alt:"pic"
    },
    {
      key: 4,
      imgSrc:"/images/designs-img/Yeatman_GD_4.png",
      alt:"pic"
    },
    {
      key: 5,
      imgSrc:"/images/designs-img/Yeatman_GD_11.png",
      alt:"pic"
    },
    {
      key: 6,
      imgSrc:"/images/designs-img/Yeatman_GD_5.png",
      alt:"pic"
    },
    {
      key: 7,
      imgSrc:"/images/designs-img/Yeatman_GD_7.png",
      alt:"pic"
    },
    {
      key: 8,
      imgSrc:"/images/designs-img/Yeatman_GD_10.png",
      alt:"pic"
    },
    {
      key: 9,
      imgSrc:"/images/designs-img/Yeatman_GD_9.png",
      alt:"pic"
    },
    {
      key: 10,
      imgSrc:"/images/designs-img/Yeatman_GD_6.png",
      alt:"pic"
    },
     {
      key: 11,
      imgSrc:"/images/designs-img/Yeatman_GD_20.png",
      alt:"pic"
    },
     {
      key: 12,
      imgSrc:"/images/designs-img/phoenix-printing.png",
      alt:"pic"
    },
     {
      key: 13,
      imgSrc:"/images/designs-img/Yeatman_GD_17.png",
      alt:"pic"
    },
     {
      key: 14,
      imgSrc:"/images/designs-img/Yeatman_GD_21.png",
      alt:"pic"
    },
     {
      key: 15,
      imgSrc:"/images/designs-img/Yeatman_GD_19.png",
      alt:"pic"
    },
    {
      key: 16,
      imgSrc:"/images/designs-img/Yeatman_GD_16.png",
      alt:"pic"
    }
  ]
  return (
    <div>
      <div className="designer-text-container">
        <h2 className="designer-text-header">Designer</h2>

        <p className="designer-text-paragraph">
          
        </p>
      </div>

      <div className="dividers-line"></div>

        <div className="gd-gallery">
        {GraphicDesignImages.map(gdGallery => (
        <LazyLoadImage
          className="gd-gallery-img"
          key={gdGallery.key}
          src={process.env.PUBLIC_URL + gdGallery.imgSrc}
          alt={gdGallery.alt}
          effect="blur"
        /> 
        ))}
        </div>

    </div>
  
  );
}

export default Designer;