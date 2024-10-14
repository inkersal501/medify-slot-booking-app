import React from 'react';
import './Search.css';
import { Box, Typography } from '@mui/material';

function SearchOption({image, type, classname, onClick}) {
  return (
    <Box sx={{padding:"40px"}} className={classname} onClick={()=>onClick(type)}> 
      <img src={image} alt={type} className='typeImg'/>
      <Typography variant='h6'>{type}</Typography>
    </Box>
  )
}

export default SearchOption;