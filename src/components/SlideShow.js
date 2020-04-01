import React from 'react'

const displayImages = [];

const images = [
  {
    title: '',
    url: '/img/chair4.jpg'
  },
  {
    title: '',
    url: '/img/chair4.jpg'
  },
  {
    title: '',
    url: '/img/chair4.jpg'
  },
  {
    title: '',
    url: '/img/chair4.jpg'
  },
  {
    title: '',
    url: '/img/chair4.jpg'
  },
  {
    title: '',
    url: '/img/chair4.jpg'
  }
];

for (const [index, value] of images.entries()) {
  displayImages.push(
    <img src={value.url} key={index + 'a'} />
  )
}

const SlideShow = () => {
  return (
    <div className="slide-show">
      {displayImages}
    </div>
  )
}

export default SlideShow
