import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Calandar.css";
import { Box, Typography, Stack } from "@mui/material";

function DaySlots({availableSlots}) {

  const [daysSlots, setDaysSlots] = useState([]);
  const [totalSlots, setTotalSlots] = useState(0);
  const [activeDay, setActiveDay] = useState("");

  useEffect(() => {
    const generateDynamicDays = () => {
      const daysArr = [];
      const today = new Date();

      for (let i=0;i<7;i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        let day;
        if (i===0) {
            day = "Today";
        } else if (i===1) {
            day = "Tomorrow";
        } else {
            day = date.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          });
        }

        daysArr.push({
          day: day,
          date: date
        });
      }

      setDaysSlots(daysArr);
      setActiveDay(daysArr[0].day);
    };
    const calculateSlots = ()=>{
        const total = availableSlots.morning.length + availableSlots.afternoon.length + availableSlots.evening.length;
        setTotalSlots(total);
    };

    generateDynamicDays();
    calculateSlots();
    //eslint-disable-next-line
  },[]);

  const handleActive = (day) =>{
    setActiveDay(day);
  };

  return (
    <div>
      <Box sx={{ padding: "15px 0px" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
            {daysSlots.map((slot)=>(
                <SwiperSlide key={slot.day}>
                    <Stack
                        textAlign='center'
                        onClick={() => handleActive(slot.day)}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Typography variant="h6" fontSize="14px">{slot.day}</Typography>
                        <Typography variant="h6" fontSize="12px" color="rgba(2, 164, 1, 1)">{totalSlots + " Slots Available"}</Typography>
                        <Box
                            height='4px'
                            width="100%"
                            position='relative'
                            bottom='0'
                            bgcolor={(slot.day===activeDay) ? 'primary.main' : '#fff'}
                            left={0}
                            zIndex={999}
                            mt='5px'
                            mx='auto'
                        >
                        </Box>
                    </Stack>              
                </SwiperSlide>
            ))}
          
           
        </Swiper>
      </Box>
    </div>
  );
}

export default DaySlots;
