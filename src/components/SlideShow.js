import React, { useEffect } from 'react'
import ImageSlider from '../components/product/ImagesSlider';
import Helper from '../helper';
import sampleImages from "../test/sampleImages.json";

const displayImages = [];

const images = sampleImages.images;



// for (const [index, value] of images.entries()) {
//   displayImages.push(
//     <div className="item"><img src={value.url} key={index + 'a'} alt="" /></div>
//   )
// }

const SlideShow = (props) => {
  if (props.productImages) {
    console.log({ productImages_slideshow: props.productImages })
    for (const [index, value] of props.productImages.entries()) {
      displayImages.push(
        <div className="item"><img src={Helper.appImage(value)} key={index + 'a'} alt="" /></div>
      )
    }
  }

  return (
    <div className="slide-show">
      <ImageSlider items={displayImages} />
    </div>
  )
}

export default SlideShow
