import { Box, Typography } from '@mui/material';
import React from 'react';
import './Specialization.css';

function SpecializationCard({data}) {
  return (
    <Box className='specCard'>
        <img src={data.img} alt="" className='cardImg' />
        <Typography variant='p' colro="#656a72">{data.name}</Typography>
    </Box>
  )
}

export default SpecializationCard;