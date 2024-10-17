import React, {useState, useEffect} from 'react'; 
import tickImg from "../assets/images/tickImg.png";
import adImg from "../assets/images/adImg.png";
import DownloadApp from '../components/DownloadApp/DownloadApp'; 
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';   
import Navbar from '../components/Navbar/Navbar'; 
import Search from '../components/Search/Search'; 
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Stack, Container,  Box,  Typography } from '@mui/material';
import Hospital from '../components/Hospital/Hospital';
import Loading from '../components/Loading/Loading';

function SearchResults() {
// eslint-disable-next-line
  const [searchParams, setSearchparams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  useEffect(()=>{
    const getHospitals = async ()=>{
      setHospitals([]); 
      try {
        const data = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        setHospitals(data.data); 
        // console.log(hospitals);
        setLoading(false);
      } catch (error) {
        console.log(`Error Occurred: ${error}`); 
      }
    };

    if (state && city) {
      getHospitals();
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[state,city]);

  useEffect(()=>{
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  },[searchParams]);

  return (
    <div> 
        <Header classname="HeaderOverride"/>   
        <Navbar classname="NavbarOverride"/> 
         
        <Search showAdditional={false} classname="searchBoxOverride"/>
        {loading && <Loading />}
        {!loading &&
        <Container maxWidth="xl" sx={{ pt: 0, pb: 10, px: { xs: 0, lg: 8 } }} className="searchResults">
          {hospitals.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant='h6'
              >
                {`${hospitals.length} medical centers available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={4}>
                <img src={tickImg} height={25} width={25} alt="Tickmark" />
                <Typography color="#656a72">
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {hospitals.length > 0 &&
                hospitals.map((hospital) => (
                  <Hospital
                    key={hospital["Hospital Name"]}
                    data={hospital}
                    availableSlots={availableSlots} 
                  />
                ))}               
            </Stack>
            <img src={adImg} width={375}  alt="Ad" />
          </Stack>
        </Container>
        }
         
        <DownloadApp />
        <Footer />
    </div>
  )
}

export default SearchResults;