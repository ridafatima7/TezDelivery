import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import background from "./Images/carosel.jpg";

const TDSlider = () => {
   //  const settings = {
   //      dots: true,
   //      infinite: true,
   //      speed: 500,
   //      slidesToShow: 1,
   //      slidesToScroll: 1,
   //      autoplay: true,
   //      autoplaySpeed: 1000,
   //    };
  return (
    <>
    {/* <Slider {...settings} className='Sdiv'>
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
        </Slider> */}
       <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide > <img style={{height:'20rem',width:'80rem',background:'cover'}}  src={background} alt='meal' /></SwiperSlide>
        <SwiperSlide> <img style={{height:'20rem',width:'80rem'}} src={background} alt='meal' /></SwiperSlide>
        <SwiperSlide> <img style={{height:'20rem',width:'80rem'}} src={background} alt='meal' /></SwiperSlide>
        <SwiperSlide><img style={{height:'20rem',width:'80rem'}} src={background} alt='meal' /></SwiperSlide>
        <SwiperSlide><img style={{height:'20rem',width:'80rem'}} src={background} alt='meal' /></SwiperSlide>
        <SwiperSlide><img style={{height:'20rem',width:'80rem'}} src={background} alt='meal' /></SwiperSlide>

        
       
      </Swiper>
    </>
  )
}

export default TDSlider
