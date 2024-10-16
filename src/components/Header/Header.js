import React from 'react';
import { Typography } from "@mui/material";
import "./Header.css";

function Header({classname="header"}) {
  return (
   
      <div className={classname}>
          <Typography>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</Typography>
      </div>
    
  )
}

export default Header;