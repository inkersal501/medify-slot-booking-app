<<<<<<< HEAD
import React from "react";
import {
    Button,
    Box,
    FormControl,    
    InputAdornment,
    MenuItem,
    Select,     
    Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import SearchOption from "./SearchOption";
import axios from 'axios';
import typImg1 from "./images/doctor.png";
import typImg2 from "./images/labs.png";
import typImg3 from "./images/hospitals.png";
import typImg4 from "./images/med-store.png";
import typImg5 from "./images/ambulance.png";

function Search() {
  const stateApi = "https://meddata-backend.onrender.com/states";
  const cityApi = "https://meddata-backend.onrender.com/cities/";
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [stateData, setStatedata] = React.useState([]);
  const [cityData, setCityData] = React.useState([]);

  const [activeType, setActiveType] = React.useState("Hospitals");
  const searchOptions = [
    { img: typImg1, type: "Doctors" },
    { img: typImg2, type: "Labs" },
    { img: typImg3, type: "Hospitals" },
    { img: typImg4, type: "Medical Store" },
    { img: typImg5, type: "Ambulance" },
  ];

  //get state data
  React.useEffect(()=>{
    const getStateData = async ()=>{
      try {
        const data = await axios.get(stateApi);
        setStatedata(data.data);
      } catch (error) {
        window.alert("Error fetching state data");
      }      
    };
    getStateData();
  },[]);

  //get city data
  React.useEffect(()=>{
    
    const getCityData = async ()=>{
      try {
        const data = await axios.get(cityApi+state);
        setCityData(data.data);
      } catch (error) {
        window.alert("Error fetching city data");
      }      
    };
    if(state!==""){
      getCityData();
    }
  },[state]);
=======
import React from 'react';
import { Select, MenuItem, InputAdornment, FormControl, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

function Search(){

  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
>>>>>>> 19e2a9c957348dec9118216dcc21d382370530ea

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
<<<<<<< HEAD
    <Box
      sx={{ padding: { xs: "25px", lg: "0px 80px" } }}
      className="searchBox"
    >
      <Box
        sx={{
          padding: "60px 40px",
          background: "#fff",
          borderRadius: "11px",
          boxShadow: "1px 1px 30px rgba(0,0,0,0.12)",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexWrap:"wrap",
            gap:"25px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormControl variant="standard" sx={{ minWidth: 250 }}>
=======
    <Box sx={{padding: {xs:"25px", lg:"40px 80px"} }} className='searchBox'>
      <Box sx={{padding:"40px",background:"#fff",borderRadius:"11px",boxShadow:"1px 1px 10px #ccc"}}>
        <Box style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent:"center" }}>

          <FormControl variant="standard" sx={{ minWidth: 400 }}>
>>>>>>> 19e2a9c957348dec9118216dcc21d382370530ea
            <Select
              value={state}
              onChange={handleStateChange}
              displayEmpty
              disableUnderline
<<<<<<< HEAD
              IconComponent={""} // Hide the default arrow icon
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#B0B0B0" }} />
                </InputAdornment>
              }
              className="selectBox"
=======
              IconComponent={null} // Hide the default arrow icon
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#B0B0B0' }} /> 
                </InputAdornment>
              }
              sx={{ 
                color: '#656a72',
              }}
>>>>>>> 19e2a9c957348dec9118216dcc21d382370530ea
            >
              <MenuItem value="" disabled>
                State
              </MenuItem>
<<<<<<< HEAD
              {stateData.map((state, index)=>(
                <MenuItem key={index} value={state}>{state}</MenuItem>
              ))} 
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ minWidth: 250 }}>
=======
              <MenuItem value="State1">State 1</MenuItem>
              <MenuItem value="State2">State 2</MenuItem>
              <MenuItem value="State3">State 3</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ minWidth: 400 }}>
>>>>>>> 19e2a9c957348dec9118216dcc21d382370530ea
            <Select
              value={city}
              onChange={handleCityChange}
              displayEmpty
              disableUnderline
<<<<<<< HEAD
              IconComponent={""}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#B0B0B0" }} />
                </InputAdornment>
              }
              className="selectBox"
=======
              IconComponent={null}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#B0B0B0' }} />
                </InputAdornment>
              }
              sx={{
                backgroundColor: '#F3F6FC',
                borderRadius: '8px',
                paddingLeft: '32px',
                height: '45px',
                fontSize: '16px',
                color: '#656a72',
              }}
>>>>>>> 19e2a9c957348dec9118216dcc21d382370530ea
            >
              <MenuItem value="" disabled>
                City
              </MenuItem>
<<<<<<< HEAD
              {cityData.map((city, index)=>(
                <MenuItem key={index} value={city}>{city}</MenuItem>
              ))} 
            </Select>
          </FormControl>
          <Button variant="contained">
            <SearchIcon sx={{ color: "#fff", marginRight: "10px" }} />
            Search
          </Button>
        </Box>
        
        <Box sx={{ marginTop: {xs:"20px", lg:"80px"}, textAlign: "center" }}>
          <Typography variant="h5" color="dark" fontWeight="normal">
            You may be looking for
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: {xs:"center",lg:"space-between"},
              alignItems: "center", 
              margin:"40px 0px"
            }}
          >
            {searchOptions.map((option, index) => (
              <SearchOption
                key={index}
                image={option.img}
                type={option.type}
                classname={activeType===option.type?"searchTypeBox active":"searchTypeBox"}
                onClick={setActiveType}
              />
            ))}
          </Box>
=======
              <MenuItem value="City1">City 1</MenuItem>
              <MenuItem value="City2">City 2</MenuItem>
              <MenuItem value="City3">City 3</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">
            Search
          </Button> 
>>>>>>> 19e2a9c957348dec9118216dcc21d382370530ea
        </Box>
      </Box>
    </Box>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 19e2a9c957348dec9118216dcc21d382370530ea

export default Search;
