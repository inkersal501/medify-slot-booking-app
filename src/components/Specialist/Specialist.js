import React from 'react'; 
import DoctorCard from './DoctorCard';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import image1 from "./images/doctor11.png";
import image2 from "./images/doctor12.png";
import image3 from "./images/doctor13.png";
import './Specialist.css';

function Specialist() {

    const doctors = [
        {name: "Dr. Ahmad Khan", specialty: "Neurologist", img: image1 },
        {name: "Dr. Heena Sachdeva", specialty: "Orthopadics", img: image2 },
        {name: "Dr. Ankur Sharma", specialty: "Medicine", img: image3 },
    ]
  return (
    <Box sx={{padding:{xs:"20px", lg:"50px 60px 40px 60px"}, background:"#fff"}}>
      <Typography variant='h4' textAlign="center" fontWeight="bold" color='dark' paddingTop="40px" paddingBottom="40px">Our Medical Specialist</Typography>

        <Swiper             
            spaceBetween={5}
            slidesPerView={4}
            slidesPerGroup={4}
            loop={true}
            modules={[Pagination, Autoplay]}  
            pagination={{
              clickable: true,
              dynamicBullets: false,
              el: '.custom-pagination2', // Use a custom pagination element
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            style={{ width: '100%', height: 'auto' }}
        >
                {doctors.map((doctor, index)=>(
                    <SwiperSlide key={index}>
                        <DoctorCard img={doctor.img} name={doctor.name}/>
                    </SwiperSlide>
                ))}
                {doctors.map((doctor, index)=>(
                    <SwiperSlide key={index}>
                        <DoctorCard img={doctor.img} name={doctor.name}/>
                    </SwiperSlide>
                ))}
                {doctors.map((doctor, index)=>(
                    <SwiperSlide key={index}>
                        <DoctorCard img={doctor.img} name={doctor.name}/>
                    </SwiperSlide>
                ))}
                {doctors.map((doctor, index)=>(
                    <SwiperSlide key={index}>
                        <DoctorCard img={doctor.img} name={doctor.name}/>
                    </SwiperSlide>
                ))}
                {doctors.map((doctor, index)=>(
                    <SwiperSlide key={index}>
                        <DoctorCard img={doctor.img} name={doctor.name}/>
                    </SwiperSlide>
                ))}           
        
        </Swiper>
        <div className="custom-pagination2" style={{ textAlign: 'center', paddingTop: '40px' }}></div>
       
    </Box>
  )
}

export default Specialist;