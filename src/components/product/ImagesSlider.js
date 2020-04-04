import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ImagesSlider = (props) => {
  return (
    <React.Fragment>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        dots={false}
        items={5}
      >
        {props.items}
      </OwlCarousel>

    </React.Fragment>
  )
}

export default ImagesSlider
