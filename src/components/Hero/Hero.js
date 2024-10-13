import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import "./Hero.css";
import heroImg from './heroImg.png';
function Hero() {
  return (
 
        <Box sx={{display:"flex", flexWrap:"wrap", alignItems: "center", padding: {xs:"25px", lg:"40px 80px"} }}>
            <Box sx={{width:{xs:"100%", lg:"50%"}}}>
                <Typography variant='h3' color="dark">Skip the travel! Find Online</Typography>
                <Box sx={{display:"flex", gap:"20px",margin:"15px 0px"}} >
                    <Typography variant='h2' fontWeight='bold'>Medical</Typography>
                    <Typography variant='h2' fontWeight='bold' color='primary'>Centers</Typography>
                </Box>
                <Typography variant='h5' color="#656a72" sx={{margin:"15px 0px"}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>
                <Box sx={{margin:"20px 0px"}} >
                    <Button variant='contained' sx={{padding:"8px 30px"}}>Find Centers</Button>
                </Box>  
            </Box>
            <Box>
                <img src={heroImg} alt="Doctors" />
            </Box>
        </Box>
 
  )
}

export default Hero;