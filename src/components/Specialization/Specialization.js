import { Box, Typography, Stack, Button } from '@mui/material';
import React from 'react';
import image1 from './images/dentistry.png';
import image2 from './images/primary-care.png';
import image3 from './images/cardiology.png';
import image4 from './images/mri.png';
import image5 from './images/blood-test.png';
import image6 from './images/piscologist.png';
import image7 from './images/laboratory.png';
import image8 from './images/x-ray.png';
import SpecializationCard from './SpecializationCard';

function Specialization() {

  const specData = [
    {name: "Dentistry", img: image1},
    {name: "Primary Care", img: image2},
    {name: "Cardiology", img: image3},
    {name: "MRI Resonance", img: image4},
    {name: "Blood Test", img: image5},
    {name: "Piscologist", img: image6},
    {name: "Laboratory", img: image7},
    {name: "X-Ray", img: image8},
  ]
  return (
    <Box className="specialization" sx={{ padding: { xs: "25px", lg: "0px 80px" } }}>
      <Typography variant='h4' textAlign="center" fontWeight="bold" color='dark'>Find By Specialization</Typography>   
      <Stack
        spacing={{ xs: 1, sm: 2, lg:5 }}
        direction="row"
        useFlexGap
        justifyContent="center"
        marginTop="40px"
        sx={{ flexWrap: 'wrap' }}
      >     
        {specData.map((spec, index)=>( 
            <SpecializationCard key={index} data={spec}/> 
        ))}
      </Stack>
      <Box sx={{marginTop:"40px", textAlign:"center"}}>
        <Button variant="contained" sx={{padding:"8px 30px"}}>View All</Button>
      </Box>
    </Box> 
  )
}

export default Specialization;