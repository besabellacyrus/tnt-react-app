import React, { useEffect, useState } from 'react'
import Helper from '../helper';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SlideShow = (props) => {
  // let displayImages = [];
  const [displayImages, setDisplayImages] = useState([]);
  useEffect(() => {
    console.log({ productImages_slideshow: props.productImages })
    for (const [index, value] of props.productImages.entries()) {
      // displayImages.push(
      //   <div className="item"><img src={Helper.appImage(value)} key={index} alt="" /></div>
      // )
      setDisplayImages(prev => [...prev, <div className="item"><img src={Helper.appImage(value)} key={index} alt="" /></div>]);
    }
  }, [displayImages]);

  return (
    <div className="slide-show">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        dots={false}
        items={5}
      >
        {displayImages}
      </OwlCarousel>
    </div>
  )
}

export default SlideShow
