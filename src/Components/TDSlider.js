import React from 'react'
import Slider from "react-slick";
import background from "./Images/carosel.jpg";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const TDSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <>
    <Slider {...settings} className='Sdiv'>
          <div >
            <img src={background} alt='meal' />
          </div>
          <div>
             <img src={background} alt='meal' />
          </div>
          <div>
             <img src={background} alt='meal' />
          </div>
          <div>
              <img src={background} alt='meal' />
          </div>
          <div>
             <img src={background} alt='meal' />
          </div>
          <div>
             <img src={background} alt='meal' />
          </div>
        </Slider>
    </>
  )
}

export default TDSlider
