import { Box } from '@mui/material';
import React from 'react'
import "./Specialist.css";

function DoctorCard({img, name}) {
  return (
      <Box sx={{width:"350px", textAlign:"center"}}>
        <img src={img} alt={name} style={{width:"100%"}} /> 
      </Box>     
  )
}

export default DoctorCard;