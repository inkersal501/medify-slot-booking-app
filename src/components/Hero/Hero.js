import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import "./Hero.css";
import heroImg from './heroImg.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
 
        <Box sx={{display:"flex", flexWrap:"wrap", alignItems: "center", padding: {xs:"10px", lg:"40px 80px"} }}>
            <Box sx={{width:{xs:"100%", lg:"50%"}}}>
                <Typography variant='h3' color="dark">Skip the travel! Find Online</Typography>
                <Box sx={{display:"flex", gap:"20px",margin:"15px 0px"}} >
                    <Typography variant='h3' fontWeight='bold'>Medical</Typography>
                    <Typography variant='h3' fontWeight='bold' color='primary'>Centers</Typography>
                </Box>
                <Typography variant='h5' color="#656a72" sx={{margin:"15px 0px"}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>
                <Box sx={{margin:"20px 0px"}} >
                    <Link to="/search"><Button variant='contained' sx={{padding:"8px 30px"}}>Find Centers</Button></Link>
                </Box>  
            </Box>
            <Box>
                <img src={heroImg} alt="Doctors" style={{width:"100%"}}/>
            </Box>
        </Box>
 
  )
}

export default Hero;