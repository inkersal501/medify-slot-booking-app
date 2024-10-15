import { Box, Typography } from '@mui/material';
import React from 'react'; 
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';


function Faq() {
  return (
    <Box sx={{padding:{xs:"20px", lg:"50px 60px 40px 60px"}, background:"#fff", textAlign:"center"}}>
        <Typography variant='p' textAlign="center" fontWeight="bold" color='primary'>Get Your Answer</Typography>
        <Typography variant='h4' textAlign="center" fontWeight="bold" color='dark' paddingTop="10px" paddingBottom="60px">Frequently Asked Questions</Typography>
        <Box sx={{display:"flex", flexWrap:"wrap", gap:"100px", justifyContent:"center", alignItems:"center", position:"relative"}}>
            <img src={image1} alt="News" style={{width:"375px",boxShadow:"1px 1px 10px #ccc", borderRadius:"11px"}}/>
            <img src={image2} alt="News" style={{width:"375px"}}/> 
            <img src={image3} alt="" style={{width:"75px", position:"absolute", top:"35%", left:"43.5%"}} />
            <img src={image4} alt="" style={{width:"200px", position:"absolute", top:"55%", left:"10%",boxShadow:"1px 1px 10px #ccc", borderRadius:"11px"}} />
        </Box>
    </Box>
  )
}

export default Faq;