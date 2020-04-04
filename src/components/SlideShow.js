import React from 'react'
import ImageSlider from '../components/product/ImagesSlider';
import sampleImages from "../test/sampleImages.json";

const displayImages = [];

const images = sampleImages.images;

for (const [index, value] of images.entries()) {
  displayImages.push(
    <div className="item"><img src={value.url} key={index + 'a'} /></div>
  )
}

const SlideShow = () => {
  return (
    <div className="slide-show">
      <ImageSlider items={displayImages} />
    </div>
  )
}

export default SlideShow
