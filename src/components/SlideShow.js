import React, { useEffect, useState } from 'react';
import { LightgalleryItem } from "react-lightgallery";
import Slider from "react-slick";
import Helper from '../helper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/slideShow.scss";


const SlideShow = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (props.productImages.length > 0) {
      console.log({ prrrr: props.productImages })
      setImages(props.productImages)
    }
  });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className="slick-wrapper">
      <Slider {...settings}>
        {
          images.map((e, indx) => (
            <LightgalleryItem group="any" src={Helper.appImage(e)}>
              <a>
                <img src={Helper.appImage(e)} />
              </a>
            </LightgalleryItem>
          ))
        }
      </Slider>
    </div>
  )
}

export default SlideShow
