import React, {useState, useEffect} from 'react'; 
import adImg from "../assets/images/adImg.png";
import DownloadApp from '../components/DownloadApp/DownloadApp'; 
import Faq from '../components/Faq/Faq'; 
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';   
import Navbar from '../components/Navbar/Navbar'; 
import { Box, Stack, Container, Typography } from '@mui/material';
import Hospital from '../components/Hospital/Hospital';
import Loading from '../components/Loading/Loading';
import SearchHospital from '../components/SearchHospital/SearchHospital';

function MyBooking() {

    const [loading, setLoading] = useState(true);
    const localBookingData = JSON.parse(localStorage.getItem("bookingData")) || [];
    const [bookingData, setBookingData] = useState(localBookingData);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        }, 1000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleSearchHospital = (e) =>{
      e.preventDefault();
      if(search.trim()){       
        const filteredData = localBookingData.filter((data)=>{
          return data["Hospital Name"].toLowerCase().includes(search.trim().toLowerCase())
        });
        setBookingData(filteredData);
      }else{
        setBookingData(localBookingData);
      }
    }


  return (
    <div>
        <Header classname="HeaderOverride"/>   
        <Navbar classname="NavbarOverride"/> 
        <Box sx={{position:"relative", top:"-160px", padding:{xs:"20px",lg:"10px 40px"}}}>
          <Typography
          variant='h3'
          color="light"
          fontWeight="bold"
          >My Bookings</Typography>
         </Box>
         <Box sx={{width:"100%",          
            position:"relative", 
            top:"-200px",             
            display:"flex",justifyContent:"end",
            }}>
          <Box sx={{ 
            width:"50%",
            position:"relative", 
            right:"200px",   
            padding:{xs:"20px",lg:"10px 40px"},
            }}>
              <SearchHospital setSearch={setSearch} handleSearchHospital={handleSearchHospital}/>
          </Box>
         </Box>
        {loading && <Loading />}

        {!loading && bookingData.length === 0 && <Typography variant='h5' sx={{textAlign:"center"}}>No Booking Found</Typography> }
        
        {!loading && bookingData.length > 0 &&         
        <Container maxWidth="xl" sx={{ pt: 0, pb: 10, px: { xs: 0, lg: 8 } }} className="searchResults">
          
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {bookingData.length > 0 &&
                bookingData.map((booking, index) => (
                  <Hospital
                    key={booking["Hospital Name"]+index}
                    data={booking} 
                    booking={true}
                  />
                ))}               
            </Stack>
            <img src={adImg} width={375}  alt="Ad" />
          </Stack>
        </Container>
        }
        <Faq />
        <DownloadApp />
        <Footer />
    </div>
  )
}

export default MyBooking;