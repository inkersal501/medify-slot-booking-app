import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import logo from "../../assets/images/logo.png";
import fbImg from "./images/fb.png";
import twitterImg from "./images/twitter.png";
import youtubeImg from "./images/youtube.png";
import pintrestImg from "./images/pintrest.png";
import "./Footer.css";
import LinksList from './LinksList';
import { Link } from "react-router-dom";
function Footer() {

    const arr1 = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
    const arr2 = ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"];
    const arr3 = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];

  return (
    <Box
      sx={{ padding: { xs: "25px", lg: "80px 100px 40px 100px", } }} 
      className='Footer'
    >
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            useFlexGap
            sx={{ flexWrap: 'wrap' }}
            justifyContent="space-between"
            >
                <Box sx={{display:"flex",flexDirection:"column", justifyContent:"space-between", padding:"20px 0px"}}>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="medify-logo" />
                    </Link>
                    <Box sx={{display:'flex', gap:"15px",height:"30px"}}>
                        <Box sx={{height:"30px"}}><Box className='socialIconsBox'><img src={fbImg} alt="Facebook"/></Box></Box>
                        <Box sx={{height:"30px"}}><Box className='socialIconsBox'><img src={twitterImg} alt="Twitter"/></Box></Box>
                        <Box sx={{height:"30px"}}><Box className='socialIconsBox'><img src={youtubeImg} alt="Youtube"/></Box></Box>
                        <Box sx={{height:"30px"}}><Box className='socialIconsBox'><img src={pintrestImg} alt="Pintrest"/></Box></Box>
                    </Box>
                </Box>
                <Box>
                    <LinksList data={arr1} />
                </Box>
                <Box>
                    <LinksList data={arr2} />
                </Box>
                <Box>
                    <LinksList data={arr3} />
                </Box>
              
        </Stack>
        <Box sx={{paddingTop:"50px"}}>
            <Box sx={{borderTop:"1px solid #FFFFFF1A",padding:"40px 0px 0px 0px"}}>
                <Typography variant='p' color="light" sx={{}}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
            </Box>
        </Box>

    </Box>
  )
}

export default Footer;