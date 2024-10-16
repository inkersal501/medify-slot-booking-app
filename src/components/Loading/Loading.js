import { Box, CircularProgress, Typography } from '@mui/material';

import React from 'react'; 
function Loading() {
  return (
    <Box sx={{width:"100%", textAlign:"center"}}>
        <CircularProgress color="dark"/>
        <Typography variant='h6'>Loading...</Typography>
    </Box>
  )
}

export default Loading;