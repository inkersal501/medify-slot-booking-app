import { Box, Typography } from '@mui/material';
import React from 'react'; 
import image from './images/image.png';
function Blog() {
  return (
    <Box sx={{padding:{xs:"20px", lg:"50px 60px 40px 60px"}, background:"#fff", textAlign:"center"}}>
        <Typography variant='p' textAlign="center" fontWeight="bold" color='primary'>Blog & News</Typography>
        <Typography variant='h4' textAlign="center" fontWeight="bold" color='dark' paddingTop="10px" paddingBottom="40px">Read Our Latest News</Typography>
        <Box sx={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"center", alignItems:"center"}}>
            <img src={image} alt="News" style={{width:"375px"}}/>
            <img src={image} alt="News" style={{width:"375px"}}/>
            <img src={image} alt="News" style={{width:"375px"}}/> 
        </Box>
    </Box>
  )
}

export default Blog;