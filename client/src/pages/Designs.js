import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Designer() {

  const GraphicDesignImages = [
    {
      key: 1,
      imgSrc:"/images/designs/final.png",
      alt:"pic",
    },
    {
      key: 2,
      imgSrc:"/images/designs/final.png",
      alt:"pic",
    },
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