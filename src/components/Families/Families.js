import React from 'react' 
import image2 from './images/image2.png';
import { Box, Typography } from '@mui/material';
function Families() {
    return (
        <Box sx={{padding:{xs:"20px", lg:"50px 60px 40px 60px"},}}>
            <Box sx={{display:"flex",flexWrap:"wrap", alignItems:"center", width:"100%", gap:"50px"}}>
                <Box sx={{width:'45%'}}>
                    <Typography variant='p' fontWeight="bold" color="primary">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
                    <Typography variant='h4' fontWeight="bold" color="dark" sx={{padding:"20px 0px 20px 0px"}}>Our Families</Typography>
                    <Typography variant='p' lineHeight="33px" color="#888">
                        We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                    </Typography>
                </Box>
                <Box sx={{width:'45%'}}><img src={image2} alt="Our Families" style={{width:"65%"}} /></Box>                
            </Box>
        </Box>
        
    )
}

export default Families;