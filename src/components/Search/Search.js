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

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
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
            <Select
              value={state}
              onChange={handleStateChange}
              displayEmpty
              disableUnderline
              IconComponent={""} // Hide the default arrow icon
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#B0B0B0" }} />
                </InputAdornment>
              }
              className="selectBox"
            >
              <MenuItem value="" disabled>
                State
              </MenuItem>
              {stateData.map((state, index)=>(
                <MenuItem key={index} value={state}>{state}</MenuItem>
              ))} 
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ minWidth: 250 }}>
            <Select
              value={city}
              onChange={handleCityChange}
              displayEmpty
              disableUnderline
              IconComponent={""}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#B0B0B0" }} />
                </InputAdornment>
              }
              className="selectBox"
            >
              <MenuItem value="" disabled>
                City
              </MenuItem>
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
        </Box>
      </Box>
    </Box>
  );
}

export default Search;
