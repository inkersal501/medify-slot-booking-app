import React from 'react';
import './OfferSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import { Box } from '@mui/material';
function OfferSlider({classname="offerSlider"}) {
  return (
    
    <Box sx={{padding:{xs:"20px", lg:"150px 60px 40px 60px"}, background:"#fff"}} className={classname}>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      slidesPerGroup={3}
      loop={true}
      modules={[Pagination, Autoplay]}  
      pagination={{
        clickable: true,
        dynamicBullets: false,
        el: '.custom-pagination', // Use a custom pagination element
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      style={{ width: '100%', height: 'auto' }}
    >
      <SwiperSlide>
        <img src={image1} alt="Offer 1" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Offer 2" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} alt="Offer 1" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Offer 2" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} alt="Offer 1" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Offer 2" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} alt="Offer 1" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Offer 2" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} alt="Offer 1" style={{ width: '100%', borderRadius: '8px' }} />
      </SwiperSlide>
    </Swiper>
    <div className="custom-pagination" style={{ textAlign: 'center', marginTop: '20px' }}></div>
    </Box>
  )
}

export default OfferSlider;