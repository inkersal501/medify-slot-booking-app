import React from 'react'
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import { Box } from '@mui/material';
function PatientCare() {
    return (
        <Box sx={{padding:{xs:"20px", lg:"100px 60px 40px 60px"},}}>
            <Box sx={{display:"flex",flexWrap:"wrap", alignItems:"center", width:"100%", gap:"50px"}}>
                <Box sx={{width:'45%'}}><img src={image1} alt="Patient Care" style={{width:"100%"}}/></Box>
                <Box sx={{width:'45%'}}><img src={image2} alt="Patient Care" style={{width:"100%"}} /></Box>                
            </Box>
        </Box>
        
    )
}

export default PatientCare;