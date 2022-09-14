import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickCarousel({ children, ...props }) {

  return (
    <Slider
        {...props}
    >
        {children}
    </Slider>
  )
}

export default SlickCarousel