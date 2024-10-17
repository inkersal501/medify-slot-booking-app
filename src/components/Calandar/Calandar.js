import { Box } from '@mui/material';
import React, {useState} from 'react';
import TimeSlots from './TimeSlots';
import DaySlots from './DaySlots';
import BookingModal from './BookingModal';
import { useSnackbar } from 'notistack';
 

function Calandar({availableSlots, hospitalData}) {

    const morningSlots = availableSlots.morning;
    const afternoonSlots = availableSlots.afternoon;
    const eveningSlots = availableSlots.evening;
    const [openModal, setOpenModal] = useState(false);
    const [selectedDay, setselectedDay] = useState("");
    const [selectedTime, setselectedTime] = useState("");
    const [useremail, setUserEmail] = useState("");

    const { enqueueSnackbar } = useSnackbar();


    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleBooking = (e) => {
        e.preventDefault();

        const currentYear = new Date().getFullYear();   
        const dateObj = new Date(`${selectedDay} ${currentYear}`);        

        hospitalData.bookingDate = dateObj.toISOString();
        hospitalData.bookingEmail = useremail;
        hospitalData.bookingTime = selectedTime;
        const newBooking = hospitalData; 
        const bookingData = JSON.parse(localStorage.getItem("bookingData")) || [];
        bookingData.push(newBooking);
        localStorage.setItem("bookingData", JSON.stringify(bookingData));
        enqueueSnackbar("Booking Successfull!", { variant: 'success' });
        handleCloseModal();
        setselectedDay("");
        setselectedTime("");
        setUserEmail("");
    };  

  return (

    <div>
        <Box sx={{borderTop:"1px solid #d5d5d5", padding:"20px 0px"}}> 
            <DaySlots 
                availableSlots={availableSlots} 
                setselectedDay={setselectedDay}
            />
            <TimeSlots 
                setselectedTime={setselectedTime}
                title="Morning" slots={morningSlots} handleOpenModal={handleOpenModal}
            />
            <TimeSlots 
                setselectedTime={setselectedTime}
                title="Afternoon" slots={afternoonSlots} handleOpenModal={handleOpenModal}
            />
            <TimeSlots 
                setselectedTime={setselectedTime}
                title="Evening" slots={eveningSlots} handleOpenModal={handleOpenModal}
            />

            <BookingModal 
                openModal={openModal} 
                handleCloseModal={handleCloseModal}
                selectedDay={selectedDay}
                selectedTime={selectedTime}
                setUserEmail={setUserEmail}
                handleBooking={handleBooking}
            />
        </Box>
    </div>
  )

}

export default Calandar;
