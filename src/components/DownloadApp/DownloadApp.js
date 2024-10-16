import { Box, Typography, FormControl, Input, InputAdornment, Button } from '@mui/material';
import React from 'react';
import mobileImg from './images/mobile.jpg';
import arrowImg from './images/arrow.png';
import gplayImg from './images/g-play.png';
import appStoreImg from './images/app-store.png';

function DownloadApp() {
  return (
    <Box sx={{padding:{xs:"20px", lg:"100px 60px 40px 60px"},}}>
        <Box sx={{display:"flex", flexDirection:{xs:"column", lg:"row"},flexWrap:"wrap", alignItems:"center", width:"100%", gap:"0px", justifyContent:"center"}}>
            <Box sx={{width:{xs:'99%',lg:'40%'}, marginRight:{lg:"20px"}}}><img src={mobileImg} alt="Patient Care" style={{width:"100%"}}/></Box>
            <Box sx={{width:{xs:'20%',lg:'5%'}}}><img src={arrowImg} alt="Patient Care" style={{width:"50%"}} /></Box>
            <Box sx={{width:{xs:'99%',lg:'40%'}}}>
                <Typography variant='h4' color="dark" fontWeight="bold">Download the</Typography>
                <Typography variant='h4' color="primary" fontWeight="bold" sx={{display:"flex", margin:"10px 0px 20px 0px"}}> Medify <span style={{color:"#102851"}}>App</span></Typography>
                <Typography variant='p' color="#333" fontWeight="bold">Get the link to download the app</Typography>
                <Box sx={{display:"flex",gap:"20px", margin:"20px 0px"}}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <Input
                            placeholder="Enter Phone Number"
                            id="standard-adornment-amount"
                            sx={{color:"#111"}}
                            startAdornment={<InputAdornment position="start">+91</InputAdornment>}
                            inputProps={{ style: { border: "none", backgroundColor: "white", padding: "0.7rem" } }} // Custom styles for the input
                        />
                        </FormControl>
                    <Box>
                        <Button variant='contained' sx={{padding:"10px 20px"}}>Send SMS</Button>
                    </Box>
                </Box>
                <Box sx={{display:"flex" , gap:"20px", paddingTop:"20px",width:{xs:"100%",lg:"100%"}}}>
                    <Box sx={{width:"50%"}}>
                        <Button variant='contained' color="black" sx={{padding:"10px 25px", fontSize:"1.1rem"}}> <img src={gplayImg} alt="" style={{width:"20%", margin:"0px 10px 0px 0px"}}/> Google Play</Button>
                    </Box>
                    <Box sx={{width:"50%"}}>
                        <Button variant='contained' color="black" sx={{padding:"10px 25px", fontSize:"1.1rem"}}> <img src={appStoreImg} alt="" style={{width:"20%", margin:"0px 10px 0px 0px"}}/> App Store</Button>
                    </Box>
                </Box>
            </Box>                
        </Box>
    </Box>
  )
}

export default DownloadApp;