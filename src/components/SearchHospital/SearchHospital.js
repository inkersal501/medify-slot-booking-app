import { Box, Button, TextField, Stack } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchHospital({setSearch, handleSearchHospital}) {
  return (
    
        <Box sx={{
            width:"100%",
            background:"#fff", 
            borderRadius:"11px",
            boxShadow:"0px 0px 5px #9c9c9c",
            padding:"20px 40px"}}>
                <form onSubmit={handleSearchHospital}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{width:"90%"}}>
                    <TextField sx={{width:"100%", 
                        outline:"none",
                        borderRadius: "11px",
                        "& .MuiOutlinedInput-root": {
                        borderRadius: "11px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", 
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                        },}} 
                id="outlined-basic" type="text" onInput={(e)=>setSearch(e.target.value)} label="Search By Hospital" variant="outlined" />            
                </Box>
                <Box>
                    <Button type='submit' variant='contained'><SearchIcon /> Search</Button>
                </Box>
            </Stack> 
            </form>
        </Box>
    
  )
}

export default SearchHospital;