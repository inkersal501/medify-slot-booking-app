import { Box, Typography, Stack } from '@mui/material'
import React from 'react';
 
function TimeSlots({title, slots, handleOpenModal, setselectedTime}) {
  return (
    <div>
        <Box sx={{margin:"20px",padding:"15px 0px",display:"flex", gap:"20px", borderBottom:"1px solid #d5d5d5"}}>
            <Box sx={{width:"10%"}}><Typography variant='p'>{title}</Typography></Box>
            <Stack direction="row" spacing={3}>                
                {slots.map((slot)=>(
                    <Box key={slot}>
                        <Typography 
                        onClick={()=>{handleOpenModal();setselectedTime(slot);}}
                        variant='p' 
                        color='primary' display="block" width="80px" textAlign="center" 
                        sx={{cursor:"pointer",padding:"5px 10px", border:"1px solid", borderColor:"primary.main",borderRadius:"7px"}}>
                            {slot}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    </div>
  )
}

export default TimeSlots;