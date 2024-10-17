import { Box } from '@mui/material';
import React, {useState} from 'react';
import TimeSlots from './TimeSlots';
import DaySlots from './DaySlots';
import BookingModal from './BookingModal';


function Calandar({availableSlots}) {

    const morningSlots = availableSlots.morning;
    const afternoonSlots = availableSlots.afternoon;
    const eveningSlots = availableSlots.evening;
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

  return (

    <div>
        <Box sx={{borderTop:"1px solid #d5d5d5", padding:"20px 0px"}}> 
            <DaySlots availableSlots={availableSlots}/>
            <TimeSlots title="Morning" slots={morningSlots} handleOpenModal={handleOpenModal}/>
            <TimeSlots title="Afternoon" slots={afternoonSlots} handleOpenModal={handleOpenModal}/>
            <TimeSlots title="Evening" slots={eveningSlots} handleOpenModal={handleOpenModal}/>
            <BookingModal openModal={openModal} handleCloseModal={handleCloseModal}/>
        </Box>
    </div>
  )

}

export default Calandar;
