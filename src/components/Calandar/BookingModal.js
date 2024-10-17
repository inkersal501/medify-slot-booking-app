import React from 'react';
import {Backdrop, Box, Modal, Fade, Typography, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '0px solid #ccc',  
  boxShadow: 24,
  p: 4,
  borderRadius:"11px",
};

function BookingModal({openModal, handleCloseModal, selectedDay, selectedTime, setUserEmail, handleBooking }) {
 
  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h3" color="dark">
                Confirm booking
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Please enter your email to confirm booking for <span style={{fontWeight:"bold"}}>{selectedTime}</span> on <span style={{fontWeight:"bold"}}>{selectedDay}</span>                 
            </Typography>
            <form onSubmit={handleBooking}>
                <Box sx={{padding: "20px 0px", width:"100%"}}>                 
                    <TextField sx={{width:"90%"}} id="outlined-basic" type="email" onInput={(e)=>setUserEmail(e.target.value)} label="Enter your email" variant="outlined" />            
                </Box>
                <Box sx={{padding: "0px 0px 20px 0px"}}>                 
                    <Button type="submit" variant="contained" sx={{marginRight:"20px"}}>Confirm</Button>
                    <Button type="button" onClick={handleCloseModal} variant="outlined" sx={{color:"primary.main"}}>Cancel</Button>
                </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default BookingModal;