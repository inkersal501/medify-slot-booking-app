import { Box, Divider, Stack, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import likeImg from "../../assets/images/likes.png";
import hospitalImg from "../../assets/images/hospital.png";
import Calandar from '../Calandar/Calandar';

function Hospital({data, availableSlots, booking = false,}) {
 
const [showCalander, setShowCalander] = useState(false);
const handleshowCalander = ()=>{
  (showCalander)?setShowCalander(false):setShowCalander(true);
};
  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}
        mb={2}
      >
        <Box
          component="img"
          src={hospitalImg}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />
        <Box flex={1}>
          <Typography
            variant="h6"
            color="primary" 
            mb={2}
            textTransform="capitalize"
            lineHeight={1}
          >
            {data["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography 
            component="h5" 
            fontWeight="bold"
            textTransform="capitalize"
            color="#414146" 
            mb={0}
          >
            {`${data["City"].toLowerCase()}, ${data["State"]}`}
          </Typography>
          <Typography component="h5"  mb={1}>
            {data["Hospital Type"]}
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              variant='p'
              fontWeight="bold"
              textTransform="uppercase"
              color="rgba(2, 164, 1, 1)"
            >
              Free
            </Typography>
            <Typography variant='p'
              sx={{ textDecoration: "line-through", color: "rgba(120, 120, 135, 1)" }}
            >
              ₹500
            </Typography>
            <Typography variant='p' sx={{ color: "rgba(65, 65, 70, 1)" }}>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="rgba(2, 164, 1, 1)"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component={"img"}
              src={likeImg}
              width="15px"
              height="15px"
            />
            <Typography
              fontWeight="bold"
              variant='p'
              color="#fff"
              sx={{ opacity: 0.7 }}
            >
              {data["Hospital overall rating"] === "Not Available"
                ? 0
                : data["Hospital overall rating"]}
            </Typography>                
          </Stack>
          </Box>
          <Stack
            justifyContent={booking ? "flex-start" : "flex-end"}
            minWidth="23%"
          > 
            <Typography
              textAlign="center"
              color="rgba(2, 164, 1, 1)"
              variant='p'
              mb={1}
            >
              Available Today
            </Typography>
            <Button
              variant="contained"  
              onClick={()=>handleshowCalander()}                          
            >
              Book FREE Center Visit
            </Button>             
          </Stack> 
        </Stack>

        {showCalander && <Calandar availableSlots={availableSlots}/> }

    </Box>
  )
}

export default Hospital;