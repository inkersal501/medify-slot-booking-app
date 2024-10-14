import React from 'react';
import { Select, MenuItem, InputAdornment, FormControl, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

function Search(){

  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box sx={{padding: {xs:"25px", lg:"40px 80px"} }} className='searchBox'>
      <Box sx={{padding:"40px",background:"#fff",borderRadius:"11px",boxShadow:"1px 1px 10px #ccc"}}>
        <Box style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent:"center" }}>

          <FormControl variant="standard" sx={{ minWidth: 400 }}>
            <Select
              value={state}
              onChange={handleStateChange}
              displayEmpty
              disableUnderline
              IconComponent={null} // Hide the default arrow icon
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#B0B0B0' }} /> 
                </InputAdornment>
              }
              sx={{ 
                color: '#656a72',
              }}
            >
              <MenuItem value="" disabled>
                State
              </MenuItem>
              <MenuItem value="State1">State 1</MenuItem>
              <MenuItem value="State2">State 2</MenuItem>
              <MenuItem value="State3">State 3</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ minWidth: 400 }}>
            <Select
              value={city}
              onChange={handleCityChange}
              displayEmpty
              disableUnderline
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
            >
              <MenuItem value="" disabled>
                City
              </MenuItem>
              <MenuItem value="City1">City 1</MenuItem>
              <MenuItem value="City2">City 2</MenuItem>
              <MenuItem value="City3">City 3</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">
            Search
          </Button> 
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
