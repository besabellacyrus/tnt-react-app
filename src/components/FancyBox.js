import React, { useEffect, useState } from 'react';
import Helper from '../helper';
// import ReactFancyBox from 'react-fancybox';
import { LightgalleryItem } from "react-lightgallery";
import '../vendors/fancybox.css';

import 'react-fancybox/lib/fancybox.css'

const FancyBox = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (props.images.length > 0) {
      setImages(props.images)
    }
  });
  return (
    <div>
      {/* {
        images.map((e, indx) => (
          <ReactFancyBox
            key={indx}
            thumbnail={Helper.appImage(e)}
            image={Helper.appImage(e)} />
        ))
      } */}
      {
        images.map((e, indx) => (
          <LightgalleryItem group="any" src={Helper.appImage(e)}>
            <a>
              <img src={Helper.appImage(e)} />
            </a>
          </LightgalleryItem>
        ))
      }

    </div>
  )
}

export default FancyBox
