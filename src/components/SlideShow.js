import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import Helper from '../helper';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SlideShow = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (props.productImages.length > 0) {
      console.log({ prrrr: props.productImages })
      setImages(props.productImages)
    }
  });

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
        {
          props.productImages.map((e, index) => (
            <div className="item" key={e.id}><img src={Helper.appImage(e)} alt="" /></div>
          ))
        }
      </OwlCarousel>
    </div>
  )
}

export default SlideShow
